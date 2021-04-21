const BaseEvent = require("../utils/structures/BaseEvent");

const Discord = require("discord.js");
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super("ready");
  }

  async run(client) {
   console.log("Ready!!")
  }
};
