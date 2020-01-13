const fs = require('fs');



const copyFile = (fileName, str) => {
    fs.appendFile(fileName, str, (err) => {
        if(err)console.log(err);
        console.log('File created: ', fileName);
    })
    fs.readFile(fileName, (err, data) => {
        if(err)console.log(err);
        let copiedData = data.toString()
        console.log('Read data from original file: ', copiedData);
        fileNameCopy = fileName.split('.')[0]+ "Copy." + fileName.split('.')[1];
        console.log('New file created: ', fileNameCopy);
        copiedData += 'copy'
        fs.appendFile(fileNameCopy, copiedData, (err) => {
            if(err)console.log(err);
            console.log("New copy: ", copiedData);
        });
    });
};

copyFile('wwe.txt', 'HHH is the GOAT! ');
// const copyFile = (fileName, str) => {
//     fs.appendFile(fileName, str, (err) => {
//         if(err)console.log(err);
//         console.log('File created: ', fileName);
//     })
//     .then(
//         fs.readFile(fileName, (err, data) => {
//             if(err)console.log(err);
//             const copiedData = data.toString()
//             console.log('Read data from original file: ', copiedData);
//             fileNameCopy = fileName.split('.')[0]+ "Copy." + fileName.split('.')[1];
//             console.log('New file created: ', fileNameCopy);
//             fs.appendFile(fileNameCopy, `${copiedData}copy `, (err) => {
//                 if(err)console.log(err);
//                 console.log("new copy: ", copiedData);
//             });
//         }), 
//         err => {
//             console.log(err)
//         }
//     )
    
// };

// copyFile('wwe.txt', 'HHH is the GOAT! ');