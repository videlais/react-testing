import "./PlayerLeft.css";
import Card from './Card';
import PropTypes from 'prop-types';
import cards from '../../CardData/role/index.json';
import backs from '../../CardData/card-backs/index.json';
import Score from "./Score";

export default function PlayerLeft() {

  const selectedBack = backs.find(b => b.id === "blue") || backs[0];

  return (
    <div className="PlayerLeftWrapper">

      <div className="scoreSec LeftScoreSec">
        <Score />
      </div>

      <div className="OtherPlayingCards">
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

PlayerLeft.propTypes = {
  mode: PropTypes.string,
  backColor: PropTypes.string
};
