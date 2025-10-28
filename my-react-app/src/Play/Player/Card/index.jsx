import "./index.css";
import React from 'react';

export default function Card(props) {
    return (
        <>
            <img src={"../../CardData/who-am-I/" + props.number + "/" + props.image} alt="Placeholder card" className="CardWrapper" />   
        </>
    );
}