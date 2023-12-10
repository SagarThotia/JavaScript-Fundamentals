/**********************************Array.prototype.includes()*****************************************/
/*
    The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

    Syntax:
    includes(searchElement)
    includes(searchElement, fromIndex)


    Parameters

    searchElement
    The value to search for.

    fromIndex Optional

    Zero-based index at which to start searching, converted to an integer.

        => Negative index counts back from the end of the array — if fromIndex < 0, fromIndex + array.  
            length is used. However, the array is still searched from front to back in this case.

        => If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to  
            be searched.

        => If fromIndex >= array.length, the array is not searched and false is returned.

    Return value: 

    A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).  
*/


const array10 = [1, 2, 3];

console.log(array10.includes(2)); // Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); // Expected output: true

console.log(pets.includes('at')); // Expected output: false

[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false

