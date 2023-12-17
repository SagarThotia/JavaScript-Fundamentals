// Reduce

/*
    The Reduce() method execute user-supplied reducer. 
    Callback function on each element of the array, in order, passing in the return value from the function on each 
    element of the array, in order, passing in the return value from the calculation on the preceding element. The 
    final result is running the reducer across all element of the array is a single value.
*/

// intially add 0 with array value 

// accumulator : i.e. empty variable is like temp variable other languages like C, C++, Java, etc
// CurrentValue: It is a value of array 

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
);

console.log(sumWithInitial); // 10




const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);


const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0);
console.log(myTotal);



const shoppingCart =[
    {
        itemName : 'js course',
        price: 2999
    },
    {
        itemName : 'Java course',
        price: 999
    },
    {
        itemName : 'java course',
        price: 4999
    },
    {
        itemName : 'mobDev course',
        price: 5999
    },
    {
        itemName : 'Data Science course',
        price: 12999
    },
]

 // in project you have to verify the price value is in string or numbers
const priceToPay = shoppingCart.reduce ((acc,item) => acc + item.price,0);
console.log(priceToPay);
d