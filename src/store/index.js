import { configureStore } from '@reduxjs/toolkit';
import GameboardReducer from './gameboard.slice.js';

let reducers = {
  gameboard: GameboardReducer,
};

const store = configureStore({ reducer: reducers });

export default store;