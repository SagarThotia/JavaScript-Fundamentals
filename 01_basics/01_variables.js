const accountId = 144553;
let accountEmail = "sagar@google.com";
var accountPassword = "12345";
accountCity = "Mumbai"; // This way of declaration is not right
let accountState;

// accountId = 2; // not allowed

/*
    In const we cannot defined another value if we already assigned value to the variable 
    or we cannot change that values.

    We can not assign a new value to a variable that was created with const.
    It can throw TypeError TypeError: Assignment to constant variable.

    In let we can change the value.
    
    In Javascript, the interpreter will ignore the empty statements whenever it encounters them.


    const test;
    SyntaxError: Missing initializer in const declaration


    But, why should you use const instead of let?
    It is considered good practice to use const for variables whoose value will never change.

*/

accountEmail="S@@S.com";
accountPassword = 21245;
accountCity = "Dusseldorf";

console.log(accountId); 

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



// An object can only have one event handler for a specific event but it can have multiple event listeners of the event.

/* 
    All of the following values are falsy:
    false
    null
    undefined
    0
    -0
    NaN
    An empty string ('')
*/