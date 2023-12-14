/***********************************String.prototype.valueOf()*********************************/
/*
    The valueOf() method of String values returns this string value.

    Syntax:
    valueOf()

*/

const stringObj = new String('foo');

console.log(stringObj); // Expected output: String { "foo" }

console.log(stringObj.valueOf()); // Expected output: "foo"


const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
