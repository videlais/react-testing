import "./index.css";
import React from 'react'; //was import { useState } instead of React

export default function StudentProfile(props) {

    // JavaScript
    //
    // First, "counter" is current value
    // Second, "setCounter" allows us to change it.
    // const [counter, setCounter] = useState(0);

    return (
        <>
            <div className="wrapper">
                <h2 className = "h2StuPro">Hi, [Student Name/username]!</h2>
                <img className= "pfp" src="src/assets/CollaboratePFPicon.svg" alt= "A blank profile picture icon"></img>

                <h3 className="email">[Student Email]</h3>
                <div className="logDiv">
                    <p className="logInfo"><a href="#">Change username</a></p>
                    <p className="logInfo"><a href="#">Change email</a></p>
                    <p className="logInfo"><a href="#">Change password</a></p>
                </div>

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

