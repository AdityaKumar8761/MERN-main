import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cart";

const Item = (props) => {
    const cart = useContext(CartContext);
    console.log(cart)

    return(
        <div className="item-cart">
            <h4>{props.name}</h4>
            <p>
                Price: ${props.price}
            </p>
            <button onClick={() => cart.setItems([
                ...cart.items, 
                {name: props.name, price: props.price}])}>

{/* set the existing items and then added our items ...cart.items state the existing items */}
                Add to Cart
            </button>
        </div>
    )
}

export default Item