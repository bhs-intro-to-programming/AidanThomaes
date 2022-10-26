// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const averageWeight = (w, n) => (w/n)
const hypotenuse = (a, b) => (Math.sqrt (a ** 2 + b ** 2))
const maxRadius = (w, h) => (Math.min (w, h)/2)
const numCircles = (r,w) => (Math.min (w / r * 2))

const canSleepIn = (isWeekday, onVacation) => {
  return !isWeekday || onVacation
}
const canGoToProm = (isSenior, isInvited, isExcluded) => {
  return (isSenior || isInvited) &&! isExcluded
}
const getsSpeedingTicket = (s, isGrouchy) => {
  
  
}


const aFartherThanB = (a,b,c) => {
  return (Math.abs(a-c) > Math.abs(b-c)) 
}
const firstHalf = (s) => s.substring(0,Math.floor(s.length/2))
const secondHalf = (s) => s.substring (Math.floor(s.length/2), s.length)
const upDown = (s) => s[0]+s.toUpperCase+s.substring(0,s.length)


const yesIfEven = (x) => {
  
}