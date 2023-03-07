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
  for (const nObjID of topLevels) {
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
    for (const nObjID of aBodiesAndMeshes) {
      WSM.Utils.CreateAlignedAndCenteredGroup(MAIN_HISTORY_ID, [nObjID])
    }
      
    if (aOtherForInstance.length > 0) {
      // Create one instance for all the remaining stuff
      WSM.Utils.CreateAlignedAndCenteredGroup(MAIN_HISTORY_ID, aOtherForInstance)
    }
      
    FormIt.UndoManagement.EndState("Move toplevels to instances")
  }
}