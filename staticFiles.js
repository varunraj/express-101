const express = require('express');
const app = express()

// Add middleware to App
app.use(express.static('public'));



app.listen(3000, (req,res)=>{
    console.log("Listening 3000")
})