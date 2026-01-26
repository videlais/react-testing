import "./ClassSec.css";
import React from 'react';
import StudentList from './StudentList';

export default function ClassList(props) {

 
    return (
        <>
            <div className="ClassesSection">
                <h2 className = "h2ClassList">Classes</h2>
                    
                    <button className='ClassSect'>Class 1</button>
                    <button className='ClassSect'>Class 2</button>
                    <button className='ClassSect'>Class 3</button>
                    
                    {/*<button className= 'AddCl'>+</button>*/}
<StudentList />
            </div>
            

        </>
        
    );
}