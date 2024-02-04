/*
    The Call Stack 
    - Stack of functions to be executed 
    - Manages execution contexts
    - Stacks are LIFO Last In First Out  

    third()
    second()
    first()
    Global EC

    CALL STACK
    
*/

function first(){
    console.log('first...');
    second();
}
function second(){
    console.log('second...');
    third();
}
function third(){
    console.log('third...');
}

first();