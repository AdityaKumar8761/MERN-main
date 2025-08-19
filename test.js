

function subscribe(){
        const sub=  document.querySelector('.subscribe');

       if(sub.innerText === 'Subscribe'){
            sub.innerText = 'Subscribed'
        }
        else{
            sub.innerHTML = 'Subscribe'
        } 
}

function cal(){
    const a = document.querySelector('.cal');
    if(a.value <= 40){
        document.querySelector('.par').innerHTML=`the cost is ${Number(a.value)+10}`;
    }
    else{
        document.querySelector('.par').innerHTML=`the cost is ${a.value}`
    }
}