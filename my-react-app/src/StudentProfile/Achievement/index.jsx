import "./index.css";
import React from 'react';

export default function Achievement(props) {

 
    return (
        <>
            <div className="AchievementSect">
                <h2 className = "h2Achieve">Achievements</h2>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                    <p>Time code: [time code]</p>
                </div>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                    <p>Time code: [time code]</p>
                </div>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                    <p>Time code: [time code]</p>
                </div>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                    <p>Time code: [time code]</p>
                </div>
                <div className="Achievements">
                    <img src="src/assets/achievementStar.svg" alt="Rounded 5 star shape."></img>
                    <h3>[achievement name]</h3>
                    <p>Time code: [time code]</p>
                </div>
                
                <p className="pAchieve">Challenge yourself to collect all of the achievements!</p>
            </div>

        </>
        
    );
}