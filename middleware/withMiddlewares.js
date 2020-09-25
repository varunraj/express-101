const express = require('express');
const app = express();


function validateUser (req,res,next){
    res.locals.validated = true
    console.log("Validated user")
    next()
}

function validateAdminUser (req,res,next){
    res.locals.validated = true
    console.log("Validated Admin user")
    next()
}


app.use(validateUser);
app.use('/admin',validateAdminUser); // only for admin route, middleware will run

app.get("/",(req,res)=>{
    res.send('<h4>I am the home page</h4>')
    console.log(res.locals.validated);
})


app.get("/admin",(req,res)=>{
    res.send('<h4>I am the home page</h4>')
    console.log(res.locals.validated);
})


app.listen(3000,()=>{
    console.log("Listening to 3000")
});