const BaseCommand = require("../../utils/structures/BaseCommand");
const { parse } = require("twemoji-parser");
const Discord = require("discord.js");

module.exports = class Emojiadd extends BaseCommand {
  constructor() {
    super({
      name: "emoji",
      desc: "Shows a emojis",
      usage: "[p]emojislist",
      category: "Emojis",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    let customemoji = Discord.Util.parseEmoji(
      client.emojis.cache.random().name
    );
      const link = `https://cdn.discordapp.com/emojis/${client.emojis.cache.random().id}.${client.emojis.cache.random().animated ? "gif" : "png"}`;
console.log(link);
    return message.channel.send(new Discord.MessageEmbed().setTitle("Emojis").setImage(link));
    }
  
};
