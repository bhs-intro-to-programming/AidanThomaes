let numTens = 0
const countTens = (numbers) => {
  if (numbers.length > 0) {
    for (let x = 0; x < numbers.length; x++ ) {  
      if (numbers[x]===10) {
       
      } 
    }
  } else {
    return 0
  } 
} 

const sum = (numbers) => {
  if (numbers.length > 0){
    for (let x = 0; x < numbers.length; x++) {
      return numbers[numbers.length -1 - x]
    }
  } else {
    return 0
  }
}