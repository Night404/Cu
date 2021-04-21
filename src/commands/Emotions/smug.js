const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
const AmeClient = require("amethyste-api");
const AmeAPI = new AmeClient(
  "cbc0dc74aa2c77fe906be96cf4a15142bbc94ad8be23986b097806bf1a9d1295b383f31e6212673099be0e934bba4ec32c95585ca46827bb83de1c4d41080d48"
);

module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super({
      name: "smug",
      category: "Emotions"
    });
  }

  async run(client, message, args) {
    const nekos = require("nekos.life");
    const {
      sfw: { smug }
    } = new nekos();

      const { url } = await smug().catch(() => {});

      if (!url) return message.channel.send(`Could not connect to nekos.life`);
     let user = message.mentions.users.first()
      const embed = new Discord.MessageEmbed();
  if(user){
      return message.channel.send(
          embed
            .setColor("YELLOW")
            .setImage(url)
            .setDescription(`${user} Smugs by ${message.author.tag}`)
        );
      } else {
        return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("Smugs")
                                    .setImage(url));
    };
}};
