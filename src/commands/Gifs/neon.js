const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "neon",
      desc: "Gets an neon Gifs",
      usage: "[p]neon",
      category: "Gifs",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
  const gif = [
     "https://media.discordapp.net/attachments/755890505681731714/833867724362481684/image0-1.gif?width=238&height=238",
    "https://media.discordapp.net/attachments/755890505681731714/833821292637192252/213123-1.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833797136809197668/32.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833797128920236132/15.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833797113057116200/selishaneongif.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833797121579679804/0_320.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833797117952524298/Zenard_14.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833797099027562546/Neon_3.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833797093277696020/neon.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833797087106826270/n3.gif?width=86&height=86",
    "https://media.discordapp.net/attachments/755890505681731714/833797085832413244/image0.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833754511503523870/a_5c4eec61f80bc5c6966cef5d6b19050e.gif?width=115&height=115",
    "https://media.discordapp.net/attachments/755890505681731714/833736133107908648/image0.gif?width=115&height=115"
  ]
   let gifs = gif[Math.floor(Math.random() * gif.length)]
    return message.channel.send(new Discord.MessageEmbed().setTitle("Neon Gifs").setImage(gifs))
  }
};
