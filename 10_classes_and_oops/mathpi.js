const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

const chai = {
    name:"ginger chai",
    price:'300',
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nahi bani");
    }

}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} ${value}`);
    }
}

/*
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

*/

