/*
    A closure is a function that preserves access to vars and arguments (the scope) of the outer function, even after the outer function has finished executing. Closures are useful for hiding 
    implementation detail in javascript. In other words, it can be useful to create private variables
    or functions like so: 
*/

function counter() {
    let count = 0;

    function increment() {
        return count += 1;
    };
    return increment;
}

const generatedId = counter();

console.log(generatedId());
console.log(generatedId());
console.log(generatedId());