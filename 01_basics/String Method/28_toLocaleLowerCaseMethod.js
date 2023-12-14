/***********************************String.prototype.toLocaleLowerCase()*********************************/
/*
    The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings.

    Syntax:
    toLocaleLowerCase()
    toLocaleLowerCase(locales)
*/

const dotted = 'Mumbai';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`); // Expected output: "mumbai"

console.log(`IN: ${dotted.toLocaleLowerCase('IN')}`); // Expected output: "mumbai"


"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
