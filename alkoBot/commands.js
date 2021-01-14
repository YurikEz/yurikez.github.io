const { alkoHelp } = require('./commands/alkohelp');
const { alkoGun } = require('./commands/alkogun');

// Список комманд
module.exports.commands = [
  {
    name: 'alkoHelp',
    out: alkoHelp,
    about: 'Справка по командам'
  },
  {
    name: 'alkoGun',
    out: alkoGun,
    about: 'Запустить алко - вакханалию'
  },
  {
    name: 'test1',
    out: 'test1',
    about: 'test1'
  },
  {
    name: 'test2',
    out: 'test2',
    about: 'test2'
  }
];
