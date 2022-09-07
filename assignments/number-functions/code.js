const add = (x1,x2) => (x1+x2)

const subtract = (x1,x2) => (x1-x2)

const multiply = (x1,x2) => (x1*x2)

const divide = (x1,x2) => (x1/x2)

const mod = (x1,x2) => (x1%x2)

const averageOfTwo = (x1,x2) => ((x1+x2)/2)

const averageOfThree = (x1,x2,x3) => ((x1+x2+x3)/3)

const distance = (x1,x2) => (Math.abs(x1-x2))

const manhattanDistance = (x1,y1,x2,y2) => {
return distance(x1,x2) + distance(y1,y2)
}

const euclideanDistance = (x1,y1,x2,y2) => (Math.sqrt(Math.abs(x1-x2)**2)+Math.abs(y1-y2)**2)