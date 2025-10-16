import "./index.css";
import React from 'react';

export default function Achievement(props) {

 
    return (
        <>
            <div className="StudentLi">
                <h2 className = "Studenth2">Students</h2>
                    
                    <div className='Student'><button className="DropDown">[X]</button> <button clasName="StudentPara">[student name]</button></div><button className="Remove">Remove</button>
                    <button className='Student'>[o] [student name]</button><button className="Remove">Remove</button>
                    <button className='Student'>[o] [student name]</button><button className="Remove">Remove</button>

            </div>

        </>
        
    );
}