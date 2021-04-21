const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");


module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super({
      name: "fact",
      category: "Emotions"
    });
  }

  async run(client, message, args) {
const random = require("anime-facts");
 random.getFact().then((r) => {
      const embed = new Discord.MessageEmbed()
        .setColor("Random")
        .setTitle("Did you know?")
        .setThumbnail(
          "https://media.discordapp.net/attachments/711250719675645962/721640740136026202/uhjhyj.gif"
        )
        .setDescription(r.fact);
      message.channel.send(embed);
    });
                    
};
}