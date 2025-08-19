//Async programming

  function hello(){
    console.log("hello")
  }

  setTimeout(hello , 2000) //timeout;

  setTimeout(() => {
    console.log("4s , log ")
  }, 4000);


  //callback hell
function getdata(dataId, getNextData){
    setTimeout(() => {
        if(getNextData){
    
            getNextData();
        }
        
        console.log("data" , dataId)
    }, 2000);
} 

getdata(1, ()=> {
    getdata(2)
})


//promices  > rending . fulfill > rejected

let promis = new Promise((resolve ,reject) =>{
    console.log("i am a promise")
    reject("some error  ")
})