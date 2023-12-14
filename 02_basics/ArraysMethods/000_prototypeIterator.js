/***********************************Array.prototype[@@iterator]()****************************************/
/*
    The [@@iterator]() method of Array instances implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the array.

    The initial value of this property is the same function object as the initial value of the Array.prototype.values property.

    Syntax:
    array[Symbol.iterator]()
    
*/

const array1 = ['a', 'b', 'c'];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
    console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
