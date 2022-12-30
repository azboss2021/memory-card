import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import CharacterJSON from '../Characters.json';

const Cards = ({ numberOfCards, cards, setCards, score, setScore }) => {
  useEffect(() => {
    setCards([]);
    const chars = CharacterJSON;
    let newSet = [];
    let seen = [];

    for (let i = 0; i < numberOfCards; i++) {
      const rand = Math.floor(Math.random() * chars.length);
      if (seen.includes(rand)) {
        i--;
        continue;
      } else {
        const newItem = chars[rand];
        newItem.id = uniqid();
        newItem.clicked = false;
        newSet.push(newItem);
      }
      seen.push(rand);
    }

    setCards([...newSet]);
  }, []);

  const FisherYatesShuffle = (arr) => {
    let m = arr.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }

    return arr;
  };

  return (
    <>
      <div id="cards">
        {cards.map((card) => {
          return (
            <div id={card.id} key={card.id} className="card">
              <img
                src={require('../images/' + card.img)}
                alt={card.name}
                width="64px"
                height="64px"
              ></img>
              <div className="card_name">
                {card.name}, {card.id}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
