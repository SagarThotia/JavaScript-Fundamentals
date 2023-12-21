/*
    This is a basic approach but here is some problem in this approach for eg: If we have a 1000 li in this list 
    we want to add element at the last so here appendchild() will traverse whole tree and then apppendchild will
    append element at last. this create a performance issue i.e. sometimes JavaScript code need optimization for 
    good performance.  
*/

function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.languages').appendChild(li);
}
addLanguage("Solidity");
addLanguage("Java")
addLanguage("Rust")


/*  Approach is Optimize way using some DSA this for big projects and this is best approach and the team 
    will be happy and they will also feel like you learn from legends. 
*/

function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.languages').appendChild(li);
}
addOptiLanguage('GoLang');


//Edit value
const SecondLang = document.querySelector('li:nth-child(3)');
console.log(SecondLang);
// SecondLang.innerHTML = "MOjo"
const newli = document.createElement('li');
newli.textContent = "Mojo";
SecondLang.replaceWith(newli);


// Edit 
const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>TypeScript</li>';


//remove
const LastLang = document.querySelector('li:last-child');
LastLang.remove();