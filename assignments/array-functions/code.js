const countTens = (array) => {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
      count++
    }
  }
  return count
}

const sum = (array) => {
  let add = 0
  for (let i = 0; i < array.length; i++) {
    add += array[i]
  }
  return add
}

const evens = (array) => {
  let list = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      list.push(array[i])
    }
  }
  return list
}

const anyOverOneHundred = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      return true
    }
  }
  return false
}

const pyramid = (n) => {
  let list = []
  for (let x = 0; x < n + 1; x++) {
    for (let y = 0; y < x; y++) {
      list.push(x)
    }
  }
  return list
}