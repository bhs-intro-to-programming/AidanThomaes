const findFnord = (s) => {
  return s.indexOf('fnord')
}

const stringContains = (s1,s2) => {
  return
}

const firstAndLast = (s) => {
  return s.substring(0,1) + s.substring(s.length-1,s.length)
}

const swapFrontAndBack = (s) => {
  return s.substring(0,Math.floor(s.length/2)) + s.substring(s.length/2)
}