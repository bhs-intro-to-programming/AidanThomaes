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