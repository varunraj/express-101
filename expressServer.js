const express = require('express');
const path = require('path');
const app = express()

app.use(express.static('public'));

// all indicates all http methods.
app.all('/',(req,res)=>{
    //res.send("<h1>This is home page </h1>")
    res.sendFile(path.join(__dirname+'/node.html'))
})

app.listen(3000,()=>{
    console.log("Listening 3000")
});