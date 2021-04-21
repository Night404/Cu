const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "invite",
      desc: "Gets an invite link of the bot",
      usage: "[p]invite",
      category: "General",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    let invite = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`You can invite my bot ? [click here](${invite})`)
        .setColor("GREEN")
    );
  }
};
