/***********************************String Constructor()*****************************************/
/*
    The String() constructor creates String objects. When called as a function, it returns primitive values of type String.

    Syntax:
    new String(thing)
    String(thing)

*/


const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true

console.log(a instanceof String); // is true
console.log(b instanceof String); // is false

console.log(typeof a); // "object"
console.log(typeof b); // "string"


const sym = Symbol("example");
console.log(String(sym)); // "Symbol(example)"


console.log();


/***********************************String length*****************************************/
/*
    The length data property of a String value contains the length of the string in UTF-16 code units.

    => In V8 (used by Chrome and Node), the maximum length is 229 - 24 (~1GiB). On 32-bit systems, the 
        maximum length is 228 - 16 (~512MiB).

    => In Firefox, the maximum length is 230 - 2 (~2GiB). Before Firefox 65, the maximum length was 
        228 - 1 (~512MiB).

    => In Safari, the maximum length is 231 - 1 (~4GiB).

*/

const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`); // Expected output: "Life, the universe and everything. Answer: 42"


function getCharacterLength(str) {
    // The string iterator that is used here iterates over characters,
    // not mere code units
    return [...str].length;
}

console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3



// Basic usage

const x = "Mozilla";
const empty = "";

console.log(`${x} is ${x.length} code units long`);
// Mozilla is 7 code units long

console.log(`The empty string has a length of ${empty.length}`);
  // The empty string has a length of 0



//  Strings with length not equal to the number of characters

const emoji = "😄";
console.log(emoji.length); // 2
console.log([...emoji].length); // 1
const adlam = "𞤲𞥋𞤣𞤫";
console.log(adlam.length); // 8
console.log([...adlam].length); // 4
const formula = "∀𝑥∈ℝ,𝑥²≥0";
console.log(formula.length); // 11
console.log([...formula].length); // 9



// Assigning to length
// Because string is a primitive, attempting to assign a value to a string's length property has no observable effect, and will throw in strict mode.


const myString = "bluebells";

myString.length = 4;
console.log(myString); // "bluebells"
console.log(myString.length); // 9

