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
    success: '●●●●●100%',
    admin: 'Esta función es sólo para los administradores.!',
    botAdmin: 'El bot debe ser primero un administrador!',
    owner: 'Esta función es sólo para el owner',
    group: 'Esta función es sólo para grupos!',
    private: 'Esta función es sólo para chats privados!',
    bot: 'Esta función es sólo para bot',
    wait: '●○○○○20%',
    linkm: 'Dónde está el link?',
    error: 'Error!',
    ban: 'Has sido baneado por el owner, si quieres ser desbaneado, chatea con el owner.',
    nsfw: 'La función nsfw no ha sido activada, por favor contacte con el administrador para activarla',
    banChat: 'El bot fue baneado en este grupo, por favor contacta con el owner para desbanearlo'
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
