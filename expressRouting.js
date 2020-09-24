const express = require('express');
const app = express();


app.all('/', (req,res)=>{
    res.send("<h1>Welcome to the home</h1>")
})

app.get('/', (req,res)=>{
    
})

app.post('/', (req,res)=>{
    
})

app.delete('/', (req,res)=>{
    
})

app.put('/', (req,res)=>{
    
})




app.listen(3000, ()=>{
    console.log("Listening to 3000")
})

