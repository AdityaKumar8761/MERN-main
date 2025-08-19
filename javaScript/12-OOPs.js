const student = {
    fullName: 'adityaa',
    marks: 97.3,
    printMarks: function () {
        console.log("marks = ", this.marks); // this refers to student
    }
};

const employee = {
    calTax() {
        console.log("tax rate is 10%");
    }
};

const karanArujun ={
    salary: 50000,
    calTax(){
        console.log("jk")
    }
};

//prototype function
karanArujun.__proto__ = employee;

//classes 
class car{
    constructor(name){
        this.name = name;
        console.log('car')
        console.log(name)
    }

    start(){
        console.log('start')
    }
    
    stop(){
        console.log('stop')
    }
};

// let fortuner = new car("hello");
let lexus = new car(23);

//inheritance
class child extends car{
    constructor(name){
        super(name);
        console.log('child')
    }
    hello(){
        console.log("hello")
    }
}

let scorpio = new child("hello");

