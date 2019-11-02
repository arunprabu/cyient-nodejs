var express = require('express');
//setting up express router -- to handle http methods
// http methods are GET, POST, PUT, DELETE
var router = express.Router();

const feedbackService = require('../services/feedbackService');

/* GET api/feedback. */
router.get('/', (req, res, next) => {

    feedbackService.getFeedbackList( (err, data) => {

        console.log("getting response from service");
        if (!err) {
            res.json(data); // 3. send the data to front end
        } else {
            res.json(err); // 3. send the error to front end
        }

    });

});

// POST -- for create action on api/feedback 
router.post('/', (req, res, next) => {
    console.log(req.body); //we have to deal with req

    //1. send the req to service
    feedbackService.createFeedback(req.body, function(err, data){ //2. get the data from service
        console.log("getting response from service");
        if (!err) {
            res.json(data); // 3. send the data to front end
        } else {
            res.json(err); // 3. send the error to front end
        }
    });
});

//id is the url param
router.get('/:id', (req, res, next) =>{
    console.log(req.params.id);
    
    feedbackService.getFeedbackById(req.params.id, ( err, data ) => {
        if (!err) {
            res.json(data); // 3. send the data to front end
        } else {
            res.json(err); // 3. send the error to front end
        }
    });

});


router.put('/:id', (req, res, next) =>{
    
    feedbackService.updateFeedbackById( req.params.id, req.body, ( err, data ) => {
        if (!err) {
            res.json(data); // 3. send the data to front end
        } else {
            res.json(err); // 3. send the error to front end
        }
    });

});

router.delete('/:id', (req, res, next) =>{
    
    feedbackService.deleteFeedbackById(req.params.id, (err, data) =>{
        if (!err) {
            let _data = {
                statusCode: 200,
                msg: 'Deleted Successfully'
            }

            res.json(_data); // 3. send the data to front end
        } else {
            res.json(err); // 3. send the error to front end
        }
    });
});


module.exports = router;
