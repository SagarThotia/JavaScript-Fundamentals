/***********************************String.prototype.startsWith()*************************************/
/*
    The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

    Syntax:
    startsWith(searchString)
    startsWith(searchString, position)

*/

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat')); // Expected output: true

console.log(str1.startsWith('Sat', 3)); // Expected output: false



const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true
