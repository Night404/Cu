const BaseCommand = require("../../utils/structures/BaseCommand");
const { parse } = require("twemoji-parser");
const Discord = require("discord.js");

module.exports = class Emojiadd extends BaseCommand {
  constructor() {
    super({
      name: "addemoji",
      desc: "Adds a given Emoji to the server",
      usage: "[p]addemoji",
      category: "Emojis",
      aliases: [],
      botPerm: ["MANAGE_EMOJIS"],
      memberPerm: ["MANAGE_EMOJIS"],
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
            const name = args.slice(1).join(" ");
            try {
                const Added = new Discord.MessageEmbed()
                .setTitle(`Emoji Added`)
                .setDescription(
                `Emoji Has Been Added! | Name : ${name || `${customemoji.name}`} | Preview : [Click Me](${Link})`
                    );
                await message.guild.emojis.create(
                    `${Link}`,
                    `${name || `${customemoji.name}`}`
                )
                return message.channel.send(Added)
            } catch (err) {
                console.log(err)
                return message.channel.send(`An error has occured!\n${err.message}`)
           
            }
        } else {
            let CheckEmoji = parse(emoji, { assetType: "png" });
            if (!CheckEmoji[0])
                return message.channel.send(`**Please Give Me A Valid Emoji!**`);
            message.channel.send(
                ` **You Can Use Normal Emoji Without Adding In Server!**`
            );
        }

  }
};
