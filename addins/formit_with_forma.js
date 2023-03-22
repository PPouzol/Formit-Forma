FormIt.FormaAddIn = window.FormIt.FormaAddIn || {};

FormIt.FormaAddIn.SaveCurrentAXMtoTemp = function(bSelectedOnly, callback) {
    debugger

    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTemp",
        OptimizeGeometries:bSelectedOnly,
        callback
    };
    return callAsyncAPI(args);
};

FormIt.FormaAddIn.DeleteTempFile = function(path) {
    args = {
        TestAPI: "FormIt.FormaAddIn.DeleteTempFile",
        OptimizeGeometries:path
    };
    return callAsyncAPI(args);
};
