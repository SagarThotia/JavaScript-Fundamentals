
/**********************************Array.from()*****************************************/
/*
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

    Syntax
    Array.from(arrayLike)
    Array.from(arrayLike, mapFn)
    Array.from(arrayLike, mapFn, thisArg)

    arrayLike

    An iterable or array-like object to convert to an array.

    mapFn Optional

    A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead. 
    
    The function is called with the following arguments:

    element
    The current element being processed in the array.

    index
    The index of the current element being processed in the array.

    thisArg Optional
    Value to use as this when executing mapFn.

    Return value
    A new Array instance.


*/      
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

