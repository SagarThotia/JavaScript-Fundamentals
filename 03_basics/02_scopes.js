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


// for (let i = 0; i < array.length; i++) { // global scope
//     const element = array[i];
    
// }

/*
    Through IDE Node enviroment is different 
    Through browser Node enviroment is different 
*/


/*****************************Part 3****************************/

function one(){
    const username = "Sagar"

    function two(){
        const website = "Twitch"
        console.log(username);
    }
    // console.log(website);
    two();
}
one();


if(true){
    const username = "sagar";
    if(username === "sagar")
    {
        const website = " Twitch";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



/*******************************Interesting***********************************/



// Hoisting
console.log(addOne(5));
function addOne(num)
{
        return num + 1;
}



// This is not a hoisting
// expressions  
// console.log(addThree(5));
// const addThree = function(num){
//     return num + 2;    
// }




function addOne(num)
{
    return num + 1;
}

console.log(addOne(5));

// const sum = addOne(5);
// console.log(sum);





// expressions  
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));



