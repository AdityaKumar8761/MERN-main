// function add(a,b){
//     return a+b;
// }

// const add = function(a, b){
//     return a + b;
// }

// const add = (a,b) =>{return a+b}

// const add = (a,b) => a+b;

// var result = add(59,3);
// console.log(result);

(function(){console.log("hello world")})();

//call back function

function callback(){
    console.log('i am calling a callback function')
}

const add = function(a,b,callback){
    var result = a+b;
    console.log(result)
    callback();
}

add(6,7,callback);

add(10,20,function(){
    console.log("hello there")
})

add(2,3, ()=> console.log("i am back"))
