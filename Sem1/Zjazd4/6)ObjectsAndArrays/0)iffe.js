//1
// let dataObject = {
//   id: 1,
//   data: "example data",
// };
// var proxy = (function (foo) {
//   return {
//     getData: function () {
//       return foo;
//     },
//     setData: function (val) {
//       foo.data = val;
//     },
//   };
// })(dataObject);

// console.log(proxy.getData());
// proxy.setData("changed data");
// console.log(proxy.getData());
// console.log(dataObject.data);

//2

// let dataObject = {
//   id: 1,
//   data: "example data",
// };

// var proxy = (function (foo) {
//   return {
//     getData: function () {
//       return foo;
//     },
//     setData: function (val) {
//       foo.data = val;
//     },
//   };
// })(Object.assign({}, dataObject));

// console.log(proxy.getData());
// proxy.setData("changed data");
// console.log(proxy.getData());
// console.log(dataObject.data);

// 3
// let obj1 = { x: 1, y: 2, z: 3, f: () => {} };
// let obj2 = { z: 4 };
// let result;
// result = Object.assign({}, obj1, obj2);
// console.log(result);
// result = Object.assign({}, obj2, obj1);
// console.log(result);
// result = Object.assign({ x: 0 }, obj2, obj1);
// console.log(result);
// result = Object.assign(obj1, obj2);
// console.log(result);
