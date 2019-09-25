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
    date: '11/01/2017 -- 10:30:00',
    update_Up: ''
  },
  {
    name: 'Perico',
    money: 1200,
    timezone: 'Europe/Madrid',
    date: '12/01/2017 -- 01:30:00',
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

const sumDiffDate = () => {
  setAllDateMoment();
  return getAllDifferences().reduce((acc, current) => acc + current) + ' days';
};

const setAllDateMoment = () => {
  employees.map(({ name }) => setDateEmployee(name));
};

const getAllDifferences = () => {
  let nameExcludes = [];
  let diffsDates = [];
  employees.map(({ name, date }) => {
    nameExcludes = [...nameExcludes, name];
    diffsDates = [
      ...diffsDates,
      ...getDifferencesWithOther(date, nameExcludes)
    ];
  });
  return diffsDates;
};

const getDifferencesWithOther = (date, nameExcludes) => {
  return findEmployeesToCompare(nameExcludes).map(({ date: date2 }) =>
    Math.round(Math.abs(date.diff(date2, 'days', true)))
  );
};

const findEmployeesToCompare = employeesExcludesToCompare =>
  employees.filter(
    employee => !employeesExcludesToCompare.find(name => name === employee.name)
  );

console.log('sum: ', sumDiffDate());
