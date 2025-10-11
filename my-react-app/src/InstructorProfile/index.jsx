import "./index.css";
import React from 'react'; //was import { useState } instead of React

export default function StudentProfile(props) {


    return (
        <>
            <div className="wrapper">
                <h2 className = "h2StuPro">Hi, [Instructor Name/username]!</h2>
                <img className= "pfp" src="src/assets/CollaboratePFPicon.svg" alt= "A blank profile picture icon"></img>

                <h3 className="head3">[Instructor Email]</h3>
                <div className="logDiv">
                    <p className="logInfo"><a href="#">Change username</a></p>
                    <p className="logInfo"><a href="#">Change email</a></p>
                    <p className="logInfo"><a href="#">Change password</a></p>
                </div>

                <button>{/*logout icon where the X is*/} X Logout</button>


            </div>
        </>
        
    );
}

