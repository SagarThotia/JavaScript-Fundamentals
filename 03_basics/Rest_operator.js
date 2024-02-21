// REST OPERATOR

const array = [1, 2, 3, 4, 5];

const [first, second, ...remainingValues] = array;

console.log(first, second, remainingValues); // Rest operator
console.log(first, second, ...remainingValues); // spread operator


const object = {
    name: 'Solidity',
    channel: 'Bimcon',
    age: 20,
    type: 'language'
}

const {name, channel, ...remainingProperties} = object;

// console.log(name, channel, remainingProperties);
console.log(remainingProperties);

function getNumbers(num1, num2, ...remainingArguments) {
    console.log(remainingArguments);
}

getNumbers(20, 50, 100, 200, 500, 1000);


