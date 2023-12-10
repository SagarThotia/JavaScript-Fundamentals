/***********************************Array.prototype.toSpliced()***********************************/
/*
    The toSpliced() method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.

    Syntax:
    toSpliced(start)
    toSpliced(start, deleteCount)
    toSpliced(start, deleteCount, item1)
    toSpliced(start, deleteCount, item1, item2)
    toSpliced(start, deleteCount, item1, item2, itemN)
*/

const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]


// Using toSpliced() on sparse arrays
// The toSpliced() method always creates a dense array.

const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]



// Calling toSpliced() on non-array objects
// The toSpliced() method reads the length property of this. It then reads the integer-keyed properties needed and writes them into the new array.

const arrayLike = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
};
console.log(Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3));
  // [2, 3, undefined, 4]