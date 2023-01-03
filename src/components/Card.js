import React from "react";

const Card = ({ card, handleClick }) => {
  return (
    <div id={card.id} className="card" onClick={(e) => handleClick(card.id)}>
      <img
        src={require("../images/" + card.img)}
        alt={card.name}
        className="character_images"
      ></img>
    </div>
  );
};

export default Card;
