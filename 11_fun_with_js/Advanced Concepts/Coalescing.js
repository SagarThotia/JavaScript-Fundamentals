/*
    The nullish coalesing operator ?? is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. The Nullish Coalescing Operator is handy when you want to use falsy values as a default. Or simply when you treat the falsy values as valid ones.
*/

// Falsy values
const value = 0 ?? 100; // = 0
const val = false ?? true // = false
console.log(value);
console.log(val);

// Default values
const values = null ?? 100; // = 100
const valued = undefined ?? 100; // = 100
console.log(values);
console.log(valued);

