import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Score from "./components/Score";
import Characters from "./Characters.json";
import uniqid from "uniqid";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [seenCards, setSeenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setCards(shuffle(generateCards(20)).slice(0, 12));
  }, []);

  const generateCards = (numOfCards) => {
    const arr = [];

    for (let i = 0; i < numOfCards; i++) {
      const name = Characters[i].name;
      const img = Characters[i].img;
      const id = uniqid();
      arr.push({ name, img, id });
    }

    return arr;
  };

  const shuffle = (arr) => {
    return [...arr].sort(() => 0.5 - Math.random());
  };

  const handleClick = (id) => {
    if (seenCards.includes(id)) {
      setScore(0);
      setSeenCards([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setSeenCards((current) => [...current, id]);
      if (newScore > bestScore) setBestScore(newScore);
    }
    setCards(shuffle(cards));
  };

  return (
    <div id="App">
      <Score score={score} bestScore={bestScore} />
      <Cards cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
