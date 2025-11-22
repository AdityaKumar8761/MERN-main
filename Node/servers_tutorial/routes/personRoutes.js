const express = require('express');
const router = express.Router();

//exprting modles
const Person = require('./../models/Person')

//async and await and catch 
router.post('/' , async (req, res)=>{
  try{
    //request data
    const data = req.body;

    //set data
    const newPerson = new Person(data);

    //dave the data
    const response = await newPerson.save();
    console.log('data saveed');
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
})


//getting data out of db
router.get('/' , async (req, res)=>{
  try{
    //data fetching
    const data = await Person.find();
    console.log('data fetched');
    //response the data
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

//paramaterised CRUD operations
router.get('/:workType', async(req, res)=>{
  try{
    const workType = req.params.workType;  //params is a variable 
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){

      const response = await Person.find({work: workType});
      console.log('responsed fetched');
      res.status(200).json(response);
    }else{
      console.log('invalid workType')
      res.status(404).json({error: 'data not found'})
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Ineternal Server Error'})
  }
})

//Update Operation
router.put('/:id' , async (req,res)=>{
    try{
        const PersonId = req.params.id;  // Extract the id form the URL parameter
        const updatePersonData = req.body;  //Updated data for the person
        const response = await Person.findByIdAndUpdate(PersonId , updatePersonData,{
            new : true,  // Return the updated document
            runValidators: true, //Tun Mongoose validation
        })

        if(!response){
            return res.status(404).json({error:"person not found"})
        }

        console.log('data updated');
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})



//Delete Operation
router.delete('/:id' , async (req, res) =>{
    try{
        const personId = req.params.id;
        
        //Assuming you have a person model
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }else{
            console.log('data deleted');
            res.status(200).json({delete : "person deleted successfully"});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Server error'})
    }
})






module.exports = router;