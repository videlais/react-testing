import "./index.css";
import React from 'react';

export default function Achievement(props) {

 
    return (
        <>
            <div className="AchievementSect">
                <h2 className = "h2Achieve">Achievements</h2> {/*I'm having issues with how the stars below grow when hovered over, it screws with the margins, and I don't remember how to fx it/can't find it online either.*/}
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                </div>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                </div>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                </div>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                </div>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                </div>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                </div>
                
                <p className="pAchieve">Challenge yourself to collect all of the achievements!</p>
            </div>

        </>
        
    );
}