/***********************************String.prototype.fromCodePoint()*************************************/
/*
    The String.fromCodePoint() static method returns a string created from the specified sequence of code points.

    Syntax:
    String.fromCodePoint()
    String.fromCodePoint(num1)
    String.fromCodePoint(num1, num2)
    String.fromCodePoint(num1, num2, …, numN)

*/


console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));  // Expected output: "☃★♲你"


// Valid Input

String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"


// Invalid Input

String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError



// Compared to fromCharCode()
// String.fromCharCode() cannot return supplementary characters (i.e. code points 0x010000 – 0x10FFFF) by specifying their code point. Instead, it requires the UTF-16 surrogate pair in order to return a supplementary character:


String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"


// String.fromCodePoint(), on the other hand, can return 4-byte supplementary characters, as well as the more common 2-byte BMP characters, by specifying their code point (which is equivalent to the UTF-32 code unit):

String.fromCodePoint(0x1f303); // or 127747 in decimal
