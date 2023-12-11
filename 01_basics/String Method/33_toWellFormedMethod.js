/***********************************String.prototype.toWellFormed()*********************************/
/*
    The toWellFormed() method of String values returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.

    Syntax:
    toWellFormed()

*/


const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.toWellFormed());
  }
  // Logs:
  // "ab�"
  // "ab�c"
  // "�ab"
  // "c�ab"
  // "abc"
  // "ab😄c"






//   Avoiding errors in encodeURI()

// encodeURI throws an error if the string passed is not well-formed. This can be avoided by using toWellFormed() to convert the string to a well-formed string first.


const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

console.log(encodeURI(illFormed.toWellFormed())); // "https://example.com/search?q=%EF%BF%BD"

