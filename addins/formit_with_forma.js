FormIt.FormaAddIn = FormIt.FormaAddIn || {};

FormIt.FormaAddIn.SaveCurrentAXMtoTemp = function(bSelectedOnly) {
    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTemp",
        bSelectedOnly:bSelectedOnly,
    };

    debugger

    var result = callAsyncAPI(args);
    return result;
};

FormIt.FormaAddIn.DeleteTempFile = function(aPath) {
    args = {
        TestAPI: "FormIt.FormaAddIn.DeleteTempFile",
        aPath:aPath
    };
    return callAsyncAPI(args);
};
