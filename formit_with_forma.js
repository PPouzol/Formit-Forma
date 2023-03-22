window.FormIt.FormaAddIn = window.FormIt.FormaAddIn || {};

window.FormIt.FormaAddIn.SaveCurrentAXMtoTemp = function(bSelectedOnly) {
    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTemp",
        OptimizeGeometries:bSelectedOnly,
    };

    debugger
    
    var result = callAsyncAPI(args);
    return result;
};

window.FormIt.FormaAddIn.DeleteTempFile = function(path) {
    args = {
        TestAPI: "FormIt.FormaAddIn.DeleteTempFile",
        OptimizeGeometries:path
    };
    return callAsyncAPI(args);
};
