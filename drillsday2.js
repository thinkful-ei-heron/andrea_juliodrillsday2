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

function filter(arr, fn) {
  let arry = [];
  for (let i=0; i< arr.length; i++) {
    if(fn(arr[i]) === true){
      arry.push (arr[i]);
    };
    
  }
  return arry;
  // TASK: Define your function here
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
  }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const codingUpAhead = hazardWarningCreator('Coding challenges up ahead!');
const snowIncoming = hazardWarningCreator('Slippery roads up ahead!');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

hazardWarningCreator(codingUpAhead);



const array = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];


function keep (movement) {
  return movement [0] >= 0 && movement[1] >= 0
}

let correctDirection = array.filter (keep);
  
function add (movement) {
  return movement [0] + movement [1];
}
let totalSteps = correctDirection.map (add);

function log (distance) {
  console.log(distance)
}
totalSteps.forEach (log);
// let counter=1 
// totalSteps.forEach (step => { 
//   console.log(`Movement # ${counter}: ${distance} step(s)`); 
//   counter++;
// });