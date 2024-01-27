const user = {
    username: "sagar",
    loginCount: 0,
    signIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


/*
    When we call 'this' we would dicuss about current context.
*/


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this; implcitly defined 
}


/*
    If we not use new keyword the value of second object should be override.
    so i.e. to avoid this override we use 'new' keyword.
*/

const UserOne = new User('sagar', 12, true);
const UserTwo = new User('sam', 11, false);
console.log(UserOne.constructor);
// console.log(UserTwo);


/*
    new keyword:

    - When you write a new there is empty object is created i.e. is called instance.
    - Constructor function called because of that new keyword.
    - Because of that 'this' keyword all argument is injected in that new keyword;
    - We get a object into the function.  

*/


/*
    instanceof

    The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the 
    prototype chain of an object. The return value is a boolean value. its behavior can be customized with 
    symbol.hasInstance.
*/


function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true

console.log(auto instanceof Object); // true

F:\JavaScript-Fundamentals\10_classes_and_oops\oop.js


