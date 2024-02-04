const div = document.createElement('div');
console.log(div);
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title","generated title");
div.style.backgroundColor = 'yellow';
div.style.color = 'red';
div.style.padding = '12px';
div.innerText = "chai aur code";

const addText = document.createTextNode(" Chai aur code");
div.appendChild(addText);

document.body.appendChild(div);