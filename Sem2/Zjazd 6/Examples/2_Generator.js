// 1
// function* timestampGenerator() {
//   console.log(Date.now());
// }

// const iterator = timestampGenerator();
// iterator.next();

//2 infinite iterator
// function* getRandomNumber() {
//   while (true) {
//     yield Math.floor(Math.random() * 100);
//   }
// }

// const randomNumberIterator = getRandomNumber();
// console.log(randomNumberIterator.next());
// console.log(randomNumberIterator.next());
// console.log(randomNumberIterator.next());
// console.log(randomNumberIterator.next());

//3 tield  as input and output
// function* timestampGenerator() {
//   var ts = Date.now();
//   console.log("first ts" + ts);
//   yield ts;
//   console.log("go go");
//   var extraTime = yield;
//   console.log("extra Time" + extraTime);
//   if (extraTime) ts += extraTime;
//   console.log("current ts" + ts);
// }

// const iterator = timestampGenerator();
// const firstTS = iterator.next();
// console.log(firstTS);
// iterator.next();
// iterator.next(1000);

//4 yield delegation

// function* gen1() {
//   yield 1;
//   yield 2;
// }

// function* gen2() {
//   yield* gen1();
//   yield 3;
// }

// const iterator = gen2();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// 5 more yield delegations
// function* gen1() {
//   yield 1;
//   yield 2;
//   return 4;
// }

// function* gen2() {
//   const val = yield* gen1();
//   yield 3;
//   yield val;
// }

// const iterator = gen2();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//6 BONUS
// Number.prototype[Symbol.iterator] = function* () {
//   for (var i = 0; i <= this; i++) {
//     yield i;
//   }
// };

// for (let i of [...10]) {
//   console.log(i);
// }

// console.log([...10]);
