// function* loggerator(){
//     console.log('running...');
//     yield 'paused';
//     console.log('running again...');
//     yield 'stopped';
// }

// let logger = loggerator();
// logger.next(); // running...
// //{value: 'paused', done: false}
// logger.next(); // running again...
// //{value: 'stopped', done: true}


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

// [...abcs()] // ["a", "b", "c"]

cardDeck = Object{
    suits: Array(4) ["♣️", "♦️", "♥️", "♠️"]
    court: Array(4) ["J", "Q", "K", "A"]
    Symbol(Symbol.iterator): ƒ*();
  }


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