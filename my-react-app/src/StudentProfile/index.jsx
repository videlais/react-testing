import "./index.css";
import { useState } from 'react';

export default function StudentProfile(props) {

    // JavaScript
    //
    // First, "counter" is current value
    // Second, "setCounter" allows us to change it.
    // const [counter, setCounter] = useState(0);

    return (
        <>
            <div className="wrapper">
                <h2 className = "head">Hi, [Student Name/username]!</h2>
                <img className= "pfp" src="src/assets/Collaborate_pfp_icon.svg" alt= "A blank profile picture icon"></img>

                <h3 className="email">[Student Email]</h3>
                <p className="logInfo"><a href="#">Change username</a></p>
                <p className="logInfo"><a href="#">Change email</a></p>
                <p className="logInfo"><a href="#">Change password</a></p>

                <button>{/*logout icon where the X is*/} X Logout</button>


                {/*this is the stuff Dan did 9/23
                <p className="example">Perfect. So good!</p>
                <p>{props.exampleProp}</p>
                <button onClick={() => { setCounter(counter + 1) } }>CLICK ME NOW!</button>
                <p>Current value is {counter}</p>*/}
            </div>
        </>
        
    );
}

