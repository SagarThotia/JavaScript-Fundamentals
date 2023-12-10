// This feature is not supported on google chrome android, chrome, Edge, firefox, Node.js, Brave
/**********************************Array.fromAsync()*****************************************/
/*
    The Array.fromAsync() static method creates a new, shallow-copied Array instance from an async iterable, iterable, or array-like object.

    Syntax: 

    Array.fromAsync(arrayLike)
    Array.fromAsync(arrayLike, mapFn)
    Array.fromAsync(arrayLike, mapFn, thisArg)

    Parameters

    arrayLike
    An async iterable, iterable, or array-like object to convert to an array.

    mapFn Optional
    A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead (after being awaited). The function is called with the following arguments:

    element
    The current element being processed in the array. Because all elements are first awaited, this value will never be a thenable.

    index
    The index of the current element being processed in the array.

    thisArg Optional
    Value to use as this when executing mapFn.

    Return value
    A new Promise whose fulfillment value is a new Array instance.




    Description:

    Array.fromAsync() lets you create arrays from:

    => async iterable objects (objects such as ReadableStream and AsyncGenerator); or, 
        if the object is not async iterable,
    
    => iterable objects (objects such as Map and Set); or, if the object is not iterable,
    
    => array-like objects (objects with a length property and indexed elements).

    
    
    Array.fromAsync() iterates the async iterable in a fashion very similar to for await...of. Array.fromAsync() is almost equivalent to Array.from() in terms of behavior, except the following:

    => Array.fromAsync() handles async iterable objects.
    
    => Array.fromAsync() returns a Promise that fulfills to the array instance.
    
    => If Array.fromAsync() is called with a non-async iterable object, each element to be added to     
        the array is first awaited.
    
    => If a mapFn is provided, its input and output are internally awaited.

    
    
    Array.fromAsync() and Promise.all() can both turn an iterable of promises into a promise of an array. However, there are two key differences:

    => Array.fromAsync() awaits each value yielded from the object sequentially. Promise.all() awaits 
        all values concurrently.

    => Array.fromAsync() iterates the iterable lazily, and doesn't retrieve the next value until the  
        current one is settled. Promise.all() retrieves all values in advance and awaits them all.

*/      
// Array from an async iterable

// const asyncIterable = (async function* () {
//     for (let i = 0; i < 5; i++) {
//         await new Promise((resolve) => setTimeout(resolve, 10 * i));
//         yield i;
//     }
// })();

// // Array.fromAsync(asyncIterable).then((array) => console.log(array));
// // [0, 1, 2, 3, 4]


// Array from a sync iterable that yields promises

// Array.fromAsync(
//   new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
// ).then((array) => console.log(array)); // [1, 2, 3]


// Array from an array-like object of promises

// Array.fromAsync({
//   length: 3,
//   0: Promise.resolve(1),
//   1: Promise.resolve(2),
//   2: Promise.resolve(3),
// }).then((array) => console.log(array)); // [1, 2, 3]


// Using mapFn
// Both the input and output of mapFn are awaited internally by Array.fromAsync().

// Array from an array-like object of promises

// Array.fromAsync({
//   length: 3,
//   0: Promise.resolve(1),
//   1: Promise.resolve(2),
//   2: Promise.resolve(3),
// }).then((array) => console.log(array)); // [1, 2, 3]



// Comparison with Promise.all()
// Array.fromAsync() awaits each value yielded from the object sequentially. Promise.all() awaits all values concurrently.

// function* makeAsyncIterable() {
//   for (let i = 0; i < 5; i++) {
//     yield new Promise((resolve) => setTimeout(resolve, 100));
//   }
// }


// (async () => {
//   console.time("Array.fromAsync() time");
//   await Array.fromAsync(makeAsyncIterable());
//   console.timeEnd("Array.fromAsync() time"); // Array.fromAsync() time: 503.610ms

//   console.time("Promise.all() time");
//   await Promise.all(makeAsyncIterable());
//   console.timeEnd("Promise.all() time"); // Promise.all() time: 101.728ms
// })();



// No error handling for sync iterables
// Similar to for await...of, if the object being iterated is a sync iterable, and an error is thrown   while iterating, the return() method of the underlying iterator will not be called, so the iterator is not closed.

// function* generatorWithRejectedPromises() {
//   try {
//     yield 0;
//     yield Promise.reject(3);
//   } finally {
//     console.log("called finally");
//   }
// }



// (async () => {
//   try {
//     await Array.fromAsync(generatorWithRejectedPromises());
//   } catch (e) {
//     console.log("caught", e);
//   }
// })();
// // caught 3
// // No "called finally" message



// If you need to close the iterator, you need to use a for...of loop instead, and await each value yourself.

// (async () => {
//   const arr = [];
//   try {
//     for (const val of generatorWithRejectedPromises()) {
//       arr.push(await val);
//     }
//   } catch (e) {
//     console.log("caught", e);
//   }
// })();
// // called finally
// // caught 3

