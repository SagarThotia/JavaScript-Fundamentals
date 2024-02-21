/*
    Reflect is a global object that provides some useful methods for metaprogramming 
    Reflect is not a function nor it's constructible. Its only job is to provide static methods for a reflection.

    These methods can be divided into two categories.
    * Interospection methods which are non-destructive methods.
    * Modification methods which are desctructive since they mutate the object or its behavior. 
*/

const person = {
    name: 'Bob',
    [Symbol('email')]: 'bob@evil.com'
}

console.log(Reflect.get(person, 'name')); // = Bob
console.log(Reflect.has(person, 'email')); // = true
console.log(Reflect.has(person, 'phone')); // = false
console.log(Reflect.getPrototypeOf(person));  // = {constructor ... }
console.log(Reflect.ownKeys(person)); // name, Symbol(email)
console.log(Reflect.ownKeys(person)); // name, Symbol(email)

Reflect.defineProperty(person, 'phone', {writable: true});
console.log(Reflect.has(person, 'phone')); // = true
Reflect.set(person, 'phone', '1234567890');

Reflect.deleteProperty(person, 'phone');
console.log(Reflect.has(person, 'phone')); // = true