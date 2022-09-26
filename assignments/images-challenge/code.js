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



const drawCircleLine = (r) => {
  let d = r * 2;
  const numCircles = Math.floor(width / d);
  for (let n = 0; n < numCircles; n++) {
    const x = r + d * n;
    drawFilledCircle (x, height/2, r, 'red');
  };
};
drawCircleLine ();




const drawAltLine = (r) => {
  let d = r * 2;
  const numCircles = Math.floor(width / d);
  for (let n = 0; n < numCircles; n++) {
    const x = r + d * 2 * n;
    drawFilledCircle (x, height/2, r, 'red');
    drawFilledCircle (x + 2 * r, height/2, r, 'blue')
  };
};
drawAltLine ();

const drawConcentricCircle = (n) => {
  for (let d = width; d > 0; d = d - n) {
    drawCircle (width/2, height/2, d /2, 'red')
  }
  for (let d = width - n * 5; d > 0; d = d - n ** 2) {
    drawCircle (width/2, height/2, d/2, 'blue')
  }
}
drawConcentricCircle (10)
