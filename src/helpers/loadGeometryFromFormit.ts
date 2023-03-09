import { ReferenceType, Transform } from "@spacemakerai/element-types-classic"
import { FormitMesh, FormitGeometry } from "../helpers/typesAndConstants"
import * as uuid from "uuid"
import { MAIN_HISTORY_ID, formItLayerNames } from "./typesAndConstants"
import { createLayer } from "./layerUtils"

const transpose = (transform: Transform) => {
  return [
    transform[0],
    transform[4],
    transform[8],
    transform[12],
    transform[1],
    transform[5],
    transform[9],
    transform[13],
    transform[2],
    transform[6],
    transform[10],
    transform[14],
    transform[3],
    transform[7],
    transform[11],
    transform[15],
  ]
}

const optimizeMesh = (mesh: FormitMesh): FormitMesh => {
  const opt: { [x: number]: { [y: number]: { [z: number]: number } } } = {}
  const newIndices = []
  const newVertices = []

  for (const index of mesh.indices) {
    const [x, y, z] = mesh.vertices.slice(index * 3, index * 3 + 3)
    if (!opt[x]) opt[x] = {}
    if (!opt[x][y]) opt[x][y] = {}
    if (!opt[x][y][z]) {
      opt[x][y][z] = newVertices.length / 3
      newVertices.push(x, y, z)
    }
    newIndices.push(opt[x][y][z])
  }
  return { ...mesh, indices: newIndices, vertices: newVertices }
}

const mergeMeshes = (meshes: FormitMesh[]): FormitMesh => {
  let indices: number[] = []
  let vertices: number[] = []
  // TODO: optimize by merging vertices
  for (const mesh of meshes) {
    const startVertex = vertices.length / 3
    indices = indices.concat(mesh.indices.map((idx) => idx + startVertex))
    vertices = vertices.concat(mesh.vertices)
  }
  return { ...meshes[0], indices, vertices }
}

export const formitGeometryToIntegrateAPIPayload = async (
  formitGeometry: FormitGeometry[]
) => {
  const rootElement = {
    id: uuid.v4(),
    properties: {
      category: "ConceptualRoot",
    },
    children: [],
  }

  const elements: Record<string, any> = {
    [rootElement.id]: rootElement,
  }

  const payload = {
    rootElement: rootElement.id,
    elements
  }

  let transf3d = await WSM.Geom.Transf3d()
  for (const geometry of formitGeometry) {
    const mesh = optimizeMesh(mergeMeshes(geometry.meshes))
    const element: Record<string, any> = {
      id: uuid.v4(),
      children: [],
      properties: {
        category: "ConceptualElement",
        geometry: {
          type: ReferenceType.INLINE,
          format: "Mesh",
          verts: mesh.vertices,
          faces: mesh.indices,
        }
      }
    }

    if (geometry.transforms[0].data) {
      transf3d.data = geometry.transforms[0].data as Transform
    }
    
    elements[element.id] = {
      ...element,
    }

    rootElement.children.push({
      id: element.id,
      transform: transpose(transf3d.data),
    })
  }

  //await buildElementsFromGeometry(formitGeometry, elements, rootElement, offsetTransf3d)

  // for (const [, floorGeometries] of Object.entries(floorGeometriesByBuildingId)) {
  //   await buildElementsFromGeometry(floorGeometries.flat(), elements, rootElement, offsetTransf3d, true)
  // }

  // createLayer(MAIN_HISTORY_ID, formItLayerNames.FORMA_BUILDINGS)
  //   .then(async (buildingsLayer) => {
  //     await FormIt.Layers.DeleteLayers([buildingsLayer.formItLayerId])
  //   });

  return payload
}

async function buildElementsFromGeometry(
  formitGeometry: FormitGeometry[],
  elements: Record<string, any>,
  rootElement: any,
  offsetTransf3d: any,
  isBuildingFloor = false,
) {
  const feetToMeters = 0.3047999995367042
  const point = await WSM.Geom.Point3d(0, 0, 0)
  const vector = await WSM.Geom.Vector3d(feetToMeters, feetToMeters, feetToMeters)
  const feetToMetersTransf3d = await WSM.Geom.MakeScalingTransform(point, vector)

  for (const geometry of formitGeometry) {
    const mesh = optimizeMesh(mergeMeshes(geometry.meshes))
    const element: Record<string, any> = {
      id: uuid.v4(),
      children: [],
      properties: {
        category: "ConceptualElement",
        geometry: {
          type: ReferenceType.INLINE,
          format: "Mesh",
          verts: mesh.vertices,
          faces: mesh.indices,
        }
      }
    }

    if (isBuildingFloor) {
      element.properties.subcategory = "ConceptualBuildingFloor"
    }

    if (geometry.transforms.length > 1) {
      elements[element.id] = element
      for (const transform of geometry.transforms) {
        let transf3d = await WSM.Geom.Transf3d()

        if (transform.data) {
          transf3d.data = transform.data as Transform
        }

        if (offsetTransf3d && offsetTransf3d.data) {
          //@ts-ignore
          await FormItInterface.CallMethod("FormitPlugin.Multiply", [offsetTransf3d, transf3d], (transf3d) => {
            rootElement.children.push({
              id: element.id,
              transform: transpose(transf3d.data),
            })
          });
        }

        //@ts-ignore
        await FormItInterface.CallMethod("FormitPlugin.Multiply", [feetToMetersTransf3d, transf3d], (transf3d) => {
          rootElement.children.push({
            id: element.id,
            transform: transpose(transf3d.data),
          })
        });

        rootElement.children.push({
          id: element.id,
          transform: transpose(transf3d.data),
        })
      }
    } else {
      let transf3d = await WSM.Geom.Transf3d()

      if (geometry.transforms[0].data) {
        transf3d.data = geometry.transforms[0].data as Transform
      }

      if (offsetTransf3d && offsetTransf3d.data) {
        //@ts-ignore
        await FormItInterface.CallMethod("FormitPlugin.Multiply", [offsetTransf3d, transf3d], (transf3d) => {
          rootElement.children.push({
            id: element.id,
            transform: transpose(transf3d.data),
          })
        });
      }

      //@ts-ignore
      await FormItInterface.CallMethod("FormitPlugin.Multiply", [feetToMetersTransf3d, transf3d], (transf3d) => {
        rootElement.children.push({
          id: element.id,
          transform: transpose(transf3d.data),
        })
      });

      elements[element.id] = {
        ...element,
      }
    }
  }
}