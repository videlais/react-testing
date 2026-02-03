import "./Play.css";
import WhoAmI from './WhoAmI';
import Scenario from './Scenario';
import Player from './Player';
import PlayerUp from './PlayerUp'; import PlayerRight from './PlayerRight'; import PlayerLeft from './PlayerLeft';
import Timer from './Timer';
import Score from './Score';
import cards from '../CardData/who-am-I/index.json';
import React, { useState } from "react";

export default function Play() {
  const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

     const currentCard = cards[currentIndex];

  return (
    <div className="PlayWrapper">
      <Score />
      <Timer />
      <div>
        <Scenario folder={currentCard.folder} filename={currentCard.contents[0]} /> {/*was the who am i instead of scenario 
        <button className="TestNextButton" onClick={handleNext}>Next Card</button>*/}
      </div>
      
      <PlayerUp />
      <PlayerLeft />
      <PlayerRight />

      <Player />
      
    </div>
  );
}