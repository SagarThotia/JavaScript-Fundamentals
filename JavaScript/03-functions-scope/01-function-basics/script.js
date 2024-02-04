// Define a function
function sayHello(){
    console.log('Hello World');
}

// Invoking, execute or call a function
sayHello(); 

// Define a function with parameters
function add(num1, num2){
    console.log(num1 + num2);
}

// Invoking, execute or call a function
add(10, 5);

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// Arguments are the values that are passed into the function

// Returning a value 
function subtract(num1, num2){
    return num1 - num2;

    console.log('After the return');  // sending a request to api backend in database
}

const result = subtract(10, 2);
console.log(result, subtract(20, 5)); 


