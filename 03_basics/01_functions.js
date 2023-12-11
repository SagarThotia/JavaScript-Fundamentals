
function sayMyName()
{
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}

// sayMyName();

// Way:1
                        // (Parameters, arguments)
// function  addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }

// Way:2
// function  addTwoNumbers(number1, number2)
// {
    //     return number1 + number2;
    // }
    
// Way:3
function addTwoNumbers(number1, number2)
{
    let result = number1 + number2;
    return result;
}

addTwoNumbers(5,2); // 7
addTwoNumbers(5,"2"); // 52
addTwoNumbers(5,"a"); // 5a
addTwoNumbers(5, null); // 5
        // (Parameters, arguments)


// most interesting doubt and interview quesions for beginner        
const result = addTwoNumbers(3, 5);
console.log(`Result: ${result}`);


                          // bydefault parameter value assigned is : sam  
function loginUserMessage(username = "sam")
{
    // if(!username === undefined){
    if(!username)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Sagar")); // Sagar just logged in
console.log(loginUserMessage()); // undefined just logged in

let logged =  loginUserMessage("Sagar"); 
console.log(logged); // Sagar just logged in


                        // rest operator 
// function calculateCartPrice(...num1){
function calculateCartPrice(val1, val2, ...num1){    // Interview Question
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


// Objects in functions accesed while carting data 

// TypeSafety must be check while developing 
const user ={
    username: "sagar",
    prices: 199 
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username:"Sam",
    price: 399
});


// Array Function for access cart data

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


