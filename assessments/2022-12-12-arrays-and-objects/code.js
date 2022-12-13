const makeRow = ['', '', '']

const makeBoard = [makeRow, makeRow, makeRow]

const makeMove = (mark, row, column) => {
  return {mark, row, column}
}

let board = makeBoard
let move = makeMove();
const placeMark = (board, move) => {
  board[move.row][move.column] = move.mark
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

