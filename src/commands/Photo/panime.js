const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "panime",
      desc: "Gets an Animes Photos",
      usage: "[p]panime",
      category: "Photo",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const photo = [
"https://media.discordapp.net/attachments/712137138241798217/829453555751976990/33b5b5728aafcb5f391824d00661d645.png?width=508&height=508",
"https://media.discordapp.net/attachments/712137138241798217/830182946694103091/e0a50352bd08e83340d3151ecc8c7590.jpg?width=580&height=580",
"https://media.discordapp.net/attachments/712137138241798217/831557382873677824/image0-2.jpg?width=535&height=580",
"https://media.discordapp.net/attachments/712137138241798217/831557417509584946/image0-1.jpg?width=836&height=450",
"https://media.discordapp.net/attachments/712137138241798217/831557433779290132/image0.jpg?width=960&height=528",
"https://media.discordapp.net/attachments/712137138241798217/831557453191446629/image3.jpg?width=960&height=540",
    ]
   let photos = photo[Math.floor(Math.random() * photo.length)]
    return message.channel.send(new Discord.MessageEmbed().setTitle("Animes Photos").setImage(photos))
  }
};
