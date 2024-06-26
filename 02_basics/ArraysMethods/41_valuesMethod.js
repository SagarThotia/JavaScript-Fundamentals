/***********************************Array.prototype.unshift()***********************************/
/*
    The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.

    Syntax:
    values()

*/


const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
    console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
