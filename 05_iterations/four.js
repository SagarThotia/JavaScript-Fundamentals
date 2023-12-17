const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key);
}

console.log();

for (const key in myObject) {
    console.log(myObject[key]);
}

console.log();

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

console.log();

// for in mostly use in to get Array key index;

const programming = ["js","rb","java","py","cpp"];

for (const key in programming) {
    console.log(key);
}

console.log();

for (const key in programming) {
    console.log(programming[key]);
}



const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");


for (const key in map) {
    console.log(key);
}


