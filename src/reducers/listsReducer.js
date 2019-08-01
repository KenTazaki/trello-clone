const initialState = [
  {
    title: "前回のあらすじ",
    id: 0,
    cards: [
      {
        id: 0,
        text: "reducerしようぜ"
      },
      {
        id: 1,
        text: "マテリアルUI使おうぜ"
      }
    ]
  },
  {
    title: "今回の話",
    id: 1,
    cards: [
      {
        id: 0,
        text: "色々やろうぜ"
      },
      {
        id: 1,
        text: "どんどんやろうぜ"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default listsReducer;
