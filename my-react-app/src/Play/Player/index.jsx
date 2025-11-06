import "./index.css";
import Card from './Card';
import {useState} from 'react';
import PropTypes from 'prop-types';
import * as cards from '../../CardData/role/index.json';
import Score from "./Score";

export default function Player(props) {

// Track the card maximum.
let maximumCards = 1;

// Check which mode we are in
// - Who I am? - Select 1 card
// - Scenario - Select 3 cards
// Default is 1 selection

  if(props.mode == "multiplayer") {
    maximumCards = 3;
  }

  // Define state for this component.
  // We will pass this to the child, Card.
  const [selectedCards, setSelectedCards] = useState([]);

  // As cards are "selected", we update the array.
  const handleCardChange = (cardImage, isChecked) => {
      
    if (isChecked) {
        // Only allow selection if we haven't reached the limit
        if (selectedCards.length < maximumCards) {
            setSelectedCards([...selectedCards, cardImage]);
        }
        // If we're at the limit, the checkbox will remain unchecked (no state change)
    } else {
        // Always allow deselection regardless of current count
        setSelectedCards(selectedCards.filter(card => card !== cardImage));
    }
  };

  return(
      <div className="PlayerWrapper">
        <div className="playingCards">
          <ul className="hand">
            {
              cards.default.map((entry) => 
                <Card 
                  key={entry.number} 
                  number={entry.number} 
                  image={entry.image}
                  checked={selectedCards.includes(entry.image)}
                  disabled={!selectedCards.includes(entry.image) && selectedCards.length >= maximumCards}
                  onChange={(e) => handleCardChange(entry.image, e.target.checked)} 
                  />)
            }
          </ul>
          <div className="clear"></div>
          <div className="test"><strong>Selected:</strong>
            <ul>
              {
                selectedCards.map(entry => <li key={entry}>{entry.slice(0, -4)}</li>)
              }
            </ul>
          </div>
        </div>   

        <div className="scoreSec">
          <Score />
        </div>

      </div>
  );
}

Player.propTypes = {
  mode: PropTypes.string
};

