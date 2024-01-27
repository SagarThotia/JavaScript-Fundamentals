// let myName = 'Sagar           ';
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sagar = function(){
    console.log(`Sagar is present in all objects`);
}


Array.prototype.heySagar = function(){
    console.log(`Sagar says hello`);
}

// myHeros.sagar();
// myHeros.heySagar();
// heroPower.heySagar();



// inheritance

const User = {
    name: "coffee",
    email: "coffee@mail.dev"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User; 


// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "CoffeeAurCode        ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"Sagar".trueLength();
"BlackCoffee".trueLength();