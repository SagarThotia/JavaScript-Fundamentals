// setTimeout is a breakpoint of our program 

// setTimeout(function(){
//     console.log(`Sagar`);
// },2000);


// const saySagar = function(){
//     console.log(`Sagar`);
// }

// const changeText = function(){
//     document.querySelector('h1').innerHTML = `Best JS Series`;
// }

// setTimeout(saySagar, 3000);
// setTimeout(changeText, 3000);

// const changeMe = setTimeout(changeText, 2000);
// clearTimeout(changeMe)






const saySagar = function(){
    console.log(`Sagar`);
}

const changeText = function(){
    document.querySelector('h1').innerHTML = `Best JS Series`;
}

const sayName = setTimeout(saySagar, 2000) 
const changeMe = setTimeout(changeText, 3000);

document.querySelector('#stop').
addEventListener('click', function(){
    clearTimeout(changeMe);
    clearTimeout(sayName);
    console.log(`STOPPED`);
})