const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Batman","Flash","Superman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]); // This is not a better way merge arrays

let allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// more efficient method
// To spread things or If you drop a glass it will fall and shattered and spread every where.
const all_new_heros = [...marvel_heros, ...dc_heros]; 
console.log(all_new_heros);

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


