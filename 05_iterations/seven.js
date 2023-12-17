
// map

// It is used to iterating an values from an array or object

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num)=> {num + 10}); // If you open scopes return undefined 
const newNums = myNumbers.map((num)=> num + 10);

console.log(newNums);


myNumbers.forEach((num) =>{
    console.log(num);
} )


// Method Chaining Concepts
const myNuMbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnums = myNuMbers
                        .map((num) => num * 10)   // map returns value
                        .map((num) => num + 1)   // map returns value
                        .filter((num) => num >= 40); // filter true or false
console.log(newnums);


