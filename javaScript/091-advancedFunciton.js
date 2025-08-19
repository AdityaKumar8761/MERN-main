//hoisting calling a function before it is written

function greeting(){
    console.log('hello ')
}

greeting()  

const num = 2;

//anonomous fuction
const function1 = function(){
    console.log('hello2')
}

console.log(function1)
function1()

const obj1 = {
    num:1,
    fun: function(){
        console.log('hello3')
    }
};

obj1.fun()

function ren(parem){
    parem()
}

ren(function(){
    console.log('hello4')
})

//settimeout  
// setTimeout(function(){console.log('timeout');},3000)

console.log('next line');

//setInterval
// setInterval(function(){
//     console.log('interval')
// },3000)

console.log('nextline2')

//how to stop setInterval
//const intervalId = setInterval(------)
//clearInterval(intervalId)

[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(function(value){
    console.log(value);
});
