// Quick & Dirty

function createListItem(item){
    const li = document.createElement('li');
    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
    </button>
    `
    document.querySelector('.items').appendChild(li);
}




// Clean & Performance

function createNewItem(item) {
    const li = document.createElement('li');  // Step: 1
    li.appendChild(document.createTextNode(item)); // Step 4

    const button = document.createElement('button'); // Step-2
    button.className = 'remove-item btn-link text-red'; // Step-2.1

    const icon = document.createElement('i'); // Step - 3
    icon.className = 'fa-solid fa-xmark';     // Step - 3.1

    button.appendChild(icon); // Step - 5
    li.appendChild(button); //  Step - 6

    document.querySelector('.items').appendChild(li); // Step-7
}

createListItem('Eggs');
createNewItem('Cheese');