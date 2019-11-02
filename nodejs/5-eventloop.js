const events = require('events');
const fs = require('fs');

//Custom events 
var eventEmitter = new events.EventEmitter(); // Create an eventEmitter object

//1. register the event 
//3. when the event is emitted handle the event 
eventEmitter.on("onFileRead", ( data ) => {
    console.log(data);
});

//2. emit the event
fs.readFile('sample.txt', (err, data) => {
    eventEmitter.emit("onFileRead", data.toString()); 
});

console.log("Program Ended.");
