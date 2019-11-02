
//2. construct a query for the request and execute
//3. receive the data from db
//4. send it back to routes 

exports.getFeedbackList = () => {
    
}

exports.createFeedback = (data, callback ) => { //1. get the data from routes
    console.log("Inside service");

    console.log(data);

    console.log(callback);

    callback('', data);

}