import { Alert } from 'react-native';


export const initialCoordinateCheck = (board, value) => {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let verticalCoordLetter = value.substring(0, 1).toUpperCase();
  let verticalCoordNumber = letters.indexOf(verticalCoordLetter);
  let horizontalCoord = Number(value.substring(1, 2));
  if (board.size[verticalCoordNumber][horizontalCoord] === '$') {
    log(error('\n Ship already at this coordinate location, choose again\n'));
    return false;
  }
  else {
    return true;
  }
}

function checkBoard(board, value) {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let verticalCoordLetter = value.substring(0, 1).toUpperCase();
  let verticalCoordNumber = letters.indexOf(verticalCoordLetter);
  let horizontalCoord = Number(value.substring(1, 2));
  if (board.size[verticalCoordNumber][horizontalCoord] === 'X' || board.size[verticalCoordNumber][horizontalCoord] === 'O') {
    //log(error('\n That coordinate has already been chosen! \n'));
    return false;
  }
  else if (board.size[verticalCoordNumber][horizontalCoord] === '$') {
    board.size[verticalCoordNumber][horizontalCoord] = 'X';
    return { status: 'Hit' };
  } else {
    board.size[verticalCoordNumber][horizontalCoord] = 'O';
    return { status: 'Miss' };
  }
}

export const nextGuess = (payload, value, displayBox, responseSocket) => {

  // computer guesses against human player
  if (payload.computerGuess === 'Hit') {
    console.log(`The computer has hit one of your ships!`);
  }
  if (payload.computerGuess === 'Miss') {
    console.log('The computer missed your sinky ships!');
  }


  let boardCheck = checkBoard(payload.computerBoard, value);
  if (boardCheck.status === 'Hit') {
    console.log('Hitty-Hit');
    payload.displayBoard[displayBox].value = 'red';
    payload.missileStatus = 'Hitty Hit';
    console.log('HIT! YOU\'RE ON YOUR WAY TO SINKY SHIP');
    responseSocket.emit('response', payload);
    // return true;
  } else if (boardCheck.status === 'Miss') {
    console.log('Missy-Miss');
    payload.displayBoard[displayBox].value = 'white';
    payload.missileStatus = 'Missy Miss';
    console.log('MISS! YOU`LL HAVE TO AIM BETTER THAN THAT!');
    responseSocket.emit('response', payload);
    // return true;
  } else if (!boardCheck) {
    return console.log('Try again');
  }

}