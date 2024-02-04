// This is used to avoid global scope pollution

// IIFE Syntax (Has it's own scope and runs right away)
(function () {
    const user = 'john';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function(name){
    console.log(`Hello ${name}`);
})('Sam');

// Named IIFE (Can only be called recursively)
(function hello(){
    console.log('Hello');
})();