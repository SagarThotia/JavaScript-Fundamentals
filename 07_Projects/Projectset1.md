# Project related to DOM


# Solution Code

## Project 1


```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e); // mouse event
        console.log(e.target); // from where is coming
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
})
```

### Project1 Background Changer  

[Demo](https://www.07_Projects/1-ColorChanger/index.html)

```javascript

const form = document.querySelector('form');
// This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span>${bmi}</span>`

        function description(describe, color){
            const description = document.querySelector('#description');
            description.innerText = `${describe}`;
            description.style.color = `${color}`;
            description.append();
        }
        if(bmi <= 18.6 ){
            description('You are underWeight', 'orange');
        }else if(bmi > 18.6 && bmi <= 24.9){
            description('You are Fit', 'green');
        }else if(bmi > 24.9){
            description('You are OverWeight', 'red')
        }
    }
})
```






