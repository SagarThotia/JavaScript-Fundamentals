/***********************************Array.prototype.toReversed()***********************************/
/*
    The toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.
    
    Syntax:
    toReversed()
*/

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
