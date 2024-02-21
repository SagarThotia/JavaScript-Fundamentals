// Event bubbling & Capturing
// Stop Propogation, Immediate Propogation & Prevent Default

// EventBubbling goes child to parent bydefault false
// Text are instruction embedded into our html code.


const div = document.querySelector('div');
const button = document.querySelector('button');
const anchor = document.querySelector('a');



/* Event bubbling and Event Capturing */ 

// div.addEventListener('click', () =>{
//     console.log('div');
// }, true); // if write true or false it is event capturing bydefault nature is false. 
//          // enable capturing write true

// button.addEventListener('click', () =>{
//     console.log('button');
// }, true);



/* stopPropogation() */

// div.addEventListener('click', () =>{
//     console.log('div');
// }); // if write true or false it is event capturing bydefault nature is false. 
//         //  enable capturing write true  // Parent to child

// button.addEventListener('click', (event) =>{
//     event.stopPropagation();
//     console.log('button');
// });



/* stopImmediatePropogation() */

// div.addEventListener('click', () =>{
//     console.log('div');
// });

// button.addEventListener('click', () => {
//     console.log('button');
// });

// button.addEventListener('click', (event) => {
//     event.stopImmediatePropagation();
//     console.log('button1');
// });



/* PreventDefault */

// anchor.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('Anchor tag prevent from redirect');
// });



/* Event Delegation */


/*
 The idea is you "delegate" the handling of an event (that was triggered on an element) to its parent or ancestor instead of the element itself.
    
 Benefits:
 Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners for similar logic.

*/

// button.addEventListener('click', () => {
//     console.log("button clicked");
// })


div.addEventListener('click', (event) => {
    const target = event.target;

    if(target.tagName === 'BUTTON'){
        console.log('button clicked');
    }
})
