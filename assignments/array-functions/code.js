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
  let list = [];
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x]%2===0) {
      list.push(numbers[x])
    }
  }
  return list
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
  let list =[];
  for (let x = 0; x < numbers.length; x++) {
    for (let y = 0; y < x; y++)
      list.push(numbers(x))
  }
  return list
}