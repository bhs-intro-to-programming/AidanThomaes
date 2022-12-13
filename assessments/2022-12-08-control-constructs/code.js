const emit = (a, b, c) => console.log(a + ', ' + b + ', ' + c);

const yesIfEven = (n) => {
  if (n % 2 === 0) {
    return 'yes'
  }
  return 'no'
}

const countXs = (s) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x') {
      count++
    }
  }
  return count
}

//a little scuffed, kind of works
const timesTable = (n) => {
  for (let x = 1; x <= n; x++) {
    for(let y = 1; y <= n; y++) {
      emit(x, y, x*y)
    }
  }
}

const containsX = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x'){
      return true
    }
  }
  return false
}

const sumSquares = (n) => {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += i**2
  }
  return sum
}