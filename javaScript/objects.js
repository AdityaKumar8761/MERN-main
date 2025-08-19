

//rock paper scessor game score board

// const score = {
//     win : 0,
//     loose: 0,
//     draw : 0
// }

let score = JSON.parse(localStorage.getItem('score'))

if(score === null){
    score = {
        win : 0,
        loose : 0,
        draw : 0
    }
}

//rock paper scessor
function generate(){
    let num = Math.random();
    if(num <= 1/3)return 'rock';
    else if(num >= 2/3)return 'paper';
    else return 'scissor';

}

function Game(player){
    let comp = generate();
    let outcome = ''
    if(player === 'rock'){
        if(comp === 'rock'){
            outcome = 'draw';
        }
        else if(comp === 'paper'){
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
        else if(comp === 'paper'){
            outcome ='win'
        }
        else{
            outcome ='draw'
        }
    }

    alert(`The computer choose ${comp} the outcome is ${outcome}`)
    return outcome;
}


function play(playerChoice){
    let outcome = Game(playerChoice)

    if(outcome === 'win'){
        score.win ++;
    }
    else if(outcome === 'loose'){
        score.loose ++;
    }
    if(outcome === 'draw'){
        score.draw ++;
    }
    
    localStorage.setItem('score' , JSON.stringify(score));
}



function diplay(){
    alert(`win = ${score.win}  loose = ${score.loose}  draw = ${score.draw}`)
}






//JSON

const rating = {
    name: 'aditay',
    enrol: 24,
    fun : function function1(){
        console.log(`function inside objects`)
    }
}

console.log(rating.fun());

console.log(JSON.stringify(rating));
console.log(JSON.parse(JSON.stringify(rating)));


//local storage

localStorage.setItem('message' , "hello");
console.log(localStorage.getItem('message'));




