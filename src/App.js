import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import CardList from './CardList';

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  const handleRemoveCard = url => {
    setCards(cards.filter(card => card.avatar_url !== url));
  };

  useEffect(() => console.log(cards));
  return (
    <div className="App">
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} removeCard={handleRemoveCard} />
    </div>
  );
};

export default App;
