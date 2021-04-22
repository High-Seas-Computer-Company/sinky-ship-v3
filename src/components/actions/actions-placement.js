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