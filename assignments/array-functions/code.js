const countTens = 0
const count = (numbers) =>{
  for (let x = 0; x < numbers.length; x++ ) {  
    if (numbers[x]===10) {
      return count + 1
    } 
  }
} 
