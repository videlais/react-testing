import "./index.css";
import { useState } from 'react';

export default function Sidebar(props) {

    // JavaScript
    //
    // First, "counter" is current value
    // Second, "setCounter" allows us to change it.
    const [counter, setCounter] = useState(0);

    return (
        <>
            <p className="example">Perfect. So good!</p>
            <p>{props.exampleProp}</p>
            <a onClick={() => { setCounter(counter + 1) } }>CLICK ME NOW!</a>
            <p>Current value is {counter}</p>
        </>
    );
}