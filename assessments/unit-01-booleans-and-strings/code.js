/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (alarmPulled,smokeDetected,plannedDrill) => {
  return (alarmPulled||smokeDetected||plannedDrill)
}

const canBePresident = (age,naturalCitizen,yearsInUS) => {
  if (age >= 35) {
    return (age&&naturalCitizen&&yearsInUS)
  }
}

const willSeeTweet = (followTweeter,followRetweeter,blockedTweeter) => {
  return ((followTweeter||followRetweeter)&&!blockedTweeter)
}

const evenGreaterThanZero = (number) => {
  if (number>0) {
    if (number%2 === 0) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

const isLeapYear = (year) => {
  if (year%4===0) {
    if (year%100===0) {
      if (year%400===0) {
        return true
      }
    } else {
      return false
    }
  } else {
    return true
  }
}

const firstAndLast = (s) => {
  return s[0]+s.substring(s.length-1,s.length)
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length/2,s.length)+s.substring(0,s.length/2)
}

const simplePigLatin = (s) => {
  return s.substring(s.search[/aeiou/],s.length) + s.substring(0,s.search[/aeiou/]) + 'ay'
}

