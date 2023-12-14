/*
    1. String:
    
    This is a sequence of text known as string, To signify that the 
    value is a string, enclose it in single or double quotes marks.

    let myVariable = 'Sam-com'; or
    let myVariable = "Sam-com";

    2. Number 

    This is a number. Numbers don't have quotes around them 

    let myVariable = 25;

    3. Boolean

    This is a true/false value. The words true and false are 
    special keywords that don't need quote marks.

    let myVariable = true;

    4. Array

    This is a structure that allows you to store multiple values in a single reference

    let myVariable = ['Sam', 'com', 25];

    5. Objects

    This can be anything. Everything in JavaScript is an object and can be 
    stored in a variable. keep this in mind as you learn

    let myVariable = document.querySelector('h1');

*/

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

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); // Object Function

/*
// https://262.ecma-international.org/5.1/#sec-11.4.3

Type of val                       Output     

    Undefined                       "undefined"    
    Null                            "object"
    Boolean                         "boolean" 
    Number                          "number"
    String                          "string"
    Object                          "object"        
    Object function                 "function"
    Object (host and                Implementation-defined except  
    does not implement              may not be "undefined", "boolean",    
    [[Call]])                       "number", or "string".
*/

/******************************Memory******************************************** */
https://excalidraw.com/#json=dBnqtHg36QKpimLqvr1Su,J0fUJIPPlrKyOHxqTPzlmA

// Primitive -> we get a copy of the value // we will do change in copy not in original value
// Non-Primitive -> we get a reference of  // We will do change in original value or actual value;  

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename =  "codesum.com";

let anothername = myYoutubename;
anothername = "codestack";

console.log(myYoutubename);
console.log(anothername);

// Advanced datatype

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "abc@google.com";

console.log(userOne.email);
console.log(userTwo.email);
