const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
const moment = require("moment");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super({
      name: "user",
      desc: "Shows (Someone/Your) Informations",
      category: "General",
      aliases: [],
      memberPerm: [],
      botPerm: [],
      examples: ["{user}"]
    });
  }

  async run(client, message, args) {
    if (!args[0]) return message.reply("Mention someone!");
    const member =
      message.mentions.members.first() ||
      message.mentions.members.get(args[0]) ||
      (await message.guild.members.fetch(args[0]).catch(() => null));
    //Status
    var presence;
    if (member.presence.activities[0])
      if (member.presence.activities[0].type == "PLAYING")
        presence = `Playing ${member.presence.activities[0].name}`;
      else if (member.presence.activities[0].type == "STREAMING")
        presence = `Streaming ${member.presence.activities[0].name}`;
      else if (member.presence.activities[0].type == "CUSTOM_STATUS")
        presence = `${member.presence.activities[0].state}`;
      else presence = "Nothing";
    if (presence == undefined) presence = "Nothing";
    if (presence == null) presence = "Emojis";
    let embed = new Discord.MessageEmbed()
      .setColor("#00BFFF")
      .setThumbnail(member.avatarURL({ dynamic: true }))
      .addField(
        "Username:",
        ` ${member.username} \`(${member.id})\`                              `
      )
      .addField(
        "About:",
        `
Account Created At: \`${moment(member.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )} | ${moment(member.createdTimestamp).fromNow()}\`
Avatar: \`${member.avatarURL() ? "Yes" : "No"}\`
Bot: \`${member.bot || "No" || "Yes"}\`
User Status: \`${presence}\`
`,
        true
      )
      .setFooter(
        `Reqeusted By: ${message.author.tag}`,
        message.author.avatarURL()
      )
      .setTimestamp()
      .addField(
        "Member:",
        `
Joined At: \`${moment(member.joinedAt).format("LL LTS") +
          " (" +
          moment(member.joinedAt).fromNow() +
          ")"}\`
Highest Role: \`${
          member.roles.highest.id == message.guild.id
            ? "None"
            : Discord.Util.escapeMarkdown(member.roles.highest.name)
        }\`
              `
      );
    return message.channel.send(embed);
  }
};

