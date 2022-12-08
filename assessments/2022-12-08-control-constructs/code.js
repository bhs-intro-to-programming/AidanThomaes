const emit = (a, b) => console.log(a + ', ' + b);

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

const timesTable = (n) => {
  for (let x = 0; x < n; x++) {
    
  }
}

const containsX = (s) => {
  for (let i = 0; i < s.length; i++) {
    return s[i] === 'x'
  }
}