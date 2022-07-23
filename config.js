//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = true // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['573225236629'] //ur owner number
global.ownername = "Abadon"
global.ytname = "IG: Anxo2077" //ur yt chanel name
global.socialm = "GitHub: Anxo2077" //ur github or insta name
global.location = "NGTS-1b" //ur location

//bot bombdy
global.botname = "Asteria-MD Bot" //ur bot name
global.websitex = "https://youtu.be/_b86lWOTgj4" //ur website
global.vidmenu = fs.readFileSync("./Resources/video/AsteriaVid.mp4") //gif and video menu
global.packname = "✨Abadon✨\n Number: +573225236629🎗\nHobby: Coding🎗\nGoal: Software Devloper🎗\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
global.author = "🔥Asteria-MD Sticker🔥"
global.themeemoji = "🐶"
global.reactmoji = "🤍"
global.ownertag = ['573225236629'] //ur owner tag
global.ownernummenu = ['573225236629'] //ur owner number in menu and all
global.watermark = "Asteria-MD Bot" //ur watermark
global.botscript = "https://github.com/Anxo2077"
global.linkz1 = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS"
global.linkz2 = "https://chat.whatsapp.com/EcycNbJFCVT5ZsG9xIGkqd"

//Bot theme media
global.thum = fs.readFileSync("./Resources/theme/AsteriaThumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Resources/theme/AsteriaThumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Resources/theme/AsteriaThumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./Resources/theme/AsteriaThumb.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','#','*','/']
global.mess = {
    success: 'Done✓',
    admin: 'This feature is only for admins!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This feature is only for owner',
    group: 'This feature is only for groups!',
    private: 'This feature is only for private chats!',
    bot: 'This feature is only for bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Nyarlathotep',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
