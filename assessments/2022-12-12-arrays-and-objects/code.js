const makeRow = ['', '', '']

const makeBoard = [makeRow, makeRow, makeRow]

const makeMove = (mark, row, column) => {
  return {mark, row, column}
}
makeMove('x',1,2);
const placeMark = (makeBoard, makeMove) => {
  makeBoard[makeMove.row, makeMove.column] = makeMove.mark
}