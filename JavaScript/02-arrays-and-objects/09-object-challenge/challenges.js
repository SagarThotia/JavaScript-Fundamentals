// Step 1
const library = [
    {
        title: 'Art of war',
        author: 'Lionel giles',
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
    {
        title: 'Steve jobs ',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
    {
        title: 'Good to Great',
        author: 'Jim Collins',
        status: {
            own: true,
            reading: false,
            read: false
        },
    },
]

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);


// Step 3 
const { title: firstBook } = library[0]; 

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);

