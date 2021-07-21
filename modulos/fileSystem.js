const fs = require('fs');

function read(path, callback) {
    fs.readFile(path, (error, data) => {
        // Read file
        callback(data.toString());
    })
}

function write(path, content, callback) {
    fs.writeFile(path, content, function (error) {
        if (error) {
            console.log('I could not write the file', error);
        } else {
            console.log('The file is written correctly')
        }
    });
}

function deleteFile (path, callback) {
    fs.unlink(path, callback)
}

deleteFile(__dirname + '/fileWrite.txt', console.log);

write(__dirname + '/fileWrite.txt', 'I am a new File', console.log);

read(__dirname + '/fileExample.txt', console.log);





