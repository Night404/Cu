const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");


module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super({
      name: "pat",
      category: "Emotions"
    });
  }

  async run(client, message, args) {
  const superagent = require('superagent');

  
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/pat");
              const embed = new Discord.MessageEmbed()
              .setTitle("Here's your pat, 🤗")
          .setDescription(`${victim} is patted by ${message.author}`)
          .setImage(body.url)
      
        message.channel.send(embed);   
};
}