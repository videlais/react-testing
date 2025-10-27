import "./index.css";
import React from 'react';
import Card from './Card';

export default function Player(props) {
  return(
    <>
      <div className="PlayerWrapper">
        <Card />
        <Card />
      </div>
    </> 
  );
}

