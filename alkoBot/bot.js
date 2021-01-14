const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const robot = new Discord.Client(); // Объявляем, что robot - бот
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js

const { commands } = require('./commands');

let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс

const helpMessage = 'Такой команды нет, введите !alkoHelp';

// Бот при запуске должен отправить в терминал сообщение «[Имя бота] запустился!»
robot.on("ready", () => {
  console.log(robot.user.username + " запустился!");
});

/**
 * Слушаем чат канала в discord
 */
robot.on('message', (message) => {
  if (message.content.includes(prefix) && !message.author.bot) {
    const messageCommand = message.content.replace(prefix, '');
    const wasExistsCommand = commands.find(({ name }) => name.toLowerCase() === messageCommand.toLowerCase());

    if (wasExistsCommand) {
      wasExistsCommand.out(robot, message, { commands });
    } else {
      message.channel.send(helpMessage);
    }
  }
});

// Запускаем бота
robot.login(token);
