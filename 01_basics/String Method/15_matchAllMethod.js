/***********************************String.prototype.matchAll()*************************************/
/*
    The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.


    Syntax:
    matchAll(regexp)

    Parameters
        regexp
        =>  A regular expression object, or any object that has a Symbol.matchAll method.

        =>  If regexp is not a RegExp object and does not have a Symbol.matchAll method, 
            it is implicitly converted to a RegExp by using new RegExp(regexp, 'g').

        =>  If regexp is a regex, then it must have the global (g) flag set, or a TypeError is thrown.


*/


const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]



// Regexp.prototype.exec() and matchAll()
// Without matchAll(), it's possible to use calls to regexp.exec() (and regexes with the g flag) in a loop to obtain all the matches:


const regexp4 = /foo[a-z]*/g;
const str4 = "table football, foosball";
let match;

while ((match = regexp4.exec(str4)) !== null) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`,
  );
}
// Found football start=6 end=14.
// Found foosball start=16 end=24.




// With matchAll() available, you can avoid the while loop and exec with g. Instead, you get an iterator to use with the more convenient for...of, array spreading, or Array.from() constructs:

const regexp3 = /foo[a-z]*/g;
const str3 = "table football, foosball";
const matches = str3.matchAll(regexp3);

for (const match of matches) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
}
// Found football start=6 end=14.
// Found foosball start=16 end=24.

// matches iterator is exhausted after the for...of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), (m) => m[0]);
// [ "football", "foosball" ]




// matchAll will throw an exception if the g flag is missing.

const regexp1 = /[a-c]/;
const str1 = "abc";
str.matchAll(regexp1);
// TypeError



// matchAll internally makes a clone of the regexp — so, unlike regexp.exec(), lastIndex does not change as the string is scanned.

const regexp2 = /[a-c]/g;
regexp.lastIndex = 1;
const str2 = "abc";
Array.from(str2.matchAll(regexp2), (m) => `${regexp2.lastIndex} ${m[0]}`);  // [ "1 b", "1 c" ]

