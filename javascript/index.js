
const fav = {
    title: 'top gun',
    year: '1986',
    genere: 'action',
    star: 'tom cruse'
}

// object destructring 

const {title ,year , genere ,star } = fav

console.log(title , year)


const dreamHoliday = {
    destination: 'abc',
    activity: 'def',
    accomodation: 'ghi',
    companion: 'klm'
}

var { destination , activity , accomodation , companion} = dreamHoliday;

console.log(destination,activity,accomodation,companion);


//set time out 
function displayTrafficLicht(light){
    console.log(light)
}

const traffic = setTimeout(displayTrafficLicht , 3000 , 'green light')
displayTrafficLicht('red')


function quiz(ans , points){
    console.log(`The answer is ${ans} of course. you pints ${points}`)
}

console.log('what is the capital of peru?')

const questionTimer = setTimeout(quiz, 3000 , 'lima' , 10);

document.getElementById('js-clear').addEventListener('click' , ()=>{
    clearTimeout(questionTimer)
    clearTimeout(traffic)
    console.log('cancelling...')
})