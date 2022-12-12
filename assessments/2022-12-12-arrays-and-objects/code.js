const makeRow = ['', '', '']

const makeBoard = [makeRow, makeRow, makeRow]

const makeMove = (mark, row, column) => {
  return {mark, row, column}
}

let board = makeBoard
let move = makeMove('X', 1, 1);

const placeMark = (makeBoard, makeMove) => {
  makeBoard[makeMove.row, makeMove.column] = makeMove.mark
}
placeMark(board, move);
