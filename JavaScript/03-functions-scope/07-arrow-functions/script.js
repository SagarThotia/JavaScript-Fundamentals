//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax ES6 2015
const add = (a,b) => {
    return a + b;
};

// Implicit return 
const subtract = (a, b) => a - b;

// Can leave off () with a single parameter
const double = a => a * 2;

// returning an object 
const createObj = () => ({
  name: 'Brad',
});

const numbers =[1, 2, 3, 4, 5, 6];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));


console.log(add(10, 20));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());


