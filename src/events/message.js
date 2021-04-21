const BaseEvent = require("../utils/structures/BaseEvent");

const Discord = require("discord.js");

const mongoose = require("mongoose");
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }

  async run(client, message) {
    if (message.author.bot) return;
   
    if (message.content.toLowerCase().startsWith(client.settings.Prefix)) {
      if (message.author.bot || message.channel.type === "dm") return;
      const args = message.content

        .slice(client.settings.Prefix.length)

        .trim()

        .split(/ +/);

      let cmd = args.shift().toLowerCase();

      const command =
        client.commands.get(cmd) ||
        client.commands.get(client.aliases.get(cmd));
      if (!command) return;
      if (command.memberPerm) {
        const requiredPermissions = message.guild.member(message.author);
        if (command.memberPerm.length !== 0) {
          if (!requiredPermissions.hasPermission(command.memberPerm))
            return message.channel.send({
              embed: new Discord.MessageEmbed()
                .setDescription(
                  `You don't have \`${command.memberPerm}\` permissions, to run this command.`
                )
                .setColor("#cf1919")
            });
        }
      }
      if (command.botPerm) {
        const requiredPermissions = message.guild.member(client.user);
        const missingPermissions = [];

        if (command.botPerm.length !== 0) {
          if (!requiredPermissions.hasPermission(command.botPerm))
            return message.channel.send({
              embed: new Discord.MessageEmbed()
                .setDescription(
                  `I don't have \`${command.botPerm}\` permissions, to run this command.`
                )
                .setColor("#cf1919")
            });
        }
      }

      if (command) {
        command.run(client, message, args);
      }
    }
  }
};
