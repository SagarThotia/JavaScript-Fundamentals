const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

/*mostly use in Ecommerce and other website to while calculating 
GST precision value is to much long to fixed in round figure to use tofixed() 
*/
console.log(balance.toFixed(2)); // mostly used two

const otherNumber = 23.8966;
const singleNumber = 123.8966;
const doubleNumber = 1123.8966;

console.log(otherNumber.toPrecision(3)); // 23.9 returns string value
console.log(singleNumber.toPrecision(3)); // 124 returns string value
console.log(doubleNumber.toPrecision(3)); // 1.12e+3 returns string value

console.log(typeof otherNumber.toPrecision(3)); // string 
console.log(typeof singleNumber.toPrecision(3)); // string 
console.log(typeof doubleNumber.toPrecision(3)); // string 

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


/***************************************Maths*****************************************************/

// mostly use round rarely use ceil and floor
console.log();
console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.4)); // 4 
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 5
console.log(Math.sqrt(64)); // 8
console.log(Math.pow(2,3)); // 8
console.log(Math.min(4,3,9,6,8)); // 1
console.log(Math.max(4,3,9,6,8)); // 9

// mostly use Math library on Math.random()
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


/*  
    Math.random() => Always returns value between 0.1 and 1.0
*/