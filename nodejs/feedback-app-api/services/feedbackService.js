const Feedback = require('../models/feedback');

exports.getFeedbackList = ( callback ) => {
    console.log("Inside getFeedbackList service");

    //1. execute query 
    Feedback.find( {}, (err, feedbackList) => {
        console.log(feedbackList);
        //2.send it back to routes

        if (!err) {
            console.log(`feedback fetched successfully`);
        }

        //4. send it back to routes 
        callback(err, feedbackList);
    })
}

exports.createFeedback = (feedbackData, callback ) => { //1. get the data from routes
    console.log("Inside service");

    // execute mongoose query 
    //2. construct a query for the request and execute
    var feedbackDao = new Feedback(feedbackData);
    feedbackDao.save( ( err, savedFeedback) => {  //3. receive the data from db
        console.log(savedFeedback);

        if (!err) {
            console.log(`feedback registered successfully`);
        }

        //4. send it back to routes 
        callback(err, savedFeedback);
    });

}

exports.getFeedbackById = ( _feedbackId, callback ) => {
    console.log(_feedbackId);

    //3. execute the query 
    Feedback.findOne({ feedbackId: _feedbackId }, (err, feedbackObj ) => {
        
        if (!err) {
            console.log(`feedback fetched successfully`);
        }

        //4. send it back to routes 
        callback(err, feedbackObj);
    });

}

exports.updateFeedbackById = ( _feedbackId, updatableFeedbackData, callback ) => {

    Feedback.updateOne( { feedbackId: _feedbackId}, updatableFeedbackData, (err, status) => {
        if (!err) {
            console.log(`feedback updated successfully`);
        }

        //4. send it back to routes 
        callback(err, status);

    });
}

exports.deleteFeedbackById = ( _feedbackId, callback ) =>{
    Feedback.deleteOne( { feedbackId: _feedbackId }, (err, status ) => {
        if (!err) {
            console.log(`feedback deleted successfully`);
        }

        //4. send it back to routes 
        callback(err, status);
    });
}

