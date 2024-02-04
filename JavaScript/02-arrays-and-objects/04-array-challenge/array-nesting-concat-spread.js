let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries]; // destructor

x = allFruits[1][0];

x = fruits.concat(berries);


// Spread operator (...)
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object

x = Array.isArray('Hello');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);


// Challenge 1

const arram = [1, 2, 3, 4, 5];

// arram.reverse();
// arram.push(0);
// arram.unshift(6);

arram.push(6);
arram.unshift(0);
arram.reverse();

// console.log(arram);

// Result [6,5,4,3,2,1,0]


// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1 not duplicate element
const arr3 = arr1.slice(0, 4).concat(arr2);
// console.log(arr3);

// Solution 2 through Spread operator and splice method
const arr4 = [...arr1, ...arr2];
arr4.splice(4,1);
console.log(arr4);