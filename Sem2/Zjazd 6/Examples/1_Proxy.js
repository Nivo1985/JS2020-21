// 1
// const target = {};
// const handler = {};
// const proxy = new Proxy(target, handler); // proxy
// console.log(proxy);
// let i = 0;

// 2
// const target = {}; // target
// const handler = {};
// const proxy = new Proxy(target, handler); // proxy
// target.prop1 = "prop1";
// proxy.prop2 = "prop2";
// console.log(proxy); // proxy and target
// console.log(target);
// let i = 0;

// 3 // What????
// let target = {};
// let handler = {
//   get: () => {
//     console.log("Object is being accessed");
//   },
// };
// let proxy = new Proxy(target, handler); // proxy
// target.prop1 = "prop1";
// proxy.prop2 = "prop2";
// console.log(target.prop1);
// console.log(proxy.prop2); //??
// console.log(proxy);
// let i = 0;

// 4
// let target = {}; // target
// let handler = {
//   get: (obj, prop) => {
//     console.log("Object is being accessed");
//     return obj[prop];
//   },
// };
// let proxy = new Proxy(target, handler); // proxy
// target.prop1 = "prop1";
// proxy.prop2 = "prop2";
// console.log(target.prop1);
// console.log(proxy.prop2);
// let i = 0;

// 5 internal Slots and methods
// let string = new String("test string");
// console.log(string);
// console.log(string.toString());
// let i = 0;

// 6 Get trap
// let test = { prop1: "pro1 Value" };
// test = new Proxy(test, {
//   //good practice
//   get: (target, property, receiver) => {
//     console.log("Accessing:", property);
//     return target[property];
//   },
// });

// console.log(test.prop1);
// console.log(test.toString());
// let i = 0;

// 7 usages
// let test = { prop1: "pro1 Value", hidden: "secret :)" };
// test = new Proxy(test, {
//   get: (target, property, receiver) => {
//     if (!target[property])
//       throw new Error(`${property} not found on an object`);
//     if (property === "hidden") return "Hidden property";
//     console.log("Accessing:", property);
//     return target[property];
//   },
// });
// console.log(test.hidden);
// console.log(test.hammer);
// let i = 0;

// 8 set trap
// "use strict";

// let test = { prop1: "prop1 Value" };
// test = new Proxy(test, {
//   set: (target, property, value, receiver) => {
//     target[property] = value;
//     // return true;
//   },
// });

// console.log((test.prop1 = "new Value"));
// console.log(test.prop1);
// let i = 0;

// 9 set trap usage
// let test = { prop1: "prop1 Value", _const: "constVal" };
// test = new Proxy(test, {
//   set: (target, property, value, receiver) => {
//     if (/^_/.test(property))
//       throw new Error("Can't change internat property: " + property);

//     target[property] = value;
//     return true;
//   },
// });

// console.log((test.prop1 = "new Value"));
// console.log(test.prop1);
// console.log((test._const = "changed Const"));
// let i = 0;

// 10 constructor
// class BaseClass {
//   constructor(id) {
//     this.id = id;
//     return new Proxy(this, {});
//   }
// }

// class SpecialClass extends BaseClass {
//   constructor(id, prop1, prop2) {
//     super(id);
//     this.prop1 = prop1;
//     this.prop2 = prop2;
//   }
// }

// console.log(new BaseClass("uniquID"));
// console.log(new SpecialClass("uniquID", "PROP1", "PROP2"));
// let i = 0;

//11 function #1
// let myLog = (prop1, prop2) => {
//   console.log(prop1, prop2);
// };

// myLog = new Proxy(myLog, {
//   apply: (fn, contex, args) => {},
// });

// myLog("P1", "P2");
// let i = 0;

//12
// let myLog = (prop1, prop2) => {
//   console.log(prop1, prop2);
// };

// myLog = new Proxy(myLog, {
//   apply: (fn, contex, args) => {
//     console.log("FUNCTION: " + fn.toString());
//     console.log("CONTEX: " + contex);
//     console.log("ARGS: " + args.toString());
//     fn(...args);
//   },
// });

// myLog("P1", "P2");
// let i = 0;
