const http = require('http'); //importing http

http.createServer( ( req, res ) => {
    
    console.log(req.url);
    switch( req.url ){
        case '/':
            res.write(`
                <div>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                    
                    <h1>Welcome to Home Page</h1>
                </div>
            `);
            break;
        case '/about': 
            res.write(`
                <div>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                
                    <h1>Welcome to About Page</h1>
                </div>
            `);
            break;
        case '/contacts': 
            //  RESP is of JSON
            console.log("Inside contacts");
            res.writeHead(200, {"Content-Type": "application/json"});  
            res.write(`{ name: 'arun', phone: '43453245'} `);
            break;  
        default: 
            res.write(`
            <div>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
                
                <h1>404 - Page Not Found</h1>
            </div>
        `);
    }
    
    res.end();

}).listen( 3000, () => {
    console.log( "Server started ");
});