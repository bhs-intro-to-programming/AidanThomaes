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
  for (let x = 0; x < numbers.length; x++) {
    return []
  }
}

const anyOverOneHundred = (numbers) => {
  for (let x = 0; x < numbers.length; x++) {
    return (numbers[x]>100)
  }
}

const pyramid = (numbers) => {
  if (numbers.length>0) {
    for (let x = 0; x < numbers.length; x++) {
      
    }
  } else {
    return []
  }
}