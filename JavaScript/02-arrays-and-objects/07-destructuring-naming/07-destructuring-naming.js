const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {firstName, lastName, age};

console.log(person.age);


// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'john',
    }
};
           // rename props or keys
const {id: todoId, title, user:{name},} = todo;

console.log(name);

console.log(todoId);


// Destructuring Arrays
const numbers = [23, 67, 33, 49];

const [first, second, ...nums] = numbers;

console.log(first, second, nums);