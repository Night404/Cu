const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "panimal",
      desc: "Gets an Animals Photos",
      usage: "[p]panimal",
      category: "Photo",
      aliases: [],
      botPerm: [],
      memberPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
    const photo = [
    "https://media.discordapp.net/attachments/608711490223996995/833885672115929118/images_7.jpeg?width=499&height=499",
      "https://media.discordapp.net/attachments/608711490223996995/833885671957331989/images_10.jpeg?width=499&height=499",
      "https://media.discordapp.net/attachments/608711490223996995/833885671806599168/images_11.jpeg?width=499&height=499",
      "https://media.discordapp.net/attachments/608711490223996995/833885671633846282/images_8.jpeg?width=510&height=487",
      "https://media.discordapp.net/attachments/608711490223996995/833885671306428436/images_12.jpeg?width=508&height=489",
      "https://media.discordapp.net/attachments/608711490223996995/833659742383374347/Z.png?width=219&height=186",
      "https://media.discordapp.net/attachments/608711490223996995/833325874082218004/image7.png?width=212&height=265",
      "https://media.discordapp.net/attachments/608711490223996995/833135088833265714/How_can_you_say_no_.jpeg?width=435&height=580",
      "https://media.discordapp.net/attachments/608711490223996995/833022431295307806/indir_14.jpg?width=202&height=202",
      "https://media.discordapp.net/attachments/608711490223996995/833003741056729204/Make_Some_Tough_Restaurant_Decisions_And_Well_Tell_You_Which_Cute_Baby_Animal_You_Are.jpg?width=386&height=579",
      "https://media.discordapp.net/attachments/608711490223996995/832947000202362880/caeeeed6a5e8af715e00c1703c7daf88.jpg?width=212&height=378"
    ]
   let photos = photo[Math.floor(Math.random() * photo.length)]
    return message.channel.send(new Discord.MessageEmbed().setTitle("Animal Photos").setImage(photos))
  }
};
