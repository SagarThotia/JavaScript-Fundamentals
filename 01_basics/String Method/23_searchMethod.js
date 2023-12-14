/***********************************String.prototype.search()*************************************/
/*
    The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

    Syntax:
    search(regexp)

*/

const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"


// Using search()

// The following example searches a string with two different regex objects to show a successful search (positive value) vs. an unsuccessful search (-1).


const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation
