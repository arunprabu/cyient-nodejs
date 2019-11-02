//Blocking or synchronous example
var fs = require('fs'); // importing fs module 

var content = fs.readFileSync('sample.txt');

console.log(content.toString());
console.log("Ends");