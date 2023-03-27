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

FormitPlugin.GetAllGeometryInformation = function() {
  var geometries = WSM.Utils.GetAllGeometryInformation(MAIN_HISTORY_ID);
  if(geometries === null)
    geometries = [];
  return geometries;
}

FormitPlugin.ComputeGeometryFromLevels = function(objectId) {
  return WSM.Utils.ComputeGeometryFromLevels(MAIN_HISTORY_ID, false, objectId);
}

FormitPlugin.Multiply = function(args) {
  var offsetTransf3d = args[0];
  var transf3d = args[1];
  return WSM.Transf3d.Multiply(offsetTransf3d, transf3d);
}

FormitPlugin.ReadFile = function(args) {
  var filePath = args[0];
  var content = FormIt.readFile(filePath);
  return content;
}

FormitPlugin.APILoadGltfFile = function(args) {
  //@ts-ignore
  WSM.Gltf.APILoadGltfFile(
    MAIN_HISTORY_ID,
    args.tempGlbLocation,
    args.transf3d,
    WSM.INVALID_ID,
    true,
    [],
    false
  )
}
