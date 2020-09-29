const fs = require('fs')
const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout,
});

readline.question("filename: ", function (filename) {
    readline.close();
    fs.readFile(filename, function (error, stuff) {
        if (error) {
            console.log(error.message);
            return;
        }
        else {
            console.log(stuff.toString().toUpperCase());
            // return ("Text: ", buffer.toUpperCase);
            //buffer handles raw data takes data and makes it into # and then we take into a string
        }
    })
});