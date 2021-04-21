const initialState = {
  gameObject: {},
  playerBoard: [],
  computerBoard: [],
  shipsPlaced: 0,
}

const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INITIAL_BOARDS':
      return {
        gameObject: payload,
        playerBoard: payload.playerBoard,
        computerBoard: payload.computerBoard
      }
    case 'UPDATE_PLAYERBOARD':
      return {
        gameObject: payload,
        playerBoard: payload.playerBoard,
        shipsPlaced: state.shipsPlaced + 1
      }
    default:
      return state;
  }
}

export default reducer;