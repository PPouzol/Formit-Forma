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