
// Each new term in the Fibonaci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

//SOLUTION

testFunction = function(maxValue){

  let sum = 0;
  let previous = 0;
  let current = 1;

  while(current < maxValue){
    let temp = previous;
    previous = current;
    current = previous + temp;

    if(current % 2 === 0){
      sum += current;
    }

  }

  return sum
}

console.log(testFunction(4000000));
