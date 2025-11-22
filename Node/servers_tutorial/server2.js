const express = require('express')
const app = express()
const port = 3000
const db = require('./db')

const Person = require('./models/Person')
const menuItem = require('./models/menuItem')

//for parser data into json
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //data stored in --> req.body






app.get('/', (req, res) => {
  res.send('welcome to my hotel')
})

app.post('/leanPerson' , (req,res)=>{
  const data = req.body  
  //creating a new person document using the Mongoose model
  const newPerson = new Person(data);  //person exported as models
  //defining
  // newPerson.name = data.name;
  // newPerson.age = data.age;
  // newPerson.work = data.work;
  // newPerson.mobile = data.mobile;

  //save the data to database (no one uses this now a days)
  newPerson.save((error,person)=>{
    if(error){
      console.log('Error saving person:' , error);
      res.status(500).json({error:'Internal server error'})
    }else{
      console.log('Data saved successfully');
      res.status(200).json(person);
    }
  })
})


//async and await and catch 
app.post('/person' , async (req, res)=>{
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
app.get('/person' , async (req, res)=>{
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// CRUD operation in database 
// create read Update Delete 
// c -> create -> Post
// r -> read   -> Get
// u -> update -> Put/Patch
// d -> Delete -> Delete