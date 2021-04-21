const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "pboy",
      desc: "Gets an Boys Photos",
      usage: "[p]pboy",
      category: "Photo",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const photo = [
    "https://media.discordapp.net/attachments/706994997865480212/830823139843375144/4c56a4e58c7f48d9a03e181e528e6bbc.jpg?width=212&height=211",
    "https://media.discordapp.net/attachments/706994997865480212/830822888037941288/ca4564ad65a9943a3ddd272aedb9bd01.png?width=270&height=270",
    "https://media.discordapp.net/attachments/706994997865480212/830822804378746920/7e8ed403f17ed0042caa139dc5ee4eca.png?width=367&height=367",
    "https://media.discordapp.net/attachments/706994997865480212/829125725566664715/image2-9.jpg?width=585&height=547",
    "https://media.discordapp.net/attachments/706994997865480212/827285983455084614/image0-7.jpg?width=382&height=384",
    ]
   let photos = photo[Math.floor(Math.random() * photo.length)]
    return message.channel.send(new Discord.MessageEmbed().setTitle("Boy Photos").setImage(photos))
  }
};
