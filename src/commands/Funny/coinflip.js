const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
const AmeClient = require("amethyste-api");
const AmeAPI = new AmeClient("cbc0dc74aa2c77fe906be96cf4a15142bbc94ad8be23986b097806bf1a9d1295b383f31e6212673099be0e934bba4ec32c95585ca46827bb83de1c4d41080d48");

module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super({
    name: "coinflip",
    category: "Funny"
    });
  }

  async run(client, message, args) {
    let flip = ["Heads","Tails","Center"]
   let number = flip[Math.floor(Math.random() * 3)];
            message.channel.send( new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Coins Is")
            .setThumbnail(message.author.avatarURL())
            .setDescription(`${number}`))
          
        }
};