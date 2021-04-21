const BaseCommand = require("../../utils/structures/BaseCommand");

const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super({
      name: "random",
      desc: "Set up for random sends a gifs/photos",
      usage: "[p]random",
      category: "General",
      aliases: [],
      botPerm: [],
      memberPerm: ["MANAGE_GUILD"],
      examples: []
    });
  }

  async run(client, message, args) {
if(!args[0]) return message.channel.send(`\`${client.settings.Prefix}random gif #channel\`: for set random sending gifs\n\`${client.settings.Prefix}random photos #channel\`: for set random sending photos`)
    // gifs 
if(args[0] && args[0].toLowerCase() === "gif"){
let channels = message.mentions.channels.first();
let settings = await client.db.get(`random_${message.guild.id}`)
if(!channels) return message.reply("Mention a channel next time")
await client.db.set(`randomgt_${message.guild.id}`, true)
await client.db.set(`randomg_${message.guild.id}`, {
  gif: true,
  enabled: true,
  channel: channels.id
})
return message.channel.send(`Random Sending Gifs Are *On*`)
  // photos
} else if(args[0] && args[0].toLowerCase() === "photo"){
let channels = message.mentions.channels.first();
let settings = await client.db.get(`random_${message.guild.id}`)
if(!channels) return message.reply("Mention a channel next time")
await client.db.set(`randompt_${message.guild.id}`, true)
await client.db.set(`randomp_${message.guild.id}`, {
  photo: true,
  enabled: true,
  channel: channels.id
})
return message.channel.send(`Random Sending Photos Are *On*`)

  }}
};
