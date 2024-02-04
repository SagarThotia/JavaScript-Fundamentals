// Challenge 1
function getCelsius(farh) {
    const celsius = (farh - 32) * 5 / 9;
    return celsius;
}

console.log(`The temperature is ${getCelsius(40).toPrecision(2)}\xB0C`);

const celsius = (f) => ((f - 32) * 5 / 9);
console.log(`The temperature is ${celsius(100).toPrecision(2)}\xB0C`);

// Challenge 2 
function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return{
        min, 
        max
    };
}

console.log(minMax([1, 2, 3, 4, 5]));


// Challenge 3
((length, width) => {
    const area = length * width;

    const output = `The area of a rectangle with a length of ${length} and a width  of ${width} is ${area}.`;

    console.log(output);
})(10, 20);
