/***********************************Array.prototype.findLast()*****************************************/
/*
    The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

    => The first element that matches, use find().

    => The index of the last matching element in the array, use findLastIndex().

    => The index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for   
        equality with the value instead of using a testing function.)

    => Whether a value exists in an array, use includes(). Again, it checks each element for equality  
        with the value instead of using a testing function.
    
    => If any element satisfies the provided testing function, use some().

*/  
console.log("Array.prototype.findLast()");
const array8 = [5, 12, 50, 130, 44];

const found2 = array1.findLast((element) => element > 45);

console.log(found); // Expected output: 130
