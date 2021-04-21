const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "baby",
      desc: "Gets an Baby Gifs",
      usage: "[p]baby",
      category: "Gifs",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const gif = [
     "https://media.discordapp.net/attachments/699339066029768796/833798422720413706/751919742100701234.gif?width=103&height=102",
      "https://media.discordapp.net/attachments/699339066029768796/833826644736213043/giphy_6.gif?width=265&height=200",
      "https://media.discordapp.net/attachments/699339066029768796/833798411924537375/taki_babygif46.gif?width=103&height=106",
      "https://media.discordapp.net/attachments/699339066029768796/833798411924537375/taki_babygif46.gif?width=103&height=106",
      "https://media.discordapp.net/attachments/699339066029768796/833798412171608064/20210325_023128.gif?width=81&height=72",
      "https://media.discordapp.net/attachments/699339066029768796/833798372321525790/image6.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/699339066029768796/833798371231531088/image0-2.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/699339066029768796/833798366877974559/d57adfc7523334b174ed884670c02616.gif?width=201&height=270",
      "https://media.discordapp.net/attachments/699339066029768796/833798342664126464/baby_23.gif?width=86&height=86",
      "https://media.discordapp.net/attachments/699339066029768796/833798334380113920/asdasdasdasdasdasdasd.gif?width=90&height=90"
    ];
    let gifs = gif[Math.floor(Math.random() * gif.length)];
    return message.channel.send(
      new Discord.MessageEmbed().setTitle("Baby Gifs").setImage(gifs)
    );
  }
};
