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
  while (n < 300) {
    drawCircle (width/2, height/2, width/2 - n)
    
    n = n + 50
  }
}
drawConcentricCircles (50)

/*
const drawCheckerBoard = (n) => {
  let x = width
  let y = height
  let w = x / n
  let h = x / n
  
    while (x < width - n) {
      drawRect (x + width / n, y / 2, w, h)
      x = x + 1
    }
  

}
drawCheckerBoard (8)
*/