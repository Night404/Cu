const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "smoke",
      desc: "Gets an Smoke Gifs",
      usage: "[p]smoke",
      category: "Gifs",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const gif = [
      "https://cdn.discordapp.com/attachments/755893014915711047/833909709936525342/62.gif",
      "https://media.discordapp.net/attachments/755893014915711047/833709121076461648/m2.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/755893014915711047/833691816820867192/Zenard_20.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/755893014915711047/833676892783640606/tenor.gif?width=198&height=198",
      "https://media.discordapp.net/attachments/755893014915711047/833582764263342111/image1-2.gif?width=103&height=103",
      "https://media.discordapp.net/attachments/755893014915711047/828354544601399326/Man_165.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/755893014915711047/828347871945293834/image6.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/755893014915711047/828343882571841556/1-1.gif?width=103&height=103",
      "https://media.discordapp.net/attachments/755893014915711047/827983044970807306/a_1c30cde55a5aa79886d301e38f2b91c4.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/755893014915711047/827980391847428176/a_6d80af60b305af44589777b7ed6db2a8.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/755893014915711047/827980537288982529/Alkolik_Hayalet_81.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/755893014915711047/827979816376074260/a_f8cc623b877eede41bbe68abd5ad9cfa.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/755893014915711047/827979591335149618/Man_333-1.gif?width=115&height=115",
      "https://media.discordapp.net/attachments/755893014915711047/827683287438458900/8e99404b5b52bd9d8588891dd08d5dcd.gif?width=486&height=216"
    ];
    let gifs = gif[Math.floor(Math.random() * gif.length)];
    return message.channel.send(
      new Discord.MessageEmbed().setTitle("Smoke Gifs").setImage(gifs)
    );
  }
};
