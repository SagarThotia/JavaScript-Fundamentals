/***********************************String.prototype.isWellFormed()*************************************/
/*

    The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.

    Syntax:
    isWellFormed()
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
    console.log(str.isWellFormed());
  }
  // Logs:
  // false
  // false
  // false
  // false
  // true
  // true





//   Avoiding errors in encodeURI()
//   encodeURI throws an error if the string passed is not well-formed. This can be avoided by using    isWellFormed() to test the string before passing it to encodeURI().


// const illFormed = "https://example.com/search?q=\uD800";

// try {
//   encodeURI(illFormed);
// } catch (e) {
//   console.log(e); // URIError: URI malformed
// }

// if (illFormed.isWellFormed()) {
//   console.log(encodeURI(illFormed));
// } else {
//   console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
// }
