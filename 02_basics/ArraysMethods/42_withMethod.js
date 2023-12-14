/***********************************Array.prototype.with()***********************************/

/*
    The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.

    Syntax:
    arrayInstance.with(index, value)
*/

// Creating a new array with a single element changed

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]


// Chaining array methods
// With the with() method, you can update a single element in an array and then apply other array methods.

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]

// Using with() on sparse arrays
// The with() method always creates a dense array.

const arr2 = [1, , 3, 4, , 6];
console.log(arr2.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]


// Calling with() on non-array objects

const arrayLike = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
    3: 3, // ignored by with() since length is 3
};
console.log(Array.prototype.with.call(arrayLike, 0, 1)); // [ 1, undefined, 4 ]