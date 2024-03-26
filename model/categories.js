const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let FeedbackSchema = Schema({
   text:{
       type:String
   },
   rating:{
       type:Number
   }

},{
   collection:'REVIEWS'
});

module.exports=mongoose.model('FeedbackSchema',FeedbackSchema);