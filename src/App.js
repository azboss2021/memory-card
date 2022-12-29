import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Score from './components/Score';

function App() {
  const [score, setScore] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(14);
  const [cards, setCards] = useState([]);

  return (
    <>
      <Score score={score} />
      <Cards
        numberOfCards={numberOfCards}
        cards={cards}
        setCards={setCards}
        score={score}
        setScore={setScore}
      />
    </>
  );
}

export default App;
