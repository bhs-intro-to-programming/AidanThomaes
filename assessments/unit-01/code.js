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

const canSleepIn = (isWeekday, onVacation) => {
  isWeekday = false
  onVacation = true
  return canSleepIn (!isWeekday || onVacation)
}
const canGoToProm = (isSenior, isInvited, isExcluded) => {
  isSenior = true
  isInvited = true
  isExcluded = false
  return canGoToProm (isSenior || isInvited &&! isExcluded)
}
const getsSpeedingTicket = (s, isGrouchy) => {
  isGrouchy = true
  
}


const aFartherThanB = (x,y,z) => {
  a = Math.abs(x-z)
  b = Math.abs(y-z)
  if (a > b) {
    a = true
  } else {
    a = false
  }
}
const firstHalf = (s) => s.substring(0,Math.floor(length/2))
const secondHalf = (s) => s.substring (Math.floor(length/2), length)
const upDown = (s) => s[0]+s.toUpperCase+s.substring(0,length)
const