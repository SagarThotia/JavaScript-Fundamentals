/***********************************Array.prototype.toSorted()***********************************/
/*
    The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.

    Syntax:
    toSorted()
    toSorted(compareFn)
*/


const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]


