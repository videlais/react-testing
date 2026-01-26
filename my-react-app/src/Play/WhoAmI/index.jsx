import "./WhoAmI.css";
import PropTypes from 'prop-types';


export default function WhoAmI({ folder, filename }) {

  return (
    <div
      className="WhoAmIWrapper"
      style={{ backgroundImage: `url(/CardData/who-am-I/${folder}/${filename})` 
      }}

    />

  );
}
  




WhoAmI.propTypes = {
  folder: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired
};