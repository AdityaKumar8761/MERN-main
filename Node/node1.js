//libraries
const prompt = require('prompt-sync')();


var a =5;
var b = 5;
console.log(a + b);
console.log(a);
const name = "Aditya Kumar Sinha";
console.log(typeof name);

const cars = ["Saab" , "Volvo" , "BMW"];
cars.push("tesla");
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(typeof cars);


var count = 5;
for(var i = 0 ; i< count ; i++){
    console.log(cars);
}

const person = {
    name: "aditya kumar",
    age: 19,
    isStudent: true,
    hobbies: ["chess" , "coding" , "math"]
}

console.log(person);
console.log(person.age)

// function
const age = [32 ,33 , 16 , 48 , 12 , 13];
const result = age.filter(checkAge);

function checkAge(age){
    return age<=18;
}

console.log(result)



var hour =prompt("please enter the time");
if(hour < 12) {
    console.log("we are not allowed");
}else{
    console.log("not allowed")
}
