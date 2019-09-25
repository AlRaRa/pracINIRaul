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

const sumDates = (date, unitTimes) => {};

const setDateEmployee = name => {};

const sumDiffDate = () => {};

const a = moment('2010-10-20');
const b = moment('2010-10-20');

diffDates(a, b);
