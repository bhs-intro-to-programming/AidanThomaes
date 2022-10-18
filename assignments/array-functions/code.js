
const countTens = (numbers) =>{
  if (numbers.length>0) {
    for (let x = 0; x < numbers.length; x++ ) {  
      if (numbers[x]===10) {
        return 1
      } else {
        return 0
      }
    }
  } else {
    return 0
  } 
} 
