let operations = {
  sum: (x, y) => x + y,
  sub: (x, y) => x - y,
  mul: (x, y) => x * y,
  div: (x, y) => x / y,
  // mod: (x, y) => x % y,
  // pow: (x, y) => Math.pow(x, y),
};

let calculation = (function (x, y) {
  let innerObject = {
    param: {
      x: x,
      y: y,
    },
    mathOperation: null,
    setOperation: setOperation,
    calculate: calculate,
  };

  function setOperation(mathOperation) {
    this.mathOperation = mathOperation;
  }

  function calculate() {
    return this.mathOperation(this.param.x, this.param.y);
  }
  return innerObject;
})(12, 3);

calculation.setOperation(operations.sum);
console.log(calculation.calculate());
