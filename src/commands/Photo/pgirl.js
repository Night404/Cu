const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "pgirl",
      desc: "Gets an Girls Photos",
      usage: "[p]pgirl",
      category: "Photo",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const photo = [
    "https://media.discordapp.net/attachments/706995046326599790/830828600121884723/207fb4b524a702fe2bb7a2b049c8d436.jpg?width=382&height=384",
    "https://media.discordapp.net/attachments/706995046326599790/830828565154627594/image0-5.jpg?width=588&height=581",
    "https://media.discordapp.net/attachments/706995046326599790/830828555084365874/9ca5a9386be433d7648aebb11d7d35f1.jpg?width=418&height=580",
    "https://media.discordapp.net/attachments/706995046326599790/830827467815780422/3e80864c6dad426924b0430701e1907f.jpg?width=580&height=580",
    "https://media.discordapp.net/attachments/706995046326599790/830827331731062874/167626118_1139978279782389_5306335964190276331_n.jpg?width=508&height=508",
    ]
   let photos = photo[Math.floor(Math.random() * photo.length)]
    return message.channel.send(new Discord.MessageEmbed().setTitle("Girls Photos").setImage(photos))
  }
};
