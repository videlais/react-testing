import "./index.css";
import React from 'react';
import Scenario from './Scenario';
import Player from './Player';
import PlayerUp from "./PlayerUp";
import PlayerLeft from "./PlayerLeft";
import PlayerRight from "./PlayerRight";

export default function Play(props) {

    return (
        <>
           <div className="PlayWrapper">
              {/*<PlayerUp />
                <div style={{ display: 'flex', gap: '100px' }}>
                    <div style={{ flex: 1}}><PlayerLeft /></div>*/}
                    <div style={{ flex: 1}}><Scenario /></div>
                    {/*<div style={{ flex: 1}}><PlayerRight /></div>
                </div>*/}
              <Player />
           </div>
        </>
        
    );
}

