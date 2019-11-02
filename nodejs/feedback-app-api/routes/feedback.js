var express = require('express');
//setting up express router -- to handle http methods
// http methods are GET, POST, PUT, DELETE
var router = express.Router();

const feedbackService = require('../services/feedbackService');

/* GET api/feedback. */
router.get('/', (req, res, next) => {
    //1. send the req to service
    //2. get the data from service
    //3. send it to front end 
    res.json( 
        [
            { id: 1, name: 'Arun',  email: 'a@b.com', title: 'app is awesome', content: 'dfgsdgdfg sdf sfdg'},
            { id: 2, name: 'Vj', email: 'x@y.com', title: 'delivery is not good', content: 'sgdsfg sdf sfdg'},
        ]
    );
});

// POST -- for create action on api/feedback 
router.post('/', (req, res, next) => {
    console.log(req.body); //we have to deal with req

    //1. send the req to service
    feedbackService.createFeedback(req.body, function(err, data){ //2. get the data from service
        console.log("getting response from service");
        res.json( data ); //3. send it to front end 
    });

    
    

    
});

//id is the url param
router.get('/:id', (req, res, next) =>{
    console.log(req.params.id);
    // work on later
    res.json({ id: 1, name: 'Arun',  email: 'a@b.com', title: 'app is awesome', content: 'dfgsdgdfg sdf sfdg'},)
});

router.put('/:id', (req, res, next) =>{
    res.json( { status: 200, msg: 'Updated Successfully'});
});

router.delete('/:id', (req, res, next) =>{
    res.json( { status: 200, msg: 'Deleted Successfully'});
});


module.exports = router;
