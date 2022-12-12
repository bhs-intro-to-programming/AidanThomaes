const makeRow = ['', '', '']

const makeBoard = [makeRow, makeRow, makeRow]

const makeMove = (mark, row, column) => {
  return {mark, row, column}
}

let board = makeBoard
let move = makeMove('X', 1, 1);
const placeMark = (board, move) => {
  board[makeMove.row][makeMove.column] = move.mark
}

const allTheSame = (array) => {
  return array[0] === array[1] && array[1] === array[2]
}

const extractColumn = (makeBoard, i) => {
  return [makeBoard[i][0], makeBoard[i][1], makeBoard[i][2]]
}

let moves = []
const recordMove = (moves, makeMove) => {
  moves.push(makeMove)
}

const rowForMove = (recordMove, i) => {
  return recordMove[i].row
}

