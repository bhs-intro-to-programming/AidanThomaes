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
  while (x * diameter + diameter < width) {
    drawFilledCircle (0 + radius + (x * diameter), height/2, radius, 'red');
    x = x + 1;
  }
}
drawCircleLine ()




const drawAltLine = (radius) => {
  let diameter = radius * 2
  let x = 0
  while (x * diameter + radius * 90 < width) {
    drawFilledCircle (0 + radius + (x * diameter * 2), height/2, radius, 'red')
    x = x + 1
  }
  let y = 0
  while (y * diameter + diameter < width) {
    drawFilledCircle (0 + (radius * 3) + (y * diameter * 2), height/2, radius, 'blue')
    y = y + 1
  }
}
drawAltLine (20)

const drawConcentricCircle = (radius) => {

}