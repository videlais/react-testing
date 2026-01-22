import "./index.css";
import PropTypes from 'prop-types';

export default function Card({ image, checked, onChange, interactive = true }) {
    return (
        <li className={interactive ? "" : "non-interactive"}>
            {interactive ? (
                <label aria-label={`Select ${image}`}>
                    <input
                        type="checkbox"
                        checked={checked || false}
                        onChange={onChange}
                        value={image}
                        className="card-checkbox"
                        style={{
                            backgroundImage: `url(/CardData/role/${image})`
                        }}
                    />
                </label>
            ) : (
                <div
                    className="card-back"
                    style={{
                        backgroundImage: `url(/CardData/card-backs/${image})`
                    }}
                />
            )}
        </li>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    interactive: PropTypes.bool
};
