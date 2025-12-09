import "./index.css";
import WhoAmI from './WhoAmI';
import Scenario from './Scenario';
import Player from './Player';
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
      <div className="seperate">
        <Scenario folder={currentCard.folder} filename={currentCard.contents[0]} /> {/*was the who am i instead of scenario */}
        <button className="TestNextButton" onClick={handleNext}>Next Card</button>
      </div>
      <Player />
    </div>
  );
}