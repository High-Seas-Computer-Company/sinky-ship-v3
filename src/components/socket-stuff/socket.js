import socketIO from 'socket.io-client';
const serverUrl = 'https://sinky-ship.herokuapp.com/sinky-ship';

const socket = socketIO(serverUrl, {
  transports: ['websocket'],
  jsonp: false
});

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
  socket.emit('new-game');
}

export const setup1Listener = (store) => {
  return (

    socket.on('game-setup1', payload => {
      console.log('setup1');
      // useDispatch(gameStart(payload));
      // console.log('state', state.gameboards);
    })
    )
  }

export const setup2Listener = (store) => {
  return (
    socket.on('game-setup2', payload => console.log('setup2', payload))
  )
}

export const setup3Listener = (store) => {
  return (
    socket.on('game-setup3', payload => console.log('setup3', payload))
  )
}

export const setup4Listener = (store) => {
  return (
    socket.on('game-setup4', payload => console.log('setup4', payload))
  )
}

export const setup5Listener = (store) => {
  return (
    socket.on('game-setup5', payload => console.log('setup5', payload))
  )
}

export const guessListener = (store) => {
  socket.on('guess', payload => console.log('guess', payload));
}

export const gameOverListener = (store) => {
  socket.on('game-over', payload => console.log('gamve-over', payload));
}

