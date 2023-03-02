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

FormitPlugin.CheckModifications = function(){
    return FormIt.Model.IsModified();
}

FormitPlugin.GetGeometryData = function(){
  const previousLayersVisibility = this.hideLayersBeforeSave()
  FormIt.Layers.SetLayerVisibility(formItLayerNames.FORMA_BUILDINGS, false)
  const formitGeometry = WSM.Utils.GetAllGeometryInformation(MAIN_HISTORY_ID) ?? []

  // We need to set 3D Sketch buildings layer visibility to true before getting polygon data
  FormIt.Layers.SetLayerVisibility(formItLayerNames.FORMA_BUILDINGS, true)
  const polygonData = this.getPolygonData()

  this.returnLayersToPreviousVibility(previousLayersVisibility)

  return { formitGeometry, polygonData };
} 

FormitPlugin.EnsureInstances = function(){
    const aBodiesAndMeshes = []
    const aOtherForInstance = []
    const topLevels = WSM.APIGetAllNonOwnedReadOnly(MAIN_HISTORY_ID)
    for (const nObjID of topLevels) {
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

FormitPlugin.CloseDialog = function(){
    //close parent dialog window
    FormIt.CloseDialogBox();
}