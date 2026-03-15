const express = require('express')
const app = express()
const port = 3000
const db = require('./db')

const passport = require('./auth');


const Person = require('./models/Person')
const menuItem = require('./models/menuItem')



app.use(passport.initialize());

//using middleware for clearner code
const localAuthMiddleWare = passport.authenticate('local' , {session: false})



//for parser data into json
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //data stored in --> req.body




app.get('/',localAuthMiddleWare, function(req, res){
  res.send('Welcome to our Hotel');
})



app.post('/leanPerson' , (req,res)=>{
  const data = req.body  
  //creating a new person document using the Mongoose model
  const newPerson = new Person(data);  //person exported as models
  //defining
  // newPerson.name = data.name;
  // newPerson.age = data.age;

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










//Importing the router files
const personRouters = require('./routes/personRoutes');

//using the routers
app.use('/person' ,localAuthMiddleWare, personRouters);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// CRUD operation in database 
// create read Update Delete 
// c -> create -> Post
// r -> read   -> Get
// u -> update -> Put/Patch
// d -> Delete -> Delete


