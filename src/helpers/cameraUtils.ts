import { FEET_TO_METER, METERS_TO_FEET } from "./typesAndConstants"

let savedEditingElementTransf3d: any
let savedTerrainElevationTransf3d: any

function persistCameraPosition(target, position, scope) {
  const data = JSON.stringify({ scope, target, position })
  sessionStorage.setItem("THREE-camera-position", data)
}

function getCameraPosition(scope: string) {
  const data = JSON.parse(sessionStorage.getItem("THREE-camera-position") || "{}")
  return data.scope === scope ? data : {}
}

export async function syncCameraFromForma(
    editingElementTransf3d: any,
    terrainElevationTransf3d: any,
    scope: string,
  ) {
    debugger
    
    savedEditingElementTransf3d = editingElementTransf3d
    savedTerrainElevationTransf3d = terrainElevationTransf3d
  
    let cameraTransform = editingElementTransf3d
      ? await WSM.Geom.InvertTransform(editingElementTransf3d)
      : undefined
  
    if (cameraTransform && terrainElevationTransf3d) {
      //@ts-ignore
      cameraTransform = await WSM.Transf3d.Multiply(cameraTransform, terrainElevationTransf3d)
    }
  
    const cameraPosition: any = getCameraPosition(scope)
  
    if (cameraPosition?.position && cameraPosition?.target) {
      const { position, target } = cameraPosition
  
      let positionPoint = await WSM.Geom.Point3d(position.x, position.y, position.z)
      positionPoint.x *= METERS_TO_FEET
      positionPoint.y *= METERS_TO_FEET
      positionPoint.z *= METERS_TO_FEET
  
      let targetPoint = await WSM.Geom.Point3d(target.x, target.y, target.z)
      targetPoint.x *= METERS_TO_FEET
      targetPoint.y *= METERS_TO_FEET
      targetPoint.z *= METERS_TO_FEET
  
      if (cameraTransform) {
        // camera must move in opposite direction from the object transform
        positionPoint = await WSM.Point3d.Transform(positionPoint, cameraTransform)
        targetPoint = await WSM.Point3d.Transform(targetPoint, cameraTransform)
      }
  
      const up = await WSM.Geom.Vector3d(0, 0, 1)
  
      await FormIt.Cameras.SetPositionAndOrientation(positionPoint, targetPoint, up)
    } else {
      console.log("Camera position not found")
    }
  }
  
export async function syncCameraToForma(scope: string) {
    let position = await FormIt.Cameras.GetCameraWorldPosition()
  
    // TODO: If the camera position is very far from origin, we can get in a situation
    // where it is very difficult to navigate in Forma. This is partially because
    // Forma does not display grids, axis and sky. So the user can potentially see only
    // a grey background. In the future, if the camera is too far from the origin, perhaps we
    // should not sync the camera and keep the Forma camera position intact. Alternativelly,
    // we could set the origin as the target when this occurs.
    // Note we can find the scene bounding box this way:
    // let bbox = new window.THREE.Box3().setFromObject(window.sceneManager.rootScene);
  
    const invTerrainElevTransf3d = savedTerrainElevationTransf3d
      ? await WSM.Geom.InvertTransform(savedTerrainElevationTransf3d)
      : undefined
  
    let camTransform = savedEditingElementTransf3d
  
    if (savedEditingElementTransf3d && invTerrainElevTransf3d) {
      //@ts-ignore
      camTransform = await WSM.Transf3d.Multiply(savedEditingElementTransf3d, invTerrainElevTransf3d)
    }
  
    if (camTransform) {
      position = await WSM.Point3d.Transform(position, camTransform)
    }
  
    position.x *= FEET_TO_METER
    position.y *= FEET_TO_METER
    position.z *= FEET_TO_METER
  
    const len = Math.sqrt(position.x * position.x + position.y * position.y + position.z * position.z)
  
    let forward = await FormIt.Cameras.GetCameraWorldForward()
  
    if (camTransform) {
      forward = await WSM.Vector3d.Transform(forward, camTransform)
    }
  
    forward.x *= len
    forward.y *= len
    forward.z *= len
  
    const look = await WSM.Geom.Point3d(
      position.x + forward.x,
      position.y + forward.y,
      position.z + forward.z,
    )
  
    persistCameraPosition(look, position, scope)
  }