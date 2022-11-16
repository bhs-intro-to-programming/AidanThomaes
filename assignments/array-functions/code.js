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
    add = add + array[i]
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
  for (let i = 0; i < n + 1; i++) {
    for (let x = 0; x < i + 1; x++) {
      if (x > 0) {
        list.push(i, x)
      } else {
        list.push(i)
      }
    }
  }
  return list
}