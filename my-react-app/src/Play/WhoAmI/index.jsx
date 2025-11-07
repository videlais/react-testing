import "./index.css";
import React from 'react';
import PropTypes from 'prop-types';


export default function WhoAmI({ folder, filename }) {
  const imagePath = new URL(`../../../CardData/who-am-I/${folder}/${filename}`, import.meta.url).href;

  return (
    
    <div
      className="WhoAmIWrapper"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className="CardLabel">Card {folder}</div>
    </div>
  );
}

WhoAmI.propTypes = {
  folder: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired
};