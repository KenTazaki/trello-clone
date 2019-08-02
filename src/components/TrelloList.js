import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const TrelloList = ({title, cards}) => {
  return (
    <div style={style.container}>
      <h4>{title}</h4>
      {cards.map (card => <TrelloCard key={card.id} text={card.text} />)}
      <TrelloActionButton />
    </div>
  );
};

const style = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRedius: 3,
    width: 300,
    height: '100%',
    padding: 8,
    marginRight: 8,
  },
};

export default TrelloList;
