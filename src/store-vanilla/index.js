import { createStore, combineReducers } from 'redux';
import gameboards from './gameboards.js';

let reducer = combineReducers({gameboards});

const store = createStore(reducer);

export default store;
