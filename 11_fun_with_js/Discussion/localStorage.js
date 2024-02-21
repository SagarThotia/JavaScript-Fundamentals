/*
    STORING OBJECT/ARRAYS IN LOCALSTORAGE

    JSON.strigify() converts an object or array to a JSON string while

    JSON.parse() converts an JSON string to a Object or array.

    By using stringify and parse, when you want to save an object/array to local storage, you convert the object to string, save it, then when you retrieve the string for usuage, you parse it back to object/array.
*/

// STORAGE OBJECTS AND ARRAYS IN LOCALSTORAGE

// JSON.stringfy() and JSON.parse()

const object = {
    name: 'WEB3',
    platform: 'daemon',
}

// const stringifiedObject = JSON.stringify(object);

// console.log(stringifiedObject);

// const backToObject = JSON.parse(stringifiedObject);

// console.log(backToObject);




const array = ['WEB3', 'daemon', 1, 2, true];

const stringifiedObject = JSON.stringify(array);
console.log(stringifiedObject);

const backToObject = JSON.parse(stringifiedObject);
console.log(backToObject);


