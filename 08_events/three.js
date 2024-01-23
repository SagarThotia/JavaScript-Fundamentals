// setInterval(function(){
//     console.log(`Sagar`, Date.now());
// }, 1000);

// const sayDate = function(str){
//     console.log(str, Date.now());
// }

// const IntervalId = setInterval(sayDate, 1000, "Sam");
// clearInterval(IntervalId); // All events is stop


var start = 0;
var stop;

function started(){
    start++;
    document.querySelector("#number").innerHTML = start;
}

function fun1(){
    start = 0;
    stop = setInterval("started()",1000);
}

function fun2(){
    clearInterval(stop);
}