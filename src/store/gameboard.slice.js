import { createSlice } from '@reduxjs/toolkit';


const gameboardSlice = createSlice({
  name: 'gameboards',
  initialState: {
    playerBoard: [],
    computerBoard: [],
  },
  reducers: {
    gameStart(state, action) {
      state.playerBoard = action.payload.playerBoard;
      state.computerBoard = action.payload.computerBoard;
    },
    shipSetup(state, action) {

    },
  }

});

export const { gameStart, shipSetup } = gameboardSlice.actions;

export default gameboardSlice.reducer;