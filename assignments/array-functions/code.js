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
  let adding = 0
  if (numbers.length > 0){
    for (let x = 0; x < numbers.length; x++) {
      adding = adding + numbers[x]
    }
  } else {
    return 0
  }
}