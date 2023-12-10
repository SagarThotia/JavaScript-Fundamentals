
/***********************************Array() constructor*****************************************/

console.log("Array() Constructor");
// new Array()
// new Array(element1)
// new Array(element1, element2)
// new Array(element1, element2, /* …, */ elementN)
// new Array(arrayLength)

// Array()
// Array(element1)
// Array(element1, element2)
// Array(element1, element2, /* …, */ elementN)
// Array(arrayLength)

/***********************************Array.prototype.push()*****************************************/

console.log("Array.prototype.push()");
const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Batman","Flash","Superman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]); // This is not a better way merge arrays




/***********************************Array.prototype.concat()*****************************************/

console.log("Array.prototype.concat()");
let allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);



/***********************************...spread operator*****************************************/
// more efficient method
// To spread things or If you drop a glass it will fall and shattered and spread every where.
const all_new_heros = [...marvel_heros, ...dc_heros]; 
console.log(all_new_heros);



/***********************************Array.prototype.map()*****************************************/
console.log("Array.prototype.map()");
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// const real_another_array =  another_array.flat(2);
const real_another_array =  another_array.flat(Infinity);
console.log(real_another_array);

// This method mostly used while scrapping data and serve from webpage data will come in NodeList or string list but actually we want array. 
// There is loop on array situation is coming there.
console.log(Array.isArray("Sagar"))
console.log(Array.from("Sagar")); // convert string to array or object to array
console.log(Array.from({name: "Sagar"})); // => []  => interesting for ineterview 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // convert string to array

/***********************************Array.length*****************************************/
// finding the length of your new array, and retrieving some items from it.
console.log("Array.length");
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const city1 = cities.length;
cities[0]; // the first item in the array
cities[1]; // the second item in the array
console.log(cities[cities.length - 1]); // the last item in the array



/***********************************Array.prototype.join()*****************************************/
// Join() method is used to join() the array element
console.log("Array.prototype.join()");
const commaSeparated = cities.join(",");
console.log(commaSeparated);




/***********************************Array.prototype.toString()*****************************************/
// toString() method is used to converted array or any value to String;
console.log("Array.prototype.toString()");
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger



// for of loop use for iterating array element one by one
const birds = ["Parrot", "Falcon", "Owl"];
for (const bird of birds) 
{
    console.log(bird);
}



// map is used to iterating and double that element 
// for eg: If i want to give salary hike by 30% to employees then i will use map() method     
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]




// using filter() to filter element the element that i am want  
function isLong(city) 
{
    return city.length > 8;
}
const cities1 = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities1.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]

