/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */



/*
let x = 10;
while (x < 500) {
  drawFilledCircle (0 + x, 300, 10, 'red');
  x = x + 20;
};
*/

let x = 10; 
while (x < 500) {
  drawFilledCircle (0 + x, 300, 10, 'red');
  drawFilledCircle (0 + x, 300, 10, 'blue');
  x = x + 40;
};




//drawCircle (250, 300, 250 - x, 'red', 25)
//drawCircle (250, 300, 225 - x, 'blue', 25)