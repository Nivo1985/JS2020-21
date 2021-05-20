// const array = [1, 2, 3];
// const iterator = array[Symbol.iterator]();
// let result = iterator.next();
// while (!result.done) {
//   console.log(result);
//   result = iterator.next();
// }

// const map = new Map();
// map.set("key1", "val1");
// map.set("key2", "val2");
// const iterator = map[Symbol.iterator]();
// let result = iterator.next();
// while (!result.done) {
//   console.log(result);
//   result = iterator.next();
// }

// const map = new Map();
// map.set("key1", "val1");
// map.set("key2", "val2");
// for (const [key, value] of map) {
//   console.log(`${key} and ${value}`);
// }

// basic iterator
// function myIterator(start, finish) {
//   let index = start;
//   let count = 0;

//   return {
//     next() {
//       let result;
//       if (index < finish) {
//         result = { value: index, done: false };
//         index++;
//         count++;
//         return result;
//       }

//       return {
//         value: count,
//         done: true,
//       };
//     },
//   };
// }
// let iterator = myIterator(0, 10);
// let result = iterator.next();
// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

// custom data iterator
// const customIterator = {
//     [Symbol.iterator]() {
//         const data = this.data;
//         let index = this.index;
//         return {
//             [Symbol.iterator]() { return this; },
//             next() {
//                 const current = data[index++];
//                 if (current) {
//                     return {
//                         value: current,
//                         done: false
//                     }
//                 }

//                 return {
//                     value: current,
//                     done: true
//                 }
//             }
//         }
//     },
//     index: 0,
//     data: [{
//         key: 1,
//         value: 1
//     }, {
//         key: 2,
//         value: 2
//     }, {
//         key: 3,
//         value: 3
//     }, {
//         key: 4,
//         value: 4
//     }]
// }
// for (let val of customIterator) {
//     console.log(val);
// }

// custom action iterator, with no input
// const customActionIterator = {
//     [Symbol.iterator]() {
//         const actions = this.actions;
//         return {
//             [Symbol.iterator]() { return this; },
//             next() {
//                 if (actions.length > 0) {
//                     const action = actions.shift();
//                     const result = action();
//                     return {
//                         value: result,
//                         done: false
//                     }
//                 }
//                 else {
//                     return { done: true }
//                 }
//             }
//         }
//     },
//     actions: [_ => "Starting", _ => `Processing`, _ => "Finishing"]
// }
// for (let val of customActionIterator) {
//     console.log(val);
// }

// iterator over functions with input
// const customActionIterator = {
//     [Symbol.iterator]() {
//         const actions = this.actions;
//         return {
//             [Symbol.iterator]() { return this; },
//             next(...args) {
//                 if (actions.length > 0) {
//                     const action = actions.shift();
//                     const result = action(...args);
//                     return {
//                         value: result,
//                         done: false
//                     }
//                 }
//                 else {
//                     return { done: true }
//                 }
//             }
//         }
//     },
//     actions: [_ => "Starting", x => `Processing ${x}`, _ => "Finishing"]
// }
// let customActionIteratorInstance = customActionIterator[Symbol.iterator]();
// console.log(customActionIteratorInstance.next());
// console.log(customActionIteratorInstance.next(7));
// console.log(customActionIteratorInstance.next());
// console.log(customActionIteratorInstance.next());
