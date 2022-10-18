const countTens = (numbers) =>{
  if (numbers.length > 0) {
    for (let x = 0; x < numbers.length; x=x+1 ) {  
      if (numbers[x]===10) {
       return 0+1
      } 
    }
  } else {
    return 0
  } 
} 
