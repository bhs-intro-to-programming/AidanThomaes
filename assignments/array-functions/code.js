
const countTens = (numbers) =>{
  for (let x = 0; x < numbers.length; x++ ) {  
    if (numbers[x]===10) {
      return 1
    } else {
      return 0
    }
  }
} 
const s = (s) => {
  s.substring(0,s.length)
}