import React from "react";
import Card from "./Card";

const Cards = ({ cards, handleClick }) => {
  return (
    <div id="cards">
      {cards.map((card) => {
        return <Card card={card} key={card.id} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default Cards;
