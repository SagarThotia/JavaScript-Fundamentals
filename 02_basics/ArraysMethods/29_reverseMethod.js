/***********************************Array.prototype.reverse()*****************************************/
/*
    The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

    To reverse the elements in an array without mutating the original array, use toReversed().

    Syntax:
    reverse()

    Parameters
    None.

    Return value
    The reference to the original array, now reversed. Note that the array is reversed in place, and no copy is made.

*/


const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed); // Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1); // Expected output: "array1:" Array ["three", "two", "one"]

