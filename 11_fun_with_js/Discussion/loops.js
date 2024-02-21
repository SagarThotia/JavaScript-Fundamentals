/*
    $ ways to loop through objects in js

    1. for...in
    
    This statement allows you to loop through the key of an object.

    2. Object.keys()

    The keys method of the object constructor returns an array of the key in an object.


    3. Object.values()

    The values method of the object constructor returns an array of the values in an object.

    4. Object.entries()

    The entries method of the object constructor returns an array of subarrays where each subarray represents each property in the object and there are 2 values in the subarray: the key and the value.

*/

const object = {
    name: 'WEB3',
    platform: 'Democon',
    language: 'Solidity',
}

// for...in

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`${key} : ${element}`);
    }
}

for (const key in object) {
        const value = object[key];
        console.log(key + " : " + value);
}


// Object.keys()

const keys = Object.keys(object);

keys.forEach((key) => {
    const value = object[key];

    console.log(`${key} : ${value}`);
});


// Object.values();

const values = Object.values(object);
console.log(values);

values.forEach((value) => {
    console.log(value);
});


// Object.entries();

const entries = Object.entries(object);

console.log(entries);


entries.forEach((entry) => {
    const key = entry[0];

    const value = entry[1];

    console.log(`${key} : ${value}`);
});
