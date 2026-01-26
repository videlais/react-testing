import "./InstructProfile.css";
import React from 'react';
import ClassList from './ClassList';

export default function StudentProfile(props) {


    return (
        <>
            <div className="wrapper">
                <h2 className = "h2StuPro">Hi, [Instructor Name/username]!</h2>

                <img className= "pfp" src="src/assets/CollaborateBlankIcon.svg" alt= "A blank profile picture icon" />

                <h3 className="head3">[Instructor Email]</h3> 
                
                <div className="logDiv">
                    <p className="logInfo"><a href="#">Change username</a></p>
                    <p className="logInfo"><a href="#">Change email</a></p>
                    <p className="logInfo"><a href="#">Change password</a></p>
                </div>

                <button>{/*logout icon where the X is*/} X Logout</button>
                                <h3 className="head3">You have [number] seats left.</h3>

            </div>
            <ClassList />
        </>
        
    );
}

