import React from "react";
import Header from './components/Header';
import TodoItems from './components/TodoItems'
import Button from "./components/Button";
import Todoie from "./components/Todoie";

import CounterComponent from "./components/counterComponent";

import "./style.css"

const App = () => {
    return(
        <div>
        <div>
            <Todoie/>
        </div>,
        <div className="todo-container">
            <CounterComponent/>
            <Header/>
            <TodoItems text="eat"/>
            <TodoItems text="sleep"/>
            <TodoItems text="repeat"/>
            <TodoItems text="not-study"/>
            <TodoItems text="bakchodi" completed={true}/>
            <Button/>
        </div>
        </div>
    )
};

export default App;