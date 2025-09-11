import React from "react";

const TodoItems = () => {
    return (
        <li className="todo-items"> 
        <span>
            <input type="checkbox" className="checkbox" />
            <span className="items">Eat</span>
        </span>
            <p>...</p>
        </li>
    )
}

export default TodoItems;