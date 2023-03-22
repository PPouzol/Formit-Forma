FormIt.FormaAddIn = window.FormIt.FormaAddIn || {};

FormIt.FormaAddIn.SaveCurrentAXMtoTemp = function(bSelectedOnly) {
    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTemp",
        OptimizeGeometries:bSelectedOnly,
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
