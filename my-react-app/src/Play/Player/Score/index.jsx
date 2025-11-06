import "./index.css";


export default function Score(props) {
    return (
        <>
            <div className="ScoreWrapper">
                <img className= "scorePFP" src="src/assets/CollaboratePFPicon.svg" alt= "A blank profile picture icon"></img>
                <p className="scoreName">[$StudentName]</p>
                <p className="scoreNum">[$Score]</p>
            </div>
        </>
    );
}