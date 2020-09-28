const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');


app.use(helmet());
app.use(express.static('public'));

//parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded());


// Set EJS engine

app.set('view engine', 'ejs' );
//view is default. If anything other than views, use below code
app.set('views', path.join(__dirname, 'views' ))


app.get('/', (req,res,next)=>{
    
    // res.json({
    //     response :"thank you"
    // });

    // EJS is the view engine for express
    // data is second arg is appended to res.locals
    res.render("index", {
        msg:"succeess"
    });


})


app.listen(3000);