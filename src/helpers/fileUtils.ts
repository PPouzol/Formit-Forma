import formaService from "../services/forma.service"

export async function deleteFile(fileLocation) {
    FormIt.FormaAddIn.DeleteTempFile(fileLocation);
  }

export async function createFile(args, datas, clearExisting, callback) {
    if(!datas)
    {
        await formaService.fetchRawDatas(args.fetchUrl)
            .then(async (result) => {
                let buffer = await result.arrayBuffer();
                let parsedDatas = Array.from(new Uint8Array(buffer));
                return parsedDatas;
            })
            .then(async (datas) => {
                let finalPath = await FormIt.FormaAddIn.CreateTempPath(args.savePath);
                if(finalPath === "{}")
                {
                    // an existing remaining file exists

                }
                if(clearExisting)
                {
                    deleteFile(finalPath);
                }
                //save datas to file in args.savePath
                await FormIt.FormaAddIn.MakeBlobFile(finalPath, datas)
                   .then(() => {
                        //then, call the callback if any
                        if(callback)
                        {
                            args.tempGlbLocation = finalPath;
                            callback(args);
                        }
                    })
            })
    }
    else
    {
        //save datas to file in args.savePath
        let finalPath = await FormIt.FormaAddIn.CreateTempPath(args.savePath);
        if(finalPath === "{}")
        {
            return true;
        }
        if(clearExisting)
        {
            deleteFile(finalPath);
        }
        //save datas to file in args.savePath
        await FormIt.FormaAddIn.MakeBlobFile(finalPath, datas)
            .then(() => {
                //then, call the callback if any
                if(callback)
                {
                    args.tempGlbLocation = finalPath;
                    callback(args);
                }
            })
    }
}