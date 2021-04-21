const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class SupportCommand extends BaseCommand {
  constructor() {
    super({
      name: "support",
      desc: "Gets an server link of the bot support",
      usage: "[p]invite",
      category: "General",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    let invite = client.config.support
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`You can join my bot support server ? [click here](${invite})`)
        .setColor("GREEN")
    );
  }
};
