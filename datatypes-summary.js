// # Primitive datatypes

// callbyValue copy reference value it can be changes in copy 
// 7 types :  String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript Dynamically typed language

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp  = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 332556245505461615n;
console.log(bigNumber);


// If you want to Master JavaScript understand Objects, Browser event & Web Event 

//callbyreference this value allocate reference in the memory   
// Reference Types (Non primitive)

// Array, Objects, Functions

const heros = ["Hanuman","ShivShankar","Ram"];
let myObj = {
    name :"Sagar",
    age:22,
}