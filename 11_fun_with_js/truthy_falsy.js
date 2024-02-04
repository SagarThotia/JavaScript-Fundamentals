// const email = 'test@mail.com';

// if(email){
//     console.log(`You passed is an email`);
// }
// console.log(Boolean(email));


// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)



const x = function() {};

if (x) {
    console.log(`This is truthy`);
} else {
    console.log(`This is falsy`);
}
console.log(Boolean(x));


// Truthy and flasy caveats 
const children = 0;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log(`Please enter number of children`);
}


// Checking for empty array
const posts = ['Post One'];

if (posts.length > 0) {
    console.log(`List posts`);
} else {
    console.log(`No Posts To Lists`);
}

// Checking  for empty objects
const user = {
    name: 'Brand'
}

if (Object.keys(user).length > 0) {
    console.log(`List user`);
}else {
    console.log(`No User`);
}


// Loose Equality (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true
// console.log(false === 0); // false