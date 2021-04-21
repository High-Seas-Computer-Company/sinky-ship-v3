import socketIO from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { gameStart, shipSetup } from '../../store/gameboard.slice.js';

const serverUrl = 'https://sinky-ship.herokuapp.com/sinky-ship';

const socket = socketIO(serverUrl, {
  transports: ['websocket'],
  jsonp: false
});

let gameboardInfo = useSelector(state => state.gameboards);
let dispatch = useDispatch();

export const startSocketIO = (store) => {
  socket.connect();
  socket.on('connect', () => {
    console.log('connected to the server');
  });
  socket.on('disconnect', () => {
    console.log('connection to server lost.');
  });
}

export const startGame = (store) => {
  socket.on('game-setup1', payload => {
    dispatch(gameStart(payload));
  });
  socket.emit('new-game');
}

