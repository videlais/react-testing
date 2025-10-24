import "./index.css";
import React from 'react';
import Scenario from './Scenario';
import Player from './Player';

export default function Play(props) {

    return (
        <>
           <div className="PlayWrapper">
              <Player className="yellow" />
              <Scenario />
              <Player className="blue" />
           </div>
        </>
        
    );
}

