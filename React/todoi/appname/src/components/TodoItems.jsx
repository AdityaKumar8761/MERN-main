import React from "react";

const TodoItems = (input) => {
    return (
        <li className="todo-items"> 
        <span>
            {input.completed ? null : <input type="checkbox" className="checkbox" />}
            {input.completed ? null : <span className="items">{input.text}</span>}
        </span>
            {input.completed ? null : <p>...</p>}
        </li>
    )
}

export default TodoItems;