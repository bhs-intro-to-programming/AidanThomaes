// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code

const board = () => {
  let x = 0
  let y = 0
  for (let i = 0; i < 4; i++) {
    x = (i + 1) * width / 3
    drawLine(x, 0, x, height, 'black')
  }
  for (let i = 0; i < 2; i++) {
    y = (i + 1) * height / 3
    drawLine(0, y, width, y), 'black'
  }
}
board()



let move = 0

registerOnclick((x, y) => {
  const turn = move % 2 === 0 ? 'X' : 'O';
  move++
  const row = y * hieght / 3

  drawText(turn, x, y, 'black', Math.min(width, height) / 3)
});









