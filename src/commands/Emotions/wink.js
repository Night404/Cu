const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");


module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super({
      name: "wink",
      category: "Emotions"
    });
  }

  async run(client, message, args) {
  const superagent = require('superagent');

       let { body } = await superagent.get(`https://some-random-api.ml/animu/wink`);
        const embed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setTitle("Here's your Wink 😉 ")
          .setImage(body.link)
        message.channel.send(embed);
      };
}