const BaseCommand = require("../../utils/structures/BaseCommand");
const { parse } = require("twemoji-parser");
const Discord = require("discord.js");

module.exports = class Emojiadd extends BaseCommand {
  constructor() {
    super({
      name: "emojislist",
      desc: "Shows a emojis list in the server",
      usage: "[p]emojislist",
      category: "Emojis",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;

    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new Discord.MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name} | Emojis [${OverallEmojis}] `)
      .setDescription(
        `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}`
      )

    if (Embed.length > 2000) {
      return message.channel.send(
        `I'm sorry but, my limit is 2000 characters only!`
      );
    } else {
      message.channel.send(Embed);
    }

  }
};
