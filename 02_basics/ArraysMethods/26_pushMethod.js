/***********************************Array.prototype.push()*****************************************/
/*
    The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

    Syntax:
    push()
    push(element1)
    push(element1, element2)
    push(element1, element2, …,  elementN)
*/

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Batman","Flash","Superman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]); // This is not a better way merge arrays



const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

