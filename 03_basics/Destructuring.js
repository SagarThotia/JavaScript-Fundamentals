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


// const array = ['banana', 'orange', 'apple'];

// const [firstfruit, , thirdFruit] = array;

// console.log(firstfruit, thirdFruit); // banana apple



// const array = ['banana', 'orange', 'apple',['pear', 'cashew']];

// const [firstfruit, , thirdFruit, [fourthFruit, fifthFruit, sixthFruit]] = array;

// console.log(firstfruit, thirdFruit, fourthFruit, fifthFruit, sixthFruit); // banana apple, pear, cashew undefined


const array = ['banana', 'orange', 'apple'];

const [firstfruit, , thirdFruit = 'cashew', fourthFruit = 'watermelon'] = array;

console.log(firstfruit, thirdFruit, fourthFruit); // banana apple watermelon



// Object Destructuring

// Object destructuring allows you to easily extract properties from an object and assign those properties to variables.

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

// Object Destructuring 

const object = {
    name: 'WEB3',
    youtube: 'Daooa',
    // languages: 'Solidity'
    languages: {
        first: "Solidity",
        second: 'css',
    }
}

// const {name: username, youtube, languages = 'css', age = 30,} = object;
const {
    name: username, 
    youtube, 
    languages: {
    first,
    second: secondVariable,
    third = 'Java',
    }
}= object;

// console.log(username, youtube, language, age);
console.log(username, youtube, first, secondVariable, third);