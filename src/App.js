import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';

function App() {
  const [numberOfCards, setNumberOfCards] = useState(12);

  return (
    <>
      <Cards numberOfCards={numberOfCards} />
    </>
  );
}

export default App;
