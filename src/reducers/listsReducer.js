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
    case CONSTANTS.ADD_CARD:
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
    default:
      return state;
  }
};

export default listsReducer;
