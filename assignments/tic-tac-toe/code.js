// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code

const board = () => {
  const x = 0
  let y = 0
  for (let i = 0; i < 2; i++) {
    x = i * width / 3 
    drawLine (x,0,x,height,'black')
  }  
}
board ()

let player1 = 'X';
let player2 = 'O';

let move = 0

registerOnclick((x, y) => {
  if (move % 2 === 0) {
    drawText(player1, x, y, 'black', Math.min(width, height) * 0.3);
  } else {
    drawText(player2, x, y, 'black', Math.min(width, height) * 0.3);
  }
  move++

  checkRow(y)
  checkColumn(x)
});









