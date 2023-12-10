/**********************************Array.prototype.map()*************************************/
/* 
The map() method of Array instances creates a new array populated with the results of 
    calling a provided function on every element in the calling array.

    Syntax:
    map(callbackFn)
    map(callbackFn, thisArg)

*/

console.log("Array.prototype.map()"); 
const array12 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1); // Expected output: Array [2, 8, 18, 32]


