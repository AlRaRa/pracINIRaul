const moment = require('moment');
const DATE_FORMAT = 'DD/MM/YYYY';
const DATE_FORMAT_COMPLETE = 'DD/MM/YYYY HH:mm:sss';

const employees = [
  {
    name: 'pepe',
    money: 1000,
    timezone: 'Europe/calaluya',
    date: '10/01/2017 -- 00:30:00',
    update_Up: ''
  },
  {
    name: 'Luis',
    money: 1500,
    timezone: 'Australia/Sydney',
    date: '13/10/2017 -- 10:30:00',
    update_Up: ''
  },
  {
    name: 'Perico',
    money: 1200,
    timezone: 'Europe/Madrid',
    date: '15/05/2017 -- 01:30:00',
    update_Up: ''
  }
];

const diffDates = (date1, date2) => {
  return date1.isSame(date2);
};

const sumDates = (date, unitTimes) => {
  const dateclone = date.clone();
  unitTimes.map(unitTime => {
    const number = getNumber(unitTime);
    const shorthand = getShorthandUnitTime(unitTime, number);
    dateclone.add(number, shorthand);
  });
  return dateclone;
};

const getNumber = unitTime => parseInt(unitTime);

const getShorthandUnitTime = (unitTime, number) => unitTime.replace(number, '');

const setDateEmployee = name => {
  const findedEmployee = employees.find(employee => employee.name === name);
  if (typeof findedEmployee.date === 'string') {
    findedEmployee.date = moment(findedEmployee.date, DATE_FORMAT_COMPLETE);
    findedEmployee.update_Up = moment();
  }
};

const sumDiffDate = () => {};

const a = moment('2010-10-20');
const b = moment('2010-10-20');

setDateEmployee('Luis');
setDateEmployee('Luis');
console.log('employees: ', employees);
