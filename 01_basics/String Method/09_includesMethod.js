/***********************************String.prototype.includes()*************************************/
/*
    The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

    Syntax:
    includes(searchString)
    includes(searchString, position)

*/


const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
    `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
} in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"


"Blue Whale".includes("blue"); // returns false

"Blue Whale".toLowerCase().includes("blue"); // returns true


const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true

