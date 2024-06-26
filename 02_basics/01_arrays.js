
/*
    1. JavaScript arrays are resizable and can contain mix of different datatypes.
    
    2. JavaScript arrays aren not associative arrays and so, arrays elements access 
        arbitary strings as indexes,but must be accessed using nonnegative integers
        (or their respective string form) as indexes
    
    3. JavaScript arrays are zero-indexed based
    
    4. JavaScript arrays-copy operations create shallow copies.
        (All standard built-in copy operations with any Javscript objects create
        shallow copies, rather than deep copies).

    1. Shallow copy: 
    
    A shallow copy of an object is a copy whose properties share the same references
    (point to the same underlying values) as those of the source object from which the 
    copy was made.
    
    2. Deep copy: 
    
    A deep copy of an object is a copy whose properties do not share the same references
    (point to the same underlying values) as those of the source object from which the 
    copy was made.
    
*/

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Hanuman", "ShivShankar", "Shriram"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);


// Array methods

// myArr.push(6);  // Insert to the last
// myArr.push(7); // Insert to the last
// myArr.pop(); // remove from the last

myArr.unshift(9); /* Insert at the first. This is not way to declare method because if there is 10,000
                    numbers first all index will shift one by one and allot free space at the first index 
                    to insert number and it may cause performance issue and optimization or low performance 
                  */

myArr.shift(); /* remove from the first. This is not way to declare method because if there is 
                    10,000 numbers first delete first index number then all number shift one by one 
                    to the 0th index number and it may cause performance issue and optimization or low performance 
                */

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1

const newArr = myArr.join()
console.log(newArr); // 0,1,2,3,4,5
console.log(typeof newArr); // string 

//    slice vs splice interview Question

console.log("A", myArr); // A [0, 1, 2, 3, 4, 5]

const myNewArr1= myArr.slice(1, 3); // Returns a copy section of an array.

console.log(myNewArr1); // [1, 2]
console.log("B", myArr); // B [0, 1, 2, 3, 4, 5]

const myNewArr2= myArr.splice(1,3); // Returns a deleted elements from the array or 
                                    // An array containing the elements that were deleted.

console.log("C", myArr); // splice manipulates original array // C [0, 4, 5]
console.log(myNewArr2); // [1, 2, 3]
