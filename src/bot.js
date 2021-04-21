const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: "everyone" });
const settings = require("./settings.js");
const gifs1 = require("./gifs.js");
const photos1 = require("./photos.js");

const { Collection, Client, MessageEmbed } = require("discord.js");
const { registerCommands, registerEvents } = require("./utils/registry");
const { Database } = require("quickmongo");
const db = new Database(settings.mongoDB);
(async () => {
  client.commands = new Collection();
  client.aliases = new Collection();
  client.events = new Collection();
  client.settings = settings;
  client.db = db

  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.login(client.settings.Token);
  
})();
setInterval(async function () {
let randomgif = await db.startsWith(`randomg`)
let timeout = 5000 //- الوقت
for (let i = 0; i < randomgif.length; i++) {
let user = client.guilds.cache.get(randomgif[i].ID.split('_')[1]);   
if(user){
let { channel, gif, enabled } = await db.fetch(`randomg_${user.id}`)
if(!channel) return;/////
let gifs = gifs1[Math.floor(Math.random() * gifs1.length)];
client.guilds.cache.forEach(async guild =>{
let gif1 = await db.fetch(`randomgt_${guild.id}`)
if(gif1 === null) gif1 = false;
if(gif1 == true) {
let FindG = channel
if(!FindG) return;
if(FindG){
let FindC = client.channels.cache.get(FindG)
if(FindC){

FindC.send(gifs)
}}
}
})

}}
}, 10000)
// photos
setInterval(async function () {
let randomgif = await db.startsWith(`randomp`)
let timeout = 5000 //- الوقت
for (let i = 0; i < randomgif.length; i++) {
let user = client.guilds.cache.get(randomgif[i].ID.split('_')[1]);   
if(user){
let { channel, photos, enabled } = await db.fetch(`randomp_${user.id}`)
if(!channel) return;/////
let photos2 = photos1[Math.floor(Math.random() * photos1.length)];
client.guilds.cache.forEach(async guild =>{
let gif1 = await db.fetch(`randompt_${guild.id}`)
if(gif1 === null) gif1 = false;
if(gif1 == true) {
let FindG = channel
if(!FindG) return;
if(FindG){
let FindC = client.channels.cache.get(FindG)
if(FindC){
FindC.send(photos2)
}}
}
})

}}
}, 10000)

