import React from 'react';
import Card from './Card.js';

const CardList = props => {
  return (
    <div>
      {props.cards.map(card => (
        <Card {...card} removeCard={props.removeCard} />
      ))}
    </div>
  );
};

export default CardList;
