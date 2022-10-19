const countTens = (numbers) => {
  let numTens = 0;
  
    for (let x = 0; x < numbers.length; x++ ) {  
      if (numbers[x]===10) {
       numTens = numTens + 1;
      } 
    }; 
} ;

const sum = (numbers) => {
  
  if (numbers.length > 0){
    for (let x = 0; x < numbers.length; x++) {
      let add = 0;
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

const pyramid = (numbers) => {
  if (numbers.length>0) {
    for (let x = 0; x < numbers.length; x++) {
      
    }
  } else {
    return []
  }
}