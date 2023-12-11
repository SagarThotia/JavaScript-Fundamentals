/***********************************String.prototype.fromCharCode()*************************************/
/*
    The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.

    Syntax:
    String.fromCharCode()
    String.fromCharCode(num1)
    String.fromCharCode(num1, num2)
    String.fromCharCode(num1, num2,  …,  numN)


*/


console.log(String.fromCharCode(189, 43, 190, 61)); // Expected output: "½+¾="


// BMP characters, in UTF-16, use a single code unit:

String.fromCharCode(65, 66, 67); // returns "ABC"
String.fromCharCode(0x2014); // returns "—"
String.fromCharCode(0x12014); // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212); // also returns "—"; 8212 is the decimal form of 0x2014



// Supplementary characters, in UTF-16, require two code units (i.e. a surrogate pair):

String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"

String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07); // "\uD834\uDF06a\uD834\uDF07"
