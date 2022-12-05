const upToX = (s) => {
  return s.substring(0, s.indexOf('x'))
}

const charactersAround = (s, i) => {
  return s[i - 1] + s[i + 1]
}

const middle = (s) => {
  return s.substring(s.length / 4, s.length * 3 / 4)
}

const pair = (s1, s2) => {
  return s1 + ' ' + 'and' + ' ' + s2
}

const containsX = (s) => {
  return s.indexOf('x') > 0
}

const slug = (s1, s2, s3) => {
  return s1.toLowerCase() + '-' + s2.toLowerCase() + '-' + s3.toLowerCase()
}