/*
    First-class Function

    A programming language is said to have First-class functions when functions in that language are treated like any other variable. 
    For example, a such a language, a function can be passed as an argument to other functions, can be returned by another function 
    and can be assigned as a value to a variable. 
*/

const foo = () => {
    console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar


function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!

// function sayHello() {
//     return () => {
//         console.log("Hello!");
//     };
// }

function salary(num){
    return num * .7;
}

// High order function
        // reference, time in seconds
// setTimeout(salary, 3000); // when we treat function just like a variable it can be passed on or it can be returned as 

// const mySalary = [50, 40, 60, 20, 300, 400];

// mySalary.filter(n => n > 50).filter().map(); // this is also be a higher order function
// mySalary.filter(salary).filter(tax).map(); // this is also be a higher order function

// () => {
//   (func) => {}  
//   (func) => () => {}
//   (func) => async() => {}
// }

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         console.log(error);
//     }
// } 

/*
    High Order function

    Note: A function that returns a function or takes other functions as arguments is called a higher-order function.
*/



function sum(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

function calculatorFunction(fn, x, y){
    return fn(x, y);
}

console.log(`Sum > ${calculatorFunction(sum, 1,2)}`);
console.log(`Subtract > ${calculatorFunction(subtract, 2,1)}`);
console.log(`Multiply > ${calculatorFunction(multiply, 1,2)}`);
console.log(`Divide > ${calculatorFunction(divide, 1,2)}`);




/*
    What is a callback?
    
    A callback is a function is to be executed after another funtion has finished execution.

    Alternatively, we can also define it as any function that is passed as an argument to another function so that 
    it may be executed in that other function is referred to as a callback function.
*/

// Callback 

function deliverProduct(name, callback){
    console.log(`Done with delivery of ${name}`);
    callback();
}

function successFunction(){
    console.log(`Product has been successfully delivered`);
}

deliverProduct(`Macbook`, successFunction);


/*
    Callback Hell

    It is nested callbacks stacked below one another forming a pyramid kind of structure.

    Every callback here, waits for the previous callback, thereby affecting the readability and maintainability of the code.

*/

    // getProduct(18, (product) => {
    //     getUserInfo(product.userId, (userInfo) => {
    //         getAddress( userInfo.userName, (address) => {
    //             console.log(address);
    //         })
    //     })
    // })

/*
    Returning a function

    When a return statement is encountered in a function body, the execution of the function stops.

    If specified, a given value is returned to the function caller.

    In higher-order function concepts, we saw that functions can also return a function.
*/    

function multiple7(){
    return function(x){
        return x * 7;
    }
}

const exeFunc = multiple7();
console.log(exeFunc(5));



function sum(x){
    return function(y){
        return x + y;
    }
    
}

console.log(typeof sum(1), sum(1)(5));