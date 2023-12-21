/***********************************String.prototype.match()*************************************/
/*
    The match() method of String values retrieves the result of matching this string against a regular expression.
    It returns true if the string contains the given string value otherwise it returns false 
    
    Syntax:
    match(regexp)
*/


const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

const strSum = new String("Jargon Software");
let strToString = str.toString();
console.log(strToString); // Jargon Software



const str = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i;
const found1 = str.match(re);

console.log(found1);
// [
//   'see Chapter 3.4.5.1',
//   'Chapter 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'For more information, see Chapter 3.4.5.1',
//   groups: undefined
// ]



// Using global and ignoreCase flags with match()


const str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = str1.match(regexp);

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']



// Using named capturing groups
// In browsers which support named capturing groups, the following code captures "fox" or "cat" into a group named animal:


const paragraph1 = "The quick brown fox jumps over the lazy dog. It barked.";

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found2 = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}


// Using match() with no parameter

const str2 = "Nothing will come of nothing.";

str.match(); // returns [""]


// Using match() with a non-RegExp implementing @@match

const str3 = "Hmm, this is interesting.";

str.match({
  [Symbol.match](str) {
    return ["Yes, it's interesting."];
  },
}); // returns ["Yes, it's interesting."]



// A non-RegExp as the parameter
// When the regexp parameter is a string or a number, it is implicitly converted to a RegExp by using new RegExp(regexp)


const str11 =
  "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.";
const str12 =
  "My grandfather is 65 years old and My grandmother is 63 years old.";
const str13 = "The contract was declared null and void.";
str11.match("number"); // "number" is a string. returns ["number"]
str11.match(NaN); // the type of NaN is the number. returns ["NaN"]
str11.match(Infinity); // the type of Infinity is the number. returns ["Infinity"]
str11.match(+Infinity); // returns ["Infinity"]
str11.match(-Infinity); // returns ["-Infinity"]
str12.match(65); // returns ["65"]
str12.match(+65); // A number with a positive sign. returns ["65"]
str13.match(null); // returns ["null"]





// This may have unexpected results if special characters are not properly escaped.

console.log("123".match("1.3")); // [ "123" ]



// This is a match because . in a regex matches any character. In order to make it only match specifically a dot character, you need to escape the input.

console.log("123".match("1\\.3")); // null
