/***********************************String.prototype.endsWith()***************************************/
/*
    The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

    Syntax:
    endsWith(searchString)
    endsWith(searchString, endPosition)

*/

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!')); // Expected output: true

console.log(str1.endsWith('best', 17)); // Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question')); // Expected output: false

console.log()

const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
