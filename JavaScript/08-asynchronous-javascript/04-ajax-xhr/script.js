const xhr = new XMLHttpRequest();

// Specify method and endpoint/URL
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/SagarThotia/repos');


// readyState has 5 possible values 
// - 0: request not initalized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

xhr.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200){
        // console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);

        data.forEach((repo) => {
            const li = document.createElement('i');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
            document.querySelector('#results').appenChild(li);
        });
    }
}