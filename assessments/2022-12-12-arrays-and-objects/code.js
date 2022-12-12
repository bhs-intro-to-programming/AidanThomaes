const makeRow = ['', '', '']

const makeBoard = [makeRow, makeRow, makeRow]

const makeMove = (mark, row, column) => {
  return {mark, row, column}
}

const placeMark = (makeBoard, makeMove) => {
  
}

const allTheSame = (array) => {
  return array[0] === array[1] && array[1] === array[2]
}

const extractColumn = (makeBoard, i) => {
  return [makeBoard[i][0], makeBoard[i][1], makeBoard[i][2]]
}

const recordMove = (array, makeMove) => {
  let array = []
  array.push(makeMove)
}

const rowForMove = (recordMove, i) => {
  return recordMove[i].row
}