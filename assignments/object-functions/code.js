const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { x, y }
}

const emptyObject = (object) => {
  return {}
}

const distance = (object1, object2) => {
  return Math.sqrt((object1.x - object2.x) ** 2 + (object1.y - object2.y) ** 2)
}

const midpoint = (object1, object2) => {
  return { x: (object1.x + object2.x) / 2, y: (object1.y + object2.y) / 2 }
}

const sumSalaries = (array) => {
  let add = 0
  for (let i = 0; i < array.length; i++) {
    add += array[i].salary
  }
  return add
}

const newHighScore = (currentHighScore,array) => {
  let compare = currentHighScore
  for (let i = 0; i < array.length; i++) {
    if (compare < array[i].score) {
    compare = array[i].score
    }
  }
  return compare
}

const summarizeBooks = (array) => {
  totalPages = 0
  for (let i = 0; i < array.length; i++) {
    totalPages += array[i].pages
  }
  return totalPages
}