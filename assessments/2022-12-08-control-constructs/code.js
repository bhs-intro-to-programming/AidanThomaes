const yesIfEven = (n) => {
  if (n % 2 === 0) {
    return 'yes'
  }
  return 'no'
}

const countXs = (s) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (countXs === 'x') {
      count++
    }
  }
  return count
}