// const userEmail = "s@sagar.ai";
// const userEmail = "";
const userEmail = [];

// It is a bad programming practice
// if(userEmail) console.log("Got user email"), console.log("Don't have user email"); 

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


// falsy value
          // -0 code engines in C
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy value

// "0", "false", " ", [], {}, function(){}


if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// false == 0  : true
// false == '' : true
// 0 == ''     : true 


// This is new operator 
// Nullish Coalescing Operator (??): you have to seen on this two keyword null or undefined

 // Sometimes you call from database or Appwrite or firebase so you can't get response direcly so you get two values so chances is you may get null response or undefined so your code structure will be upset
let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 20; // 10

// basically Nullish Coalescing operator is fallback if error occur how we handle or How to assign value to error location.

console.log(val1);


// Nullish Coalescing Operator or Ternary Operator is both are different Operator 

// Ternary Operator

// condition ? true : false;

const iceTeaPrice  = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");