const countTens = (numbers) => {
  let numtens = 0;
  for (let x = 0; x < numbers.length; x++ ) {  
    if (numbers[x]===10) {
     numtens++
    } 
  }; 
  return numtens
} ;

const sum = (numbers) => {
  let add = 0
  for (let x = 0; x < numbers.length; x++) {
    add = add + numbers[x]
  };
  return add
};

const evens = (numbers) => {
  let output = [];
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x]%2===0) {
      output.push(numbers[x])
    }
  }
  return output
}

const anyOverOneHundred = (numbers) => {
  if (numbers.length > 0) {
    for (let x = 0; x < numbers.length; x++) {
      if (numbers[x]>100) {
        return true
      }
    }
    return false
  } else {
    return false
  }
}

const pyramid = (numbers) => {
  
  for (let x = 0; x < numbers.length; x++) {
      
  }
  
}