import "./index.css";
import Card from './Card';
import * as cards from '../../CardData/role/index.json';

export default function Player(props) {
  return(
      <div className="PlayerWrapper">

          {cards.default.map((entry) => <Card 
            key={entry.number} 
            number={entry.number} 
            image={entry.image} />)}
            
      </div>
  );
}

