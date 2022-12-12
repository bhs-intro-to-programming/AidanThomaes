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