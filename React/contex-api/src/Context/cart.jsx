import React,{ createContext,useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items ,setItems] = useState([])
    return(
        <CartContext value={{ items, setItems}}>
            {props.children} 
        </CartContext>
    )
}