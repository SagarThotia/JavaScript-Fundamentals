/***********************************Array.prototype.every()*****************************************/
/*
The every() method of Array instances tests whether all elements in the array pass the 
test implemented by the provided function. It returns a Boolean value.
*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const array4 = [1, 30, 39, 29, 10, 13];

console.log(array4.every(isBelowThreshold)); // Expected output: true

