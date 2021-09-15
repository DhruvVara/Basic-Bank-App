const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({path:"./config.env"});

require("./db/connection");
app.use(cors());
app.use(express.json());

app.use(require('./router/customers_data'));

app.use(require('./router/transfer'));

const port = process.env.PORT || 3001 ;

const middleware = (req ,res, next) => {
    console.log("middleware");
    next();
}

app.get('/',middleware,(req,res)=>{
    res.send("Hello");
})

if(process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
    
}

app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
})