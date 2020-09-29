//the format for the first section 2-6
const fs = require("fs");
const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout,
});

//the reading part first 
readline.question("Input file: ", function (inputFile) {
fs.readFile(inputFile, function (error, buffer) {
    if (error) {
    console.log(error.message);
    readline.close();
    return;
    }
    readline.question("Output file: ", function (outputFile) {
    readline.close();
    const content = buffer.toString();
    const upperCased = content.toUpperCase();

    //the writing portion second 
    fs.writeFile(outputFile, upperCased, function (error) {
        if (error) {
        console.log(error.message);
        return;
        }
        console.log("Wrote to file ", outputFile);
    });
    });
});
});
