const user = {
    username: "sagar",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this); // current context is empty.
// console.log(this); // In browser pointing global window objects.

// function coffee(){
//     let username = "sagar";
//     console.log(this.username); // undefined
// }

// coffee();


// const coffee = function coffee(){
//         let username = "sagar";
//         console.log(this.username); // undefined
// }


// Through Arrow function mostly uses
const coffee = () => {
    let username = "sagar";
    console.log(this.username); // undefined
    console.log(this); // {} empty parenthesis
}

// coffee();


// Basic Arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit Arrow function
// const addTwo = (num1, num2) =>  num1 + num2; // no requires to write return keyword  

// const addTwo = (num1, num2) => (num1 + num2); // () parenthesis no requires to write return keyword 
// console.log(addTwo(3, 4));

const addTwo = (num1, num2) => ({username: "sagar"}); // () parenthesis no requires to write return keyword 
console.log(addTwo(3, 4));


