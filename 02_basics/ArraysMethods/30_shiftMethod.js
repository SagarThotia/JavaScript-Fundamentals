/***********************************Array.prototype.shift()*****************************************/
/*
    The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

    Syntax:
    shift()

    myArr.shift();  remove from the first. This is not way to declare method because if there is 
                    10,000 numbers first delete first index number then all number shift one by one 
                    to the 0th index number and it may cause performance issue and optimization or low performance 

*/

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1); // Expected output: Array [2, 3]

console.log(firstElement); // Expected output: 1
