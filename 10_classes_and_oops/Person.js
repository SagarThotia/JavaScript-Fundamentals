class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
    
}    
let person1 = new Person('John', 30);
person1.sayHello(); // Hello, my name is John and I'm 30 years old.