import "./index.css";
import Card from './Card';
import {useState} from 'react';
import * as cards from '../../CardData/role/index.json';

export default function Player(props) {

// Define state for this component.
// We will pass this to the child, Card.
const [selectedCards, setSelectedCards] = useState([]);

// As cards are "selected", we update the array.
const handleCardChange = (cardImage, isChecked) => {
    
    if (isChecked) {
        // Only allow selection if we haven't reached the limit of 3
        if (selectedCards.length < 3) {
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
                  disabled={!selectedCards.includes(entry.image) && selectedCards.length >= 3}
                  onChange={(e) => handleCardChange(entry.image, e.target.checked)} 
                  />)
            }
          </ul>
          <div className="clear"></div>
          <div><strong>Selected</strong>
            <ul>
              {
                selectedCards.map(entry => <li key={entry}>{entry.slice(0, -4)}</li>)
              }
            </ul>
          </div>
        </div>    
      </div>
  );
}

