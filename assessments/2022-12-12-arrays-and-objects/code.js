const makeRow = ['', '', '']

const makeBoard = [makeRow, makeRow, makeRow]

const makeMove = (mark, row, column) => {
  return {mark, row, column}
}


const placeMark = (makeBoard, makeMove) => {
  makeBoard[makeMove.row, makeMove.column] = makeMove.mark
}

let board = makeBoard();
let move = makeMove('X', 1, 1);
placeMark(board, move);