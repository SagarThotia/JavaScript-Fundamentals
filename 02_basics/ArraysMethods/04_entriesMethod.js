/***********************************Array.prototype.entries()*****************************************/
/*
The entries() method of Array instances returns a new array iterator object 
that contains the key/value pairs for each index in the array.    
*/
const array3 = ['a', 'b', 'c'];

const iterator1 = array3.entries();

console.log(iterator1.next().value); // Expected output: Array [0, "a"]

console.log(iterator1.next().value); // Expected output: Array [1, "b"]
