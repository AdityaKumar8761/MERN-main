import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cart";

const Cart = () => {
    const cart = useContext(CartContext);
    console.log(cart)
    const total=cart.items.reduce((a,b)=> Number(a)+Number(b.price) ,0);
    console.log("total",total)

    return(
        <div className="cart">  
            <h1>Cart</h1>
            {
                cart && cart.items.map((items)=>( <li>{items.name } - ${items.price}</li>))
            }

            <h5>    
                Total bill: ${total}
            </h5>
        </div>
    )
}


export default Cart;