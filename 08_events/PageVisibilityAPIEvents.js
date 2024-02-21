/*
    PAGE VISIBILITY API

    The browser triggers numerous events for things that occurs in the browser.

    click, blur, change and error are a few of them.

    PAGE VISIBILITY API

    There is also the visibilitychange event which is triggered from the PageVisibility API when there is a change in a tab's visibility.

    Asides emiting the visibilitychange event, the Page Visibility API also provides the visibility state (hidden or visible) of a tab


    USECASE:

    A good use case of the Page Visibility API is a programmatically pausing a video when a user leaves a tab and playing it when they are back.

*/


document.addEventListener('visibilitychange', () => {
    console.log('user switched tabs');
});

document.visibilityState;

setTimeout(() => {
    console.log(document.visibilityState);
}, 2000);


function handleVisibilityChange() {
    if(document.visibilityState === 'hidden'){
        console.log(' user left this tab');
        // run any form of code
    }else{
        console.log('user returned to tab');
        // run any code
    }
}

document.addEventListener('visibilitychange', handleVisibilityChange);