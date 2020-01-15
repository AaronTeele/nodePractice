const fs = require('fs');

const copyFile = (fileName, dataToAppend) => {
    //fs.appendFile takes a fileName, data, callback(err)
    fs.appendFile(fileName, dataToAppend, (err) => {
        if(err) throw new Error(err);
        console.log('File created: ', fileName);
    });
    //fs.readFile takes a fileName, callback(err, data)
    fs.readFile(fileName, (err, data) => {
        if(err) throw new Error(err);
        let copiedData = data.toString()
        console.log('Read data from original file: ', copiedData);
        fileNameCopy = fileName.split('.')[0] + "Copy." + fileName.split('.')[1];
        console.log('New file created: ', fileNameCopy);
        copiedData += 'This is a copy. '
        fs.appendFile(fileNameCopy, copiedData, (err) => {
            if(err) throw new Error(err);
            console.log("New copy: ", copiedData);
        });
    });
};

module.exports = {
    copyFile,
};