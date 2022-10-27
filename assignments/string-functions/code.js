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
  return s.substring(s.length/2) + s.substring(0,Math.floor(s.length/2))
}

const simplePigLatin = (s,firstVowel) => {
  return s.substring(firstVowel) + s.substring(0,firstVowel) + 'ay'
}

const isAllUpperCase = (s) => {
  return s === s.toUpperCase()
}

const sameIgnoringCase = (s1,s2) => {
  return s1.toLowerCase === s2.toLowerCase
}

const firstHalf = (s) => {
  return s.substring(0,Math.floor(s.length/2))
}

const secondHalf = (s) => {
  return s.substring(s.length/2)
}

const upDown = (s) => {
  return s.substring(0).toUpperCase() + s.substring(0).toLowerCase()
}

const everyOther = (s) => {
  return s[0] + s[2] + s[4]
}

const upDownLastCharacter = (s) => {
  
}