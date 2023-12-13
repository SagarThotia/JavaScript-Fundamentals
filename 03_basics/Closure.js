function outer(name)
{
    function innerOne(){
        console.log(name);
    }
    function innerTwo(){
        console.log(name);
    }
    innerOne();
    innerTwo();
}
outer('Sagar');

/* 
    (passing outer variable)
        ||   
        \/
    variable passed on to the outer function but still the inner functions are able to keep a track of it.
*/


let product = function(a, b, c){
    console.log(a * b);
    return function() {
        return a * b * c; 
    };
};

let container = product(2, 3, 6);
console.log(container());


//Random Question
const obj ={
    data: [1,2,3],
    processData: function(){
        this.data.forEach((num)=>{
            console.log(num * this.factor);
        });
    },
    factor: 2
};

obj.processData(); // 2 4 6