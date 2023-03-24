
FormIt.FormaAddIn = {};

FormIt.FormaAddIn.SaveCurrentAXMtoTempFile = function(bSelectedOnly) {
    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTempFile",
        bSelectedOnly:bSelectedOnly
    };
    return callAsyncAPI(args);
};

FormIt.FormaAddIn.ReadAXMandMakeBlob = function(aPath) {
    args = {
        TestAPI: "FormIt.FormaAddIn.ReadAXMandMakeBlob",
        aPath:aPath
    };
    return callAsyncAPI(args);
};

FormIt.FormaAddIn.ImportAXMBlob = function(blob) {
    args = {
        TestAPI: "FormIt.FormaAddIn.ReadAXMandMakeBlob",
        blob:blob
    };
    return callAsyncAPI(args);
};

FormIt.FormaAddIn.DeleteTempFile = function(aPath) {
    args = {
        TestAPI: "FormIt.FormaAddIn.DeleteTempFile",
        aPath:aPath
    };
    return callAsyncAPI(args);
};
