/***********************************String.prototype.replace()*************************************/
/*
    The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

    Syntax:
    replace(pattern, replacement)



    Specifying a string as the replacement
The replacement string can include the following special replacement patterns:

        Pattern     	    Inserts
        $$	                Inserts a "$".
        $&	                Inserts the matched substring.
        $`	                Inserts the portion of the string that precedes the matched substring.
        $'	                Inserts the portion of the string that follows the matched substring.
        $n	                Inserts the nth (1-indexed) capturing group where n is a positive 
                            integer less than 100.
        $<Name>	            Inserts the named capturing group where Name is the group name.


*/


const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"




console.log("foo".replace(/(f)/, "$2")); // "$2oo"; the regex doesn't have the second group

console.log("foo".replace("f", "$1"));  // "$1oo"; the pattern is a string, so it doesn't have any groups

console.log("foo".replace(/(f)|(g)/, "$2")); // "oo"; the second group exists but isn't matched



// The following example will set newString to 'abc - 12345 - #$*%':
function replacer(match, p1, p2, p3, offset, string) {
    // p1 is non-digits, p2 digits, and p3 non-alphanumerics
    return [p1, p2, p3].join(" - ");
  }
  const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
  console.log(newString); // abc - 12345 - #$*%



//   Defining the regular expression in replace()


const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...




// Using the global and ignoreCase flags with replace()


const re = /apples/gi;
const str1 = "Apples are round, and apples are juicy.";
const newstr1 = str1.replace(re, "oranges");
console.log(newstr1); // oranges are round, and oranges are juicy.



// Switching words in a string

const re2 = /(\w+)\s(\w+)/;
const str2 = "Maria Cruz";
const newstr2 = str2.replace(re, "$2, $1");
console.log(newstr2); // Cruz, Maria


// Using an inline function that modifies the matched characters

function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
      return (offset > 0 ? "-" : "") + match.toUpperCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

const name = styleHyphenFormat('borderTop');
console.log(name); //   Given styleHyphenFormat('borderTop'), this returns 'border-top'.

// Replacing a Fahrenheit degree with its Celsius equivalent

function f2c(x) {
    function convert(str, p1, offset, s) {
      return `${((p1 - 32) * 5) / 9}C`;
    }
    const s = String(x);
    const test = /(-?\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
}

const celsius = f2c("100F");
console.log(celsius);



function addOffset(match, ...args) {
    const hasNamedGroups = typeof args.at(-1) === "object";
    const offset = hasNamedGroups ? args.at(-3) : args.at(-2);
    return `${match} (${offset}) `;
  }
  
  console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
  console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (1) d"
  