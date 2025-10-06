import "./index.css";
import React from 'react';

export default function Achievement(props) {

 
    return (
        <>
            <div className="Achievement">
                <h2 className = "h2Achieve">Achievements</h2> {/*I'm having issues with how the stars below grow when hovered over, it screws with the margins, and I don't remember how to fx it/can't find it online either.*/}
                <img className="sixths" src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                <img className="sixths" src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                <img className="sixths" src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                <img className="sixths" src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                <img className="sixths" src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                <img className="sixths" src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                <p className="pAchieve">Challenge yourself to collect all of the achievements!</p>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, eveniet. Sunt a nam error recusandae magni quas modi quidem. Suscipit laborum dolore placeat cumque repudiandae delectus sed id corporis. Accusamus nostrum placeat error iure officia laboriosam fugiat vero quisquam harum obcaecati quibusdam, modi ab fugit cupiditate esse quaerat. Consectetur, autem.</p>
        </>
        
    );
}