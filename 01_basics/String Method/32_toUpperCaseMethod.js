/***********************************String.prototype.toUpperCase()*********************************/
/*
    The toUpperCase() method of String values returns this string converted to uppercase.

    Syntax:
    toUpperCase()

*/

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase()); // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


const a = String.prototype.toUpperCase.call({
    toString() {
      return "abcdef";
    },
  });
  
  const b = String.prototype.toUpperCase.call(true);
  
  // prints out 'ABCDEF TRUE'.
  console.log(a, b);
  