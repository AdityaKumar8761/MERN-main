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
    }
})

//Create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;