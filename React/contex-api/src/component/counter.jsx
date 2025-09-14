import React from "react";
import { useContext } from "react";
import { CounterContext } from "../Context/counter";


const Counter = () => {
    const counterState = useContext(CounterContext);
    return(
        <div>
            <button onClick={()=> counterState.setcount(counterState.count+1)}>
                increment
            </button>
            <button onClick={()=> counterState.setcount(counterState.count-1)}>
                decrement
            </button>
        </div>
    )
}

export default Counter;