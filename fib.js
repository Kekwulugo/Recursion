function fibonacci (num){
  let array = [0,1];
  for (let i = 2; i < num; i++ ){
    array[i] = array[i-1] + array [i-2];    
  }
  return array;
}

function fibonacciRecurse(num){
  if (num <= 0){
    return 0;
  } else if (num === 1){
    return [0,1];
  } else {
    let fibSeq = fibonacciRecurse(num - 1);
    fibSeq.push((fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length - 2]));
    return fibSeq;
  }
  
}


console.log(fibonacciRecurse(8));
console.log(fibonacci(8));
