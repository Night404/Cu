const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js")
const moment = require("moment")
const region = {
      brazil: ":flag_br: Brazil",
      "eu-central": ":flag_eu: Central Europe",
      singapore: ":flag_sg: Singapore",
      "us-central": ":flag_us: U.S. Central",
      sydney: ":flag_au: Sydney",
      "us-east": ":flag_us: U.S. East",
      "us-south": ":flag_us: U.S. South",
      "us-west": ":flag_us: U.S. West",
      "eu-west": ":flag_eu: Western Europe",
      "vip-us-east": ":flag_us: VIP U.S. East",
      london: ":flag_gb: London",
      amsterdam: ":flag_nl: Amsterdam",
      hongkong: ":flag_hk: Hong Kong",
      russia: ":flag_ru: Russia",
      southafrica: ":flag_za:  South Africa",
      europe: ":flag_eu: Europe" };
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super({
    name: "server",
    desc: "Shows The Server Informations",
    category: "General",
    aliases: [],
    memberPerm: [],
    botPerm: [],
             
    });
  }

  async run(client, message, args) {
  const server = client.guilds.cache.get(args[0]) || message.channel.guild;
const total = server.memberCount;
const online = server.members.cache.filter(m => m.status === "online").size;
const idle = server.members.cache.filter(m => m.status === "idle").size;
const dnd = server.members.cache.filter(m => m.status === "dnd").size;
const offline = (total - (dnd + idle + online));
message.channel.send({embed: new Discord.MessageEmbed()
.setColor(message.guild.me.displayColor || "#AB8700")
.setThumbnail(server.iconURL({format: 'png', dynamic: true, size:1024}))
.setAuthor(`${server.name}'s information`, server.iconURL({dynamic: true, format:"png"}))
.addField(" Server Name:",server.name)
.addField(" Server ID:",server.id)
.addField("Creator of the server:",server.owner.user.tag)
.addField(" Creator ID:",server.ownerID)
.addField("Humans",`${server.members.cache.filter(member => !member.bot).size}`)
.addField("Bots",`${server.members.cache.filter(member => member.user.bot).size}`)
.addField(" All Members", total)
.addField(" Channels:",`Text: ${server.channels.cache.filter(m => m.type == "text").size} | Voice: ${server.channels.cache.filter(m => m.type == "voice").size}`)
.addField(":flag_eu: Server region",`${region[server.region] ? region[server.region] : server.region}`)
.addField(" Server creation date:",`${moment.utc(new Date(server.createdAt)).format("YYYY/MM/DD, HH:mm a")} | ${moment(new Date(server.createdAt), "YYYYMMDD").fromNow()}`)                       .setTimestamp()
.setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())});

  
  
  }
};
