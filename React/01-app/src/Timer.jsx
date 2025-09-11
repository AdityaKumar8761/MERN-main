import React,{useState , useEffect} from "react";

const Timer = () => {

    const [time , setTime] = useState(0);

    useEffect(() => {
        const timer =setInterval(() => setTime(time+1), 6000);

        return function() {
            clearInterval(timer)
        }
    }, [time]) //interver is stacking on top of one another careating a bug

    return (
        <div>
            <h1>StopWatch</h1>
            <p>Current Time is {time}</p>
        </div>
    )
}

export default Timer;