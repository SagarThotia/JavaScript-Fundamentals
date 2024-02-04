
// Clean & Performance

function createNewItem(item) {
    const li = document.createElement('li');  // Step: 1
    li.appendChild(document.createTextNode(item)); // Step 4

    const button = createButton('remove-item btn-link text-red'); // Step 2
    
    li.appendChild(button); //  Step - 6

    document.querySelector('.items').appendChild(li); // Step-7
}

// Step 4.1
function createButton(classes){
    const button = document.createElement('button'); 
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    
    return button; 
}

// Step 5
function createIcon(classes){
    const icon = document.createElement('i'); 
    icon.className = classes;
    return icon;     
}

createNewItem('Cheese');
createNewItem('Sauce');
createNewItem('Samosa');
createNewItem('Vadapav');