import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="tile col-md-3" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt= { props.name } src= { props.image } />
    </div>
  </div>
);

export default GameCard;