const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "avatar",
      desc: "Shows (Someone/Your/Server) Avatar",
      usage: "[p]avatar <user/server>",
      category: "General",
      aliases: ["icon"],
      botPerm:[],
      memberPerm:[],
      examples:["{user}","server"],
      
    });
  }

  async run(client, message, args) {
    if (args[0] && args[0].toLowerCase() === "server") {
      let g1g = message.guild.iconURL({
        dynamic: true,

        size: 2048,

        format: "png"
      });

      if (g1g === null) g1g = "https://cdn.discordapp.com/embed/avatars/1.png";

      let embed = new Discord.MessageEmbed()

        .setColor("#00FF6C")

        .setAuthor(`${message.guild.name}`, g1g)

        .setTitle(`Avatar Link`)

        .setURL(g1g)

        .setImage(g1g)

        .setFooter(
          `Requested By: ${message.author.tag}`,

          message.author.avatarURL({ dynamic: true })
        );

      message.channel.send(embed);
    } else {
    let hh = message.content

      .split(" ")

      .slice(1)

      .join(" ");
    let user;

    if (!args[0]) user = message.author;

    if (!user) user = message.mentions.users.first();
  if (!user)
      return message.channel.send(
        'Missing argument, the "user" argument is required'
      );
    let g1g = user.displayAvatarURL({
      dynamic: true,

      size: 2048,

      format: "png"
    });

    if (g1g === null) g1g = "https://cdn.discordapp.com/embed/avatars/1.png";

    let embed = new Discord.MessageEmbed()

      .setColor("#00FF6C")

      .setAuthor(`${user.tag}`, g1g)

      .setImage(g1g)

      .setFooter(
        `Requested By: ${message.author.tag}`,

        message.author.avatarURL({ dynamic: true })
      );

    message.channel.send(embed);
  }}
};
