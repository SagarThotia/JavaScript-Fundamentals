/**********************************Array.prototype.lastIndexOf()*************************************/
/*
The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

    Syntax
    lastIndexOf(searchElement)  
    lastIndexOf(searchElement, fromIndex)
*/
console.log("Array.prototype.lastIndexOf()");
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo')); // Expected output: 3

console.log(animals.lastIndexOf('Tiger')); // Expected output: 1

// Using lastIndexOf()
// The following example uses lastIndexOf() to locate values in an array.

const numbers1 = [2, 5, 9, 2];
numbers1.lastIndexOf(2); // 3
numbers1.lastIndexOf(7); // -1
numbers1.lastIndexOf(2, 3); // 3
numbers1.lastIndexOf(2, 2); // 0
numbers1.lastIndexOf(2, -2); // 0
numbers1.lastIndexOf(2, -1); // 3

/*
    You cannot use lastIndexOf() to search for NaN.

    const array = [NaN];
    array.lastIndexOf(NaN); // -1
*/

// Finding all the occurrences of an element
// The following example uses lastIndexOf to find all the indices of an element in a given array, using push() to add them to another array as they are found.const indices = [];

const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.lastIndexOf(element);
while (idx !== -1) {
    indices.push(idx);
    idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}
console.log(indices); // [4, 2, 0]


// Using lastIndexOf() on sparse arrays
// You cannot use lastIndexOf() to search for empty slots in sparse arrays.
console.log([1, , 3].lastIndexOf(undefined)); // -1


// Calling lastIndexOf() on non-array objects
// The lastIndexOf() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.
const arrayLike1 = {
    length: 3,
    0: 2,
    1: 3,
    2: 2,
    3: 5, // ignored by lastIndexOf() since length is 3
};
console.log(Array.prototype.lastIndexOf.call(arrayLike1, 2)); // 2
console.log(Array.prototype.lastIndexOf.call(arrayLike1, 5)); // -1