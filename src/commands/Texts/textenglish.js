const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super({
      name: "textenglish",
      desc: "English Qoutes!",
      category: "Texts",
      aliases: [],
      usage: "[p]textenglish",
      memberPerm: [],
      botPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
const en = [
    'It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.',
    'The fool doth think he is wise, but the wise man knows himself to be a fool.',
    'Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect)',
    'When someone loves you, the way they talk about you is different. You feel safe and comfortable.',
    'Knowing yourself is the beginning of all wisdom.',
    'The only true wisdom is in knowing you know nothing.',
    'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.',
    'Count your age by friends, not years. Count your life by smiles, not tears.',
    'Hold fast to dreams, if dreams die, Life is a broken-winged bird, That cannot fly.',
    'In a good bookroom you feel in some mysterious way that you are absorbing the wisdom contained in all the books through your skin, without even opening them.',
    'May you live every day of your life.',
    'Never laugh at live dragons.',
    'It is the mark of an educated mind to be able to entertain a thought without accepting it.',
    'The secret of life, though, is to fall seven times and to get up eight times.',
    'Any fool can know. The point is to understand.',
    'If you\'re reading this..., Congratulations, you\'re alive., If that\'s not something to smile about, then I don\'t know what is.',
    'Think before you speak. Read before you think.',
    'Never let your sense of morals prevent you from doing what is right.',
    'The unexamined life is not worth living.',
    'Turn your wounds into wisdom.',
    'The simple things are also the most extraordinary things, and only the wise can see them.',
    'There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.',
    'By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.',
    'It\'s a dangerous business, Frodo, going out your door. You step onto the road, and if you don\'t keep your feet, there\'s no knowing where you might be swept off to.',
    'Angry people are not always wise.',
    'You do not write your life with words...You write it with actions. What you think is not important. It is only important what you do.',
    'Let no man pull you so low as to hate him.',
    'It is amazing how complete is the delusion that beauty is goodness.'
]

   
      const wisdom = getWisdom(en
        )
    return message.channel.send(`English Qoutes:\n${wisdom}`)
    
    }};

function getWisdom(wisdoms) {
    return wisdoms[Math.floor(Math.random() * wisdoms.length)]
}
