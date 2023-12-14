// What is Destructuring?

// Destructuring is a feature introduced in ES6 (ES2015) that provides a way to extract values from 
// arrays or properties from objects and bind them to distinct variables.

// It allows for more concise and readable code when accessing thes values


// Array Destructuring 

// With array destructuring, you can unpack items from arrays directly into variables

const colors = ['red', 'green', 'blue'];
const [firstColor , secondColor] = colors;

console.log(firstColor); // "red"
console.log(secondColor); // "green"


// Object Destructuring

// Object destructuring allows you to extract properties from objects

const profile ={
    name: 'Sagar',
    language: 'Solidity'
};

const {name, language} = profile;

console.log(name); // Sagar
console.log(language); // Solidity


// Nested Destructuring

// For Objects with nested structures, you can destructure in a layered manner

const student = {names: 'Sagar', scores: { math: 90, science: 85 }};

const { names,scores:{math},} = student; 

console.log(name); // Sagar
console.log(math); // 90


// Function Parameter Destructuring

// This is Especially useful when working with function parameter

const Profile = {
    name: 'Sagar Thotia',
    language: 'Rust'
};

function introduce({name}){
    console.log(`My name is ${name}`);
}

introduce(Profile); // My name is Sagar
