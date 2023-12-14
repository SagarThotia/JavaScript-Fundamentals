/*
    Two ways to declare a objects:
    1. literals
    2. Constructor

    singleton 
    When we declare through Constructor then singleton objects is created.
    When we declare as a literals then it will be multiple instance.

    When we declare through literals then sigleton is not created.  
    Through Constructor is always singleton objects.
*/

// singleton
// Object.create()

// Objects literals

/* Most Important Interview Question */

const mySym = Symbol("key1")

const JsUser = {
    name: "Sagar",
    "full name": "Sagar Thotia",
    [mySym]: "mykey1",      // []=> it is refer or denotes to Symbol.
    age: 25,
    location: "Mumbai",
    email: "Sagar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
};
 
console.log(JsUser.email);  // Access through dots mostly
console.log(JsUser["email"]); // Access through [] brackets
console.log(JsUser["full name"]); // Sagar Thotia
console.log(JsUser[mySym]); // Access Symbol through brackets
console.log(typeof mySym); // Symbol


JsUser.email = "sagar@chatgpt.com";
console.log(JsUser["email"]);

// Object.freeze(JsUser)

JsUser.email = "sagar@microsoft.com";
console.log(JsUser["email"]);
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // refer same object 
}

/*
    Objects: this => refer to same object 
    windows: this => refer to window 
    nodejs: this
*/

console.log(JsUser.greeting()); // Hello JS User undefined
console.log(JsUser.greeting);  // [Function (anonymous)]
console.log(JsUser.greetingTwo());  // Hello Js User, Sagar undefined
