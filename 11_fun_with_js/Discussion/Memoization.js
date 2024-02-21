// Implementing Memoization in JavaScript 
// Memoization is an optimization techniques that can be used to reduce
// time-consuming calculations by saving previous input to something called cache and 
// return the result from it.

// This same thing we can achieve through useMemo() in react

let sum = 0;
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i; 
    }
    return sum;
}

const memoize = (fun) => {
    let cache = {};
    return function(...args) {
        let n = args[0];
        if(n in cache){ // if loop it only runs once.
            console.log("cache");
            return cache[n]; 
        }else{
            console.log(`Calculating first time`);
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time();
const efficient = memoize(calc);
console.log(efficient(5));
// {'5':15, '6': 20}
console.timeEnd();

console.time();
console.log(efficient(5));
console.timeEnd();