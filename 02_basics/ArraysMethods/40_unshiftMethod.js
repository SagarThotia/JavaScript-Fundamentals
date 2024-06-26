/***********************************Array.prototype.unshift()***********************************/
/*
    The unshift() method of Array instances adds the specified elements to the beginning of an array 
    and returns the new length of the array.

    Syntax:
    unshift()
    unshift(element1)
    unshift(element1, element2)
    unshift(element1, element2, elementN)
*/

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
