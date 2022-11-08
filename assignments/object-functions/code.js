const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { 'x': x, 'y': y }
}

const emptyObject = (object) => {
  return {}
}

const distance = (object1, object2) => {
  return Math.sqrt((object1.x - object2.x) ** 2 + (object1.y - object2.y) ** 2)
}

const midpoint = (object1, object2) => {
  let x = (object1.x + object2.x) / 2
  let y = (object1.y + object2.y) / 2
  return { 'x': x, 'y': y }
}

const sumSalaries = (object) => {
  return object[0]
}