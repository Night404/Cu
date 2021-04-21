const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "anime",
      desc: "Gets an Anime Gifs",
      usage: "[p]anime",
      category: "Gifs",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const gif = [
     "https://media.discordapp.net/attachments/712137181027893249/830938582897131540/316f0dd2dbf04ebf8198ef9a5467ff67.gif?width=486&height=274",
     "https://media.discordapp.net/attachments/712137181027893249/830938583594041344/6317a4ba9f38c7fd9917f5103e5e4f7d.gif?width=486&height=274",
     "https://media.discordapp.net/attachments/712137181027893249/830938585770622976/5622238b635ce9b23ff7254130653b05.gif?width=486&height=274",
     "https://media.discordapp.net/attachments/712137181027893249/830938586588643338/973be190c10ba51590bca08a4a55171e.gif?width=720&height=405",
     "https://cdn.discordapp.com/attachments/712137181027893249/830938695430963250/3b91ad349538b5b56c2b9bd47341faa6.gif",
     "https://media.discordapp.net/attachments/712137181027893249/830938696417017906/d4b22bf78ff3c0783b7cd27da14247a7.gif?width=540&height=304",
     "https://cdn.discordapp.com/attachments/712137181027893249/830938694688440390/6438d0783823fd21ba3017f2b3b008ca.gif"
    ]
   let gifs = gif[Math.floor(Math.random() * gif.length)]
    return message.channel.send(new Discord.MessageEmbed().setTitle("Anime Gifs").setImage(gifs))
  }
};
