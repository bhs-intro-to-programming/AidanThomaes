const countTens = (numbers) => {
  let numtens = 0;
  for (let i = 0; i < numbers.length; i++ ) {  
    if (numbers[i]===10) {
     numtens++
    } 
  }; 
  return numtens
} ;

const sum = (numbers) => {
  let add = 0
  for (let i = 0; i < numbers.length; i++) {
    add = add + numbers[i]
  };
  return add
};

const evens = (numbers) => {
  let list = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2===0) {
      list.push(numbers[i])
    }
  }
  return list
}

const anyOverOneHundred = (numbers) => {
  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i]>100) {
        return true
      }
    }
    return false
  } else {
    return false
  }
}

const pyramid = (n) => {
  let list = [];
  for (let i = 0; i < n.length; i++) {
    for (let x = 0; x < i; x++) {
      list.pushn[i]
    }  
  }
  return list
}