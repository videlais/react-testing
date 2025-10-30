import "./index.css";
import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <div className="playingCards">

            <ul className="hand">
                <li>
                        <img className="card" src={`/CardData/role/${props.image}`} alt="Playing card" />
                </li>
            </ul>
            <div className="clear"></div>

        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired
};