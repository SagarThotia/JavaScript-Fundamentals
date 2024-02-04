// On Page Load
// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World';
// }

window.addEventListener('load', () => console.log('Page Loaded'));

window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('Run Me');

// document.querySelector('h1').innerText = 'Hello World';

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} X ${window.innerHeight}`;
});