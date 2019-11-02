//non blocking io -- async example 
const fs = require('fs');

fs.readFile('sample.txt', function( err, data ){
    if(err){
        console.log(err)
    }else{
        console.log(data.toString());
    }
});

console.log("Ends");