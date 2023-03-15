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

FormitPlugin.GetIdOrCreate = function(args) {
  var histID = args[0]
  var layerName = args[1]
  
  FormIt.Layers.AddLayer(histID, layerName, true)
  var formItLayerId = FormIt.Layers.GetLayerID(layerName)
  var wsmLayerId
  if (formItLayerId == WSM.INVALID_ID) {
    console.error("Cannot retrieve the Forma layer")
  } else {
    // The WSM LayerID value is different from the FormIt LayerId
    wsmLayerId = getWSMLayerID(histID, layerName)
    if (wsmLayerId == WSM.INVALID_ID) {
      console.error("Cannot retrieve the Forma WSM layer")
      formItLayerId = undefined
    }
  }

  var result = [ formItLayerId, wsmLayerId ];
  return result;
}


function getWSMLayerID(histID, FormaLayerName) {
  const aLayers = WSM.APIGetAllObjectsByTypeReadOnly(histID, WSM.nObjectType.nLayerType)
  var wsmLayerId = WSM.INVALID_ID
  for (var i = 0; i < aLayers.length; i++) {
    const data = WSM.APIGetLayerDataReadOnly(histID, aLayers[i])

    if (data.name == FormaLayerName) {
      wsmLayerId = aLayers[i]
      break
    }
  }

  return wsmLayerId
}