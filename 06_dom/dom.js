console.log(document.getElementById('title').getAttribute('id'));

console.log(document.getElementById('title').getAttribute('class'));

console.log(document.getElementById('title').setAttribute('class','test heading'));

console.log(document.getElementById('title').style.backgroundColor = 'green');
console.log(document.getElementById('title').style.padding = '10px');
console.log(document.getElementById('title').style.borderRadius = '5px');
console.log(document.getElementById('title').style.textAlign = 'center');

console.log(document.getElementById('title').textContent);
console.log(document.getElementById('title').innerHTML);
console.log(document.getElementById('title').innerText);



console.log(document.getElementsByClassName('heading'));


console.log(document.querySelector('h2'));
console.log(document.querySelector('#title'));
console.log(document.querySelector('.heading'));
console.log(document.querySelector('input[type="password"]'));

console.log(document.querySelector('p:first-child'));

const myUnorder = document.querySelector('ul');
console.log(myUnorder);
console.log(myUnorder.querySelector('li'));
const myUnorderlist = myUnorder.querySelector('li');
console.log(myUnorderlist.style.backgroundColor = 'yellow');
console.log(myUnorderlist.style.font = '10px');
console.log(myUnorderlist.innerText = 'five');



const templiList = document.querySelectorAll('li');
console.log(templiList);
console.log();
templiList.forEach((num)=> {
    num.style.backgroundColor = 'yellow';
    num.style.color = 'red';
    num.style.fontStyle = 'bold';
})

console.log(templiList[0].style.color = 'red');
console.log(templiList[0].style.fontSize = '20px');

const myH1 = document.querySelectorAll('h1');
console.log(myH1[0].style.color = 'yellow');

const myArr = [1, 2, 3, 4];
console.log(myArr);




const tempClassList = document.getElementsByClassName('list-item');
// tempClassList.forEach((li) => {
//     console.log(li);
// });


//Array.from is use to convert class to id in DOM use
const myConverted = Array.from(tempClassList);
console.log(myConverted);
myConverted.forEach((li)=>{
    li.style.color = 'Orange';
    li.style.backgroundColor = 'red';
})