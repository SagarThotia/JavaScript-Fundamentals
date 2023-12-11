/***********************************String.prototype.replaceAll()*************************************/
/*
    The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

    Syntax:
    replaceAll(pattern, replacement)

*/  


const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, 'ferret')); 
// Expected output: "I think Ruth's ferret is cuter than your ferret!"




function unsafeRedactName(text, name) {
    return text.replace(new RegExp(name, "g"), "[REDACTED]");
  }
  function safeRedactName(text, name) {
    return text.replaceAll(name, "[REDACTED]");
  }
  
  const report =
    "A hacker called ha.*er used special characters in their name to breach the system.";
  
  console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
  console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."


console.log("aabbcc".replaceAll(/b/g, ".")); // ("aa..cc");

