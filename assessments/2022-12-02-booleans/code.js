const needHeavyCoat = (goingOutside, cold) => {
  return goingOutside && cold
}

const needSunscreen = (goingToBeach, goingSkiing) => {
  return goingToBeach || goingSkiing
}

const needMittens = (goingOutside, warm) => {
  return goingOutside &&! warm
}

const isVenomous = (striped, blueHead) => {
  return striped ||! blueHead
}

const okaySpeed = (n1, n2) => {
  return (n1 - 10 < n2) && (n1 + 10 > n2)
}