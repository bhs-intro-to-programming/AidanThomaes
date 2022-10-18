const countTens = (numbers) =>{
  if (numbers.length > 0) {
    for (let x = 0; x < numbers.length; x++ ) {  
      if (numbers[x]===10) {
        let numTens = 0
        return numTens + 1
      } 
    }
  } else {
    return 0
  } 
} 
