const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "pcouple",
      desc: "Gets an Couples Photos",
      usage: "[p]pcouple",
      category: "Photo",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const photo = [
      "https://media.discordapp.net/attachments/608711481969868811/833864066010972170/image0.jpg?width=270&height=270",
      "https://media.discordapp.net/attachments/608711481969868811/833864042904420393/image0.jpg?width=270&height=270",
      "https://media.discordapp.net/attachments/608711481969868811/833828211774980136/b85c94871c30ae80b2ec872c70672014.jpg?width=589&height=580",
      "https://media.discordapp.net/attachments/608711481969868811/833828200038793226/0911509cce7a0dba10a1ff4f000e9fd4.jpg?width=594&height=579",
      "https://media.discordapp.net/attachments/608711481969868811/833788146645860372/Ekran_Alnts13.PNG?width=535&height=532",
      "https://media.discordapp.net/attachments/608711481969868811/833788132142219364/image0-1.jpg?width=277&height=270",
      "https://media.discordapp.net/attachments/608711481969868811/833780579921166356/Screenshot_2021-04-19-21-49-51-55.jpg?width=643&height=579",
      "https://media.discordapp.net/attachments/608711481969868811/833778727510474872/geceleyelim_161884102371238.jpg?width=580&height=580",
      "https://media.discordapp.net/attachments/608711481969868811/833724944939483176/image0.jpg?width=580&height=580"
    ];
    let photos = photo[Math.floor(Math.random() * photo.length)];
    return message.channel.send(
      new Discord.MessageEmbed().setTitle("Couple Photos").setImage(photos)
    );
  }
};
