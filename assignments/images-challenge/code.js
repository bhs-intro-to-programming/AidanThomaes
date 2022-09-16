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


let x = 10; 
while (x < 500) {
  drawFilledCircle (0 + x, 300, 10, 'red');
  x = x + 40;
};

let y = 30;
while (y < 500) {
  drawFilledCircle (0 + y, 300, 10, 'blue');
  y = y+40;
};
*/
/*
let x = 50;
while (x < 300) {
  drawCircle (250, 300, 288 - x, 'red', 25);
  x = x + 50;
};

let y = 50
while (y < 300) {
  drawCircle (250, 300, 263 - y, 'blue', 25);
  y = y + 50;
};
*/

let n = 0
while (n < 4) {
  drawRect (50 + (100 * n), 100, 50, 50, 'red');
  drawRect (100 + (100 * n), 150, 50, 50)
  n = n + 1;
};

