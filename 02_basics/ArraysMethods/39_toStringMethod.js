/***********************************Array.prototype.toString()***********************************/
/* 
    The toString() method of Array instances returns a string representing the specified array and its elements.

    Syntax: 
    toString()
*/



const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// Expected output: "1,2,a,1a"


const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

  console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9
