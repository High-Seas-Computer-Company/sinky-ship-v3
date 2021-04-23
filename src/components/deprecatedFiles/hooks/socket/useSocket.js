// import socketIO from 'socket.io-client';
// const serverUrl = 'https://sinky-ship.herokuapp.com/sinky-ship';

// const socket = socketIO(serverUrl, {
//   transports: ['websocket'],
//   jsonp: false
// });

// export const startSocketIO = (store) => {
//   socket.connect();
//   socket.on('connect', () => {
//     console.log('connected to the server');
//   });
//   socket.on('disconnect', () => {
//     console.log('connection to server lost.');
//   });
// }

// export const startGame = (store) => {
//   socket.on('game-setup1', payload => console.log(payload));
//   socket.emit('new-game');
// }

