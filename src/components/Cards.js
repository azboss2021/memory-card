import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import CharacterJSON from '../Characters.json';

const Cards = ({ numberOfCards, cards, setCards, score, setScore }) => {
  const [seenCards, setSeenCards] = useState([]);
  const [currentCard, setCurrentCard] = useState('');

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
        newSet.push(newItem);
      }
      seen.push(rand);
    }

    setCards([...newSet]);
  }, []);

  useEffect(() => {
    document.querySelector('#score').textContent = score;
    console.log(score);
  }, [score]);

  useEffect(() => {
    console.log(seenCards);
  }, [seenCards]);

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

  const HandleClick = (id) => {
    setSeenCards((current) => [...current, id]);
    setCards([...FisherYatesShuffle(cards)]);
    if (seenCards.includes(id)) {
      setScore(0);
      setSeenCards([]);
      setCards([...FisherYatesShuffle(cards)]);
      return;
    } else {
      setScore(score + 1);
    }
  };

  return (
    <>
      <div id="cards">
        {cards.map((card) => {
          return (
            <div
              id={card.id}
              key={card.id}
              className="card"
              onClick={(e) => HandleClick(e.target.id)}
            >
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
      <div>{seenCards}</div>
    </>
  );
};

export default Cards;
