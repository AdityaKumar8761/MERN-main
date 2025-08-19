const myArray = [10,20,30]
console.log(myArray)
console.log(myArray[0])
console.log(myArray[1])

myArray[0]=99;
console.log(myArray)

console.log(Array.isArray([1,2]));
console.log(myArray.length)
myArray.push(100);
console.log(myArray)
myArray.splice(0,2);
console.log(myArray)


let i = 1;
while(i<=5){
    console.log(i)
    i++;
}

for(let i = 1; i <=5; i++){
    console.log(i)
}

let random = 0;

while(random<0.5){
    random = Math.random();
}

console.log(random)

// const todolist = [
//     'make dinner',
//     'wash dishes',
//     'watch youtube'
// ];

// for(let i = 0 ; i < todolist.length ; i++){
//     console.log(todolist[i])
// }

const num = [1,1,3]
let sum = 0;
for(let i = 0 ; i < num.length; i++){
    sum += 2*num[i]
}
console.log(sum);

//array are reverence variable 
//use slice to copy the raray
// arr1= arr2.slice();

//destructuring
const [first,second] = [1,2,3]

console.log(first);
console.log(second)