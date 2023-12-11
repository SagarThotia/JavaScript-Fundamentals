/***********************************String.prototype.slice()*************************************/
/*
    The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

    Syntax:
    slice(indexStart)
    slice(indexStart, indexEnd)

*/


const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31)); // Expected output: "the lazy dog."

console.log(str.slice(4, 19)); // Expected output: "quick brown fox"

console.log(str.slice(-4)); // Expected output: "dog."

console.log(str.slice(-9, -5)); // Expected output: "lazy"



// Using slice() to create a new string

// The following example uses slice() to create a new string.

const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
console.log(str2); // he morn
console.log(str3); // morning is upon u
console.log(str4); // is upon us.
console.log(str5); // ""


// Using slice() with negative indexes

// The following example uses slice() with negative indexes.

const str6 = "The morning is upon us.";
str6.slice(-3); // 'us.'
str6.slice(-3, -1); // 'us'
str6.slice(0, -1); // 'The morning is upon us'
str6.slice(4, -1); // 'morning is upon us'

console.log(str.slice(-11, 16)); // "is u"

console.log(st6.slice(11, -7)); // " is u"

console.log(str.slice(-5, -1)); // "n us"
