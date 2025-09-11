import React, {useEffect , useState} from "react"; 

const Mycomponent = () => {
    const [count , setcount] = useState(0);

    useEffect(() => {
        console.log("Component Mounted");


        return function (){
            console.log("unmounting");
        }
    }, []); //the return function is used to call something while unmounting

    useEffect(() => {
        console.log("count updated", count);

        return function (){
            console.log("returning count",count);
        }
    }, [count]);  //use effect run when count is updated as it is in dependency array

    return (
        <div>
            <p>count is {count}</p>
            <button onClick={() => setcount(count+1)}>update</button>
        </div>
    )
}

export default Mycomponent;