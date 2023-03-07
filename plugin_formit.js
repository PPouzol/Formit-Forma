const MAIN_HISTORY_ID = 0;

FormitPlugin = {};
FormitPlugin.PluginLocation = "PLUGINLOCATION";
FormitPlugin.ShowDialog = function(){
    var dialogParams = {
        "PluginName": "Formit<>Forma",
        "DialogBox": "PLUGINLOCATION/login.html",
        "DialogBoxType": "Modeless",
        "Settings": {
            "EnableNewWindowLinks": true
        }
    };

    FormIt.CreateDialogBox(JSON.stringify(dialogParams));
}

FormitPlugin.CloseDialog = function(){
    //close parent dialog window
    WSM.Utils.ComputeGeometryFromLevels
    FormIt.CloseDialogBox();
}

FormitPlugin.GetAllGeometryInformation = function() {
  var geometries = WSM.Utils.GetAllGeometryInformation(MAIN_HISTORY_ID);
  if(geometries === null)
    geometries = [];
  return geometries;
}

FormitPlugin.ComputeGeometryFromLevels = function(objectId) {
  return WSM.Utils.ComputeGeometryFromLevels(MAIN_HISTORY_ID, false, objectId);
}

FormitPlugin.FillTypesArrays = function() {
  const aBodiesAndMeshes = []
  const aOtherForInstance = []
  const topLevels = WSM.APIGetAllNonOwnedReadOnly(MAIN_HISTORY_ID)
  for (i=0; i < topLevels.length; i++) {
    var nObjID = topLevels[i];
    const nType = WSM.APIGetObjectTypeReadOnly(MAIN_HISTORY_ID, nObjID)
    if (nType === WSM.nObjectType.nBodyType || nType === WSM.nObjectType.nMeshType) {
      aBodiesAndMeshes.push(nObjID)
    } else if (
      nType === WSM.nObjectType.nFaceType ||
      nType === WSM.nObjectType.nEdgeType ||
      nType === WSM.nObjectType.nVertexType ||
      nType === WSM.nObjectType.nLineMeshType ||
      nType === WSM.nObjectType.nPointMeshType
    ) {
      aOtherForInstance.push(nObjID)
    }
  }
  if (aBodiesAndMeshes.length > 0 || aOtherForInstance.length > 0) {
    FormIt.UndoManagement.BeginState()
      
    // Create one instance per each body and mesh.
    for (i=0; i < aBodiesAndMeshes.length; i++) {
      var nObjID = aBodiesAndMeshes[i];
      WSM.Utils.CreateAlignedAndCenteredGroup(MAIN_HISTORY_ID, [nObjID])
    }
      
    if (aOtherForInstance.length > 0) {
      // Create one instance for all the remaining stuff
      WSM.Utils.CreateAlignedAndCenteredGroup(MAIN_HISTORY_ID, aOtherForInstance)
    }
      
    FormIt.UndoManagement.EndState("Move toplevels to instances")
  }
}

FormitPlugin.BuildElementsFromGeometry = function(
  formitGeometry,
  elements,
  rootElement,
  offsetTransf3d,
  isBuildingFloor
) {
  const feetToMeters = 0.3047999995367042
  const point = WSM.Geom.Point3d(0, 0, 0)
  const vector = WSM.Geom.Vector3d(feetToMeters, feetToMeters, feetToMeters)
  const feetToMetersTransf3d = WSM.Geom.MakeScalingTransform(point, vector)

  for (i=0; i < formitGeometry.length; i++) {
    var geometry = formitGeometry[i];
    const mesh = optimizeMesh(mergeMeshes(geometry.meshes))
    const element = {
      id: uuid.v4(),
      children: [],
      properties: {
        category: "ConceptualElement",
        geometry: {
          type: ReferenceType.INLINE,
          format: "Mesh",
          verts: mesh.vertices,
          faces: mesh.indices,
        },
      },
    }

    if (isBuildingFloor) {
      element.properties.subcategory = "ConceptualBuildingFloor"
    }

    if (geometry.transforms.length > 1) {
      elements[element.id] = element
      for (i=0; i < geometry.transforms.length; i++) {
        var transform = geometry.transforms[i];
        var transf3d = WSM.Geom.Transf3d()

        if (transform.data) {
          transf3d.data = transform.data
        }

        if (offsetTransf3d && offsetTransf3d.data) {
          //@ts-ignore
          transf3d = WSM.Transf3d.Multiply(offsetTransf3d, transf3d)
        }

        //@ts-ignore
        transf3d = WSM.Transf3d.Multiply(feetToMetersTransf3d, transf3d)

        rootElement.children.push({
          id: element.id,
          transform: transpose(transf3d.data),
        })
      }
    } else {
      var transf3d = WSM.Geom.Transf3d()

      if (geometry.transforms[0].data) {
        transf3d.data = geometry.transforms[0].data
      }

      if (offsetTransf3d && offsetTransf3d.data) {
        //@ts-ignore
        transf3d = WSM.Transf3d.Multiply(offsetTransf3d, transf3d)
      }

      //@ts-ignore
      transf3d = WSM.Transf3d.Multiply(feetToMetersTransf3d, transf3d)

      elements[element.id] = {
        ...element,
      }
      rootElement.children.push({
        id: element.id,
        transform: transpose(transf3d.data),
      })
    }
  }
}