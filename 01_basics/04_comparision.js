console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

// Mostly avoid this type of code
/*
console.log();
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // null greater than is zero

console.log();
console.log(undefined > 0);
console.log(undefined == 0); 
console.log(undefined >= 0);
*/

console.log(2 == 3); // It check only values

// ===

console.log();
console.log("2" === 2); // It check both types and values
console.log(2 === 2); 


// The reason is that an equality check == and comparisons > < >= <= work differently 
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.