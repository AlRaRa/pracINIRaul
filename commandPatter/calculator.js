const command = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  division: (num1, num2) => num1 / num2,
  execute: function(action, { num1, num2 }) {
    return this[action](num1, num2);
  }
};

const calculate = (action, numbers) => {
  const result = command.execute(action, numbers);
  console.log(
    `In ${action} of numbers ${Object.values(numbers)} the result is ${result}`
  );
};

calculate('add', { num1: 2, num2: 3 });
calculate('subtract', { num1: 9, num2: 5 });
calculate('multiply', { num1: 7, num2: 2 });
calculate('division', { num1: 8, num2: 4 });
