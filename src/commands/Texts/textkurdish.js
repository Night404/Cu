const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super({
      name: "textkurdish",
      desc: "Kurdish Qoutes!",
      category: "Texts",
      aliases: [],
      usage: "[p]textkurdish",
      memberPerm: [],
      botPerm: [],
      examples: []
    });
  }

  async run(client, message, args) {
const ku = [
    'Çêtir e ku meriv li hember xetera ku meriv pûç were fikirîn bêdeng bimîne, ji axaftin û gumana jê derxîne çêtir e.',
    'Ehmeq difikire ku ew şehreza ye, lê mirovê zana xwe bi bêaqilî dizane.',
    'Kengê ku hûn xwe li kêleka pirraniyê bibînin, ew dem e ku reformê bikin (an bisekinin û bifikirin)',
    'Gava ku yek ji we hez dike, awayê ku ew li ser we diaxifin cûda ye. Hûn xwe ewle û rehet hîs dikin. ',
    'Nasîna xwe destpêka her şehrezayî ye.',
    'Tenê şehrezayiya rastîn ew e ku hûn dizanin ku hûn tiştek nizanin.',
    'Ya nuha ya herî xemgîn a jiyanê ew e ku zanist ji civakek aqil zûtir zanînê berhev dike.',
    'Temenê xwe ji hêla hevalan ve, ne salan bihesibînin. Jiyana xwe bi bişirîn, ne bi hêsirên xwe bijmêrin. ',
    'Xwe bi xewnên xwe bigire, heke xewn bimirin, Jiyan teyrekî şikestî ye, Ku nikare bifire.',
    'Di pirtûkxaneyek baş de hûn bi rengek razdar hest dikin ku hûn şehrezayiya ku di hemî pirtûkan de heye, bi çermê xwe vedihewînin, bêyî ku ew jî vekin.',
    'Bila tu her roj ji jiyana xwe bijî.',
    'Qet li ejderhayên zindî nekenin.',
    'Ew nîşana hişmendiyek xwendî ye ku bêyî ku ew ramanek bipejirîne dikare kêfxweş bike.',
    'Sekera jiyanê, her çend heft caran ket û heşt caran rabe ye.',
    'Her ehmeq dikare zanibe. Armanc fêhmkirin e. ',
    'Heke hûn vê dixwînin ..., Pîrozbahî, hûn zindî ne., Ger ew ne tiştek ku pê bişirî, wê hingê ez nizanim çi ye.',
    'Berî ku hûn biaxifin bifikirin. Berî ku hûn difikirin bixwînin. ',
    'Qet nebe ku hesta weya exlaqî rê li ber kirina ya rast bigire.',
    'Jiyana nevekolî ne hêja ye ku were jiyîn.',
    'Birînên xwe veguherînin aqil.',
    'Tiştên hêsan di heman demê de tiştên herî awarte ne, û tenê aqilmend dikare wan bibîne.',
    'Sê tişt hene ku hemî aqilmend jê ditirsin: Behra bahoz, şevek bê heyv û hêrsa mirovekî nerm.',
    'Bi sê rêbazan em dikarin hîkmet fêr bibin: Ya yekem, bi ramanê, ya ku herî hêja ye; Ya duyemîn, bi teqlîdê, ku hêsantir e; û sêyemîn ji hêla ezmûnê ve, ku ya herî tirş e. ',
    'Ew karsaziyek xeternak e, Frodo, derket deriyê te. Hûn davêjin ser rê, û heke hûn lingên xwe nehêlin, li wir hûn nizanin ku hûn ê werin rakirin. ',
    'Mirovên hêrs her gav ne jîr in.',
    'Hûn jiyana xwe bi peyvan nanivîsin ... Hûn bi çalakiyan dinivîsin. Ya ku hûn difikirin ne girîng e. Ya ku hûn dikin tenê girîng e. ',
    'Bila tu kes we ew qas nizm nekişîne ku ji wî nefret bike.',
    'Ecêb e ku xapandina ku bedewî qencî ye çiqas temam e.'
]

   
      const wisdom = getWisdom(ku
        )
    return message.channel.send(`Kurdish Qoutes:\n${wisdom}`)
    
    }};

function getWisdom(wisdoms) {
    return wisdoms[Math.floor(Math.random() * wisdoms.length)]
}
