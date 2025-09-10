import React from 'react';
import ReactDOM from 'react-dom/client';

function HelloWorld(){ // this is a component in react(must return jsx and must start form capital letter)
    return (
    <div>
        <h1>Hello form component</h1>
        <p>
            how are you doing hope you are fine
        </p>
    </div>
    )  // jsx javascript XML
}

function MyComponent(){
    const name = "Piyush Garg";
    return <h2> Hello {name}</h2>; //html and java using jsx //you can run any valid javascript code in curly bracket
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorld/>)
const component = ReactDOM.createRoot(document.getElementById('comp'))
component.render(<MyComponent/>)