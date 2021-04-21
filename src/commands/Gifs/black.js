const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "black",
      desc: "Gets an Black Gifs For Boys or Girls",
      usage: "[p]black",
      category: "Gifs",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const gif = [
      "https://media.discordapp.net/attachments/757155993124732928/787286222069694464/image0.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/757155993124732928/791680852089372672/image0.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/695037544609480784/809018086505709568/R5UR6XA.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/695037544609480784/807339885320470608/Zeyrox_64.gif?width=115&height=115",
    ]
   let gifs = gif[Math.floor(Math.random() * gif.length)]
    return message.channel.send(new Discord.MessageEmbed().setTitle("Black Gifs").setImage(gifs))
  }
};
