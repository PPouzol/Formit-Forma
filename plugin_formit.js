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

FormitPlugin.FillTypesArrays = function(){
  debugger
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
  return {aBodiesAndMeshes, aOtherForInstance};
}