const http = require('http');
const fs = require('fs');

// http module has a createServer method
// that takes one argument which is a call backfunction.
// cb will take a req and res object

const server = http.createServer((req,res)=>{
    console.log(req.url);
    // respond back to http message

    if (req.url === "/"){
        res.writeHead(200,{'content-type':'text/html'});
        const homePageHtml = fs.readFileSync('node.html');
        res.write(homePageHtml);
        res.end();
    }else if (req.url === "/node.svg") {
        res.writeHead(200,{'content-type':'image/svg'});
        const homePageHtml = fs.readFileSync('node.svg');
        res.write(homePageHtml);
        res.end();
    }else if (req.url === "/styles.css") {
        res.writeHead(200,{'content-type':'text/css'});
        const homePageHtml = fs.readFileSync('styles.css');
        res.write(homePageHtml);
        res.end();
    
    } else {
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h4>This is not the page you are looking for!! </h4>')
        res.end();
    }

});

//createServe returns an object with a listen method
// listen method takes 1 arg which will take a port to listen to traffic.

server.listen(3000);