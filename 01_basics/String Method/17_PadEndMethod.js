/***********************************String.prototype.padEnd()*************************************/
/*
    The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

    Syntax:
    padEnd(targetLength)
    padEnd(targetLength, padString)


*/


const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.')); // Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));  // Expected output: "200  "



"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
