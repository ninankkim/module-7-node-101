//create dns variable and ensure it requires 'dns' method
const dns = require('dns')
//create readLine variable that requires "readline" method
const readline = require("readline").createInterface({
    //input and process(predefined), the stdin, which i think is short for
    //stand in but i could be wrong, stdnin is a property
input: process.stdin,
  //same but output
output: process.stdout,
});
//readline method appended to question method(predefined),
//string, domain name:, function of the url that the user gives
readline.question("Domain Name: ", function (url) {
    //this closes the code so it wont run infinitely
    readline.close();
    //lookup method used for dns, within the url, parameter of the error and address given
    //it takes a path of the string, takes a callback function,
    dns.lookup(url, function (error, address) {
        if (error) {
            console.log(error.message);
            return;
        }
        console.log("IP Address: ", address);
    })
});