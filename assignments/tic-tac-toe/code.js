// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code

const board = () => {
  let x = 0
  let y = 0
  for (let i = 0; i < 2; i++) {
    x = (i + 1) * width / 3
    drawLine(x, 0, x, height, 'black')
  }
  for (let i = 0; i < 2; i++) {
    y = (i + 1) * height / 3
    drawLine(0, y, width, y), 'black'
  }
}
board()


let row = 0
let column = 0
let turn = 0

registerOnclick((x, y) => {
  if (y < height / 3) {
    row = 1
  } else if (height / 3 < y && y < height / 1.5) {
    row = 2
  } else {
    row = 3
  }
  
  if (x < width / 3) {
    column = 1
  } else if (width / 3 < x && x < width / 1.5) {
    column = 2
  } else {
    column = 3
  }
  

  const marker = turn % 2 === 0 ? 'X' : 'O'
  turn++

  drawText(marker, column * (width / (3 * (.5 * column))) , row * (height / 3), 'black', Math.min(width, height) / 3)

  const boardRow = ['', '', '']
  const fullBoard = [boardRow, boardRow, boardRow]
  const move = (row, column, marker) => {
    return { row, column, marker }
  }

  const placeMove = (move, fullBoard) => {
    fullboard[move.row][move.column] = move.marker

  }



});









