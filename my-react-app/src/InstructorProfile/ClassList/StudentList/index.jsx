import "./index.css";
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Achievement(props) {

    return (
        <>
            <div className="StudentLi">
                {/*<button className='ClassSect'>Class 1</button>*/}
                    
                    
                    <div className='Student'>
                        <p className="StuPara">

        <div className="icon-class">
                        <i className="bi bi-caret-right-square-fill"></i>
        </div>

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