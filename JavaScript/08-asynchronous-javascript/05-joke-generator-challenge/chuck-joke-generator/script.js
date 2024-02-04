const jokeEl = document.getElementById('joke');
const jokebtn = document.getElementById('joke-btn');

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            // console.log(JSON.parse(this.responseText).value);
            jokeEl.innerHTML = JSON.parse(this.responseText).value;
        }else{
            jokeEl.innerHTML = 'Something went wrong (Not Funny)';
        }
    };

    xhr.send();
};

jokebtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);