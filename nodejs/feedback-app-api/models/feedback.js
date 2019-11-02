var mongoose = require('./mongo'); //importing connection config
var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create

var Schema = mongoose.Schema;

//schema 
var Feedback = new Schema(
    {
        feedbackId: Number,
        name: String,
        email: String,
        title: String,
        content: String,
        status: String,
        createdBy : String,
        createdOn : {type: Date, default: Date.now},
        updatedBy : String,
        updatedOn : {type: Date, default: Date.now}
    }
);

//setting up auto increment 
Feedback.plugin(autoIncrement.plugin, {model: 'Feedback', 
field: 'feedbackId', startAt: 1});

module.exports = mongoose.model('Feedback', Feedback);
