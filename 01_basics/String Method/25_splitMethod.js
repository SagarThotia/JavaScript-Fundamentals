/***********************************String.prototype.split()*************************************/
/*
    The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

    Syntax:
    split(separator)
    split(separator, limit)

*/



const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);  // Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);  // Expected output: "k"

const strCopy = str.split();
console.log(strCopy);  // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
