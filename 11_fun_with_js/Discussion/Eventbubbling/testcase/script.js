// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         console.log(event.target.innerText);
//     });
// });

const div = document.querySelector('div');

div.addEventListener('click', (event) => {
    const target = event.target;
    
    if(target.tagName === 'BUTTON')
    {
        console.log(target.innerText);
    }
});