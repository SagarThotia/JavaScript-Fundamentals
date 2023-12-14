const name = "Sagar";
const repoCount = 14;

// console.log(name + repoCount + " Value"); // Outdated syntax

// modern printing statement through string interpolation technique
console.log(`Hello my name is ${name} and my repo Count ${repoCount}`); // Modern syntax of printing statement

const gameName = new String('Sagar-sa-com'); // String Internally store in key value pairs

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(1,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   Sagar    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://codestack.com/code%20Solidity";

console.log(url.replace('%20',"-"));

console.log(url.includes('solana'));

console.log(gameName.split('-').join(' ').toString());

console.log(gameName.indexOf('a')); // 1
console.log(gameName.startsWith('S')); // true
console.log(gameName.endsWith('m')); // true
console.log(gameName.charCodeAt(1)); // 97
console.log(gameName.lastIndexOf('c')); // 9
console.log(gameName.codePointAt(1)); // 97