// This is an example of a function definition. This function is called by the
// underlying animation framework thanks to the call to animate below. This
// function is responsible for drawing one frame of the animation. You can
// change the code in here using the same functions you had in the simple
// drawing exercise to draw shapes. The argument to this function, time, is the
// number of milliseconds (one millionth of a second) since the program started.
const drawFrame = (time) => {
  //clear();
  //drawFilledCircle((time / 5) % width, height / 2, 5, );
  //drawFilledCircle((time / 3) % width, height/2 , time/100000, );
  //drawFallingTriangle(time / 10, 1000000/time);
  //drawFallingTriangle((time / 10) % width, 1000000/time);
  //drawFallingTriangle(100000/time, time/5);
  //drawFallingTriangle(100000/time, time/3);
  //drawFilledCircle(1000000/time % width , time/10 % height, 2);
  //drawFallingTriangle(1000000/time,10000000/time);
  //drawFilledCircle(time/10 % height, 1000000/time % width, 2)
  //drawFallingTriangle(Math.sin(time/500)*1000, time/20)
  //drawFallingTriangle(time/50, Math.sin(time/500)*1500)
  //drawFallingTriangle(Math.sin(time/50)*1000,Math.sin(time/500)*2000)
  //drawFilledCircle(Math.tan(time/1000)**2, Math.tan(time)**2, 1,1)
  
};

// This is a function that we define to make it easier to draw a triangle. You
// may want to experiment with writing your own functions using this one as a
// model to draw other shapes.


// This draws a falling trangle of a particular shape whose bottom point is
// positioned at x and whose y is a function of time.
const drawFallingTriangle = (x, time) => {
  // Figure out the x values relative to the passed in x
  let x1 = x-10 ;
  let x2 = x;
  let x3 = x+10;

  // Figure out the y values as a function of time.
  let y1 = (time / 4) % height;
  let y2 = y1 /1.1;
  let y3 = y1 *1.1;

  // Actually draw the triangle.
  drawTriangle(x1, y1, x2, y2, x3, y3, 3);
};

// Leave this code here or the animation won't run. Also don't change the name
// of drawFrame either here or where it is defined. (Or, if you must, change it
// the same way in both places.)
animate(drawFrame);
