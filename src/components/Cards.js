import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import CharacterJSON from '../Characters.json';

const Cards = ({ numberOfCards }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const chars = CharacterJSON;
    let alreadySeen = [];

    for (let i = 0; i < numberOfCards; i++) {
      const rand = Math.floor(Math.random() * chars.length);
      if (alreadySeen.includes(rand)) {
        i--;
        continue;
      } else {
        const newItem = chars[rand];
        setCards((current) => [...current, newItem]);
      }
      alreadySeen.push(rand);
    }
  }, []);

  return (
    <div>
      {cards.map((card) => {
        return (
          <div key={uniqid()}>
            <img
              src={require('../images/' + card.img)}
              alt={card.name}
              width="64px"
              height="64px"
            ></img>
            {card.name}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
