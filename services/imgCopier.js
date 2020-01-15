const fs = require('fs');
 
const copyJPGTo = (imgName, imgFolder, newImageName) => {
    console.log('args are: ', imgName, imgFolder, newImageName)
    //fs.readFile takes a fileName, callback (err, data)
    fs.readFile(imgName, (readFileErr, readFileData) => {
        if(readFileErr) throw new Error('File not read!')
        //fs.mkdir takes a fileName, callback(err, mkdirRes)
        fs.mkdir(imgFolder, (mkdirErr, mkdirData) => {
            //fs writeFile takes in a fileName, data, callback(writeFileErr, writeFileData)
            fs.writeFile(`./${imgFolder}/${newImageName}`, readFileData, (writeFileErr, writeFileData) => {
                if (writeFileErr) throw new Error('File not written!');
            });
        });
        
    });
}

module.exports = {
    copyJPGTo,
}