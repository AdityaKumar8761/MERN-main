const mongoose = require('mongoose');

//Define the Percon Schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    work: {
        type: String,
        enum: ['chef','waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        unique: true
    },
    username:{
        require: true,
        type: String
    },
    password:{
        require: true,
        type: String
    }
})

//Create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;