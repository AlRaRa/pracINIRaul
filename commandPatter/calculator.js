const addition = (num1, num2) => num1 + num2;

const subtraction = (num1, num2) => num1 - num2;

const multiplication = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

const command = {
  add: addition,
  subtract: subtraction,
  multiply: multiplication,
  division,
  execute: function(action, { num1, num2 }) {
    return this[action](num1, num2);
  }
};

const calculate = () => {};
