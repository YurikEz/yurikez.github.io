module.exports.alkoHelp = (robot, message, args) => {
  message.channel.send('ПОМОЩЬ:');
  args.commands.forEach((command) => {
    if (command.name !== 'alkoHelp') {
      message.channel.send(`!${command.name} - ${command.about}`);
    }
  });
};
