const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "aesthetic",
      desc: "Gets an aesthetic Gifs",
      usage: "[p]aesthetic",
      category: "Gifs",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const gif = [
      "https://media.discordapp.net/attachments/699341228218646628/828189271755456542/371b5f463e28fc34e435e8d83c2d56bc_-_Kopya.gif?width=230&height=230",
      "https://media.discordapp.net/attachments/699341228218646628/827983118895546448/73bc702218d99efacce82a19754e26ee.gif?width=450&height=337",
      "https://media.discordapp.net/attachments/699341228218646628/827983025295982702/7a3d8f0cfae10bfc062d72a34392ea64.gif?width=336&height=190",
      "https://media.discordapp.net/attachments/699341228218646628/827983010452078614/1f8f3975b69c4903d275093c3aec1fbf.gif?width=450&height=338",
      "https://media.discordapp.net/attachments/699341228218646628/827979199561465906/e3b834390157075f78c5e48772ff6342.gif?width=522&height=522",
      "https://media.discordapp.net/attachments/699341228218646628/827978995081281536/smoke26.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/699341228218646628/827978836016627722/62589717027f531a1765fbef13f71aa5.gif?width=486&height=486",
      "https://media.discordapp.net/attachments/699341228218646628/827978905485967370/40ec193943499cb7de10b7f3522cd5e7.gif?width=225&height=225",
      "https://media.discordapp.net/attachments/699341228218646628/826589709982629948/a_d1a361663ebe4fcd508f7f9a7adb911f.gif?width=230&height=230"
    ];
    let gifs = gif[Math.floor(Math.random() * gif.length)];
    return message.channel.send(
      new Discord.MessageEmbed().setTitle("Aesthetic Gifs").setImage(gifs)
    );
  }
};
