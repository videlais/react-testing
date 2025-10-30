import "./index.css";
import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <img src={`/CardData/role/${props.image}`} alt="Placeholder card" className="CardWrapper" />   
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired
};