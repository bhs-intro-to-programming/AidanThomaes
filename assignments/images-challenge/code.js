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
let radius = 10
let diameter = radius * 2
let x = 0;
while (x < width - radius ) {
  drawFilledCircle (0 + radius + x, height/2, radius , 'red');
  x = x + diameter;
};
*/

let radius = 10
let diameter = radius * 2
let x = 0
while (x < width - radius) {
  drawFilledCircle (0 + diameter + x, height/2, radius, 'red')
  drawFilledCircle (0 + diameter + radius + x, height/2, radius, 'blue')
  x = x + diameter
}

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

/*
let n = 0;
while (n < 4) {
  drawFilledRect (50 + (100 * n), 100, 50, 50, 'red');
  drawFilledRect (100 + (100 * n), 150, 50, 50);
  drawFilledRect (50 + (100 * n), 200, 50, 50);
  drawFilledRect (100 + (100 * n), 250, 50, 50);
  drawFilledRect (50 + (100 * n), 300, 50, 50);
  drawFilledRect (100 + (100 * n), 350, 50, 50);
  drawFilledRect (50 + (100 * n), 400, 50, 50);
  drawFilledRect (100 + (100 * n), 450, 50, 50);

  drawFilledRect (50, 100 + 100 * n)

  drawFilledRect (100 + (100 * n), 100, 50, 50, 'blue');
  drawFilledRect (50 + (100 * n), 150, 50, 50);
  drawFilledRect (100 + (100 * n), 200, 50, 50,);
  drawFilledRect (50 + (100 * n), 250, 50, 50);
  drawFilledRect (100 + (100 * n), 300, 50, 50,);
  drawFilledRect (50 + (100 * n), 350, 50, 50);
  drawFilledRect (100 + (100 * n), 400, 50, 50,);
  drawFilledRect (50 + (100 * n), 450, 50, 50);
  
  n = n + 1;
};

*/
