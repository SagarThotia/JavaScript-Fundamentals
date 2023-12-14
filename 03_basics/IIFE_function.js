/*
    IIFE stands for Immediate Invoked function Expression in javscript. It's a way to execute a function immediately after it's defined. 
    Here's a simple example

    (function(){
        // your code here
    })()

    This helps create a private scope for variables preventing them from polluting the global scope

    IIFE are basically self invoked function. It is not like recursion. If it is call outside it call itself automatically. 
*/

(function a(){
    console.log("Hello World");
})();


// Establishing private variables and accessors

let counter = (function(){
    let i = 0;

    return{
        get: function (){
            return i;
        },
        set: function(val){
            i = val;
        },
        increment: function(){
            return ++i;
        }
    };
})();

// These calls access the function properties return 
console.log(counter.get());       // 0
console.log(counter.set(3));
console.log(counter.increment()); // 4
console.log(counter.increment()); // 5


