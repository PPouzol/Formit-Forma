window.FormIt.FormaAddIn = window.FormIt.FormaAddIn || {};

window.FormIt.FormaAddIn.SaveCurrentAXMtoTemp = function(bSelectedOnly) {
    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTemp",
        bSelectedOnly:bSelectedOnly
    };
    return callAsyncAPI(args);
};

window.FormIt.FormaAddIn.DeleteTempFile = function(aPath) {
    args = {
        TestAPI: "FormIt.FormaAddIn.DeleteTempFile",
        aPath:aPath
    };
    return callAsyncAPI(args);
};



