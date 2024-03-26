const express = require('express');
app = express();
const Route = express.Router();
let FeedbackSchema = require('../model/categories');


//show all routes
Route.get('/list',async(req,res) =>{
    try{
        const data = await FeedbackSchema.find({});
        res.json(data);
    }
    catch (err) {
        throw err;
    }
})



//  id route 
Route.get('/feedback/:id', async(req,res) =>{
    try{
        id = req.params.id;
      const data = await FeedbackSchema.findById(id);
      res.json(data);
    }
    catch (err){
          throw err;
    }
})



//add data route
Route.post('/add-feedback/', async(req,res) =>{
    
    const data = new FeedbackSchema( {
        text: req.body.text,
        rating:req.body.rating,
    });

    try{
        const datas = await data.save();
        res.status(200).json(datas)
    }
    catch (err){
        res.status(400).json({message: err.message});
    }
})


//delete route 
Route.delete('/delete-feedback/:id', async(req,res) =>{
    try{
          id = req.params.id;
          const data = await FeedbackSchema.findByIdAndDelete(id);
          res.json(`Document with ${data} has been Deleted...`)

    }
    catch (err){
        throw err;
    }
})




//update data route
Route.put('/update-feedback/:id', async(req,res) =>{
     
    try{
        id = req.params.id;
       const updateData = req.body;
       const options = {new: true};

       const datas = await FeedbackSchema.findByIdAndUpdate(id, updateData, options);
       res.send(datas);
    }
    catch (err){
        res.status(400).json({message : err.message})
    }

})

module.exports = Route 