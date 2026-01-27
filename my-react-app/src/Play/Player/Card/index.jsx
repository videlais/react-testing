import "./PlayerCard.css";
import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <li>
            <label aria-label={`Select ${props.image}`}>
                <input
                    type="checkbox"
                    checked={props.checked || false}
                    onChange={props.onChange}
                    value={props.image}
                    className="card-checkbox"
                    style={{
                        backgroundImage: `url(/CardData/role/${props.image})`
                    }}
                />
            </label>
        </li>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};