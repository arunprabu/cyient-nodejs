const http = require('http'); //importing http

// serve will be created 
// it should listen on port 3000 
// deal with req, res 
http.createServer( ( req, res ) => {
    
    console.log("req received");
    console.log(req);
    res.write(`
        <div>
            <h1>Success</h1>
        </div>
    `);
    res.end();

}).listen( 3000, () => {
    console.log( "Server started ");
});