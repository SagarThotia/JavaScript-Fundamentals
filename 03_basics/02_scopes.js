var c = 300;


if(true){  // block scope
    let a = 10; // local scope
    const b = 20; // local scope 
    var c = 30;  // global scope called hoisting
    c = 30;  // global scope called hoisting
} 


let a = 300 ;
if(true){
    let a = 10;
    const b = 20;
    console.log(`INNER: ${a}`);
}


// console.log(a); // local scope
// console.log(b); // local scope
console.log(c); // global scope 


for (let i = 0; i < array.length; i++) { // global scope
    const element = array[i];
    
}

/*
    Through IDE Node enviroment is different 
    Through browser Node enviroment is different 
*/