import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import {Droppable} from 'react-beautiful-dnd';

const TrelloList = ({title, cards, listID}) => {
  return (
    <Droppable droppableId={String (listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={style.container}
        >
          <h4>{title}</h4>
          {cards.map ((card, index) => (
            <TrelloCard
              key={card.id}
              text={card.text}
              id={card.id}
              index={index}
            />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
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
