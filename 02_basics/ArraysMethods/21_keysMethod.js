
/**********************************Array.prototype.keys()*************************************/
/*

    The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

    Syntax
    keys()
*/
console.log("Array.prototype.keys()");
const array11 = ['a', 'b', 'c'];
const iterator = array11.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2


// Examples
// Using keys() on sparse arrays
// Unlike Object.keys(), which only includes keys that actually exist in the array, the keys() iterator doesn't ignore holes representing missing properties.

const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]


// Calling keys() on non-array objects
// The keys() method reads the length property of this and then yields all integer indices between 0 and length - 1. No index access actually happens.

const arrayLike = {
    length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
    console.log(entry);
}
// 0
// 1
// 2