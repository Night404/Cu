const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");


module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super({
      name: "cat",
      category: "Emotions"
    });
  }

  async run(client, message, args) {
  const superagent = require('superagent');

  
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://api.thecatapi.com/v1/images/search").then(x =>{
              const embed = new Discord.MessageEmbed()
              .setTitle("Here's your Hug, 🤗")
          .setDescription(`${victim} is hugged by ${message.author}`)
          .setImage(x[0].url)
           .setTimestamp()
      
        message.channel.send(embed);   
          })};
}