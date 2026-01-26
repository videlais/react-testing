import "./Scenario.css";
import PropTypes from 'prop-types';


export default function Scenario(props) {

    return (
        <>
            <label aria-label={`Select ${props.image}`}>
                <input
                    className="ScenarioWrapper"
                    style={{
                        backgroundImage: `url(/CardData/scenario/${props.image})`
                    }}
                />
            </label>
        </>
        
    );
}

Scenario.propTypes = {
  image: PropTypes.string.isRequired,
};