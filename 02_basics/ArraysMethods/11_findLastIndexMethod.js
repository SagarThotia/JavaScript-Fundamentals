/**********************************Array.prototype.findLastIndex()*************************************/
/*
The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
*/  
const array9 = [5, 12, 50, 130, 44];

const isLargeNumber1 = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber)); // Expected output: 3
// Index of element with value: 130

