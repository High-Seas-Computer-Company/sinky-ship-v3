import { initialCoordinateCheck, displayShipHorizontal, displayShipDown, displayShipUp } from './action-helpers.js';

export const initialBoards = (payload) => ({
  type: 'INITIAL_BOARDS',
  payload: payload
});

export const updatePlayerBoard = (payload) => ({
  type: 'UPDATE_PLAYERBOARD',
  payload: payload
});

// Sockets

export const loadNewGameboards = (socket) => {
  return (dispatch) => {
    socket.on('game-setup1', (payload) => {
      dispatch(initialBoards(payload));
    });
  };
};

export const startNewGame = (socket) => {
  return (dispatch) => {
    socket.emit('new-game');
  };
};

// Ship Setup

export const shipPlacement = (payload, ship, touchEntry) => {
  return (dispatch) => {
    payload.shipSetup = {};
    if(!initialCoordinateCheck(payload.playerBoard, touchEntry)) {
      console.log('Insert try again prompt, alert, modal here'); // placeholder
    }
    payload.shipSetup.coordinate = touchEntry; // now added to payload as a nested property

  };
};

export const shipDirection = (payload, ship, touchEntry) => {
  return (dispatch) => {
    if (touchEntry === 'l' || touchEntry === 'r') {
      return displayShipHorizontal(payload.shipSetup.coordinate, touchEntry, payload.playerBoard.size, ship.hitCounter);
    }
    if (touchEntry === 'd') {
      return displayShipDown(payload.shipSetup.coordinate, touchEntry, payload.playerBoard.size, ship.hitCounter);
    }
    if (touchEntry === 'u') {
      return displayShipUp(payload.shipSetup.coordinate, touchEntry, payload.playerBoard.size, ship.hitCounter);
    }
    payload.shipSetup.direction = touchEntry;

    dispatch(updatePlayerBoard(payload));

    socket.emit(`setup-complete${shipsPlaced +1}`, payload);
  };
};

