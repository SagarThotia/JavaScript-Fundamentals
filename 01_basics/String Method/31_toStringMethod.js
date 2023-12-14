/***********************************String.prototype.toString()*********************************/
/*
    The toString() method of String values returns this string value.

    Syntax:
    toString()

*/

const stringObj = new String('foo');

console.log(stringObj); // Expected output: String { "foo" }

console.log(stringObj.toString()); // Expected output: "foo"



String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"


const x = new String("Hello world");

console.log(x.toString()); // "Hello world"
