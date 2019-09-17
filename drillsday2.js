'use strict' 

function max(numbers) {
  let maxNumber = numbers[0];
  let i = 0;
  while(i < numbers.length) {
    if(numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
    i++;
  }
  return maxNumber;
}

function min(numbers) {
  let minNumber = numbers[0];
  let i = 0;
  while(i < numbers.length) {
    if(numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
    i++;
  }
  return minNumber;
}

function average(numbers) {
  let total = 0;
  numbers.forEach(y => (total += y));
  let numAvg = total / numbers.length;
  console.log(numAvg);
}
average([1,2,3,4,5]);
  
function repeat(fn,n) {
  for(let i = 0; i <= n; i++){
    fn();
  }
}
function hello(){
  console.log('Hello Word');
}
function goodbye(){
  console.log('Goodbye world');
}

console.log(repeat(hello,5));