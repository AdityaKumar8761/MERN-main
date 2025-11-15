const notes = require('./notes.js')
var _ = require('lodash')

console.log(notes.add(5,8))

const data = ["person" , "person" , 1, 2, 3, 2, 1, 4 , "name" , "age" , "2"]
const filter = _.uniq(data)
console.log(filter)