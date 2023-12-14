// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());
console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2023, 0, 30); // In Javascript month should start from zero
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 30, 5, 3); // In Javascript month should start from zero
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14"); 
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023"); 
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

// Internationalization
let newday = newDate.toLocaleString('default',{
    weekday: "long",
});
console.log(newday);