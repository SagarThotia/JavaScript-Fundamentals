/***********************************Array.prototype.reduceRightMethod()**********************************/
/*
    The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

    See also Array.prototype.reduce() for left-to-right.

    Syntax:
    reduceRight(callbackFn)
    reduceRight(callbackFn, initialValue)

    Parameters

    callbackFn
    
    A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduceRight(). The function is called with the following arguments:

    accumulator
    
    The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is the last element of the array.

    currentValue
    
    The value of the current element. On the first call, its value is the last element if initialValue is specified; otherwise its value is the second-to-last element.

    currentIndex
    
    The index position of currentValue in the array. On the first call, its value is array.length - 1 if initialValue is specified, otherwise array.length - 2.

    array
    
    The array reduceRight() was called upon.

    initialValue Optional

    Value to use as accumulator to the first call of the callbackFn. If no initial value is supplied, the last element in the array will be used and skipped. Calling reduceRight() on an empty array without an initial value creates a TypeError.

    Return value
    
    The value that results from the reduction.

*/

const array1 = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
);

console.log(result); // Expected output: Array [4, 5, 2, 3, 0, 1]