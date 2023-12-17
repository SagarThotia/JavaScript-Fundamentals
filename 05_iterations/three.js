// for of 

// Common Situation     
// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps object hold key value pairs and remembers the original insertion order of the key

// Maps Objects are collections of key-value pairs. A key in the map may only occur once; 
// it is unique in the Map's Collection. 

const map1  = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('d', 4);

console.log(map1.get('a')); // Expected Output: 1

map1.set('a', 97);
console.log(map1.get('a'));  // Expected Output: 97

console.log(map1.size); // Expected Output: 4

map1.delete('b');

console.log(map1.size);  // Expected Output: 3



const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key, ":-", value);
}

// Object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
} 

// for of doesn't iterate on map key 
// This is not iterable 
// for of mostly use is iterate object of key;
// for (const [key, value] of myObject) {
//     console.log(kay, ":-", value);
// }
