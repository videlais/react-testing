import "./index.css";
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CaretDownSquareFill, CaretRightSquareFill } from "react-bootstrap-icons";


export default function Achievement(props) {
    function handleClick() {
        console.log('Button clicked!');
    }
    return (
        <>
            <div className="StudentLi">
                {/*<button className='ClassSect'>Class 1</button>*/}
                    
                    <div className='Student'>
                        <p className="StuPara" onClick={handleClick}>

                            

                        [student name]</p>
                        <button className="Remove">Remove</button>
                    </div>



                    <div className='Student'>
                        <p className="StuPara">

                            

                        [student name]</p>
                        <button className="Remove">Remove</button>
                    </div>

            </div>

        </>
        
    );
}