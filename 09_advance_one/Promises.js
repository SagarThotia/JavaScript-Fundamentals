/*
    Promise:  The Promise object represents the eventual completion (or failure) of an asynchronuous operation and its resulting value.
    
    promise operation is also completed in future 
    e.g. : Cryptography, filesystem, Network

    In mobile development  Sometimes we want to activate sound devices or camera devices.
    
    
    A promise is in one of these states:

    * pending: initial state, neither fulfilled nor rejected.
    * fulfilled: meaning that the operation was completed successfully.
    * rejected: meaning that the operation failed.


    Since most people are consumers of already-created promises, this guide will explain consumption 
    of returned promises before explaining how to create them.

    Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into 
    a function. Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a 
    configuration record and two callback functions: one called if the audio file is successfully created, and 
    the other called if an error occurs.

    Here's some code that uses createAudioFileAsync():

        function successCallback(result) {
            console.log(`Audio file ready at URL: ${result}`);
        }

        function failureCallback(error) {
            console.error(`Error generating audio file: ${error}`);
        }

    createAudioFileAsync(audioSettings, successCallback, failureCallback);


    If createAudioFileAsync() were rewritten to return a promise, you would attach your callbacks to it instead:

    createAudioFileAsync(audioSettings).then(successCallback, failureCallback);



    Are there still reasons to use promise libraries like Q and BlueBird now that we have ES6 promises?

    There some libraries Q and BlackBird

    When promises are not available in js that time lot of work through asynchronus that time you would use 
    bydefault async/await but promises syntax is better also promises have a lot of new features available. 
    Through BlueBird libraries you can use in core javascript functionality (fetch, .then, .catch) we use 
    libraries like bluebird because someone made this libries eventually this libraries is very appreciate 
    and everyone like this libraries and this libraries is popular and finally javascript team is integrate
    in core Javascript so don't want to install any libraries. This library is bydefault available in core Javascript. 

*/

const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    // DB calls , cryptography, network calls
    setTimeout(()=>{
        console.log(`async task is complete`);
        resolve();
    }, 1000);
});

promiseOne.then(()=>{
    console.log(`Promise consumed`);
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`async task 2`);
        resolve();
    }, 1000);
}).then(()=>{
    console.log(`async 2 resolved`);
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "coder", email: "code@exampli.com"});
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "sagar", password: "123"})
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 2000);
}) 

//this chaining mostly use in database connection
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => { 
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resloved or rejected");
});



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('Error: JS went wrong');
        }
    }, 2000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data);    
//         resolve();
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

// getAllUsers();


fetch('https://api.github.com/users/SagarThotia')
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))


/*
    fetch() global function :

    The global fetch() method starts the process of fetching a resource from the network, 
    returning a promise that is fulfilled once the response is available.

    ***
    A fetch() promise only rejects when a network error is encountered (which is usually when there's permissions issue or similar). 
    A fetch() promise does not reject to HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
*/
