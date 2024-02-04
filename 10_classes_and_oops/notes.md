# javascript and classes

### Do javascript really have classes?

- Yes, javascript does have classes. The feature was introduced with the ECMAScript 2015 specification(often referred to as ES6). However, it's important to note that javascript is primarily a **prototype-based language,** and **its classes are primarily syntactic sugar** over existing prototype-based inheritance mechanisms. In other words, it provides a more familar syntax for developers coming from class-based languages such as Java or C++, but under the hood, it works somewhat differently.

: Here's  a simple example of a class in JavaScript:

```
    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
        }
    }    
    let person1 = new Peron('John', 30);
    person1.sayHello(); // Hello, my name is John and I'm 30 years old.
    
```


## OOPS is a object oriented paradiagm 

## Object
- collection of properties and methods
- toLowerCase

## why OOPs is required is JS?


## parts of OOPs
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


#### 4 pillars
Abstraction
Encapsulation
Inheritance 
Polymorphism
