const countTens = (numbers) => {
  let numTens = 0;
  if (numbers.length > 0) {
    for (let x = 0; x < numbers.length; x++ ) {  
      if (numbers[x]===10) {
       numTens = numTens + 1;
      } 
    };
  } else {
    return 0
  }; 
} ;

const sum = (numbers) => {
  let add = 0;
  if (numbers.length > 0){
    for (let x = 0; x < numbers.length; x++) {
      add = add + numbers[x]
    };
  } else {
    return 0
  };
};

const evens = (numbers) => {
  if (numbers.length > 0) {
    for (let x = 0; x < numbers.length; x++) {
      if (numbers[x]%2===0) {
        
      }
    }
  } else {
    return []
  }
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

const pyramid = numbers => {
  if (numbers.length>0) {
    for (let x = 0; x < numbers.length; x++) {
      
    }
  } return 0
}