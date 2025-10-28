import "./index.css";
import React from 'react';
import Card from './Card';
import * as cards from '../../CardData/who-am-I/index.json';

console.log(cards.default);

export default function Player(props) {
  return(
      <div className="PlayerWrapper">
        {cards.default.map((entry, index) => <Card key={index} number={entry.folder} image={entry.contents[0]} />)}
      </div>
  );
}

