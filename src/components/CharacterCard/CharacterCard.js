import React from "react";
//import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card" onClick={() => props.testSelected(props.id)}>
    <img className="cardImgTop" alt={props.name} src={props.image} />
  </div>
);

export default CharacterCard;
