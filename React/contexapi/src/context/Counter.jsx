import React,{ createContext , useState } from 'react';

export const CounterConstext = createContext(null);

export const CounterProvider = (props) => {
    const [count , setCount] = useState(0);
    return(
        <CounterConstext.Provider value={{ count ,setCount }}>
            {props.children}
        </CounterConstext.Provider>
    )
}