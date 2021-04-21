const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");


module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super({
      name: "waifu",
      category: "Emotions"
    });
  }

  async run(client, message, args) {
  const superagent = require('superagent');

        try {
            superagent
              .get("https://nekos.life/api/v2/img/waifu")
              .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle("Here's your Waifu")
                  .setDescription(message.author.toString())
                  .setImage(response.body.url)
                  .setColor("GREEN")
                message.channel.send(embed);
              })
              .catch(err =>
                message.channel.send({
                  embed: {
                    color: "#CF1919",
                    description: "Something went wrong... :cry:"
                  }
                })
              );
            }catch(err){
              console.log(err)
            }
    };
}