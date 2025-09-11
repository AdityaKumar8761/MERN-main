import React from "react";
import Header from './components/Header';
import TodoItems from './components/TodoItems'
import Button from "./components/Button";
import Todoie from "./components/Todoie";

import "./style.css"

const App = () => {
    return(
        <div>
        <div>
            <Todoie/>
        </div>,
        <div className="todo-container">
            <Header/>
            <TodoItems/>
            <TodoItems/>
            <TodoItems/>
            <TodoItems/>
            <TodoItems/>
            <Button/>
        </div>
        </div>
    )
};

export default App;