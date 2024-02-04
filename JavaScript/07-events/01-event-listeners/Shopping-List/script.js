const clearBtn = document.querySelector('#clear');

// function onClear() {
//     alert('Clear Items');
// }

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';

    // items.forEach((item) => item.remove());

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }

}

// Javascript Event Listener
clearBtn.onclick = function() {
    alert('Clear Items');
}

clearBtn.onclick = function() {
    console.log('Clear Items');
}

// alert is a blocking operation or synchronous
// addEventListener()
clearBtn.addEventListener('click', () => alert('Clear Items'));
clearBtn.addEventListener('click', () => console.log('Clear Items'));

clearBtn.addEventListener('click', () => onClear());

// Use named function
clearBtn.addEventListener('click', onClear);

// removeEventListener()
// It dom remove first event Listener
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Fire off event from JS
setTimeout(() => clearBtn.click(), 5000);

