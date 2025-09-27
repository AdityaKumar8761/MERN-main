const fs = require("fs");

// const n = "Hello world, this is aditya"
// fs.writeFileSync("./file.txt" , n);
//Blocking request...

fs.writeFile("./file2.txt", "my name is aditya" , (err) => {})
//Non blocking request...


//readfile 

const result=fs.readFile('./file.txt' , "utf-8" , (err,result) => {
    if(err){
        console.log("Error" , err);
    }else{
        console.log(result);
    }
});

//syncronose return an argument
//asyncronose expect a callback funtion and do not ruturn anything

fs.appendFileSync("./file.txt" , new Date().getDate().toLocaleString());   //always string argument only

fs.cpSync("./file.txt" , "./copy.txt")

fs.unlinkSync('./copy.txt') //delete file

console.log(fs.statSync('./file.txt')); //to check stats of the directory

fs.mkdirSync('./newDir'); //make new directory 


