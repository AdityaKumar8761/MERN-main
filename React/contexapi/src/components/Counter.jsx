import React, { useContext } from 'react';
import { CounterContext } from "../context/Counter";

const Counter = () => {
    const counterState = useContext(CounterContext);

    return (
        <div className='counter-button'>
            <button onClick={() => counterState.setCount(counterState.count + 1)}>Increment</button>
            <button onClick={() => counterState.setCount(counterState.count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;
