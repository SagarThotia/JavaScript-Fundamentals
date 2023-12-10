/***********************************Array.prototype.findIndex()*****************************************/
/*
    The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
    
    Syntax : This syntax for everyone
    findIndex(callbackFn)
    findIndex(callbackFn, thisArg)
    callback(element index array)

    element :
    The current element being processed in the array.

    index:
    The index of the current element being processed in the array.

    array:
    The array findIndex() was called upon.

    thisArg Optional
    A value to use as this when executing callbackFn

    Return value
    The index of the first element in the array that passes the test. Otherwise,

*/
const array7 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber)); // Expected output: 3
