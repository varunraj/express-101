const express = require('express');
const app = express()
// to protect from header attacks, include helmet
const helmet = require('helmet')

app.use(helmet());

app.use(express.static('public'));

// below two middleware together extract the json data from req and make 
// it available in req.body

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.post('/ajax', (req,res)=>{
    console.log(req.body) // this will contain the json object from client
    res.send("Test")
})


app.listen(3000,()=>{
    console.log("Listening to 3000")
})