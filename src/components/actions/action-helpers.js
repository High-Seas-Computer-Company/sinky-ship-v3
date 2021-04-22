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

export const displayShipHorizontal = (start, direction, gameboard, shipLength) => {
  let index;
  for (let i = 0; i < gameboard.length; i++) {
    let array1 = gameboard[i];
    index = gameboard[i].indexOf(start);
    if (index === -1) { continue; }
    if (direction.toLowerCase() === 'r') {
      let temp = index;

      let checkIndex = index;
      if (index + shipLength > 10) {
        log(error('\n Not enough room. Choose a different starting position, or direction. \n'));

      } else {
        while (checkIndex < temp + shipLength) {
          if (array1[checkIndex] === '$') {
            log(error('\n Not enough room. Choose a different starting position, or direction. \n'));
            return prompt();
          }
          checkIndex++;
        }
        while (index < temp + shipLength) {
          array1[index] = '$';
          index++;
        }
        return true;
      }
    }
    else if (direction.toLowerCase() === 'l') {
      let temp = index;

      let checkIndex = index;
      if (index - shipLength < -1) {
        log(error('\n Not enough room. Choose a different starting position, or direction.\n'));

      } else {
        while (checkIndex > temp - shipLength) {
          if (array1[checkIndex] === '$') {
            log(error('\n Not enough room. Choose a different starting position, or direction. \n'));
            return prompt();
          }
          checkIndex--;
        }
        while (index > temp - shipLength) {
          array1[index] = '$';
          index--;
        }
        return true;
      }
    }
  }
}

export const displayShipDown = (start, direction, gameboard, shipLength) => {
  let index;
  let i;
  let originalRow;
  for (i = 0; i < gameboard.length; i++) {
    index = gameboard[i].indexOf(start);
    if (index === -1) { continue; }
    else {
      originalRow = i;
      break;
    }
  }

  if (direction.toLowerCase() === 'd' && originalRow + shipLength > 10) {
    log(error('\n Not enough room. Choose a different starting position, or direction.\n'));

    return prompt();
  } else if (direction.toLowerCase() === 'd') {
    for (let k = originalRow; k < (originalRow + shipLength); k++) {
      if (gameboard[k][index] === '$') {
        return prompt();
      }
    }
    for (let j = originalRow; j < (originalRow + shipLength); j++) {
      gameboard[j][index] = '$';
    }
    return true;
  }
}

export const displayShipUp = (start, direction, gameboard, shipLength) => {
  let index;
  let i;
  let originalRow;
  for (i = 0; i < gameboard.length; i++) {
    index = gameboard[i].indexOf(start);
    if (index === -1) {
      continue;
    } else {
      originalRow = i;
      break;
    }
  }


  if (direction.toLowerCase() === 'u' && originalRow - shipLength < -1) {
    log(error('\n Not enough room. Choose a different starting position, or direction.\n'));

    return prompt();
  } else if (direction.toLowerCase() === 'u') {
    for (let k = originalRow; k > (originalRow - shipLength); k--) {
      if (gameboard[k][index] === '$') {
        log(error('\n Not enough room. Choose a different starting position, or direction. \n'));
        return prompt();
      }
    }
    for (let j = originalRow; j > (originalRow - shipLength); j--) {
      gameboard[j][index] = '$';
    }
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

export const nextGuess = (payload, value) => {

  //computer guesses against human player
  // if (payload.computerGuess === 'Hit') {
  //   console.log('The computer has hit your ship!');
  // }
  // if (payload.computerGuess === 'Miss') {
  //   console.log('Good ship placement! The computer missed your sinky ship!');
  // }
  // prompt({
  //   type: 'input',
  //   name: 'attack',
  //   message: 'Please select an attack coordinate(A-J + 1-9) that has not already been hit for your cannon ball shot Example: H2',
  let boardCheck = checkBoard(payload.computerBoard, value);
  if (boardCheck.status === 'Hit') {
    payload.missileStatus = 'Hit';
    return true;
  } else if (boardCheck.status === 'Miss') {
    payload.missileStatus = 'Miss';
    return true;
  } else if (!boardCheck) {
    return console.log('board check');
  }

  if (payload.missileStatus === 'Hit') {
    console.log('HIT! YOU\'RE ON YOUR WAY TO SINKY SHIP');
  }
  if (payload.missileStatus === 'Miss') {

    console.log('MISS! YOU`LL HAVE TO AIM BETTER THAN THAT!');
  }
  sinkyShipServer.emit('response', payload);
}