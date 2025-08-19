

function subscribe(){
        const sub=  document.querySelector('.subscribe');

       if(sub.innerText === 'Subscribe'){
            sub.innerText = 'Subscribed';
            sub.classList.add('is-sub')
        }
        else{
            sub.innerHTML = 'Subscribe'
            sub.classList.remove('is-sub')
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