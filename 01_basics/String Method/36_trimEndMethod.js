/***********************************String.prototype.trimEnd()*********************************/
/*
    The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

    Syntax:
    trimEnd()

    trimRight()
*/

const greeting = '   Hello world!   ';

console.log(greeting);  // Expected output: "   Hello world!   ";

console.log(greeting.trimEnd()); // Expected output: "   Hello world!";


console.log(String.prototype.trimRight.name === "trimEnd"); // true

let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
