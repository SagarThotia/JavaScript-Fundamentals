/***********************************String.prototype.localeCompare()*************************************/
/*
    The localeCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator.

    When comparing large numbers of strings, such as in sorting large arrays, it is better to create an Intl.Collator object and use the function provided by its compare() method.

    Syntax:
    localeCompare(compareString)
    localeCompare(compareString, locales)
    localeCompare(compareString, locales, options)
*/

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b)); // Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' })); // Expected output: 0


// The letter "a" is before "c" yielding a negative value
"a".localeCompare("c"); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
"check".localeCompare("against"); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
"a".localeCompare("a"); // 0


// Sort an array
// localeCompare() enables case-insensitive sorting for an array.


const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']




function localeCompareSupportsLocales() {
    try {
      "foo".localeCompare("bar", "i");
    } catch (e) {
      return e.name === "RangeError";
    }
    return false;
  }

  console.log("ä".localeCompare("z", "de")); // a negative value: in German, ä sorts before z
  console.log("ä".localeCompare("z", "sv")); // a positive value: in Swedish, ä sorts after z



//   Using options
// The results provided by localeCompare() can be customized using the options argument:


// in German, ä has a as the base letter
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// in Swedish, ä and a are separate base letters
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // a positive value



// Number Sorting


// by default, "2" > "10"
console.log("2".localeCompare("10")); // 1

// numeric using options:
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// numeric using locales tag:
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
