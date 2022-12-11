import { useState } from "react";
import './counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [state, setState] = useState(true)

    const decrement = () =>{
        setCounter(counter -1);
        if(counter === 1){
            setState(true);
        };
    }

    const increment = () =>{
        setCounter(counter + 1);
        if(!counter){
            setState(false);
        };
    }

    return (
        <div className="counter-container">
            <h1>COUNTER</h1>
            <div className="counter"> {counter}</div>
            <div className="button-container">
                <button className="increment" onClick={() => { increment() }} > Increment </button>
                <button className="decrement" disabled={state} onClick={() => { decrement() }}> Decrement </button>
            </div>
        </div>
    );
};

export default Counter;