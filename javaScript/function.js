function Game(player){
    let comp = generate();
    let outcome = ''
    if(player === 'rock'){
        if(comp === 'rock'){
            outcome = 'draw';
        }
        else if(comp === ' paper'){
            outcome ='loose'
        }
        else{
            outcome ='win'
        }
    }
    else if(player === 'paper'){
        if(comp === 'rock'){
            outcome = 'win';
        }
        else if(comp === ' paper'){
            outcome ='draw'
        }
        else{
            outcome ='loose'
        }
    }
    else{
        if(comp === 'scissor'){
            outcome = 'loose';
        }
        else if(comp === ' paper'){
            outcome ='win'
        }
        else{
            outcome ='draw'
        }
    }

    alert(`The computer choose ${comp} the outcome is ${outcome}`)
}

function generate(){
    let comp = '';
    let num = Math.random();

    if(num <= 1/3){
        comp = 'rock'
    }
    else if(num >= 2/3){
        comp ='paper'
    }
    else{
        comp = 'scissor'
    }

    return comp;
}


//opjects and references

const o1 = {
    name: 'aditya',
    price :100
}
const o2 = {
    name: 'aditya' ,
    price :100

}
 
const o3 = o1;

console.log(o1 === o2)
console.log(o1 === o3)

//destructuring
const { name , price} = o1;
console.log(name , price);

//short hand property
const o5 = {
    message : name,
    price
}

console.log(o5)

//short hand method
const o6 = {
    price ,
    // method : function function1(){
    //     console.log('method')
    // }
    method(){
        console.log('my method')
    }
}

o6.method();