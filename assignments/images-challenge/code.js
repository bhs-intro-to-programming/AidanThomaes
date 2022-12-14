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

const pattern = (n) => {
  let d = width
  while (d < 0) {
    drawFilledCircle (width/2, height/2, d, 'red')
    drawFilledCircle (width/2, height/2, d, 'blue')
    d = d - 1 
  }

}


const drawConcentricCircles = (n) => {
  let x = n;
  let y = width / n;
  let z = width / n;
  while (n < width) {
    drawFilledCircle (width/2, height/2, width/2 - y + z, 'red');
    drawFilledCircle (width/2, height/2, width/2 - y + z - Math.floor(z/2), 'blue');
    n = n + x;
    y = y + z;
  };
};
drawConcentricCircles ();

const drawCheckerBoard = (n) => {
  let s = width / n
  let y = s
  let x = n
  while (n < width) {
    drawRect (0 + y - s,0 + y - s,s + y,s)
    n = n + x
    y = y + s
    
  } 


}
drawCheckerBoard (8);