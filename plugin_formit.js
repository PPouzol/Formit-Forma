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
    FormIt.CloseDialogBox();
}

FormitPlugin.EnsureInstances = function(){
  const MAIN_HISTORY_ID = 0;
  const aBodiesAndMeshes = [];
  const aOtherForInstance = [];
  var topLevels = WSM.APIGetAllNonOwnedReadOnly(MAIN_HISTORY_ID);
  for (i = 0; i < topLevels.length; i++) {
    var nObjID = topLevels[i];
    const nType = WSM.APIGetObjectTypeReadOnly(MAIN_HISTORY_ID, nObjID);
    if (nType === WSM.nBodyType || nType === WSM.nMeshType) {
      aBodiesAndMeshes.push(nObjID);
    } else if (
      nType === WSM.nFaceType ||
      nType === WSM.nEdgeType ||
      nType === WSM.nVertexType ||
      nType === WSM.nLineMeshType ||
      nType === WSM.nPointMeshType
    ) {
      aOtherForInstance.push(nObjID);
    }
  }
  
  if (aBodiesAndMeshes.length > 0 || aOtherForInstance.length > 0) {
    FormIt.UndoManagement.BeginState();

    // Create one instance per each body and mesh.
    for (i = 0; i < topLevels.length; i++) {
      var nObjID = aBodiesAndMeshes[i];
      WSM.Utils.CreateAlignedAndCenteredGroup(MAIN_HISTORY_ID, [nObjID]);
    }

    if (aOtherForInstance.length > 0) {
      // Create one instance for all the remaining stuff
      WSM.Utils.CreateAlignedAndCenteredGroup(MAIN_HISTORY_ID, aOtherForInstance);
    }

    FormIt.UndoManagement.EndState("Move toplevels to instances");
  }
}

function hideLayersBeforeSave() {
    const layersToAvoidSaving = [
      formItLayerNames.FORMA_CONTEXT,
      formItLayerNames.FORMA_TERRAIN,
      formItLayerNames.SURROUNDING_BUILDINGS,
      formItLayerNames.FORMA_AUTO_BUILDINGS,
      formItLayerNames.FORMA_PROPOSAL_BUILDINGS,
      formItLayerNames.FORMA_SITE_LIMIT,
      formItLayerNames.FORMA_BUILDING,
      formItLayerNames.FORMA_VEGETATION,
      formItLayerNames.FORMA_GENERIC,
      formItLayerNames.FORMA_ROAD,
      formItLayerNames.FORMA_RAILS,
      formItLayerNames.FORMA_PROPERTY_BOUNDARY,
      formItLayerNames.FORMA_ZONE,
      formItLayerNames.FORMA_BUILDING_ENVELOPE,
    ]

    return layersToAvoidSaving.map((layerName) => {
      const formItLayerId = FormIt.Layers.GetLayerID(layerName)
      let previousVisiblity = false
      let layerData
  
      if (formItLayerId != WSM.INVALID_ID) {
        layerData = FormIt.Layers.GetLayerData(formItLayerId)
        previousVisiblity = layerData.Visible
        layerData.Visible = false
        FormIt.Layers.SetLayersVisibility([layerData])
      }
  
      return {
        layerData,
        previousVisiblity,
      }
    });
  }

function returnLayersToPreviousVibility( layers ) {
    layers.forEach((layer) => {
      if (layer.layerData) {
        layer.layerData.Visible = layer.previousVisiblity
        FormIt.Layers.SetLayersVisibility([layer.layerData])
      }
    })
}

FormitPlugin.GetGeometryData = function(){
    const previousLayersVisibility = hideLayersBeforeSave();
    FormIt.Layers.SetLayerVisibility(formItLayerNames.FORMA_BUILDINGS, false);
    const formitGeometry = WSM.Utils.GetAllGeometryInformation(MAIN_HISTORY_ID) ?? [];

    // We need to set 3D Sketch buildings layer visibility to true before getting polygon data
    FormIt.Layers.SetLayerVisibility(formItLayerNames.FORMA_BUILDINGS, true);
    const geometryData = WSM.Utils.ComputeGeometryFromLevels(MAIN_HISTORY_ID, false, objectId);
    const polygonData = geometryData.map((geometryForLevel) => {
      const { outer_loop, inner_loops } = geometryForLevel.second[0]

      const outerRings = (outer_loop.vertices).map((point3d) => [
        point3d.x * FEET_TO_METER,
        point3d.y * FEET_TO_METER,
      ])

      const multiRingPolygon = [outerRings]

      if (inner_loops.length > 0) {
        const innerRings = (inner_loops[0].vertices).map((point3d) => [
          point3d.x * FEET_TO_METER,
          point3d.y * FEET_TO_METER,
        ])

        multiRingPolygon.push(innerRings)
      }

      return multiRingPolygon
    });

    returnLayersToPreviousVibility(previousLayersVisibility);
    return { formitGeometry, polygonData };
} 