// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code

drawLine (width/3,0,width/3,height)
drawLine (width/1.5,0,width/1.5,height)
drawLine (0,height/3,width,height/3)
drawLine (0,height/1.5,width,height/1.5)

const turn = () => {
  for (let n = 0; n < 10; n++) {
    if (n % 2 === 0) {
      registerOnclick((x, y) => {
        drawText('X', x, y, 'black', Math.min(width, height) * 0.3);
      });
    } else {
      registerOnclick((x, y) => {
        drawText('O', x, y, 'black', Math.min(width, height) * 0.3);
      });
    }
  } 
}

let ticTacToe = [
  ['','','']
  ['','','']
  ['','','']
]

const detect

