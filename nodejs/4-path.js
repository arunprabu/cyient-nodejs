//this example uses default path package 
//and gets filename and extension
const path =require('path');

let extn = path.extname(__filename);
console.log(extn); //prints only the file extension

var baseName = path.basename(__filename);
console.log(baseName); //prints only the filename w/o directory