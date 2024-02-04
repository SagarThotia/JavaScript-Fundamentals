const logo = document.querySelector('img');

const onClick = () => console.log('click event');

// const onDoubleClick = () => console.log('double click event');

const onDoubleClick = () =>{
    if(document.body.style.backgroundColor !== 'purple')
    {
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse Wheel event');
const onMouseOver = () => console.log('mouse Over event');
const onMouseOut = () => console.log('mouse Out event');
const onDragStart = () => console.log('drag start event');
const onDragEnd = () => console.log('drag end event');


// Event Listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('wheel', onMouseWheel);
// logo.addEventListener('mouseout', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);