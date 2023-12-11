
/***********************************String.prototype[@@iterator]()***************************************/
/*

    The [@@iterator]() method of String values implements the iterable protocol and allows strings to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns a string iterator object that yields the Unicode code points of the string value as individual strings.

    Syntax:
    string[Symbol.iterator]()
*/

const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') 
{
    console.log(theChar.value);
    theChar = iterator.next();

    // Expected output: "T"
    //                  "h"
    //                  "e"
}

console.log();
// Iteration using for...of loop

const str1 = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (const v of str1) {
    console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"


console.log();

// Manually hand-rolling the iterator
// You may still manually call the next() method of the returned iterator object to achieve maximum control over the iteration process.

const str2 = "A\uD835\uDC68";

const strIter = str2[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"

