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
    FormIt.CloseDialogBox();
}

FormitPlugin.EnsureInstances = function() {
    const aBodiesAndMeshes = []
    const aOtherForInstance = []
    const topLevels = WSM.APIGetAllNonOwnedReadOnly(MAIN_HISTORY_ID)
    for (i=0; i < topLevels.length; i++) {
      var nObjID = topLevels[i];
      const nType = WSM.APIGetObjectTypeReadOnly(MAIN_HISTORY_ID, nObjID)
      if (nType === WSM.nBodyType || nType === WSM.nMeshType) {
        aBodiesAndMeshes.push(nObjID)
      } else if (
        nType === WSM.nFaceType ||
        nType === WSM.nEdgeType ||
        nType === WSM.nVertexType ||
        nType === WSM.nLineMeshType ||
        nType === WSM.nPointMeshType
      ) {
        aOtherForInstance.push(nObjID)
      }
    }
    
    if (aBodiesAndMeshes.length > 0 || aOtherForInstance.length > 0) {
      FormIt.UndoManagement.BeginState()
  
      // Create one instance per each body and mesh.
      for (i=0; i < aBodiesAndMeshes.length; i++) {
        var nObjID = topLevels[i];
        WSM.Utils.CreateAlignedAndCenteredGroup(MAIN_HISTORY_ID, [nObjID])
      }
  
      if (aOtherForInstance.length > 0) {
        // Create one instance for all the remaining stuff
        WSM.Utils.CreateAlignedAndCenteredGroup(MAIN_HISTORY_ID, aOtherForInstance)
      }
  
      FormIt.UndoManagement.EndState("Move toplevels to instances")
    }
  }
  
FormitPlugin.ComputeGeometryFromLevels = function(objectId) {
  debugger
  return WSM.Utils.ComputeGeometryFromLevels(MAIN_HISTORY_ID, false, objectId);
}
  
FormitPlugin.GetAllGeometryInformation = function(names, historyId) {
  debugger
  FormIt.Layers.SetLayerVisibility(names, false)
  const formitGeometry = WSM.Utils.GetAllGeometryInformation(historyId);
  if(formitGeometry === null) 
  {
    formitGeometry = [];
  }  
  // We need to set 3D Sketch buildings layer visibility to true before getting polygon data
  FormIt.Layers.SetLayerVisibility(names, true);
  return formitGeometry;
}