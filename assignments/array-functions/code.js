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

const adding = (numbers) => {
  let sum = 0
  if (numbers.length > 0){
    for (let x = 0; x < numbers.length; x++) {
      sum = sum + numbers[x]
    }
  } else {
    return 0
  }
}