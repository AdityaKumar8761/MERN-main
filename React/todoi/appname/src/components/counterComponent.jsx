// useState hook learning

import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(1);

    return (
        <div>
            <p>Counter component - {count}</p>
            <p>Value is - {count%2 ===0 ? "even" : "odd"}</p>

            <button onClick={() => setCount(count+1)}> Increment</button>
            <button onClick={() => setCount(count-1)}> decrement</button>

        </div>
    )

}

export default CounterComponent;