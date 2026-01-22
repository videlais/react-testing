import "./index.css";
import Card from './Card';
import PropTypes from 'prop-types';
import cards from '../../CardData/role/index.json';
import backs from '../../CardData/card-backs/index.json';
import Score from "./Score";

export default function PlayerRight() {

  const selectedBack = backs.find(b => b.id === "green") || backs[0];

  return (
    <div className="PlayerRightWrapper">

      <div className="scoreSec">
        <Score />
      </div>

      <div className="playingCards">
        <ul className="hand">
          {cards.map(entry => (
            <Card
              key={entry.number}
              number={entry.number}
              image={selectedBack.image}
              interactive={false}
            />
          ))}
        </ul>

        <div className="clear"></div>
      </div>

    </div>
  );
}

PlayerRight.propTypes = {
  mode: PropTypes.string,
  backColor: PropTypes.string
};
