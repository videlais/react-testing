import "./Score.css";


export default function Score(props) {
    return (
        <>
            <div className="UpScoreWrapper">
                <img className= "scorePFP" src="src/assets/profilePictures/CollaborateBlankIcon.svg" alt= "A blank profile picture icon"></img>
                <p className="scoreName">[$StudentName]</p>
                <p className="scoreNum">[$Score]</p>
            </div>
        </>
    );
}