const arrowFunction = () => {
    console.log('hello');
}

arrowFunction();

const oneline = () => console.log('hello2')
oneline()

//short hand syntex
const obj2 ={
    method: () => {

    },
    method(){

    }
}

//event listener
const buttonElement =document.querySelector('.js-button')

const buttonclick= () =>{
    console.log('click')}

buttonElement.addEventListener('click', buttonclick)

buttonElement.removeEventListener('click' , buttonclick)

document.body.addEventListener('keydown' , (event) =>{
    if(event.key ==='r'){
        console.log('random')
    }
});


//filter
console.log([1,-3,5].filter((value) =>
{
    if(value >= 0){return true}
}));


//map
console.log([1,1,3].map(value =>  2*value));


