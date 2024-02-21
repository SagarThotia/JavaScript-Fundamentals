/*
    Currying is a process in functional programming in which we can transform a function with multiple
    arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline. 
*/
function multiply(x) {
    return (y) => {
        return (z) => {
            return x * y * z;
        }
    }
}
console.log(multiply(1)(2)(3)(6));