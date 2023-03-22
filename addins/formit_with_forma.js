FormIt.FormaAddIn = FormIt.FormaAddIn || {};

FormIt.FormaAddIn.SaveCurrentAXMtoTemp = function(bSelectedOnly) {
    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTemp",
        OptimizeGeometries:bSelectedOnly,
    };

    debugger
    
    var result = callAsyncAPI(args);
    return result;
};

FormIt.FormaAddIn.DeleteTempFile = function(path) {
    args = {
        TestAPI: "FormIt.FormaAddIn.DeleteTempFile",
        OptimizeGeometries:path
    };
    return callAsyncAPI(args);
};
