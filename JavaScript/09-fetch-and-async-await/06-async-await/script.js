const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'John', age: 28})
    }, 1000);
});

// promise.then((data) => console.log(data));

async function getPromsie() {
    const response = await promise;
    console.log(response);
}

// getPromsie();


async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    console.log(data);
}

getUsers();


const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    throw new Error('Hello');

    console.log(data);
};

getPosts().catch((error) => console.log(error));