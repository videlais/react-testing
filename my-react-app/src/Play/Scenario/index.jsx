import "./index.css";
import React from 'react';


export default function Scenario(props) {

    return (
        <>
            <label aria-label={`Select ${props.image}`}>
                <input
                    className="ScenarioWrapper"
                    style={{
                        backgroundImage: `url(/CardData/scenario/${props.image})`
                    }}
                />
            </label>
        </>
        
    );
}

