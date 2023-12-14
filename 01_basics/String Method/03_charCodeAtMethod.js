/***********************************String.prototype.charCodeAt()***************************************/

/*
    The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.


    charCodeAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt().

    Syntax:
    charCodeAt(index)

*/


const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(
`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
)}`,
);
// Expected output: "Character code 113 is equal to q"


"ABC".charCodeAt(0); // returns 65
