
        /*
            In JavaScript all events are running in sequentially.
            There is some exceptional we are talk in this session
            Events are invoke on activities.
        */

        // 1.  First Approach
        //     onclick = alert('owl');
        //     This is a bad approach while scaling our application this approach is may create some issue.   
        //     In React this approach is use in scalable application. React is a different library.


        /*
        2.  Second Approach 
        document.getElementById('owl').onclick = function(){
            alert("owl clicked");
        }
        This approach is seems good but there problem is when you assign onclick event on id there may be some
        problem on id because you can' get enough amount of information from id. It provides less features.
        Here we can use EventListener beacuse EventListener not gives onclick but also gives event propogation.
        */
        
        // There is more approaches
        // attachEvent() 
        // This is was use in early time when internet explorer there too fight nowadays no one use internet explorer
    
        // JQuery is also popular recent days like today everyone fan of react
        // JQUERY there is - .on If you write on it will run events

        // mostly we get browser and environment events
        // Browser 
        // Environment events where mouse is clicked on which position? which is the clicked position?  mouseclick 
        
        // // 3.  Third Best Approach *****    
        // document.getElementById('owl').addEventListener('click',function(){
        //     alert("Owl clicked")
        // }, false)    
        
        // // 3.  Third Best Approach *****
        // document.getElementById('owl').addEventListener('click',function(){
        //     console.log("Owl clicked");
        // }, false) // false is default   
        
        // Interviews related topics
        /*  type: keyboardEvents, mouseEvents
            timestamp: how we change date and time activities.
            defaultPrevented: We will change the default behaviour of any state. mostly we will use in while filling form. when we submit that 
                            time we tell submit preventDefault() so that it does not get submitted we will also prevent anchor tag.  
            target:
            toElement:
            srcElement:
            currenTarget:
            clientX:
            clientY:
            screenX:
            screenY: 
            tiltX:
            tiltY:
            altkey, crtlkey, shiftkey, keyCode

        When we execute console.log() we get in output PointerEvent this is a object event. 
        In this object we get lot more things for example bubbles, buttons, cancelbutton, clientX, ClientY.
        In fact if we see three is a source element we get here more details from where source elements comes.
        what is attributes, childNodes, Children mostly we get browser events, Environment events.

        Mostly in interview question will ask related this two topics BrowserEvents and Environment events.
        which is view? when you click at that time what is height and weight of window?. On which timestamp it will be clicked 

        Some Interview gives question
        Make a application where is div whereever I click on that position circle will be create. 

        When we write Event we will get in returns Event Objects
        */


        // document.getElementById('owl').addEventListener('click', function(e){
        // console.log(e);
        // }, true)
        
        // First we have to discussed what is this false and true

        //Let's talk about eventPropogation
        // There is two context of EventPropogation 
        // 1. EventBubbling
        // 2. EventCapturing
        // Mostly use in market in project it will be through default that is false we will say EventBubbling but 
        // But in some scenarios we will use EventCapturing


        // EventPropogation 1. EventBubbling

        // document.getElementById('images').addEventListener('click', function(e){
        // console.log(`clicked inside the ul`);
        // }, false);
        
        // document.getElementById('owl').addEventListener('click', function(e){
        // console.log(`owl clicked`);
        // },); // bydefault its false
        
        // All concepts of propogation is bubbling up from bottom to up.
        // First we clicked in innerElement first clicked in li then ul then images.
        // script is tracking elements inside to outside this is known as event propogation also known as bubbling 
        

        // 2. EventCapturing

        // document.getElementById('images').addEventListener('click', function(e){
        // console.log(`clicked inside the ul`);
        // }, true);

        // document.getElementById('owl').addEventListener('click', function(e){
        // console.log(`owl clicked`);
        // },true); 
        
        // EventCapturing will follow Top to bottom
        
        
    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log(`owl clicked`);
    //     e.stopPropagation();
    // },false); 
    
    // Sometimes we don't want the event may not come to pass. If we learning whatever react in that we put event on that top of script because we want to track. 
    // so that we should be seperate top element and bottom element so there is no bubbling happen. 
    // here is e.StopPropogation() it is same as preventDefault()  


    // document.getElementById('images').addEventListener('click', function(e){
    // console.log(`clicked inside the ul`);
    // }, false);
    
    // document.getElementById('google').addEventListener
    // ('click',function(e){
    //     e.preventDefault();
    //     console.log(`google clicked`);
    // },false)


    // If we doesn't want to bubbling up so we can add stopPropogation()
    // document.getElementById('google').addEventListener
    // ('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //     console.log(`google clicked`);
    // },false)



// Real world Scenarios Projects

// document.querySelector('#images').addEventListener
// ('click', function(e){
//     // console.log(e);
//     // console.log(e.target);
//     console.log(e.target.parentNode);
//     let removeIt = e.target.parentNode;
//     // removeIt.remove()
//     // removeIt.parentNode.removeChild(removeIt);
// })


document.querySelector('#images').addEventListener
('click', function(e){
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.tagName);  
    // we checked here event spill over
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
})