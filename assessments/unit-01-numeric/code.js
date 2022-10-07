// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (numPeople,numItems) => (numItems/numPeople)

const areaOfCircle = (r) => (Math.PI*r**2)

const volumeOfCube = (s) => (s**3)

const populationGrowth = (popSize,growthRate) => (popSize*growthRate)

const earnedRunAverage = (earnedRuns,numInnings) => ((earnedRuns/numInnings)*9)

const valueOfJewels = (numDiamonds,numEmeralds,valueDiamond,valueEmerald) => {
  return ((numDiamonds*valueDiamond)+(numEmeralds*valueEmerald))
}

const payWithOvertime = (numHours,hourlyPay,overtimePay) => {
  return ((hourlyPay*8)+(overtimePay*(numHours-8)))
}

const firstClassPostage = (letterWeight) => {
  return (60 + (Math.ceil(letterWeight)-1)*24)
}