
import { formItLayerNames, MAIN_HISTORY_ID, SelectionObject, Point3dInterface, FormItGeometry, TOLERANCE_VALUE } from "./typesAndConstants"
import { createLayer } from "./layerUtils"
import { convertModelUnitsToWSMUnits } from "./units"
import { generateFloorHeightsFromLevelsData } from "./levelsData"
import { getSelectionProperties } from "./selectionProperties"
  
// Function returns floor geometry (as meshes) per instance id that refers to a building.
// Note each building instance can now refer to many bodies. instancesToConsider restricts
// which instances to compute floors on. For now these will just be the instances that
// are saved.
export async function getFloorGeometriesByBuildingId(instancesToConsider: Set<number>) {
  // All the buildings are on the building layer. The createLayer call should only return an
  // existing layer (not make a new one).
  const results = await Promise.all(createLayer(MAIN_HISTORY_ID, formItLayerNames.FORMA_BUILDINGS))
  let formItLayerId = results[0];
  const layerObjects: SelectionObject[] = await FormIt.Layers.GetAllObjectsOnLayers(
    formItLayerId,
    true
  )

  // The buildings are all instances on the layer in the main history. Get those.
  const buildingInstanceIds = layerObjects.map((object) => object.ids[0].Object)

  // Get the building instances that should be used.
  const instanceIds = buildingInstanceIds.filter((instanceId) =>
    instancesToConsider.has(instanceId),
  )

  // Now make floor geometry from the buildings by intersecting with the bodies in the each instance.
  const floorGeometriesByBuildingId: Record<string, FormItGeometry[]> = {}

  // The selectionProperties are used to get level information per building instance.
  const selectionsProperties = instanceIds.map((objectId) => getSelectionProperties(objectId))

  // Do the booleans to get floor geometry.
  selectionsProperties.forEach((selectionProperties) => {
    createFloorsFromSelectionProperties(selectionProperties, floorGeometriesByBuildingId)
  })

  return floorGeometriesByBuildingId
}

// This function creates the floors for a given instance (called objectId) in a temporary history
// returning the geometry needed to display the floor in design mode. The floors are created by
// intersecting blocks between two levels with all the bodies in the instance.
async function createFloorsFromSelectionProperties(
  { objectId, levelsData },
  floorGeometriesByInstanceId: Record<string, FormItGeometry[]>,
) {
  const floorHeights = generateFloorHeightsFromLevelsData(objectId, levelsData).map(
    ({ second }) => second,
  )

  // We use the instance box to create floor blocks since all the floors are based on the
  // minimum z value of the instance.
  const instanceBoundingBox = await WSM.APIGetBoxReadOnly(MAIN_HISTORY_ID, objectId)

  // Create a temporary history to hold the building's bodies. Since the history is
  // temporary, we don't have to worry about supressing callbacks. There are none.
  const nTempHistId = await WSM.APICreateHistory(WSM.INVALID_ID, false /*bNonTemporary*/)

  // The building comes from an instance in the main history. Copy that instance into the temporary history.
  // This copy is inexpensive since the new instance refers to the original reference history.
  const identityTransf3d = await WSM.Geom.Transf3d()
  const newIds = WSM.APICopyOrSketchAndTransformObjects(
    MAIN_HISTORY_ID,
    nTempHistId,
    [objectId],
    identityTransf3d,
    1,
  )

  // Flatten the instance in the temporary history. Note this cost is similar to making copies for a nondestructive
  // boolean which is a small part of the cost of the boolean.
  await WSM.APIFlattenGroupsOrInstances(nTempHistId, newIds, true /*bRecursive*/, false /*bImprint*/)

  // Next split bodies at nonmaniofld edges and vertices.
  await WSM.APISplitAtNonManifoldEdgesAndVertices(nTempHistId)

  // Now we do the boolean on bodies in the temporary history.
  const bodyIds = await WSM.APIGetAllObjectsByTypeReadOnly(nTempHistId, WSM.nObjectType.nBodyType)

  // These are the ids of the floor geometry to send to design mode. The ids are in nTempHistId.
  const floorIds = []

  // Split every manifold body into floors.
  bodyIds.forEach(async (nBodyId) => {
    // Don't do a boolean on bodies that have no volume or are nonmanifold, but keep these bodies for
    // design mode. Note volume can be negative in bad cases - but don't slice that.
    if (
      WSM.APIComputeVolumeReadOnly(nTempHistId, nBodyId) < TOLERANCE_VALUE ||
      !WSM.APIIsObjectManifoldReadOnly(nTempHistId, nBodyId)
    ) {
      // We might want to return information about floors not being made here to warn users.
      // Only keep bodies that we can see though. Note, the area is positive.
      if (await WSM.APIComputeAreaReadOnly(nTempHistId, nBodyId) > TOLERANCE_VALUE) {
        floorIds.push(nBodyId)
      }
      return
    }

    // Start the floors from the lower instance z, not the lower z on each body.
    let elevation = instanceBoundingBox.lower.z

    // Get the body bounding box once.
    const bodyBoundingBox = await WSM.APIGetBoxReadOnly(nTempHistId, nBodyId)

    // Move the body to be centered around the origin to have a more successful boolean.
    const moveToCenterVec3d = await WSM.Geom.Vector3d(
      -(bodyBoundingBox.lower.x + bodyBoundingBox.upper.x) / 2,
      -(bodyBoundingBox.lower.y + bodyBoundingBox.upper.y) / 2,
      -bodyBoundingBox.lower.z,
    )
    const moveToCenterTransf3d = await WSM.Transf3d.MakeTranslationTransform(moveToCenterVec3d)
    WSM.APITransformObjects(nTempHistId, [nBodyId], moveToCenterTransf3d)

    // Also need the tranform to put the floor volume back in the right place.
    const moveFromCenterVec3d = await WSM.Geom.Vector3d(
      (bodyBoundingBox.upper.x + bodyBoundingBox.lower.x) / 2,
      (bodyBoundingBox.upper.y + bodyBoundingBox.lower.y) / 2,
      bodyBoundingBox.lower.z,
    )
    const moveFromCenterTransf3d = await WSM.Transf3d.MakeTranslationTransform(moveFromCenterVec3d)

    // Keep track of where snapping has occured.
    const allConsideredheights = new Set<number>()

    floorHeights.forEach(async (height) => {
      height = convertModelUnitsToWSMUnits(height)
      let lowerFloorZ = elevation
      let upperFloorZ = elevation + height

      if (
        lowerFloorZ > bodyBoundingBox.upper.z - TOLERANCE_VALUE ||
        upperFloorZ < bodyBoundingBox.lower.z + TOLERANCE_VALUE
      ) {
        // This floor does not intersect the body. Update the elevation
        // to continue the search for intersections.
        elevation += height
        return
      }

      if (lowerFloorZ < bodyBoundingBox.lower.z + TOLERANCE_VALUE) {
        // Adjust so the block does not overlap on the bottom.
        lowerFloorZ -= 1.0
      }

      if (upperFloorZ > bodyBoundingBox.upper.z - TOLERANCE_VALUE) {
        // Adjust so the block does not overlap on the top.
        upperFloorZ += 1.0
      }

      // Create a block that is larger than the instance in x and y but matches a floor in z. Intersecting with
      // this block creates the floor geometry. Note adjust the block so it matches the centered body.
      const point1 = await WSM.Geom.Point3d(
        moveToCenterVec3d.x + instanceBoundingBox.lower.x - 1,
        moveToCenterVec3d.y + instanceBoundingBox.lower.y - 1,
        moveToCenterVec3d.z + lowerFloorZ,
      )
      const point2 = await WSM.Geom.Point3d(
        moveToCenterVec3d.x + instanceBoundingBox.upper.x + 1,
        moveToCenterVec3d.y + instanceBoundingBox.upper.y + 1,
        moveToCenterVec3d.z + upperFloorZ,
      )

      const blockId = await WSM.APICreateBlock(nTempHistId, point1, point2)
      snapVerticesToHeight(nTempHistId, nBodyId, point1.z, allConsideredheights)
      snapVerticesToHeight(nTempHistId, nBodyId, point2.z, allConsideredheights)

      // This is debug code. It comes up when we went to investiage booleans that go wrong
      // when making the floor volumes and rather than recreating it each time it is nice
      // to have it available but commented out.
      //if (Math.abs(point1.z - 96.0) < TOLERANCE_VALUE) {
      //  const stringFile = WSM.APISaveToStringReadOnly(nTempHistId, [nBodyId, blockId])
      //  console.log(stringFile)
      //}

      // Do the intersection boolean.
      const blockGroupInstancePath = await WSM.GroupInstancePath([
        await WSM.ObjectHistoryID(nTempHistId, blockId),
      ])
      await WSM.APIIntersectNonDestructive(blockGroupInstancePath, [
        await WSM.GroupInstancePath([WSM.ObjectHistoryID(nTempHistId, nBodyId)]),
      ])

      // The boolean could have deleted the floor entirely when there is no
      // intersection. Check that the intersection is valid.
      if ( await WSM.APIIsObjectLiveReadOnly(nTempHistId, blockId)) {
        await WSM.APITransformObjects(nTempHistId, [blockId], moveFromCenterTransf3d)
        floorIds.push(blockId)
      }

      elevation += height
    })
  })

  // Get the geometry from the floor ids. Note because we copied the instance with its transform and then
  // flattened, there is no transform left on the floor geometry from the body with block intersections.
  floorGeometriesByInstanceId[objectId] = []
  floorIds.forEach(async (floorId) => {
    const floorGeometry: FormItGeometry = await WSM.Utils.GetAllGeometryInformation(nTempHistId, floorId)
    floorGeometriesByInstanceId[objectId].push(floorGeometry)
  })

  // Delete the temp history as we're done with it.
  await WSM.APIDeleteHistory(nTempHistId)
}


// Function to snap vertices to a given height if close to but not at the height. Keep track of snapping
// already done so it only happens once.
async function snapVerticesToHeight(
  nHistId: number,
  nBodyId: number,
  dHeight: number,
  allConsideredHeights: Set<number>,
) {
  if (allConsideredHeights.has(dHeight)) {
    return
  }
  allConsideredHeights.add(dHeight)

  // Create planes above and below the given height to use in the search. These will
  // bound the vertices to adjust.
  const dHeightTol = 1.0e-6 * Math.max(1.0, Math.abs(dHeight))
  const dTightHeightTol = TOLERANCE_VALUE * Math.max(1.0, Math.abs(dHeight))
  const planeAbove = await WSM.Geom.Plane(
    await WSM.Geom.Point3d(0, 0, dHeight + dHeightTol),
    await WSM.Geom.Vector3d(0, 0, 1),
  )
  const planeBelow = WSM.Geom.Plane(
    await WSM.Geom.Point3d(0, 0, dHeight - dHeightTol),
    await WSM.Geom.Vector3d(0, 0, -1),
  )

  const hits = await WSM.APIIntersectsNegativeSideOfPlanesReadOnly(
    nHistId,
    [planeAbove, planeBelow],
    true /*bVertices*/,
    false /*bEdges*/,
    false /*bFaces*/,
    false /*bStrict*/,
    TOLERANCE_VALUE,
  )
  if (Array.isArray(hits)) {
    // Collect the positions that vertices need to move to.
    const verticesToMove: number[] = []
    const newVertexPositions: Array<Point3dInterface> = []

    hits.forEach(async (nHitId) => {
      const nOwnerIds = await WSM.APIGetTopLevelOwnersReadOnly(nHistId, nHitId)
      if (nOwnerIds.length === 1 && nOwnerIds[0] === nBodyId) {
        // We found a vertex to check.
        const vertexPos = await WSM.APIGetVertexPoint3dReadOnly(nHistId, nHitId)
        const dDist = Math.abs(vertexPos.z - dHeight)
        if (dDist > dTightHeightTol) {
          // We found a vertex to snap.
          //console.log(`vertex ${nHitId} at height ${dHeight} has distance ${dDist}`)
          verticesToMove.push(nHitId)
          vertexPos.z = dHeight
          newVertexPositions.push(vertexPos)
        }
      }
    })

    if (verticesToMove.length > 0) {
      // Found vertices just outside the plane. Move these.
      await WSM.APIMoveVertices(nHistId, verticesToMove, newVertexPositions)
    }
  }
}