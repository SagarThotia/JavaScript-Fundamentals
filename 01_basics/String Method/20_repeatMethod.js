/***********************************String.prototype.repeat()*************************************/
/*
    The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

    Syntax:
    repeat(count)

*/


const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`); // Expected output: "I feel Happy! Happy! Happy! "


"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
"abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)
