// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code

drawLine(width / 3, 0, width / 3, height)
drawLine(width / 1.5, 0, width / 1.5, height)
drawLine(0, height / 3, width, height / 3)
drawLine(0, height / 1.5, width, height / 1.5)

let player1 = 'X';
let player2 = 'O';

registerOnclick((x, y) => {
  turn(x, y)
  checkRow(y)
  checkColumn(x)
});

const turn = (x, y) => {

  drawText(player1, x, y, 'black', Math.min(width, height) * 0.3);
  
  drawText(player2, x, y, 'black', Math.min(width, height) * 0.3);
  
}

const board = ([], [], [])

const returnBoard = (n) => {
  board.push(3,3['s'])
  return board
} 

const checkRow = (y) => {
  if (y < height / 3) {
    return 1;
  } else if (y < height / 1.5) {
    return 2;
  } else {
    return 3;
  };
};

const checkColumn = (x) => {
  if (x < width / 3) {
    return 1;
  } else if (x < width / 1.5) {
    return 2;
  } else {
    return 3;
  };
}

const fillBoard = (board, checkRow, checkColumn) => {
  board.push(checkRow, checkColumn[turn]);
  return board;
};
