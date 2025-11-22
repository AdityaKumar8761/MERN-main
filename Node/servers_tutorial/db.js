const mongoose = require('mongoose');

//define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' // Replace mydatabase with your database name 

//set up connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',() => {
    console.log('connected to MongoDb server');
})

db.on('disconnected',() => {
    console.log('disconnected');
})


// connection extablished 
// export and run it 
module.exports =db;