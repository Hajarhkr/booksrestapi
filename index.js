const express = require('express');
const mongoose= require('mongoose');
const app= express(); 
require('dotenv').config();

const PORT = process.env.PORT || 3433;

//connect to mongodb atlas 
mongoose
    .connect(
           process.env.MONGO_URL,
           {useNewUrlParser:true}
    )   
    .then(()=> {
    console.log("connected to mongodb atlas");
}).catch( error => {
    console.log("Something wrong happened", error)
});
 

//Start server

app.listen(PORT, () => {
    console.log("server started at PORT", PORT);
})
