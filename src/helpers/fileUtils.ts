import formaService from "../services/forma.service"

export async function deleteFile(fileLocation) {
    // if (window.FormItModule.ccall("FormItCore_FileExists", "bool", ["string"], [fileLocation])) {
    //   window.FormItModule.ccall("FormItCore_DeleteFile", "int", ["string"], [fileLocation])
    // }
  }

export async function createFile(args, datas, clearExisting, callback) {
    if(clearExisting)
    {
        deleteFile(args.savePath);
    }
    if(!datas)
    {
        await formaService.fetchRawDatas(args.FetchUrl)
            .then(async (res) => res.blob())
            .then(async (datas) => {
                //save datas to file in args.savePath
                // TBD
                //then, call the callback if any
                if(callback)
                {
                    callback(args);
                }
            });
    }
    else
    {
        //save datas to file in args.savePath
        // TBD
        //then, call the callback if any
        if(callback)
        {
            callback(args);
        }
    }
}