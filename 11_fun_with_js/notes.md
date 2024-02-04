#  Generator 

: A generator is a type of iterator has a .next() method returning{value, done}

```
    SomeIterator.next(); 
    // {value:'something', done: false}
    SomeIterator.next(); 
    // {value:'anotherThing', done: false}
    SomeIterator.next(); 
    // {value: 'undefined', done: true}
```

## generator functions return generator objects
: `function*` defines a generator function

```
function* genFunction(){
    yield "hello world!";
}

let genObject = genFunction(); 
// Generator {   }
genObject.next(); 
// {value: "hello world!", done: false}
genObject.next(); 
// {value: undeined, done: true}
```

.next() **advances;** yield **pauses;** return **stops**
```
    function* loggerator(){
        console.log('running...');
        yield 'paused';
        console.log('running again...');
        yield 'stopped';
    }

    let logger = loggerator();
    logger.next(); // running...
    //{value: 'paused', done: false}
    logger.next(); // running again...
    //{value: 'stopped', done: true}
```

### generators are also iterable

```
    function* abcs(){
        yield 'a';
        yield 'b';
        yield 'c';
    }

    for(let letter of abcs()){
        console.log(letter.toUpperCase());
    }

    // A
    // B
    // C

    [...abcs()]  // ["a", "b", "c"]
```

### What can generators do?

#### custom iterables with @@iterator

```
cardDeck = ({
  suits: ["♣️", "♦️", "♥️", "♠️"],
  court: ["J", "Q", "K", "A"],
  [Symbol.iterator]: function* () {
    for (let suit of this.suits) {
      for (let i = 2; i <= 10; i++) yield suit + i;
      for (let c of this.court) yield suit + c;
    }
  }
})
```