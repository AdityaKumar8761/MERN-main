import React ,{ createContext ,useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [count, setcount] = useState(4)
    return (
        <CounterContext.Provider value={{count , setcount}}> 
{/* the value in the provider can be accss by all the element of the counter provider */}
            {props.children}
        </CounterContext.Provider>
    )
}
