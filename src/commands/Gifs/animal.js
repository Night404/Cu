const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "animal",
      desc: "Gets an Animal Gifs",
      usage: "[p]animal",
      category: "Gifs",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const gif = [
      "https://media.discordapp.net/attachments/608711488806584330/833825248154878042/giphy_2.gif?width=270&height=270",
      "https://media.discordapp.net/attachments/608711488806584330/833652912219357184/monkee-1.gif?width=180&height=180",
      "https://media.discordapp.net/attachments/608711488806584330/833146199036657724/catdenz.gif?width=432&height=428",
      "https://media.discordapp.net/attachments/608711488806584330/832917963061461042/291359420049201.gif?width=589&height=580",
      "https://media.discordapp.net/attachments/608711488806584330/832663304080982036/0bf392cd6d8984798695802b0961dbad.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/608711488806584330/832490931013287946/Enes_Acar_GIF_30.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/608711488806584330/832340603270332466/7.gif?width=135&height=135",
      "https://media.discordapp.net/attachments/608711488806584330/832189096306278430/791333133781172235.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/608711488806584330/831808425826320414/10.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/608711488806584330/831808422617022464/2.gif?width=286&height=218",
      "https://media.discordapp.net/attachments/608711488806584330/831808419904225300/ENES_ACAR_GIF_175.gif?width=162&height=162",
      "https://media.discordapp.net/attachments/608711488806584330/831808409358565416/9.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/608711488806584330/831808386609315850/3.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/608711488806584330/831808341117763654/4.gif?width=81&height=81",
      "https://media.discordapp.net/attachments/608711488806584330/831722545455431700/image0-2.gif?width=115&height=115"
    ];
    let gifs = gif[Math.floor(Math.random() * gif.length)];
    return message.channel.send(
      new Discord.MessageEmbed().setTitle("Animal Gifs").setImage(gifs)
    );
  }
};
