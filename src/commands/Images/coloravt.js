const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
const DIG = require("discord-image-generation");
module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super({
    name: "coloravt",
    category: "Images"
    });
  }

  async run(client, message, args) {
    if(!args[0]) return message.reply("Send a link, or mention someone")
     if (!args[0].includes("https://"))
        return message.channel.send("Please send a valid image link")
      let img = await new DIG.Greyscale().getImage(args[0])
         let attach = new Discord.MessageAttachment(img, "changed.png");;
        message.channel.send(attach)
          
        }
};