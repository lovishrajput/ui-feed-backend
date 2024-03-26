const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const cors = require('cors');


 const app = express();


 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());


 //var cors = require('cors');
 app.use(cors());
 app.options('*',cors());
 var allowCrossDomain = function(req,res,next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();  
 }

 mongoose.connect('mongodb+srv://lovishrajput164:PWGMmbpXdFPwjRsZ@cluster0.kwenygo.mongodb.net/')
 .then(()=>{
    console.log(`Database Connected ...!`)
 }).catch(error=>{console.log(`There is connection error`,error)});


const FeedbackRoutes = require('./controller/FeedbackController');
app.use('/api',FeedbackRoutes);
 app.listen(9090, (res) => {
    console.log('Listen on port 9090')

 })

 app.listen(3000, () => {
   console.log('Listen on port 3000');
});
