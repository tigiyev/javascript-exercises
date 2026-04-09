const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (array.length === 0) return 0;

  function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
  }
  return array.reduce(reducer)
};

const multiply = function (array) {
  if (array.length === 0) return 0;

  function reducer(accumulator, currentValue) {
    return accumulator * currentValue;
  }
  return array.reduce(reducer)
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {

  if (a === 0) return 1;


  const array = [];
  for (let i = a; i > 0; i--) {
    array.push(i)
  }


  function reducer(accumulator, currentValue) {
    return accumulator * currentValue;
  }
  return array.reduce(reducer)


};
factorial(3);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
