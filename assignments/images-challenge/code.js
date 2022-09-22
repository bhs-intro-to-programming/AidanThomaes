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



const drawCircleLine = (radius) => {
  let diameter = radius * 2
  let x = 0;
  while (x * diameter < width - radius) {
    drawFilledCircle (0 + radius + x, height/2, radius, 'red');
    x = x + diameter;
  }
}
drawCircleLine ()




const drawAltLine = (radius) => {
  let diameter = radius * 2
  let x = 0
  while (x < width - diameter) {
    drawFilledCircle (0 + radius + x * 2, height/2, radius, 'red')
    x = x + diameter
  }
  let y = 0
  while (y < width - diameter) {
    drawFilledCircle (0 + radius * 3 + y * 2, height/2, radius, 'blue')
    y = y + diameter
  }
}
drawAltLine ()

const drawConcentricCircle = (radius) => {

}