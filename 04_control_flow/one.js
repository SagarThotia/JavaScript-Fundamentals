

if(2 === "2"){
    console.log("executed");    
}

if(2 !== "2"){
    console.log("executed");    
}

const temperature = 41;
if(temperature  === 40){
    console.log("temperature is less than 50");    
}
else{
    console.log("temperature is greater than 50");    
}

// 3 != 2
// <, >, <=, =>, ==, !=, ===, !==


// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance = 1000;

// Implicit Scopes
// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const UserloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if(UserloggedIn && debitCard){
    console.log("Allow to buy course");
}


if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}