// Immediately Invoked Function Expressions (IIFE)
/*
    IIFE stands for Immediate Invoked function Expression in javscript. It's a way to execute a function immediately after it's defined. 

    Why we use IIFE function ?
    Sometimes we are write IIFE functions so when we open a application immediately database connection should be start.

    Interview Example
    Sometime Problem happens from Global Scope pollution for avoiding this global scope pollution we use IIFE   
*/

(function coffee(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// (function definition)(function execution);

// unnamed or Simple IIFE
( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})(`Sagar`)


/*
    Developers did mistake during Interview

    1. Between two funtion ';' is mandatory.
    2. unnamed IIFE or Simple IIFE
    3. named IIFE
    4. Parameter IIFE
*/

