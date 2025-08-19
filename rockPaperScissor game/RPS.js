//local storage of data
let score = JSON.parse(localStorage.getItem('score'))

//updating the restart and creating the score board
if(score === null){
    score = {
        win : 0,
        loose : 0,
        draw : 0
    }
}

//generation of random
function generate(){
    let num = Math.random();
    if(num <= 1/3)return 'rock';
    else if(num >= 2/3)return 'paper';
    else return 'scissor';

}


//gamefunction
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

    return outcome;
}


//connection function
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
    
    //updating the score in the local storage
    localStorage.setItem('score' , JSON.stringify(score));
}


//display functoin
function diplay(){
    alert(`win = ${score.win}  loose = ${score.loose}  draw = ${score.draw}`)
}

function showr()
{
let a = Game(player);
document.querySelector('para').innerHTML = a;
}



