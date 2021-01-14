module.exports.alkoGun = (robot, message, args) => {
  const DRINKS_PLACE = {
    PITNICA: [
      'Хреновица',
      'Клюковка',
      'Облепиховица',
      'Вишневица',
      'Смородиновица',
      'Сливочница',
      'Медовица',
      'Луговица',
      'Абрикосовица'
    ]
  };

  let drink = DRINKS_PLACE.PITNICA[Math.floor(Math.random() * DRINKS_PLACE.PITNICA.length)];

  console.log('alkoGun');
  console.log(robot);
  console.log(message);
  message.channel.send(`Начать Вакханалию!`);
  message.channel.send(`Твой напиток: ${drink}`);
};
