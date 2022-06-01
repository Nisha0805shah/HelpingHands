// const express = require('express');
// //const dotenv = require('dotenv');
// require('dotenv').config();
// const app=express();
// var db = process.env.MONGO_URL
// var PORT=process.env.PORT || 3000;
// const morgan=require('morgan');
// const bodyparser=require('body-parser');
// const path=require('path');
// const mongoose = require('mongoose');
// const connectDB = require('./database/connection');


// //log requests
// app.use(morgan('tiny'))

// connectDB();
// //parse req to body parser
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json());

// //set view engine
// //app.set("view engine","ejs")

// //load assets
// // app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
// // app.use('/images',express.static(path.resolve(__dirname,"assets/images")))
// // app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


// //load routers
// app.use('/',require('../Frontend/src/components/Home/Home'))

// app.listen(PORT,() => {console.log(`Server running on http://localhost:${PORT}`)});
var cors = require("cors");
var express = require("express");
require('dotenv').config();
var app = express();
var db = process.env.MONGO_URL
var port = process.env.PORT || 8080;
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var User = require("./models/register");


var passport = require("passport");
app.use(passport.initialize());

//require("./strategies/jsonwtStrategy")(passport);
app.use(cors());

var path = require("path");

const connectDB = require('./database/connection')
connectDB();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Config for JWT strategy

app.get("/", (req, res) => {
  res.status(200).send(`Hi Welcome to the Keepify`);
});
app.listen(port,()=>{});
const user = require("./routes/register");
app.use("/register", user);
