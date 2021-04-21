const BaseCommand = require("../../utils/structures/BaseCommand");
const { parse } = require("twemoji-parser");
const Discord = require("discord.js");

module.exports = class Emojiadd extends BaseCommand {
  constructor() {
    super({
      name: "showemoji",
      desc: "Shhow a given Emoji",
      usage: "[p]show <emoji>",
      category: "Emojis",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
 const emoji = args[0];
        if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

        let customemoji = Discord.Util.parseEmoji(emoji);
        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"
                }`;
            try {
               
                return message.channel.send(new Discord.MessageEmbed().setTitle(customemoji.name).setURL(Link).setImage(Link))
            } catch (err) {
                console.log(err)
                return message.channel.send(`An error has occured!\n${err.message}`)
           
            }
        } else {
          return message.channel.send("I cant give you a photo for normal discord emotes")
        }

  }
};
