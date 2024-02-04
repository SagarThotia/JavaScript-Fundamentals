console.log(addDollarSign(100));
// Function Declaration
function addDollarSign(value) {
    return '$' + value;
  }
  
  // When using declarations, you can invoke the function before the declaration. With expressions, you can not
  console.log(addDollarSign(100));

// console.log(addPlusSign(200)); // ReferenceError cannot access 'addPlusSign' before initialization

// Function Expression
const addPlusSign = function (value) {
    return '+' + value;
};

  console.log(addPlusSign(200));

 // Hoisting
 // Hoisting is a process of moving all the function and variable declaration to the top of the current scope before the code is run.
