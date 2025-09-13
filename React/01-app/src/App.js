// import React, { useEffect, useState } from "react";
import React from "react";
// import Mycomponent from "./Mycomponent";
import Timer from './Timer'
import { HashRouter , Routers, Route } from "react-router-dom";


function App() {
    // useEffect(() => {
    //     console.log("i am mounting.. i am app component");

    //     return function (){
    //         console.log("i am unmounting.. i am app component");
    //     }
    // }, []); //the return function is used to call something while unmounting

    // const [isVisible, setVisible] = useState(true);

    return (
        // <div className="App">
        //     {isVisible ? <Mycomponent /> : null}
        //      <p>is visible {isVisible ? "true" : "false"}</p>
        //     <button onClick={() => setVisible(!isVisible)}>Toggle</button>
        // </div>
        <Timer/>
    );
}

export default App;