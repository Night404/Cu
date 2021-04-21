const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super({
      name: "textarabic",
      desc: "Arabic Qoutes!",
      category: "Texts",
      aliases: [],
      usage: "[p]textarabic",
      memberPerm: [],
      botPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {

const ar = [
    'أباد الله خضراءهم ابذل لصديقك دمك ومالك',
    'اتَّكَلْنا منه على خُصٍّ الاتحاد قوة',
    'اتق شر الحليم اذا غضب',
    'اجتنب مصاحبة الكذاب فإن اضطررت إليه فلا تُصَدِّقْهُ',
    'احذر عدوك مرة وصديقك ألف مرة فإن انقلب الصديق فهو أعلم بالمضرة',
    'أحضر الناس جوابا من لم يغضب',
    'اختر أهون الشرين',
    'إذا قصرت يدك عن المكافأة فليصل لسانك بالشكر',
    'أرسل حكيما ولا توصه',
    'أرى كل إنسان يرى عيب غيره ويعمى عن العيب الذي هو فيه',
    'أشد الفاقة عدم العقل',
    'إصلاح الموجود خير من انتظار المفقود',
    'اصبر تنل',
    'الأفعال أبلغ من الأقوال',
    'أقل الناس سروراً الحسود',
    'الصحة تاج على رؤوس الأصحاء لا يراه إلا المرضى',
    'إن مع اليوم غدا يا مسعدة',
    'أول الشجرة بذرة',
    'أول الغضب جنون وآخره ندم'
] 
     const wisdom = getWisdom(ar)
     return message.channel.send(wisdom)
    
    }};
function getWisdom(wisdoms) {
    return wisdoms[Math.floor(Math.random() * wisdoms.length)]
}