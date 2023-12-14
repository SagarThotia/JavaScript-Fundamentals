/***********************************String.prototype.trimStart()*********************************/
/*
    The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

    Syntax:
    trimStart()

    trimLeft()
*/

const greeting = '   Hello world!   ';

console.log(greeting); // Expected output: "   Hello world!   ";

console.log(greeting.trimStart()); // Expected output: "Hello world!   ";


console.log(String.prototype.trimLeft.name === "trimStart");



// Using trimStart()

// The following example trims whitespace from the start of str, but not from its end.

let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
