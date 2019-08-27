import {CONSTANTS} from '../actions';

const initialState = [
  {
    title: '前回のあらすじ',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'reducerしようぜ',
      },
      {
        id: `card-${1}`,
        text: 'マテリアルUI使おうぜ',
      },
    ],
  },
  {
    title: '今回の話',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: '色々やろうぜ',
      },
      {
        id: `card-${3}`,
        text: 'どんどんやろうぜ',
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const listID = `list-${state.length}`;
      const newList = {
        title: action.payload,
        cards: [],
        id: listID,
      };
      return [...state, newList];
    case CONSTANTS.ADD_CARD: {
      const cardID = `card=${state.reduce ((total, elm) => total + elm.cards.length, 0)}`;
      const newCard = {
        text: action.payload.text,
        id: cardID,
      };

      const newState = state.map (list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type,
      } = action.payload;
      const newState = [...state];

      // dragging lists around
      if (type === 'list') {
        const list = newState.splice (droppableIndexStart, 1);
        newState.splice (droppableIdEnd, 0, ...list);
        return newState;
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find (list => droppableIdStart === list.id);
        const card = list.cards.splice (droppableIndexStart, 1);
        list.cards.splice (droppableIndexEnd, 0, ...card);
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where drag happend
        const listStart = state.find (list => droppableIdStart === list.id);

        // pull out the card from the list
        const card = listStart.cards.splice (droppableIndexStart, 1);

        // find the list where darg ended
        const listEnd = state.find (list => droppableIdEnd === list.id);

        // put the card in new list
        listEnd.cards.splice (droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
