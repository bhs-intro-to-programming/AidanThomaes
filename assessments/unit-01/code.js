// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const averageWeight = (w, n) => (w/n)
const hypotenuse = (a, b) => (Math.sqrt(a ** 2 + b ** 2))
const maxRadius = (w, h) => (Math.min (w, h)/2)
const numCircles = (r,w) => (w / r)
const offset = (w, f)
const canSleepIn = (weekday, vacation) => {
  weekday = false
  vacation = true
  return canSleepIn (!weekday || vacation)
}