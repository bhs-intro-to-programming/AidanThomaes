const needHeavyCoat = (goingOutside, cold) => {
  return goingOutside && cold
}

const needSunscreen = (goingToBeach, goingSkiing) => {
  return goingToBeach || goingSkiing
}

const needMittens = (goingOutside, warm) => {
  return goingOutside && !warm
}

const isVenomous = (striped, blueHead) => {
  return striped || !blueHead
}

const okaySpeed = (speedLimit, speed) => {
  return (speedLimit - 10 < speed) && (speedLimit + 10 > speed)
}

const twiceAsExpensive = (price1, price2) => {
  return price1 * 2 > price2
}

const winningRecord = (wins, losses, ties) => {
  let totalGames = wins + losses + ties
  return wins > totalGames / 2
}

const isMagicNumber = (n) => {
  // 42 is the meaning of life from The Hitchhikers Guide to the Galaxy
  // your birthday is on the 17th? not sure
  return n === 42 || n === 17
}