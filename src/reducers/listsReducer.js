import {CONSTANTS} from '../actions';

const initialState = [
  {
    title: '前回のあらすじ',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'reducerしようぜ',
      },
      {
        id: 1,
        text: 'マテリアルUI使おうぜ',
      },
    ],
  },
  {
    title: '今回の話',
    id: 1,
    cards: [
      {
        id: 0,
        text: '色々やろうぜ',
      },
      {
        id: 1,
        text: 'どんどんやろうぜ',
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const listID = state.length;
      const newList = {
        title: action.payload,
        cards: [],
        id: listID,
      };
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const cardID = state.find (list => list.id === action.payload.listID)
        .cards.length;
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
