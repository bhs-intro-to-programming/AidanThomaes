const countTens = (numbers) =>{
  if (numbers.length > 0) {
    for (let x = 0; x < numbers.length; x++ ) {  
      if (numbers[x]===10) {
       countTens++
      } 
    }
  } else {
    return 0
  } 
} 
