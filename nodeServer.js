const http = require('http');

// http module has a createServer method
// that takes one argument which is a call backfunction.
// cb will take a req and res object

const server = http.createServer((req,res)=>{
    //console.log(req);
    // respond back to http message

    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Hello World</h1>')
    res.end();

});

//createServe returns an object with a listen method
// listen method takes 1 arg which will take a port to listen to traffic.

server.listen(3000);