//════════════════════════════//

process.on('uncaughtException', console.error) //Error log
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zAbadBotInc = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { TiktokDownloader } = require('./lib/tiktokdl')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const nekosLife = require("nekos.life")
const neko = new nekosLife();
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
let { covid } = require('./lib/covid.js')
const { jadwaltv } = require('./lib/jadwaltv');
const { AbadBotIncTiktok } = require('./lib/tiktok');
const maker = require('mumaker')
const Abadkey = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireDl } = require('./lib/mediafire.js')
const {
    FajarNews,
    BBCNews,
    metroNews,
    CNNNews,
    iNews,
    KumparanNews,
    TribunNews,
    DailyNews,
    DetikNews,
    OkezoneNews,
    CNBCNews,
    KompasNews,
    SindoNews,
    TempoNews,
    IndozoneNews,
    AntaraNews,
    RepublikaNews,
    VivaNews,
    KontanNews,
    MerdekaNews,
    KomikuSearch,
    AniPlanetSearch,
    KomikFoxSearch,
    KomikStationSearch,
    MangakuSearch,
    KiryuuSearch,
    KissMangaSearch,
    KlikMangaSearch,
    PalingMurah,
    LayarKaca21,
    AminoApps,
    Mangatoon,
    WAModsSearch,
    Emojis,
    CoronaInfo,
    JalanTikusMeme,
    Cerpen,
    Quotes,
    Couples,
    Darkjokes
} = require("dhn-api");
const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
    low = require('lowdb')
} catch (e) {
    low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const {
    yta,
    ytv,
    searchResult
} = require('./lib/ytdl')
//database other
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
// Database Rpg
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))

//read database using mongodb and lowdb
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
    /https?:\/\//.test(opts['db'] || '') ?
        new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
            new mongoDB(opts['db']) :
            new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
    if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
    if (global.db.data !== null) return
    global.db.READ = true
    await global.db.read()
    global.db.READ = false
    global.db.data = {
        users: {},
        chats: {},
        database: {},
        game: {},
        settings: {},
        others: {},
        sticker: {},
        ...(global.db.data || {})
    }
    global.db.chain = _.chain(global.db.data)
}
loadDatabase()
// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))

// time (india)
const time = moment.tz('America/Bogota').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('America/Bogota').locale('id').format('a')
// date
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = AbadIng = async (AbadIng, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await AbadIng.decodeJid(AbadIng.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = args.join(" ")
        const from = m.chat
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        // Group
        const groupMetadata = m.isGroup ? await AbadIng.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isUser = pendaftar.includes(m.sender)

        // Other
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
        const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const AntiLink = m.isGroup ? ntilink.includes(from) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const welcm = m.isGroup ? wlcm.includes(from) : false
        const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
        const isLeveling = m.isGroup ? _leveling.includes(from) : false
        const isAutoStick = _autostick.includes(from)
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const Autoreply = m.isGroup ? autorep.includes(from) : true
        autoreadsw = true
        // Quoted
        const content = JSON.stringify(m.message)
        const q = args.join(' ')
        const isImage = (m.type === 'imageMessage')
        const isVideo = (m.type === 'videoMessage')
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
        const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

        //rent
        _sewa.expiredCheck(AbadIng, sewa)

        //group target\\
        const reply = (teks) => {
            AbadIng.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `Subscribe YouTube Channel`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./Resources/theme/AsteriaThumb.jpg`), "sourceUrl": `${linkz1}` } } }, { quoted: m })
        }

        const replay = (teks) => {
            AbadIng.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `Subscribe YouTube Channel`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./Resources/theme/AsteriaThumb.jpg`), "sourceUrl": `${linkz2}` } } }, { quoted: m })
        }
        //auto reply
        //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anji of setik) {
            if (budy === anji) {
                result = fs.readFileSync(`./Resources/sticker/${anji}.webp`)
                AbadIng.sendMessage(m.chat, { sticker: result }, { quoted: m })
            }
        }
        //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anju of vien) {
            if (budy === anju) {
                result = fs.readFileSync(`./Resources/audio/${anju}.mp3`)
                AbadIng.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
        }
        //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anjh of imagi) {
            if (budy === anjh) {
                result = fs.readFileSync(`./Resources/image/${anjh}.jpg`)
                AbadIng.sendMessage(m.chat, { image: result }, { quoted: m })
            }
        }
        //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anjh of videox) {
            if (budy === anjh) {
                result = fs.readFileSync(`./Resources/video/${anjh}.mp4`)
                AbadIng.sendMessage(m.chat, { video: result }, { quoted: m })
            }
        }

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AbadIng.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AbadIng.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
        if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AbadIng.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AbadIng.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        function randomNomor(angka) {
            return Math.floor(Math.random() * angka) + 1
        }


        if (m.message) {
            addBalance(m.sender, randomNomor(574), balance)
            console.log(`[MESSAGE]`, color(moment(m.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"), "yellow"),
                color(`${budy} [${args.length}]`),
                "from",
                color(m.pushName)
            );
        }
        //antispam or auto react
        //if (m.message && msgFilter.isFiltered(from)) {
        //console.log(`${global.dogeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
        //return AbadIng.sendMessage(from, { react: { text: `${global.themeemoji}`, key: m.key }})
        //}
        if (isCmd && !isUser) {
            pendaftar.push(m.sender)
            fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        }
        // leveling
        const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = { jid: userId, xp: 1, level: 1 }
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }

        const getUserRank = (userId) => {
            let position = null
            let found = false
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                    found = true
                }
            })
            if (found === false && position === null) {
                const obj = { id: userId, xp: 0, level: 1 }
                _level.push(obj)
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                return 99
            } else {
                return position + 1
            }
        }

        const xpGain = new Set()

        const isGained = (userId) => {
            return !!xpGain.has(userId)
        }

        const addCooldown = (userId) => {
            xpGain.add(userId)
            setTimeout(() => {
                return xpGain.delete(userId)
            }, 60000) // Every minute
        }

        var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
        // leveling function
        if (m.isGroup && isLeveling && isUser && AbadIng.public) {
            const currentLevel = getLevelingLevel(m.sender)
            const checkId = getLevelingId(m.sender)
            try {
                addCooldown(m.sender)
                if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                const amountXp = Math.floor(Math.random() * 10) + 200
                const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(m.sender)
                addLevelingXp(m.sender, amountXp)
                if (requiredXp <= getLevelingXp(m.sender)) {
                    addLevelingLevel(m.sender, 1)
                    teks = `*──「 🥳LEVEL UP🥳 」──*\n\n${themeemoji} *Name*:  @${m.sender.split("@")[0]}\n${themeemoji} *XP*: ${getLevelingXp(m.sender)}\n${themeemoji} *Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n${themeemoji} *Role*: ${role} \n\nCongrats!! 🎉`
                    AbadIng.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
                }

            } catch (err) {
                console.error(err)
            }
        }
        if (prefix && command) {
            const currentLevel = getLevelingLevel(m.sender)
            const checkId = getLevelingId(m.sender)
            try {

                if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                const amountXp = Math.floor(Math.random() * 10) + 30
                const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(m.sender)
                addLevelingXp(m.sender, amountXp)
                if (requiredXp <= getLevelingXp(m.sender)) {
                    addLevelingLevel(m.sender, 1)
                }

            } catch (err) {
                console.error(err)
            }
        }
        //auto read whatsapp status
        if (autoreadsw) {
            if (from === 'status@broadcast') {
                AbadIng.chatRead(from)
            }
        }
        //autoreader gc and pm
        if (global.autoreadpmngc) {
            if (command) {
                await AbadIng.sendPresenceUpdate('composing', m.chat)
                AbadIng.sendReadReceipt(from, m.sender, [m.key.id])
            }
        }
        //autoread gc only
        if (global.autoReadGc) {
            if (m.isGroup) { AbadIng.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
        }
        //autoread all
        if (global.autoReadAll) {
            if (m.chat) { AbadIng.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
        }
        //auto recording all
        if (global.autoRecord) {
            if (m.chat) { AbadIng.sendPresenceUpdate('recording', m.chat) }
        }
        //autotyper all
        if (global.autoTyping) {
            if (m.chat) { AbadIng.sendPresenceUpdate('composing', m.chat) }
        }
        //auto available all
        if (global.available) {
            if (m.chat) { AbadIng.sendPresenceUpdate('available', m.chat) }
        }

        const hariRaya = new Date('6 1, 2022 00:00:00')
        const sekarang = new Date().getTime();
        const Selisih = hariRaya - sekarang;
        const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
        const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
        const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`

        async function hitungmundur(bulan, tanggal) {
            let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
            let now = Date.now();
            let distance = from - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second"
        }
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('templateImage' in setting)) setting.templateImage = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false
                if (!('templateDocument' in setting)) setting.templateDocument = true
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                templateImage: false,
                templateGif: false,
                templateMsg: false,
                templateDocument: true,
            }
        } catch (err) {
            console.error(err)
        }

        const sendOrder = async (jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
            const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
                "orderMessage": {
                    "orderId": orid, // Change ID
                    "thumbnail": img, // Change the Image
                    "itemCount": itcount, // Change the Item Count
                    "status": "INQUIRY", // Don't Replace
                    "surface": "CATALOG", // Don't Replace
                    "orderTitle": title, // Change the title
                    "message": text, // Change Message
                    "sellerJid": sellers, // Change the seller
                    "token": tokens, // Change the token
                    "totalAmount1000": ammount, // Change the Total Amount
                    "totalCurrencyCode": "IDR", // Up to you
                }
            }), { userJid: jid })
            AbadIng.relayMessage(jid, order.message, { messageId: order.key.id })
        }

        //function rpg
        const {
            addInventoriDarah,
            cekDuluJoinAdaApaKagaDiJson,
            addDarah,
            kurangDarah,
            getDarah
        } = require('./storage/user/blood.js')
        const {
            cekInventoryAdaAtauGak,
            addInventori,
            addBesi,
            addEmas,
            addEmerald,
            addUmpan,
            addPotion,
            kurangBesi,
            kurangEmas,
            kurangEmerald,
            kurangUmpan,
            kurangPotion,
            getBesi,
            getEmas,
            getEmerald,
            getUmpan,
            getPotion
        } = require('./storage/user/exchange.js')
        const {
            addInventoriMonay,
            cekDuluJoinAdaApaKagaMonaynyaDiJson,
            addMonay,
            kurangMonay,
            getMonay
        } = require('./storage/user/money.js')
        const {
            addInventoriLimit,
            cekDuluJoinAdaApaKagaLimitnyaDiJson,
            addLimit,
            kurangLimit,
            getLimit
        } = require('./storage/user/limit.js')
        const {
            cekDuluHasilBuruanNya,
            addInventoriBuruan,
            addIkan,
            addAyam,
            addKelinci,
            addDomba,
            addSapi,
            addGajah,
            kurangIkan,
            kurangAyam,
            kurangKelinci,
            kurangDomba,
            kurangSapi,
            kurangGajah,
            getIkan,
            getAyam,
            getKelinci,
            getDomba,
            getSapi,
            getGajah
        } = require('./storage/user/prey.js')
        let DarahAwal = global.rpg.darahawal
        const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
        const isCekDarah = getDarah(m.sender)
        const isUmpan = getUmpan(m.sender)
        const isPotion = getPotion(m.sender)
        const isIkan = getIkan(m.sender)
        const isAyam = getAyam(m.sender)
        const isKelinci = getKelinci(m.sender)
        const isDomba = getDomba(m.sender)
        const isSapi = getSapi(m.sender)
        const isGajah = getGajah(m.sender)
        const isMonay = getMonay(m.sender)
        const isLimit = getLimit(m.sender)
        const isBesi = getBesi(m.sender)
        const isEmas = getEmas(m.sender)
        const isEmerald = getEmerald(m.sender)
        const isInventory = cekInventoryAdaAtauGak(m.sender)
        const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
        const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
        const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
        const ikan = ['🐟', '🐠', '🐡']


        //menu logo
        let picaks = [flaming, fluming, flarun, flasmurf]
        let picak = picaks[Math.floor(Math.random() * picaks.length)]

        if (!isRakyat) {
            rkyt.push(m.sender.split("@")[0])
        }

        global.hit = {}
        if (isCmd) {
            data = await fetchJson('https://api.countapi.xyz/hit/Asteria-MD/visits')
            jumlahcmd = `${data.value}`
            dataa = await fetchJson(`https://api.countapi.xyz/hit/Asteria-MD${moment.tz('America/Bogota').format('DDMMYYYY')}/visits`)
            jumlahharian = `${dataa.value}`
        }

        // afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
He's in AFK/Offline ${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        // Detect Group Invite
        if (m.mtype === 'groupInviteMessage') {
            teks = `Type .owner to join your whatsapp group`
            sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./Resources/theme/AsteriaThumb.jpg'), `${watermark}`, `${botname}`, "57322536629@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
        }
        /*const bodyyy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        if (!isCmd && !m.isGroup && !m.key.fromMe) {
        const simi = await fetchJson(`https://caliph.my.id/api/simi.php?text=${budy}`)
        const sami = simi.result
        await AbadIng.sendMessage(from, {text:sami}, {quoted:m})
        }*/

        // AntiLink
        if (AntiLink) {
            linkgce = await AbadIng.groupInviteCode(from)
            if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
                reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
            } else if (isUrl(m.text)) {
                bvl = `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                AbadIng.sendMessage(from, { text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        }
        // Antiwame
        if (antiWame)
            if (budy.includes(`wa.me`)) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        if (antiWame)
            if (budy.includes(`http://wa.me`)) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        //antivirtex
        if (antiVirtex) {
            if (budy.length > 3500) {
                reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(300))
                reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
                if (!isBotAdmins) return reply(mess.botAdmin)
                AbadIng.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //anti bad words
        if (antiToxic)
            if (bad.includes(messagesD)) {
                tos = ['Hey, watch your mouth', 'Never been taught how to speak?', 'Stop being toxic my friend🤢', 'Dont be toxic🦄']
                sin = tos[Math.floor(Math.random() * (tos.length))]
                reply(sin)
                if (m.text) {
                    bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
                    if (isAdmins) return reply(bvl)
                    if (m.key.fromMe) return reply(bvl)
                    if (isCreator) return reply(bvl)
                    kice = m.sender
                    await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                    AbadIng.sendMessage(from, { text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
                }
            }
        // AntiLink gc
        if (AntiLink) {
            if (!isBotAdmins) return
            linkgce = await AbadIng.groupInviteCode(from)
            if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
                reply(`\`\`\`「 Gc Link Detected 」\`\`\`\n\nYou will not be kicked by a bot because what you send is our group link`)
            } else if (isUrl(m.text)) {
                bvl = `\`\`\`「 Gc Link Detected 」\`\`\`\n\nAdmin has sent a group link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 Gc Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        }
        //antilink youtube video
        if (AntiLinkYoutubeVid)
            if (budy.includes("https://youtu.be/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        //antilink youtube channel
        if (AntiLinkYoutubeChannel)
            if (budy.includes("https://youtube.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        //antilink instagram
        if (AntiLinkInstagram)
            if (budy.includes("https://www.instagram.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        //antilink facebook
        if (AntiLinkFacebook)
            if (budy.includes("https://facebook.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        //antilink telegram
        if (AntiLinkTelegram)
            if (budy.includes("https://t.me/")) {
                if (AntiLinkTelegram)
                    if (!isBotAdmins) return
                bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        //antilink tiktok
        if (AntiLinkTiktok)
            if (budy.includes("https://www.tiktok.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        //antilink twitter
        if (AntiLinkTwitter)
            if (budy.includes("https://twitter.com/")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }
        //antilink all
        if (AntiLinkAll)
            if (budy.includes("https://")) {
                if (!isBotAdmins) return
                bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
                if (isAdmins) return reply(bvl)
                if (m.key.fromMe) return reply(bvl)
                if (isCreator) return reply(bvl)
                kice = m.sender
                await AbadIng.groupParticipantsUpdate(m.chat, [kice], 'remove')
                AbadIng.sendMessage(from, { text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
            } else {
            }

        //anti viewonce
        if (m.mtype == 'viewOnceMessage') {
            if (!db.data.chats[m.chat].antionce) return
            teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz('America/Bogota').format('HH:mm:ss')} 
${themeemoji} Date : ${moment.tz('America/Bogota').format('DD/MM/YYYY')}
${themeemoji} MessageType : ${m.mtype}`
            AbadIng.sendTextWithMentions(m.chat, teks, m)
            await sleep(500)
            m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
        }

        // Public & Self
        if (!AbadIng.public) {
            if (!m.key.fromMe) return
        }

        // write database every 1 minute
        setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 30 * 1000)

        // reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "America/Bogota"
        })


        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AbadIng.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AbadIng.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AbadIng.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AbadIng.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, `${global.botname}`, m)
                delete caklontong[m.sender.split('@')[0]]
                delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AbadIng.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AbadIng.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AbadIng.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (('family100' + m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100' + m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
                return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
            }).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
            AbadIng.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) } }).then(mes => { return _family100['family100' + m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100' + m.chat]
        }

        //Suit PvP
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
                    AbadIng.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                AbadIng.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
                if (!roof.pilih) AbadIng.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
                if (!roof.pilih2) AbadIng.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) AbadIng.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        AbadIng.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /scissors/i
            let b = /rock/i
            let k = /paper/i
            let reg = /^(scissors|rock|paper)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
                if (!roof.pilih2) AbadIng.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
                if (!roof.pilih) AbadIng.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                AbadIng.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
                delete this.suit[roof.id]
            }
        }

        // short story
        async function cerpen(category) {
            return new Promise((resolve, reject) => {
                let title = category.toLowerCase().replace(/[()*]/g, "")
                let judul = title.replace(/\s/g, "-")
                let page = Math.floor(Math.random() * 5)
                axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page)
                    .then((get) => {
                        let $ = cheerio.load(get.data)
                        let link = []
                        $('article.post').each(function (a, b) {
                            link.push($(b).find('a').attr('href'))
                        })
                        let random = link[Math.floor(Math.random() * link.length)]
                        axios.get(random)
                            .then((res) => {
                                let $$ = cheerio.load(res.data)
                                let hasil = {
                                    title: $$('#content > article > h1').text(),
                                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                                    cerita: $$('#content > article > p').text()
                                }
                                resolve(hasil)
                            })
                    })
            })
        }
        // Math
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect Answer 🎉\n\nWant to play again? send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        //TicTacToe
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip|surrender)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { //sender
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'Game has ended',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                }[ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                }[v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await AbadIng.sendText(room.x, str, m, { mentions: parseMention(str) })
            await AbadIng.sendText(room.o, str, m, { mentions: parseMention(str) })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
            let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
            let { text, mentionedJid } = hash
            let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
                userJid: AbadIng.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, AbadIng.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            AbadIng.ev.emit('messages.upsert', msg)
        }

        // FAKE TEXT IMG
        const textImg = (teks) => {
            AbadIng.sendMessage(m.chat, { text: teks, }, { quoted: m, thumbnail: fs.readFileSync('./Resources/image/wpmobile.png') })
        }

        //FAKE CONTACT
        const fkontak = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `57322536629 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb, sendEphemeral: true } } }
        //FAKEREPLY PRODUCT
        const ftoko = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage": {
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": log0 //The picture
                        },
                        "title": `${global.ownername}`,
                        "description": `${global.botname}`,
                        "currencyCode": "USD",
                        "priceAmount1000": "2000",
                        "retailerId": `${global.watermark}`,
                        "productImageCount": 1
                    },
                    "businessOwnerJid": `0@s.whatsapp.net`
                }
            }
        }
        //fake gif
        const fgi = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ?
                    { remoteJid: "57322536629-1613049930@g.us" } : {})
            },
            message: {
                "videoMessage": {
                    "title": `Abadon`,
                    "h": `Abadon`,
                    'duration': '99999',
                    'gifPlayback': 'true',
                    'caption': `Abadon`,
                    'jpegThumbnail': fs.readFileSync('./Resources/theme/AsteriaVid.mp4')
                }
            }
        }
        //FAKEREPLY TROLI
        const ftroli = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                orderMessage: {
                    itemCount: 1,
                    status: 1,
                    surface: 1,
                    message: `${global.ownername}`, //
                    orderTitle: `${global.botname}`,
                    thumbnail: log0, //Pic
                    sellerJid: '0@s.whatsapp.net'

                }
            }
        }
        //FAKEREPLY LOCATION
        const flokasi = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                locationMessage: {
                    name: `${global.location}`,
                    jpegThumbnail: log0
                }
            }
        }
        //FAKEREPLY DOCUMENT
        const fdocs = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                documentMessage: {
                    title: `${global.botname}`,
                    jpegThumbnail: log0
                }
            }
        }
        //FAKEREPLY VIDEO
        const fvideo = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ?
                    { remoteJid: "57322536629-1613049930@g.us" } : {})
            },
            message: {
                "videoMessage": {
                    "title": `${global.botname}`,
                    "h": `${global.ownername}`,
                    'seconds': '30',
                    'caption': `${global.watermark}`,
                    'jpegThumbnail': log0
                }
            }
        }
        //FAKEREPLY GROUPINVITE
        const fgclink = {
            "key": {
                "fromMe": false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            "message": {
                "groupInviteMessage": {
                    "groupJid": "57322536629-1616169743@g.us",
                    "inviteCode": `${global.ownername}`,
                    "groupName": `${global.botname}`,
                    "caption": `${global.watermark}`,
                    'jpegThumbnail': log0
                }
            }
        }
        //FAKEREPLY GIF
        const fgif = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ?
                    { remoteJid: "57322536629-1613049930@g.us" } : {})
            },
            message: {
                "videoMessage": {
                    "title": `${global.botname}`,
                    "h": `${global.ownername}`,
                    'seconds': "30",
                    'gifPlayback': 'true',
                    'caption': `${global.watermark}`,
                    'jpegThumbnail': log0
                }
            }
        }
        //FAKEREPLY TEXT WITH THUMBNAIL
        const ftextt = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ?
                    { remoteJid: "57322536629-1613049930@g.us" } : {})
            },
            message: {
                "extendedTextMessage": {
                    "text": `${global.ownername}`,
                    "title": `${global.botname}`,
                    'jpegThumbnail': log0
                }
            }
        }
        //FAKEREPLY VN
        const fvn = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ?
                    { remoteJid: "57322536629-1613049930@g.us" } : {})
            },
            message: {
                "audioMessage": {
                    "mimetype": "audio/ogg; codecs=opus",
                    "seconds": "9999999999999999",
                    "ptt": "true"
                }
            }
        }
        l = 1
        monospace = '```'
        const timestampe = speed();
        const latensie = speed() - timestampe
        const levelMenu = getLevelingLevel(m.sender)
        const xpMenu = getLevelingXp(m.sender)
        const uangku = getBalance(m.sender, balance)
        const reqXp = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
        const jumlahUser = pendaftar.length
        if (!isDarah) { addInventoriDarah(m.sender, DarahAwal) }
        if (!isInventory) { addInventori(m.sender) }
        if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }

        const menulist = `╭━─━─┈
┊ ${pushname}
╰━┬≯
╭━┤ 〘 *_USER_* 〙
┊   ╰━─┈
┊ *Lvl*: ${levelMenu}
┊ *XP*: ${xpMenu}
┊ *Rango*: ${role}
┊ *Dinero*:  $${uangku}
╰━┬≯
╭━┤ 〘 *_INFO_* 〙
┊   ╰━─┈
┊ *SPEED*: ${latensie.toFixed(4)} miliseconds
┊ *Runtime*: ${runtime(process.uptime())}
┊ *Owner Name* : ${global.ownername}
┊ *Owner No*: ${global.ownernummenu}
╰━─━─━─┈`
        const qtod = m.quoted ? "true" : "false"

        //randoming function
        function pickRandom(list) {
            return list[Math.floor(list.length * Math.random())]
        }
        //document randomizer
        let documents = [doc1, doc2, doc3, doc4, doc5, doc6]
        let docs = pickRandom(documents)

        //react function
        const reactionMessage = {
            react: {
                text: args[0],
                key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
            }
        }

        //cases starts here
        switch (command) {
            case 'alive': case 'panel': case 'list': case 'menu': case 'help': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let btn = [{
                    urlButton: {
                        displayText: '🍒 Asteria Group OF 🍒',
                        url: `${linkz1}`
                    }
                }, {
                    urlButton: {
                        displayText: '🎗 Script  🎗',
                        url: `${botscript}`
                    }
                }, {
                    quickReplyButton: {
                        displayText: '✨ All Menu ✨',
                        id: 'allmenu'
                    }
                }, {
                    quickReplyButton: {
                        displayText: '🍇 List Menu 🍇',
                        id: 'command'
                    }
                }, {
                    quickReplyButton: {
                        displayText: '🔥 Owner 🔥',
                        id: 'owner'
                    }
                }]
                let setbot = db.data.settings[botNumber]
                if (setbot.templateImage) {
                    AbadIng.send5ButImg(m.chat, menulist, global.botname, global.thumb, btn, global.thumb)
                } else if (setbot.templateGif) {
                    AbadIng.send5ButGif(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                } else if (setbot.templateVid) {
                    AbadIng.send5ButVid(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                } else if (setbot.templateMsg) {
                    AbadIng.send5ButMsg(m.chat, menulist, global.botname, btn)
                } else if (setbot.templateDocument) {
                    let buttonmenu = [
                        { urlButton: { displayText: `🍒 Asteria Group OF 🍒`, url: `${linkz1}` } },
                        { urlButton: { displayText: `🎗 Script  🎗`, url: `${botscript}` } },
                        { quickReplyButton: { displayText: `✨All Menu✨`, id: 'allmenu' } },
                        { quickReplyButton: { displayText: `🍇List Menu🍇`, id: 'command' } },
                        { quickReplyButton: { displayText: `🔥Owner🔥`, id: 'owner' } }
                    ]
                    AbadIng.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./Resources/theme/Asteria.xlsx'), mimetype: `${docs}`, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
                }
            }
                break
            case 'sc': case 'script': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                teks = `*「 ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nDont forget to donate 🍜`
                let buttons = [
                    { buttonId: `menu`, buttonText: { displayText: 'Menu 🌺' }, type: 1 }
                ]
                let buttonMessage = {
                    image: thum,
                    jpegThumbnail: log0,
                    caption: teks,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: "I deserve something for my hardwork",
                            body: "Click to donate",
                            thumbnail: fs.readFileSync("Resources/theme/AsteriaThumb.jpg"),
                            mediaType: 1,
                            mediaUrl: 'https://telegra.ph/file/8737b098fd5702daeb7e0.jpg',
                            sourceUrl: "https://telegra.ph/file/8737b098fd5702daeb7e0.jpg"
                        }
                    }
                }
                AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'inventory': case 'profile': {
                if (!isDarah) { addInventoriDarah(m.sender, DarahAwal) }
                if (!isInventory) { addInventori(m.sender) }
                if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }

                var flob = await getBuffer(picak + 'User Profile')
                let teksehmazeh = `*── 「 BIO PROFILE 」 ──*\n\n`
                teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
                teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
                teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
                teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
                teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
                teksehmazeh += `*── 「 HUNT RESULT 🏹 」 ──*\n`
                teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
                teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
                teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
                teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
                teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
                teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
                teksehmazeh += `_*${pushname}*_`
                let butRun = [
                    { urlButton: { displayText: `YouTube 🍒`, url: `${websitex}` } },
                    { urlButton: { displayText: `🎗 Script  🎗`, url: `${botscript}` } },
                    { quickReplyButton: { displayText: `🔥 Owner 🔥`, id: 'owner' } },
                    { quickReplyButton: { displayText: `Leaderboard 🎢`, id: 'leaderboard' } }
                ]
                AbadIng.sendMessage(m.chat, { caption: teksehmazeh, document: fs.readFileSync('./Resources/theme/Asteria.xlsx'), mimetype: `${docs}`, fileName: `Want to adventure again?`, templateButtons: butRun, footer: `${botname}`, mentions: [m.sender] })
            }
                break
            case 'banchat': {
                if (isBan) return reply(mess.ban)
                if (!isCreator) return replay(mess.owner)
                if (args[0] === "on") {
                    if (isBanChat) return replay('Already Banned')
                    banchat.push(from)
                    replay('Success in banning the gc')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nThe bot has been disabled in this group, now no one will able to use the bot in this group!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!isBanChat) return replay('Already Unbanned')
                    let off = banchat.indexOf(from)
                    banchat.splice(off, 1)
                    replay('Success in unbanning the gc')
                } else {
                    let buttonsntnsfw = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'Ban' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Unban' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nBan to Ban\nUnban to unban`, `${global.botname}`, m)
                }
            }
                break
            case 'botgrups':
            case 'botgroups':
            case 'botgrup':
            case 'botgroup':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(` Don't forget to join yeah!

*GROUP 1*
https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS

*GROUP 2*
https://chat.whatsapp.com/LS1Xx3fSqg7FpSYSjKWhL5

*GROUP 3*
https://chat.whatsapp.com/EcycNbJFCVT5ZsG9xIGkqd`)
                break
            //logo maker
            case 'orange': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'summer': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'valentine': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/create-realistic-golden-text-effect-on-red-sparkles-online-1082.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'blackpink': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'blackpink1': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/create-a-blackpink-logo-decorated-with-roses-online-free-1080.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'business3d': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/3d-business-sign-text-effect-1078.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'diamond': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/create-a-quick-sparkling-diamonds-text-effect-1077.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'summertime': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'golden': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/free-creative-3d-golden-text-effect-online-1075.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'carved': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria`)
                reply(mess.wait)
                let link = `https://textpro.me/create-carved-stone-text-effect-online-1074.html`
                let anui = await textpro(link, q)
                AbadIng.sendMessage(from, { image: { url: anui }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'pornhub': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`Example: ${prefix + command} Asteria|Bot`)
                reply(mess.wait)
                inilogo4 = args.join(" ")
                inilogo9 = args.join(" ")
                var logo4 = inilogo4.split('|')[0]
                var logo9 = inilogo9.split('|')[1]
                let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`, `${logo9}`])
                AbadIng.sendMessage(from, { image: { url: anu }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'limituser': case 'userlimit':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                {
                    let txt = `「 *ALL USER LIMIT* 」\n\n`
                    for (let i of _limit) {
                        txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
                    }
                    reply(txt)
                }
                break
            case 'leaderboard':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                {
                    let txt = `「 *LEADERBOARD* 」\n\n`
                    for (let i of _buruan) {
                        txt += `➸ *ID :* ${i.id}\n`
                        txt += `*🐟Fish* : ${i.ikan}\n`
                        txt += `*🐔Chicken* : ${i.ayam}\n`
                        txt += `*🐇Rabbit* : ${i.kelinci}\n`
                        txt += `*🐑Sheep* : ${i.domba}\n`
                        txt += `*🐄Cow* : ${i.sapi}\n`
                        txt += `*🐘Elephant* : ${i.gajah}\n\n`
                    }
                    reply(txt)
                }
                break
            case 'fishing': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }
                if (isUmpan < 1) return reply('Your bait is running out!, try hunting and turning the meat into bait')
                reply("1 bait used")
                var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
                var ditangkap = Math.ceil(Math.random() * 20)
                setTimeout(() => {
                    let caption = `Catch : ${ikannya}\n> Number of catches : ${ditangkap}`
                    let buttons = [
                        {
                            buttonId: `${prefix + command}`,
                            buttonText: {
                                displayText: 'Fish Again🎣'
                            }, type: 1
                        },
                    ]
                    let buttonMessage = {
                        image: { url: './storage/image/fishing.jpg' },
                        caption: caption,
                        footer: botname,
                        buttons: buttons,
                        headerType: 4
                    }
                    AbadIng.sendMessage(from, buttonMessage, { quoted: m })

                }, 7000)
                setTimeout(() => {
                    reply(`@${m.sender.split("@")[0]} Started fishing🎣`)
                }, 1500)
                kurangUmpan(m.sender, 1)
                addIkan(m.sender, ditangkap)
            }
                break
            case 'blood': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isDarah) { addInventoriDarah(m.sender, DarahAwal) }
                let dapat = getDarah(m.sender)
                reply(`${dapat}`)
            }
                break
            case 'stab': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (isCekDarah < 1) return reply('Your blood is gone')
                kurangDarah(m.sender, 7)
                reply('Already stabbed')
            }
                break
            case 'mining': case 'mine': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isInventory) { addInventori(m.sender) }
                if (isCekDarah < 1) return reply(`You're exhausted!, try healing using potions`)
                let besi = [1, 2, 5, 0, 3, 0, 1, 1, 4, 1, 5, 0, 0]
                let emas = [0, 1, 2, 3, 0, 0, 0, 1, 1, 0, 0, 2]
                let emerald = [0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 0, 1]
                var besinya = besi[Math.floor(Math.random() * besi.length)]
                var emasnya = emas[Math.floor(Math.random() * emas.length)]
                var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
                setTimeout(() => {
                    let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
                    let buttons = [
                        {
                            buttonId: `${prefix + command}`,
                            buttonText: {
                                displayText: 'Mine again⛏️'
                            }, type: 1
                        },
                    ]
                    let buttonMessage = {
                        image: { url: './storage/image/mine.jpg' },
                        caption: caption,
                        footer: pushname,
                        buttons: buttons,
                        headerType: 4
                    }
                    AbadIng.sendMessage(from, buttonMessage, { quoted: m })

                }, 7000)
                setTimeout(() => {
                    reply(`*${pushname}* Started mining🎣`)
                }, 1500)
                kurangDarah(m.sender, 10)
                addBesi(m.sender, besinya)
                addEmas(m.sended, emasnya)
                addEmerald(m.sender, emeraldnya)
            }
                break
            case 'beli': case 'buy': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }
                if (!isInventoryMonay) { addInventoriMonay(m.sender) }
                if (!isInventory) { addInventori(m.sender) }
                if (!q) return reply('What do you want to buy?')
                var anu = args[1]
                if (args[0] === 'potion') {
                    let noh = 100000 * anu
                    if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 money`)
                    if (isMonay < noh) return reply('Your remaining money is not sufficient for this purchase')
                    kurangMonay(m.sender, noh)
                    var apalu = anu * 1
                    addPotion(m.sender, apalu)
                    setTimeout(() => {
                        reply(`Transaction successful ✔️\n*The rest of your money* : ${getMonay(m.sender)}\n*Your potion* : ${getPotion(m.sender)}`)
                    }, 2000)
                } else
                    if (args[0] === 'bait') {
                        let noh = 5000 * anu
                        if (!args[1]) return reply(`Example : ${prefix + command} bait 2\n 1 bait = 2500 money`)
                        if (isMonay < noh) return reply('Your remaining money is not sufficient for this purchase')
                        kurangMonay(m.sender, noh)
                        var apalu = anu * 1
                        addUmpan(m.sender, apalu)
                        setTimeout(() => {
                            reply(`Transaction successful ✔️\n*The rest of your money* : ${getMonay(m.sender)}\n*Your bait* : ${getUmpan(m.sender)}`)
                        }, 2000)
                    } else
                        if (args[0] === 'limit') {
                            let noh = 35000 * anu
                            if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 money`)
                            if (isMonay < noh) return reply('Your remaining money is not sufficient for this purchase')
                            kurangMonay(m.sender, noh)
                            var apalu = anu * 1
                            addLimit(m.sender, apalu)
                            setTimeout(() => {
                                reply(`Transaction successful ✔️\n*The rest of your money* : ${getMonay(m.sender)}\n*Your limit* : ${getLimit(m.sender)}`)
                            }, 2000)
                        } else { reply("Incorrect format!") }
            }
                break
            case 'sell': case 'jual': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply(`What do you want to sell??\nExample : ${prefix + command} fish 2`)
                if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }
                if (!isInventoryMonay) { addInventoriMonay(m.sender) }
                if (!isInventory) { addInventori(m.sender) }
                var anu = args[1]
                if (args[0] === 'fish') {
                    if (isIkan < anu) return reply('Your fish is not enough for this transaction')
                    if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 fish = 1500 money`)
                    kurangIkan(m.sender, anu)
                    let monaynya = 1500 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Your leftover fish* : ${getIkan(m.sender)}`)
                    }, 2000)
                } else
                    if (args[0] === 'chicken') {
                        if (isAyam < anu) return reply('Your chicken is not enough for this transaction')
                        if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 chicken = 2500 money`)
                        kurangAyam(m.sender, anu)
                        let monaynya = 2500 * anu
                        addMonay(m.sender, monaynya)
                        setTimeout(() => {
                            reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Leftover Chicken* : ${getAyam(m.sender)}`)
                        }, 2000)
                    } else
                        if (args[0] === 'rabbit') {
                            if (isKelinci < anu) return reply('Your rabbit is not enough for this transaction')
                            if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 rabbit = 3000 money`)
                            kurangKelinci(m.sender, anu)
                            let monaynya = 3000 * anu
                            addMonay(m.sender, monaynya)
                            setTimeout(() => {
                                reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*The rest of your rabbit* : ${getKelinci(m.sender)}`)
                            }, 2000)
                        } else
                            if (args[0] === 'sheep') {
                                if (isDomba < anu) return reply(`You don't have enough sheep for this transaction`)
                                if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 sheep = 5000 money`)
                                kurangDomba(m.sender, anu)
                                let monaynya = 5000 * anu
                                addMonay(m.sender, monaynya)
                                setTimeout(() => {
                                    reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Leftover Sheep* : ${getDomba(m.sender)}`)
                                }, 2000)
                            } else
                                if (args[0] === 'cow') {
                                    if (isSapi < anu) return reply('Your cow is not enough for this transaction')
                                    if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 cow = 10000 money`)
                                    kurangSapi(m.sender, anu)
                                    let monaynya = 10000 * anu
                                    addMonay(m.sender, monaynya)
                                    setTimeout(() => {
                                        reply(`Transaction successful ✔️\n*Your monay* : ${getMonay(m.sender)}\n*The rest of your cow* : ${getSapi(m.sender)}`)
                                    }, 2000)
                                } else
                                    if (args[0] === 'elephant') {
                                        if (isGajah < anu) return reply('Your elephant is not enough for this transaction')
                                        if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 elephant = 15000 money`)
                                        kurangGajah(m.sender, anu)
                                        let monaynya = 15000 * anu
                                        addMonay(m.sender, monaynya)
                                        setTimeout(() => {
                                            reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*The rest of your elephant* : ${getGajah(m.sender)}`)
                                        }, 2000)
                                    } else
                                        if (args[0] === 'iron') {
                                            if (isBesi < anu) return reply('Your iron is not enough for this transaction')
                                            if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 iron = 15000 money`)
                                            kurangBesi(m.sender, anu)
                                            let monaynya = 16000 * anu
                                            addMonay(m.sender, monaynya)
                                            setTimeout(() => {
                                                reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Your remaining iron* : ${getBesi(m.sender)}`)
                                            }, 2000)
                                        } else
                                            if (args[0] === 'gold') {
                                                if (isEmas < anu) return reply('Your iron is not enough for this transaction')
                                                if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 gold = 50000 money`)
                                                kurangEmas(m.sender, anu)
                                                let monaynya = 50000 * anu
                                                addMonay(m.sender, monaynya)
                                                setTimeout(() => {
                                                    reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Your remaining gold* : ${getEmas(m.sender)}`)
                                                }, 2000)
                                            } else
                                                if (args[0] === 'emerald') {
                                                    if (isEmerald < anu) return reply('Your iron is not enough for this transaction')
                                                    if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 money`)
                                                    kurangEmerald(m.sender, anu)
                                                    let monaynya = 100000 * anu
                                                    addMonay(m.sender, monaynya)
                                                    setTimeout(() => {
                                                        reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*The rest of your emerald* : ${getEmerald(m.sender)}`)
                                                    }, 2000)
                                                } else { reply("Incorrect format!") }

            }
                break

            case 'heal': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCekDarah < 1) return reply('You can only heal when your blood is 0')
                if (isCekDarah > 100) return reply('Your blood is full')
                if (isPotion < 1) return reply('You have no potions, try to buy by #buy potion _amount_')
                addDarah(m.sender, 100)
                kurangPotion(m.sender, 1)
                reply('It worked, your blood is full')
            }
                break
            case 'hunt': case 'hunting': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isDarah) { addInventoriDarah(m.sender, DarahAwal) }
                if (isCekDarah < 1) return reply('Your blood runs out, try to heal using potions')
                if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }
                let luka = ["Pierced by a thorn while hunting", "Slipped into the abyss while hunting", "Scratched by a wild animal", "Not careful", "Entangled in roots", "Fall while hunting"]
                let location = ["Jungle", "Amazon Forest", "Tropical Forest", "Meadow", "African Forest", "Mountains"]
                var ikanmu = Math.ceil(Math.random() * 10)
                var ayam = Math.ceil(Math.random() * 8)
                var kelinci = Math.ceil(Math.random() * 7)
                var dombanya = [3, 0, 4, 0, 5, 4, 6, 0, 1, 0, 2, 3, 0, 3, 0, 1]
                var sapinya = [2, 0, 3, 0, 4, 0, 5, 0, 1, 0, 2, 0, 3, 0, 1]
                var gajahnya = [1, 0, 4, 0, 2, 0, 1, 0, 2, 1, 3, 0, 1]
                var domba = dombanya[Math.floor(Math.random() * dombanya.length)]
                var sapi = sapinya[Math.floor(Math.random() * sapinya.length)]
                var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
                var lukanya = luka[Math.floor(Math.random() * luka.length)]
                var lokasinya = location[Math.floor(Math.random() * location.length)]
                if (lokasinya === 'Jungle') {
                    var image = './storage/image/jungle.jpg'
                } else
                    if (lokasinya === 'Amazon Forest') {
                        var image = './storage/image/amazon.jpg'
                    } else
                        if (lokasinya === 'Tropical Forest') {
                            var image = './storage/image/tropical.jpg'
                        } else
                            if (lokasinya === 'Meadow') {
                                var image = './storage/image/meadow.jpg'
                            } else
                                if (lokasinya === 'African Forest') {
                                    var image = './storage/image/africa.jpg'
                                } else
                                    if (lokasinya === 'Mountains') {
                                        var image = './storage/image/mountain.jpg'
                                    }
                setTimeout(() => {
                    let teksehmazeh = `_[ HUNT RESULT ]_\n`
                    teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
                    teksehmazeh += `*🐔Chicken* : ${ayam}\n`
                    teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
                    teksehmazeh += `*🐑Sheep* : ${domba}\n`
                    teksehmazeh += `*🐄Cow* : ${sapi}\n`
                    teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
                    teksehmazeh += `_[ INFO ]_\n`
                    teksehmazeh += `*Location* : ${lokasinya}\n`
                    teksehmazeh += `*Wounded* : ${lukanya}, darah - 10\n`
                    teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
                    let buttons = [
                        {
                            buttonId: `${prefix + command}`,
                            buttonText: {
                                displayText: 'Hunt Again🏹'
                            }, type: 1
                        },
                    ]
                    let buttonMessage = {
                        image: { url: image },
                        caption: teksehmazeh,
                        footer: pushname,
                        buttons: buttons,
                        headerType: 4
                    }
                    AbadIng.sendMessage(from, buttonMessage, { quoted: m })
                }, 5000)
                setTimeout(() => {
                    reply(`@${m.sender.split("@")[0]} Started hunting in ${lokasinya}`)
                }, 1000)
                addIkan(m.sender, ikanmu)
                addAyam(m.sender, ayam)
                addKelinci(m.sender, kelinci)
                addDomba(m.sender, domba)
                addSapi(m.sender, sapi)
                addGajah(m.sender, gajah)
                kurangDarah(m.sender, 10)
            }
                break
            case 'ringtone': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return reply(`Example:\n${prefix + command} black over`)
                let { ringtone } = require('./lib/scraper')
                let anu = await ringtone(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                AbadIng.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'wallpaper': case 'animewallpaper': case 'animewall': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return reply("What picture are you looking for??")
                let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `.wallpaper ${args.join(" ")}`, buttonText: { displayText: 'Next Image' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'wikimedia': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return reply("What picture are you looking for??")
                let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `wikimedia ${args.join(" ")}`, buttonText: { displayText: 'Next Image' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'quotesanime': case 'quoteanime': {
                let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `quotesanime`, buttonText: { displayText: 'Next' }, type: 1 }
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'animestory': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
                    .then((res) => {
                        console.log(res)
                        let sections = []
                        for (let i of res.data) {
                            const list = {
                                title: `${i.title}`,
                                rows: [
                                    {
                                        title: `${i.title}\n\n`,
                                        rowId: `${prefix}animesearch ${i.mal_id}`,
                                        description: `${i.synopsis}`
                                    },
                                ]
                            }
                            sections.push(list)
                        }
                        const sendm = AbadIng.sendMessage(
                            from,
                            {
                                text: "Anime Search",
                                footer: botname,
                                title: ownername,
                                buttonText: "Click and see search results➡️",
                                sections
                            }, { quoted: m }
                        )
                    })
            }
                break
            case 'grupsetting':
            case 'grupo':
            case 'group':
            case 'groupsetting': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let sections = []
                let com = [`group open`, `leveling on`, `autosticker on`, `welcome on`, `antilinkgc on`, `antilinktg on`, `antilinktt on`, `antilinkytch on`, `antilinkytvid on`, `antilinkig on`, `antilinkfb on`, `antilinktwit on`, `antilinkall on`, `antiwame on`, `antitoxic on`, `antivirus on`, `autorevoke on`, `autoreply on`]
                let comm = [`group close`, `leveling off`, `autosticker off`, `welcome off`, `antilinkgc off`, `antilinktg on`, `antilinktt on`, `antilinkytch on`, `antilinkytvid on`, `antilinkig on`, `antilinkfb on`, `antilinktwit on`, `antilinkall on`, `antiwame on`, `antitoxic on`, `antivirus on`, `autorevoke on`, `autoreply on`]
                let listnya = [`Group open/close`, `Leveling on/off`, `Auto-Sticker on/off`, `Welcome/Left on/off`, `Antilink Group on/off`, `Antilink Telegram on/off`, `Antilink Tiktok on/off`, `Antilink Youtube Channel on/off`, `Antilink Youtube Video on/off`, `Antilink Instagram on/off`, `Antilink Facebook on/off`, `Antilink Twitter on/off`, `Antilink All on/off`, `Anti Wame on/off`, `Anti Toxic on/off`, `Anti Virus on/off`, `Auto Revoke on/off`, `Auto Reply on/off`]
                let suruh = [`Enable`, `Disable`]
                let fiturname = [`Group`, `Leveling`, `Auto Sticker`, `Welcome`, `Antilink Group`, `Antilink Telegram`, `Antilink Tiktok`, `Antilink Youtube Channel`, `Antilink Youtube Video`, `Antilink Instagram`, `Antilink Facebook`, `Antilink Twitter`, `Antilink All`, `Anti Wame`, `Anti Toxic`, `Anti Virus`, `Auto Revoke`, `Auto Reply`]
                let startnum = 0; let startnu = 0; let startn = 0; let start = 0
                let startnumm = 1
                for (let x of com) {
                    const yy = {
                        title: `${listnya[startnum++]}`,
                        rows: [
                            {
                                title: `${suruh[0]}`,
                                description: `Activate ${fiturname[startnu++]}`,
                                rowId: `${prefix}${x}`
                            }, {
                                title: `${suruh[1]}`,
                                description: `Deactivate ${fiturname[startn++]}`,
                                rowId: `${prefix}${comm[start++]}`
                            }
                        ]
                    }
                    sections.push(yy)
                }
                const sendm = AbadIng.sendMessage(
                    from,
                    {
                        text: "Group Settings",
                        footer: botname,
                        title: "Set your group settings here......",
                        buttonText: "Click Button",
                        sections
                    }, { quoted: m }
                )
            }
                break
            case 'coffee': case 'kopi': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let buttons = [
                    { buttonId: `coffe`, buttonText: { displayText: 'Next Image' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `Here you go!`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'emojimix': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) reply(`*Example :* ${prefix + command} 🦄+🤣`)
                let [emoji1, emoji2] = q.split`+`
                let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of kuntuh.results) {
                    let encmedia = await AbadIng.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'getcase':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (m.isGroup) reply(mess.private)
                if (!isCreator) return reply(mess.owner)
                const getCase = (cases) => { return "case" + `'${cases}'` + fs.readFileSync("AbadAsteria.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break" }
                replay(`${getCase(q)}`)
                break
            case 'emoji': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return reply('Where is the emoji?')
                emoji.get(args.join(" ")).then(async (emoji) => {
                    let mese = await AbadIng.sendMessage(m.chat, { image: { url: emoji.images[4].url }, caption: `Made by ${global.botname}` }, { quoted: m })
                    await AbadIng.sendMessage(from, { text: "reply #s to this image to make sticker" }, { quoted: mese })
                })
            }
                break
            case 'suitpvp': case 'suit': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replay(`Complete your previous suit`)
                if (m.mentionedJid[0] === m.sender) return replay(`Can't play with myself!`)
                if (!m.mentionedJid[0]) return replay(`_Who do you want to challenge?_\nTag the person..\n\Example : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
                this.suit[id] = {
                    chat: await AbadIng.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) AbadIng.sendText(m.chat, `_Suit time out_`, m)
                        delete this.suit[id]
                    }, 60000), poin, poin_lose, timeout
                }
            }
                break
            case 'areaoftriangle':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (!q) return reply(`to find the result of the area of ​​a triangle\nUse ${prefix}areaoftriangle side1 side 2 side 3\nexample: ${prefix}areaoftriangle 1 2 7`)
                if (!isInventoryLimit) { addInventoriLimit(m.sender) }
                try {
                    const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
                    const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
                    reply(`*Results:* ${luasseg}\n${caraluas}`)
                } catch (err) {
                    reply('The format of the message is wrong')
                }
                break
            case 'perimeteroftriangle':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (!q) return reply(`To find the result of the perimeter of a triangle\nUse ${prefix}perimeteroftriangle side1 side2 side3\nExample: ${prefix}perimeteroftriangle 32 10 8`)
                if (!isInventoryLimit) { addInventoriLimit(m.sender) }
                if (isLimit < 1) return reply("Your limit has run out ಥ╭╮ಥ, please buy by #buy limit _amount_")
                kurangLimit(m.sender, 1)
                reply(`One limit is used ಥ‿ಥ\nYour remaining limit : ${getLimit(m.sender)}`)
                try {
                    const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
                    const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
                    reply(`*Results:* ${kelsegitiga}\n*Formula:* ${carakel}`)
                } catch (err) {
                    reply('The format of the message is wrong')
                }
                break
            case 'areaofsquare':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (!q) return reply(`To find the result of the area of ​​a square\nUse ${prefix}areaofsquare number\nExample: ${prefix}areaofsquare 32`)
                try {
                    const luaspersegi = bdr.datar.luas.persegi(q, false)
                    const luaspersegis = bdr.datar.luas.persegi(q, true)
                    reply(`*Results:* ${luaspersegi}\n*Formula:* ${luaspersegis}`)
                } catch (err) {
                    reply('The format of the message is wrong')
                }
                break
            case 'pythagoras':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (!q) return reply(`To find the Pythagorean result\nUse ${prefix}pythagoras option number1 number2\nExample: ${prefix}pythagoras crooked 8 6`)
                try {
                    const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
                    const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
                    reply(`*Results:* ${pytha}\n*Formula:* ${rumuspytha}`)
                } catch (err) {
                    reply('The format of the message is wrong')
                }
                break
            case 'multiply':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (!q) return reply(`To find the result of multiplication\nUse ${prefix}multiply multiplication number multiplication number\nExample: ${prefix}multiply 5 15`)
                try {
                    const perkal = bdr.rdb.perkalian(args[0], args[1])
                    reply(`*Results:* ${perkal}\n*Formula:* ${rumusperkal}`)
                } catch (err) {
                    reply('The format of the message is wrong')
                }
                break
            case 'perimeterofsquare':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (!q) return reply(`To find the result of the perimeter of a square\nUse ${prefix}perimeterofsquare number\nExample: ${prefix}perimeterofsquare 78`)
                try {
                    const persegi = bdr.datar.keliling.persegi(q, false)
                    const caraPersegi = bdr.datar.keliling.persegi(q, true)
                    reply(`*Results:* ${persegi}\n*Formula:* ${caraPersegi}`)
                } catch (err) {
                    reply('The format of the message is wrong')
                }
                break
            case 'square':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (!q) return reply(`To find a Squared Result\nUse ${prefix}square number\nExample: ${prefix}square 6`)
                try {
                    const kuadrat = bdr.rdb.kuadrat(q)
                    reply(`*Results:* ${kuadrat}`)
                } catch (err) {
                    reply('The format of the message is wrong')
                }
                break
            case 'cubic':
                if (!q) return reply(`Untuk mencari sebuah Hasil Kubik\nUse ${prefix}cubic number\nExample: ${prefix}cubic 9`)
                try {
                    const kubik = bdr.rdb.kubik(q)
                    reply(`*Results:* ${kubik}`)
                } catch (err) {
                    reply('The format of the message is wrong')
                }
                break
            case 'ttc': case 'ttt': case 'tictactoe': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
                if (room) {
                    replay('Partner found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        }[v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
                    if (room.x !== room.o) await AbadIng.sendText(room.x, str, m, { mentions: parseMention(str) })
                    await AbadIng.sendText(room.o, str, m, { mentions: parseMention(str) })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (args.join(" ")) room.name = args.join(" ")
                    replay('Waiting for partner' + (args.join(" ") ? ` type the command below ${prefix}${command} ${args.join(" ")}` : ''))
                    this.game[room.id] = room
                }
            }
                break
            case 'delttc': case 'delttt': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        AbadIng.sendText(m.chat, `Successfully deleted the TicTacToe session`, m)
                    } else if (!this.game) {
                        replay(`Session TicTacToe🎮 does not exist`)
                    } else throw '?'
                } catch (e) {
                    replay('error!')
                }
            }
                break
            case 'kuismath': case 'math': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
                let { genMath, modes } = require('./src/math')
                if (!args.join(" ")) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nUsage examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                AbadIng.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replay("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
                break
            case 'delete': case 'del': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.quoted) return
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay('The message was not sent by a bot!')
                AbadIng.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
                break
            case 'halahx': case 'hilihx': case 'huluhx': case 'helehx': case 'holohx': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.quoted && !args.join(" ")) return replay(`Send/reply text with caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
                replay(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            }
                break
            case 'vote': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (m.chat in vote) return replay(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete vote sesssion`)
                if (!args.join(" ")) return replay(`Enter Reason for Vote, Example: *${prefix + command} ${global.ownername} is handsome or not, vote!*`)
                replay(`Voting starts!\n\n*${prefix}upvote* - to upvote\n*${prefix}devote* - for not\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
                vote[m.chat] = [args.join(" "), [], []]
                await sleep(1000)
                upvote = vote[m.chat][1]
                devote = vote[m.chat][2]
                teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevote* - to delete vote session`
                let buttonsVote = [
                    { buttonId: `${prefix}upvote`, buttonText: { displayText: 'Upvote' }, type: 1 },
                    { buttonId: `${prefix}devote`, buttonText: { displayText: 'Devote' }, type: 1 }
                ]

                let buttonMessageVote = {
                    image: log0,
                    jpegThumbnail: thum,
                    caption: teks_vote,
                    footer: `${global.botname}`,
                    buttons: buttonsVote,
                    headerType: 1
                }
                AbadIng.sendMessage(m.chat, buttonMessageVote)
            }
                break
            case 'upvote': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!(m.chat in vote)) return replay(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) return replay(`You've voted ready`)
                vote[m.chat][1].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete vote session`
                let buttonsUpvote = [
                    { buttonId: `${prefix}upvote`, buttonText: { displayText: 'Upvote' }, type: 1 },
                    { buttonId: `${prefix}devote`, buttonText: { displayText: 'Devote' }, type: 1 }
                ]

                let buttonMessageUpvote = {
                    image: log0,
                    jpegThumbnail: thum,
                    caption: teks_vote,
                    footer: `${global.botname}`,
                    buttons: buttonsUpvote,
                    headerType: 1,
                    mentions: menvote
                }
                AbadIng.sendMessage(m.chat, buttonMessageUpvote)
            }
                break
            case 'devote': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!(m.chat in vote)) return replay(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) return replay(`You've voted already`)
                vote[m.chat][2].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete vote`
                let buttonsDevote = [
                    { buttonId: `${prefix}upvote`, buttonText: { displayText: 'Upvote' }, type: 1 },
                    { buttonId: `${prefix}devote`, buttonText: { displayText: 'Devote' }, type: 1 }
                ]

                let buttonMessageDevote = {
                    image: log0,
                    jpegThumbnail: thum,
                    caption: teks_vote,
                    footer: `${global.botname}`,
                    buttons: buttonsDevote,
                    headerType: 1,
                    mentions: menvote
                }
                AbadIng.sendMessage(m.chat, buttonMessageDevote)
            }
                break
            case 'cekvote': case 'checkvote': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!(m.chat in vote)) return replay(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
                teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete vote session


©${AbadIng.user.id}
`
                AbadIng.sendTextWithMentions(m.chat, teks_vote, m)
            }
                break
            case 'deletevote': case 'delvote': case 'hapusvote': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!(m.chat in vote)) return replay(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
                delete vote[m.chat]
                replay('Successfully deleted vote session in this group')
            }
                break
            case 'listpc': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
                let teks = `     「 Personal Chat List 」\n\nThere are ${anu.length} users using bot in personal chat`
                for (let i of anu) {
                    teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("America/Bogota").format("DD/MM/YYYY HH:mm:ss")}`
                }
                AbadIng.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'listgc': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `     「 Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
                for (let i of anu) {
                    let metadata = await AbadIng.groupMetadata(i)
                    if (metadata.owner === "undefined") {
                        loldd = false
                    } else {
                        loldd = metadata.owner
                    }
                    teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('America/Bogota').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
                }
                AbadIng.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'afk': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = args.join(" ")
                replay(`${m.pushName} has gone afk\nReason : ${args.join(" ") ? args.join(" ") : ''}`)
            }
                break
            case 'setcmd': case 'addcmd': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.quoted) return replay('Reply Message!')
                if (!m.quoted.fileSha256) return replay('SHA256 Hash Missing')
                if (!args.join(" ")) return replay(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replay('You have no permission to change this sticker command')
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replay(mess.success)
            }
                break
            case 'delcmd': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replay(`No hashes`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replay('You have no permission to delete this sticker command')
                delete global.db.sticker[hash]
                replay(mess.success)
            }
                break
            case 'listcmd': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                AbadIng.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], []) })
            }
                break
            case 'lockcmd': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return replay(mess.owner)
                if (!m.quoted) return replay('Reply Message!')
                if (!m.quoted.fileSha256) return replay('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return replay('Hash not found in database')
                global.db.sticker[hash].locked = !/^un/i.test(command)
                replay(mess.success)
            }
                break
            case 'addmsg': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.quoted) return replay(`Reply message you want to save in database`)
                if (!args.join(" ")) return replay(`Example : ${prefix + command} file name`)
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) return replay(`'${args.join(" ")}' has been saved in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                replay(`Successfully added message in message list as '${args.join(" ")}'
    
Access with ${prefix}getmsg ${args.join(" ")}

View list of messages with ${prefix}listmsg`)
            }
                break
            case 'getmsg': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return replay(`Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`)
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return replay(`'${args.join(" ")}' not listed in the message list`)
                AbadIng.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
                break
            case 'listmsg': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
                let teks = '「 LIST DATABASE 」\n\n'
                for (let i of seplit) {
                    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                replay(teks)
            }
                break
            case 'delmsg': case 'deletemsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
                delete msgs[text.toLowerCase()]
                fs.writeFileSync('./src/database.json', JSON.stringify(msgs))
                reply(`Deleted successfully '${text}' from the message list`)
            }
                break
            case 'fliptext': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${ownername}`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replay(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
                break
            case 'toletter': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
                try {
                    quere = args.join(" ")
                    convertes = await toHur(quere)
                    replay(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
                } catch {
                    replay(`Error!`)
                }
            }
                break
            case 'ghfollowing': case 'followinggh':
                anu = await fetchJson(`https://api.github.com/users/${q}/following`)
                teks = `*Following Github: ${q}\n\n`
                buffer = await getBuffer(anu[0].avatar_url)
                teks = `*Username:* ${anu.login}\n*Link:* ${anu.html_url}\n                            \n`
                AbadIng.sendMessage(from, { image: { url: buffer }, caption: teks }, { quoted: m })
                break
            case 'welcome': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (welcm) return replay('Already activated')
                    wlcm.push(from)
                    replay('Success in turning on the welcome/left msg in this group')
                } else if (args[0] === "off") {
                    if (!welcm) return replay('Already deactivated')
                    let off = wlcm.indexOf(from)
                    wlcm.splice(off, 1)
                    replay('Success in turning off welcome/left msg in this group')
                } else {
                    let buttonswlcm = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonswlcm, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'autoreply': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (Autoreply) return replay('Already activated')
                    autorep.push(from)
                    replay('Success in turning on the autoreply in this group')
                } else if (args[0] === "off") {
                    if (!Autoreply) return replay('Already deactivated')
                    let off = autorep.indexOf(from)
                    autorep.splice(off, 1)
                    replay('Success in turning off autoreply in this group')
                } else {
                    let buttonswlcm = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonswlcm, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'autorevoke': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (GcRvk) return replay('Already activated')
                    gcrevoke.push(from)
                    replay('Success in turning on autorevoke in this group')
                } else if (args[0] === "off") {
                    if (!GcRvk) return replay('Already deactivated')
                    let off = wlcm.indexOf(from)
                    gcrevoke.splice(off, 1)
                    replay('Success in turning off autorevoke in this group')
                } else {
                    let buttonsrvk = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsrvk, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
                break
            case 'leveling':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (args.length < 1) return reply('type on to enable\ntype off to disable')
                if (args[0] === 'on') {
                    if (isLeveling) return reply(`Already activated`)
                    _leveling.push(from)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                    reply('Leveling activated')
                } else if (args[0] === 'off') {
                    let anu = _leveling.indexOf(from)
                    _leveling.splice(anu, 1)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                    reply('Leveling deactivated')
                }
                break
            case 'autosticker':
            case 'autostiker':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
                if (args[0] === 'on') {
                    if (isAutoSticker) return reply(`Already activated`)
                    autosticker.push(from)
                    fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
                    reply('autosticker activated')
                } else if (args[0] === 'off') {
                    let anu = autosticker.indexOf(from)
                    autosticker.splice(anu, 1)
                    fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
                    reply('auto sticker deactivated')
                }
                break
            case 'autostickerpc':
            case 'autostikerpc':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (args.length < 1) return reply('type autosticker on to activate\ntype autosticker off to disable')
                if (args[0] === 'on') {
                    if (isAutoStick) return reply(`Already activated`)
                    _autostick.push(from)
                    fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
                    reply('autosticker pc activated')
                } else if (args[0] === 'disable') {
                    let anu = autosticker.indexOf(from)
                    _autostick.splice(anu, 1)
                    fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
                    reply('autosticker pc deactivated')
                }
                break
            case 'rentbot':
                if (!q) return reply(`Use :\n*${prefix}sewa* add/del time`)
                if (args[0] === 'add') {
                    _sewa.addSewaGroup(from, args[1], sewa)
                    reply(`Success`)
                } else if (args[0].toLowerCase() === 'del') {
                    sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
                    fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
                    reply(mess.success)
                } else {
                    reply(`Use :\n*${prefix}sewa* add/del time`)
                }
                break
            case 'rentlist':
            case 'rentallist':
                let txtnyee = `Rental List\nAmount : ${sewa.length}\n\n`
                for (let i of sewa) {
                    let cekvippsewa = ms(i.expired - Date.now())
                    txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
                }
                reply(txtnyee)
                break
            case 'rentcheck':
            case 'checkrent':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isSewa) return reply(`This group is not listed on the rentbot list. Type ${prefix}rentbot for more information`)
                let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
                let sewanya = `*「 RENT EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
                reply(sewanya)
                break
            case 'antilinkgc': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiLink) return replay('Already activated')
                    ntilink.push(from)
                    replay('Success in turning on group chat antilink in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the group link in this group or u will be kicked immediately`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiLink) return replay('Already deactivated')
                    let off = ntilink.indexOf(from)
                    ntilink.splice(off, 1)
                    replay('Success in turning off group chat antilink in this group')
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiLinkYoutubeVid) return replay('Already activated')
                    ntilinkytvid.push(from)
                    replay('Success in turning on youtube video antilink in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiLinkYoutubeVid) return replay('Already deactivated')
                    let off = ntilinkytvid.indexOf(from)
                    ntilinkytvid.splice(off, 1)
                    replay('Success in turning off youtube video antilink in this group')
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiLinkYoutubeChannel) return replay('Already activated')
                    ntilinkytch.push(from)
                    replay('Success in turning on youtube channel antilink in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
                    let off = ntilinkytch.indexOf(from)
                    ntilinkytch.splice(off, 1)
                    replay('Success in turning off youtube channel antilink in this group')
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiLinkInstagram) return replay('Already activated')
                    ntilinkig.push(from)
                    replay('Success in turning on instagram antilink in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiLinkInstagram) return replay('Already deactivated')
                    let off = ntilinkig.indexOf(from)
                    ntilinkig.splice(off, 1)
                    replay('Success in turning off instagram antilink in this group')
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antilinkfacebook': case 'antilinkfb': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiLinkFacebook) return replay('Already activated')
                    ntilinkfb.push(from)
                    replay('Success in turning on facebook antilink in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiLinkFacebook) return replay('Already deactivated')
                    let off = ntilinkfb.indexOf(from)
                    ntilinkfb.splice(off, 1)
                    replay('Success in turning off facebook antilink in this group')
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antilinktelegram': case 'antilinktg': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiLinkTelegram) return replay('Already activated')
                    ntilinktg.push(from)
                    replay('Success in turning on telegram antilink in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiLinkTelegram) return replay('Already deactivated')
                    let off = ntilinkig.indexOf(from)
                    ntilinkig.splice(off, 1)
                    replay('Success in turning off telegram antilink in this group')
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antilinktiktok': case 'antilinktt': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiLinkTiktok) return replay('Already activated')
                    ntilinktt.push(from)
                    replay('Success in turning on tiktok antilink in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiLinkTiktok) return replay('Already deactivated')
                    let off = ntilinktt.indexOf(from)
                    ntilinktt.splice(off, 1)
                    replay('Success in turning off tiktok antilink in this group')
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiLinkTwitter) return replay('Already activated')
                    ntilinktwt.push(from)
                    replay('Success in turning on twitter antilink in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiLinkTwitter) return replay('Already deactivated')
                    let off = ntilinktwt.indexOf(from)
                    ntilinktwt.splice(off, 1)
                    replay('Success in turning off twitter antilink in this group')
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antilinkall': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiLinkTwitter) return replay('Already activated')
                    ntilinkall.push(from)
                    replay('Success in turning on all antilink in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiLinkAll) return replay('Already deactivated')
                    let off = ntilinkall.indexOf(from)
                    ntilinkall.splice(off, 1)
                    replay('Success in turning off all antilink in this group')
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antivirus': case 'antivirtex': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (antiVirtex) return replay('Already activated')
                    ntvirtex.push(from)
                    replay('Success in turning on antivirus in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!antiVirtex) return replay('Already deactivated')
                    let off = ntvirtex.indexOf(from)
                    ntvirtex.splice(off, 1)
                    replay('Success in turning off antivirus this group')
                } else {
                    let buttonsntvirtex = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antitoxic': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (antiToxic) return replay('Already activated')
                    nttoxic.push(from)
                    replay('Success in turning on antitoxic in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!antiToxic) return replay('Already deactivated')
                    let off = nttoxic.indexOf(from)
                    nttoxic.splice(off, 1)
                    replay('Success in turning off antitoxic in this group')
                } else {
                    let buttonsnttoxci = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'antiwame': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (antiWame) return replay('Already activated')
                    ntwame.push(from)
                    replay('Success in turning on antiwame in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!antiWame) return replay('Already deactivated')
                    let off = nttoxic.indexOf(from)
                    ntwame.splice(off, 1)
                    replay('Success in turning off antiwame in this group')
                } else {
                    let buttonsntwame = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'nsfw': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === "on") {
                    if (AntiNsfw) return replay('Already activated')
                    ntnsfw.push(from)
                    replay('Success in turning on nsfw in this group')
                    var groupe = await AbadIng.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    AbadIng.sendMessage(from, { text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
                } else if (args[0] === "off") {
                    if (!AntiNsfw) return replay('Already deactivated')
                    let off = ntnsfw.indexOf(from)
                    ntnsfw.splice(off, 1)
                    replay('Success in turning off nsfw in this group')
                } else {
                    let buttonsntnsfw = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
            }
                break
            case 'ban': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return replay(mess.owner)
                if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
                if (args[1]) {
                    orgnye = args[1] + "@s.whatsapp.net"
                } else if (m.quoted) {
                    orgnye = m.quoted.sender
                }
                const isBane = banUser.includes(orgnye)
                if (args[0] === "add") {
                    if (isBane) return ads('User was already banned')
                    banUser.push(orgnye)
                    replay(`Successfully banned the user`)
                } else if (args[0] === "del") {
                    if (!isBane) return ads('User was already unbanned')
                    let delbans = banUser.indexOf(orgnye)
                    banUser.splice(delbans, 1)
                    replay(`Successfully unbanned the user`)
                } else {
                    replay("Error")
                }
            }
                break
            case 'listonline': case 'listaktif': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                let liston = 1
                AbadIng.sendText(m.chat, '     「 Online List 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
            }
                break
            case 'chat': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return reply(mess.owner)
                if (!args.join(" ")) return reply(`Example :\n${prefix + command} 916909xxxxxx|Hi`)
                const cpes = args.join(" ")
                const nony = cpes.split("|")[0];
                const pesny = cpes.split("|")[1];
                lolh = `*| CHAT |*

Message from owner of bot
Number : @${m.sender.split("@")[0]}
Message : ${pesny}`
                AbadIng.sendMessage(nony + "@s.whatsapp.net", { text: lolh, mentions: [m.sender] }, { quoted: m })
            }
                await reply("Success")
                break
            case 'cowner': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return reply(mess.owner)
                if (!args[0]) return reply(`Select add or delete`)
                if (args[1]) {
                    orgnye = args[1]
                } else if (m.quoted) {
                    orgnye = m.quoted.sender.split("@")[0]
                }
                const isCwner = owner.includes(orgnye)
                if (args[0] === "add") {
                    if (isCwner) return reply('The user is already the owner')
                    owner.push(orgnye)
                    reply(`Success in adding owner`)
                } else if (args[0] === "del") {
                    if (!isCwner) return reply('User is not owner')
                    let delcwner = owner.indexOf(orgnye)
                    owner.splice(delcwner, 1)
                    reply(`Success in deleting owner`)
                } else {
                    reply("Error")
                }
            }
                break
            case 'ban': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return replay(mess.owner)
                if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
                if (args[1]) {
                    orgnye = args[1] + "@s.whatsapp.net"
                } else if (m.quoted) {
                    orgnye = m.quoted.sender
                }
                const isBane = banUser.includes(orgnye)
                if (args[0] === "add") {
                    if (isBane) return ads('User was already banned')
                    banUser.push(orgnye)
                    replay(`Successfully banned the user`)
                } else if (args[0] === "del") {
                    if (!isBane) return ads('User was already unbanned')
                    let delbans = banUser.indexOf(orgnye)
                    banUser.splice(delbans, 1)
                    replay(`Successfully unbanned the user`)
                } else {
                    replay("Error")
                }
            }
                break
            case 'request': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return replay(`Example : ${prefix + command} hello dev please add a downloader feature`)
                teks = `*| REQUEST |*`
                teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
                teks2 = `\n\nSuccessfully sent to owner`
                for (let i of owner) {
                    AbadIng.sendMessage(i + "@s.whatsapp.net", { text: teks + teks1, mentions: [m.sender] }, { quoted: m })
                }
                AbadIng.sendMessage(m.chat, { text: teks + teks2 + teks1, mentions: [m.sender] }, { quoted: m })
            }
                break
            case 'report': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return replay(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} hey dev this user is spamming`)
                teks = `*| REPORT |*`
                teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
                teks2 = `\n\nSuccessfully sent to owner`
                for (let i of owner) {
                    AbadIng.sendMessage(i + "@s.whatsapp.net", { text: teks + teks1, mentions: [m.sender] }, { quoted: m })
                }
                AbadIng.sendMessage(m.chat, { text: teks + teks2 + teks1, mentions: [m.sender] }, { quoted: m })
            }
                break
            case 'mcserver': case 'mcquery': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return replay(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.asteria.com|19132`)
                const Query = require("minecraft-query");

                const qury = args.join(" ")
                const iphost = qury.split("|")[0];
                const portnya = qury.split("|")[1];

                if (!iphost) return replay(`Where's your ip?`)
                if (!portnya) return replay(`Where's the port??`)

                const q = new Query({ host: iphost, port: portnya, timeout: 7500 });

                q.fullStat()
                    .then(success => {
                        replay(jsonformat(success));
                        return q.basicStat()
                    })
                    .then(success => {
                        replay(jsonformat(success));
                        q.close();
                    })
            }
                break
            case 'mcpedl': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return replay(`Example : ${prefix + command} shader`)
                yogipw.mcpedl(args.join(" ")).then(async (res) => {
                    teks = `*| MCPEDL SEARCH |*`
                    for (let i of res) {
                        teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
                    }
                    let buttons = [
                        { buttonId: `menu`, buttonText: { displayText: 'Menu🥀' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: log0,
                        jpegThumbnail: thum,
                        caption: teks,
                        footer: `${global.botname}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
            }
                break
            case 'happymod': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return replay(`Example : ${prefix + command} mobile legend`)
                yogipw.happymod(args.join(" ")).then(async (res) => {
                    teks = '```「 HappyMod Search 」```'
                    for (let i of res) {
                        teks += `\n\n${i.name}\n`
                        teks += `${i.link}`
                    }
                    let buttons = [
                        { buttonId: `menu`, buttonText: { displayText: 'Menu🥀' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: { url: res[0].icon },
                        jpegThumbnail: thum,
                        caption: teks,
                        footer: `${global.botname}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
            }
                break
            case 'searchgc': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (args.length < 1) return replay(`Example :\n${prefix}searchgc Classy Editor`)
                nae = args.join(" ")
                hx.linkwa(nae).then(res => {
                    teks = '```「 Search Group 」```'
                    for (let i of res) {
                        teks += `\n\n•> Group Whatsapp :\n`
                        teks += `${i.link}\n`
                        teks += `${i.nama}`
                    }
                    let buttons = [
                        { buttonId: `menu`, buttonText: { displayText: 'Menu🥀' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: log0,
                        jpegThumbnail: thum,
                        caption: teks,
                        footer: `${global.botname}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
            }
                break
            case 'servermc': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                yogipw.servermc().then(async (res) => {
                    let teks = '*| MINECRAFT SERVER |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
                    let no = 1
                    for (let i of res) {
                        teks += `${themeemoji} Server To ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
                    }
                    let buttons = [
                        { buttonId: `menu`, buttonText: { displayText: 'Menu🥀' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: log0,
                        jpegThumbnail: thum,
                        caption: teks,
                        footer: `${global.botname}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
            }
                break
            case 'antitag': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return
                if (args.length < 1) return replay(`Type on to enable\nType off to disable`)
                if (args[0] === 'on') {
                    if (antitags === true) return
                    global.antitags = true
                    replay(`Successfully activated antitag!`)
                } else if (args[0] === 'off') {
                    if (antitags === false) return
                    global.antitags = false
                    replay(`Successfully deactivated antitag!`)
                } else {
                    replay('Choose on or off')
                }
            }
                break
            case 'yts': case 'ytsearch': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return replay(`Example : ${prefix + command} stay jb`)
                let yts = require("yt-search")
                let search = await yts(args.join(" "))
                let teks = '*| YOUTUBE SEARCH |*\n\n Result From ' + text + '\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${global.themeemoji} No : ${no++}\n${global.themeemoji} Type : ${i.type}\n${global.themeemoji} Video ID : ${i.videoId}\n${global.themeemoji} Title : ${i.title}\n${global.themeemoji} Views : ${i.views}\n${global.themeemoji} Duration : ${i.timestamp}\n${global.themeemoji} Uploaded : ${i.ago}\n${global.themeemoji} Author : ${i.author.name}\n${global.themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                AbadIng.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
            }
                break
            case 'chatinfo': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.quoted) replay('Reply Message')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay('The message was not sent by a bot!')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                AbadIng.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'setnamegroup': case 'setsubject': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (!text) return replay('Text ?')
                await AbadIng.groupUpdateSubject(m.chat, text).then((res) => replay(mess.success)).catch((err) => replay(jsonformat(err)))
            }
                break
            case 'block': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return reply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AbadIng.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'unblock': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return reply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AbadIng.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'setdesc': case 'setdesk': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (!text) return replay('Where is the text?')
                await AbadIng.groupUpdateDescription(m.chat, text).then((res) => replay(mess.success)).catch((err) => replay(jsonformat(err)))
            }
                break
            case 'setppbot': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return replay(mess.owner)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await AbadIng.downloadAndSaveMediaMessage(quoted)
                await AbadIng.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                replay(mess.success)
            }
                break
            case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await AbadIng.downloadAndSaveMediaMessage(quoted)
                await AbadIng.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                replay(mess.success)
            }
                break
            case 'tag': case 'tagall': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝
 
 🌹 *Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
                for (let mem of participants) {
                    teks += `${global.themeemoji} @${mem.id.split('@')[0]}\n`
                }
                AbadIng.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'hidetag': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                AbadIng.sendMessage(m.chat, { text: args.join(" ") ? args.join(" ") : '', mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'virtex': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return reply(mess.admin)
                AbadIng.sendMessage(m.chat, { text: `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id) }, { quoted: m })
                AbadIng.sendMessage(m.chat, { text: `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id) }, { quoted: m })
                AbadIng.sendMessage(m.chat, { text: `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id) }, { quoted: m })
                AbadIng.sendMessage(m.chat, { text: `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id) }, { quoted: m })
                AbadIng.sendMessage(m.chat, { text: `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'autoreadsw': case 'autoreadstatus':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return reply(mess.owner)
                if (args[0] == 'on') {
                    if (autoreadsw) return reply('*Already activated!*')
                    autoreadsw = true
                    reply('*Successfully activate auto read status*')
                } else if (args[0] == 'off') {
                    if (!autoreadsw) return reply('*Already deactivated!*')
                    autoreadsw = false
                    reply('*Successfully turn off auto read status*')
                } else {
                    reply('Choose on or off!')
                }
                break
            case 'grouplink': case 'gclink': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                let response = await AbadIng.groupInviteCode(m.chat)
                AbadIng.sendMessage(m.chat, {
                    text: `${groupMetadata.subject} Group Link : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
                        mimetype: "image/jpeg",
                        text: `${global.ownername}`,
                        "forwardingScore": 1000000000,
                        isForwarded: true,
                        sendEphemeral: true,
                        "externalAdReply": {
                            "title": `${global.botname}`,
                            "body": `${global.watermark}`,
                            "previewType": "PHOTO",
                            "thumbnailUrl": thum,
                            "thumbnail": thum,
                            "sourceUrl": `${global.websitex}`
                        }
                    }
                }, { quoted: m, detectLink: true })
            }
                break
            case 'resetlinkgc':
            case 'resetlinkgroup':
            case 'resetlinkgrup':
            case 'revoke':
            case 'resetlink':
            case 'resetgrouplink':
            case 'resetgclink':
            case 'resetgruplink': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                AbadIng.groupRevokeInvite(m.chat)
            }
                break
            case 'ephemeral': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (!args[0]) return replay('Enter the enable/disable values')
                if (args[0] === 'enable') {
                    await AbadIng.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await AbadIng.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
                }
            }
                break
            case 'editinfo': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === 'open') {
                    await AbadIng.groupSettingUpdate(m.chat, 'unlocked').then((res) => replay(`Successful in enabling the group info edit`)).catch((err) => replay(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await AbadIng.groupSettingUpdate(m.chat, 'locked').then((res) => replay(`Successful in disabling the group info edit`)).catch((err) => replay(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: log0,
                        jpegThumbnail: thum,
                        caption: `*「 ${global.botname} 」*\n\nChange Info, Select Open Or Close`,
                        footer: `${botname}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
            }
                break
            case 'group': case 'grup': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                if (args[0] === 'close') {
                    await AbadIng.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Successful in closing the gc`)).catch((err) => replay(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await AbadIng.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Successful in opening the gc`)).catch((err) => replay(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: log0,
                        jpegThumbnail: thum,
                        caption: `*「 ${global.botname} 」*\n\nChange Group Setting, Select Open Or Close`,
                        footer: `${botname}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
            }
                break
            case 'promote': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AbadIng.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
            }
                break
            case 'demote': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AbadIng.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
            }
                break
            case 'kick': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AbadIng.groupParticipantsUpdate(m.chat, [users], 'remove')
            }
                break
            case 'add': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!isBotAdmins) return replay(mess.botAdmin)
                if (!isAdmins && !isCreator) return replay(mess.admin)
                let _participants = participants.map(user => user.id)
                let users = (await Promise.all(
                    text.split(',')
                        .map(v => v.replace(/[^0-9]/g, ''))
                        .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
                        .map(async v => [
                            v,
                            await AbadIng.onWhatsApp(v + '@s.whatsapp.net')
                        ])
                )).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
                const response = await AbadIng.query({
                    tag: 'iq',
                    attrs: {
                        type: 'set',
                        xmlns: 'w:g2',
                        to: m.chat,
                    },
                    content: users.map(jid => ({
                        tag: 'add',
                        attrs: {},
                        content: [{ tag: 'participant', attrs: { jid } }]
                    }))
                })
            }

                break
            case 'inspect': case 'inspectgclink': case 'inspectgrouplink': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return reply("Where is the link?")
                let linkRegex = args.join(" ")
                let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
                if (!coded) return reply("Link Invalid")
                AbadIng.query({
                    tag: "iq",
                    attrs: {
                        type: "get",
                        xmlns: "w:g2",
                        to: "@g.us"
                    },
                    content: [{ tag: "invite", attrs: { code: coded } }]
                }).then(async (res) => {
                    tekse = `     「 Group Link Inspector 」
${themeemoji} ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
${themeemoji} Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
${themeemoji} Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
${themeemoji} Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t * 1000).tz("America/Bogota").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
${themeemoji} Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
${themeemoji} Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("America/Bogota").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
${themeemoji} Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
${themeemoji} Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
${themeemoji} Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("America/Bogota").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
${themeemoji} Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
${themeemoji} Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
                    try {
                        pp = await AbadIng.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
                    } catch {
                        pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
                    }
                    AbadIng.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await AbadIng.parseMention(tekse) })
                })
            }
                break
            case 'inspect': case 'inspectgclink': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return replay("The link?")
                let linkRegex = args.join(" ")
                let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
                if (!coded) return replay("Link Invalid")
                AbadIng.query({
                    tag: "iq",
                    attrs: {
                        type: "get",
                        xmlns: "w:g2",
                        to: "@g.us"
                    },
                    content: [{ tag: "invite", attrs: { code: coded } }]
                }).then(async (res) => {
                    tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t * 1000).tz("America/Bogota").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create on : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("America/Bogota").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("America/Bogota").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
                    try {
                        pp = await AbadIng.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
                    } catch {
                        pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
                    }
                    AbadIng.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await AbadIng.parseMention(tekse) })
                })
            }
                break
            case 'join': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return replay(`Where's the link?`)
                vdd = args[0]
                let vcc = vdd.split("https://chat.whatsapp.com/")[1]
                if (!vcc) return replay("Link invalid!")
                if (isCreator) {
                    await AbadIng.groupAcceptInvite(vcc).then(async (res) => replay(jsonformat(res))).catch(_ => _)
                    replay("Succes!")
                } else {
                    AbadIng.query({
                        tag: "iq",
                        attrs: {
                            type: "get",
                            xmlns: "w:g2",
                            to: "@g.us"
                        },
                        content: [{ tag: "invite", attrs: { code: vcc } }]
                    }).then(async (res) => {
                        sizny = res.content[0].attrs.size
                        if (sizny < 50) {
                            teks = `Sorry, your group members are less than 50, at least for a bot to join you must have more than 50 members`
                            sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Resources/theme/AsteriaThumb.jpg'), `${global.watermark}`, `${global.botname}`, "57322536629@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
                        } else if (sizny > 50) {
                            await AbadIng.groupAcceptInvite(vcc).then(async (res) => replay(jsonformat(res))).catch(_ => _)
                            replay("Succes!")
                        } else {
                            replay("Error")
                        }
                    }).catch(_ => _)
                }
            }
                break
            case 'volume': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
                media = await AbadIng.downloadAndSaveMediaMessage(quoted, "volume")
                if (isQuotedAudio) {
                    rname = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Error!')
                        jadie = fs.readFileSync(rname)
                        AbadIng.sendMessage(from, { audio: jadie, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                        fs.unlinkSync(rname)
                    })
                } else if (isQuotedVideo) {
                    rname = getRandom('.mp4')
                    exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Error!')
                        jadie = fs.readFileSync(rname)
                        AbadIng.sendMessage(from, { video: jadie, mimetype: 'video/mp4' }, { quoted: m })
                        fs.unlinkSync(rname)
                    })
                } else {
                    reply("Send video/audio")
                }
            }
                break
            case 'tempo': {
                if (isBan) return reply(mess.ban)
                if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
                var req = args.join(' ')
                media = await AbadIng.downloadAndSaveMediaMessage(quoted, "tempo")
                if (isQuotedAudio) {
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        AbadIng.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                        fs.unlinkSync(ran)
                    })
                } else if (isQuotedVideo) {
                    ran = getRandom('.mp4')
                    exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        AbadIng.sendMessage(from, { video: hah, mimetype: 'video/mp4' }, { quoted: m })
                        fs.unlinkSync(ran)
                    })
                } else {
                    reply("Send video/audio")
                }
            }
                break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                    let set
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        reply(mess.wait)
                        let media = await AbadIng.downloadAndSaveMediaMessage(quoted)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return reply(err)
                            let buff = fs.readFileSync(ran)
                            AbadIng.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
                            fs.unlinkSync(ran)
                        })
                    } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                    reply(e)
                }
                break
            case 'write': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (args.length < 1) return reply(`Example :\n${prefix}nulis Aldi|91|#ff020a|Manusia terganteng adalah salman alfarizi`)
                const nls = args.join(" ")
                const nams = "Name : " + nls.split("|")[0];
                const kels = "Class : " + nls.split("|")[1];
                const menlise = nls.split("|")[3];
                const codewarn = nls.split("|")[2];
                await reply('Writing')
                const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
                const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
                const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
                const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
                if (kels.length > 12) return reply("Maximum number of class texts 4")
                if (nams.length > 34) return reply("The maximum number of text is 27")
                if (codewarn.length > 7) return reply("Maximum number of color text 7")
                console.log('「 WRITING 」is in process')
                spawn('convert', [
                    './Resources/image/magernulis.jpg',
                    '-fill',
                    codewarn,
                    '-font',
                    './Resources/font/nulis.ttf',
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '20',
                    '-interline-spacing',
                    '1',
                    '-annotate',
                    '+806+78',
                    janghar,
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '18',
                    '-interline-spacing',
                    '1',
                    '-annotate',
                    '+806+102',
                    jangwak,
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '21',
                    '-interline-spacing',
                    '1',
                    '-annotate',
                    '+285+90',
                    jangnam,
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '21',
                    '-interline-spacing',
                    '1',
                    '-annotate',
                    '+285+110',
                    jangkel,
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '20',
                    '-interline-spacing',
                    '-7.5',
                    '-annotate',
                    '+344+146',
                    jangbare,
                    './storage/hasilnulis.jpg'
                ])
                    .on('error', () => reply('Error'))
                    .on('exit', () => {
                        AbadIng.sendMessage(from, { image: fs.readFileSync('./storage/hasilnulis.jpg'), caption: 'Succes' }, { quoted: m }).catch(() => reply('```「 FAIL 」An error occurred sending the file```'))
                    })
                exec(`npm i marker`)
            }
                break
            case 'calculator': case 'cal': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2 * 5\n\n*List of Numbers :*\n•> Time : *\n•> For : /\n•> Plus : +\n•> Not enough : -`)
                let qsd = args.join(" ")
                if (typeof mathjs.evaluate(qsd) !== 'number') {
                    reply('Error')
                } else {
                    reply(`\`\`\`「 Calculator 」\`\`\`\n\n*•> Count :* ${qsd}\n*•> Results :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
                }
            }
                break
            case 'public': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return reply(mess.owner)
                AbadIng.public = true
                reply('Success In Chaing To Public Usage')
                AbadIng.setStatus(`Mode : Public`)
            }
                break
            case 'setstatuts':
            case 'setbio':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply('Send orders *#setbio text*')
                AbadIng.setStatus(`${q}`)
                reply(mess.success)
                break
            case 'self': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return reply(mess.owner)
                AbadIng.public = false
                reply('Successful Change To Self Usage')
                AbadIng.setStatus(`Mode : Self`)
            }
                break
            case 'speed': case 'p': case 'ping': case 'botstatus': case 'statusbot': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                reply(respon)
            }
                break
            case 'speedtest': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply('Testing Speed...')
                let cp = require('child_process')
                let { promisify } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let { stdout, stderr } = o
                    if (stdout.trim()) reply(stdout)
                    if (stderr.trim()) reply(stderr)
                }
            }
                break
            case 'emojimix2': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await AbadIng.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'attp': case 'ttp': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Example : ${prefix + command} text`)
                await AbadIng.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, { asSticker: true })

            }
                break
            case 'toimage': case 'toimg': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.quoted) return reply('Reply Image')
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await AbadIng.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    AbadIng.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
                break
            case 'tomp4': case 'tovideo': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.quoted) return reply('Reply Image')
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader')
                let media = await AbadIng.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await AbadIng.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
                break
            case 'toaud': case 'toaudio': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
                if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
                reply(mess.wait)
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                AbadIng.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'tomp3': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
                if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
                reply(mess.wait)
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                AbadIng.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${AbadIng.user.name} (${m.id}).mp3` }, { quoted: m })
            }
                break
            case 'tovn': case 'toptt': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
                if (!m.quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
                reply(mess.wait)
                let media = await quoted.download()
                let { toPTT } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                AbadIng.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
            }
                break
            case 'togif': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.quoted) return reply('Reply Image')
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader')
                let media = await AbadIng.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await AbadIng.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
                break
            case 'antiviewonce': case 'antionce':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.key.fromMe && !isCreator) return reply(mess.owner)
                if (args[0] === "on") {
                    if (global.db.data.chats[m.chat].antionce) return reply(`Already activated`)
                    global.db.data.chats[m.chat].antionce = true
                    reply(`${command} Successfully Activated !`)
                } else if (args[0] === "off") {
                    if (!global.db.data.chats[m.chat].antionce) return reply(`Already deactivated`)
                    global.db.data.chats[m.chat].antionce = false
                    reply(`${command} Successfully Deactivated !`)
                } else {
                    let buttonsntilink = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                }
                break
            case 'lovesticker':
            case 'lovestick': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await AbadIng.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
            }
                break
            case 'gura':
            case 'gurastick': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await AbadIng.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
            }
                break
            case 'dogesticker':
            case 'dogestick': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await AbadIng.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
            }
                break
            case 'patrick':
            case 'patricksticker': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await AbadIng.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
            }
                break
            case 'tourl': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await AbadIng.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
                break
            case 'q': case 'quoted': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.quoted) return replay('Reply Message!!')
                let wokwol = await AbadIng.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return replay('The message you replied to does not contain a reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
                break
            case 'getpic': case 'getpp': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (qtod === "true") {
                    try {
                        pporg = await AbadIng.profilePictureUrl(m.quoted.sender, 'image')
                    } catch {
                        pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    AbadIng.sendMessage(m.chat, { image: { url: pporg }, caption: `Done!` }, { quoted: m })
                } else if (qtod === "false") {
                    try {
                        pporgs = await AbadIng.profilePictureUrl(from, 'image')
                    } catch {
                        pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    AbadIng.sendMessage(m.chat, { image: { url: pporgs }, caption: `Done!` }, { quoted: m })
                }
            }
                break
            case 'owner': case 'creator': {
                AbadIng.sendContact(m.chat, global.owner, m)
            }
                break
            case 'translate': case 'trans': {
                if (isBan) return reply(mess.ban)
                if (!args.join(" ")) return replay("The text?")
                tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
                Infoo = tes.info
                Detek = tes.translate
                replay(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
            }
                break
            case 'gimage': case 'gig': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return reply("What picture are you looking for??")
                let gis = require('g-i-s')
                gis(args.join(" "), async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let buttons = [
                        { buttonId: `gimage ${args.join(" ")}`, buttonText: { displayText: 'Next Image 👀' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: { url: images },
                        caption: `*| GOOGLE IMAGE |*

${global.themeemoji} Query : ${text}
${global.themeemoji} Media Url : ${images}`,
                        footer: `${global.botname}`,
                        buttons: buttons,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: `${global.ownername}`,
                                body: `${global.watermark}`,
                                thumbnail: log0,
                                mediaType: 2,
                                mediaUrl: `${global.websitex}`,
                                sourceUrl: `{global.websitex}`
                            }
                        }
                    }
                    AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
            }
                break
            case 'google': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
                let google = require('google-it')
                google({ 'query': args.join(" ") }).then(res => {
                    let teks = `Google Search From : ${text}\n\n`
                    for (let g of res) {
                        teks += `${global.themeemoji} *Title* : ${g.title}\n`
                        teks += `${global.themeemoji} *Description* : ${g.snippet}\n`
                        teks += `${global.themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
                    }
                    reply(teks)
                })
            }
                break
            case 'igstory': case 'instagramstory': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return reply(`Example :\n${prefix + command} Anxo2077`)
                try {
                    hx.igstory(args[0]).then(async (resed) => {
                        ini_anu = []
                        anu_list = []
                        textbv = `*| INSTAGRAM STORY |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
                        urut = 1
                        for (let i = 0; i < resed.medias.length; i++) {
                            ini_anu.push({
                                "type": resed.medias[i].fileType,
                                "url": resed.medias[i].url
                            })
                        }
                        ilod = 1
                        for (let i of ini_anu) {
                            anu_list.push({ buttonId: `ig ${i.type} ${i.url}`, buttonText: { displayText: `Media ${ilod++}` }, type: 1 })
                        }
                        textbv += `\n\n_Select the media below to download_`
                        let buttons = anu_list
                        let buttonMessage = {
                            image: log0,
                            jpegThumbnail: thum,
                            caption: textbv,
                            footer: `${global.botname}`,
                            buttons: buttons,
                            headerType: 4
                        }
                        AbadIng.sendMessage(from, buttonMessage, { quoted: m })
                    })
                } catch (err) {
                    reply(String(err))
                }
            }
                break
            case 'igs2': case 'igstory2': case 'instagramstory2': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Where is the username?\nExample: ${prefix}igstory Anxo2077`)
                let urlnya = text
                hx.igstory(urlnya)
                    .then(async (result) => {
                        var halo = 0
                        AbadIng.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Media :* ${result.medias.length}\n*${themeemoji} Bio :* ${result.user.biography}\n\n*${botname}*` }, { quoted: m })
                        for (let i of result.medias) {
                            if (i.url.includes('mp4')) {
                                let link = await getBuffer(i.url)
                                AbadIng.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })
                            } else {
                                let link = await getBuffer(i.url)
                                AbadIng.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })
                            }
                        }
                    }).catch((err) => reply(`Sorry username ${text} was not found or maybe he/she has no story uploaded in her id`))
            }
                break
            case 'ig2': case 'igdl2': case 'instagram2': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Where is the link bro`)
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(`The link you provided is not a instagram link`)
                let urlnya = text
                hx.igdl(urlnya)
                    .then(async (result) => {
                        var halo = 0
                        AbadIng.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Jumlah Media :* ${result.medias.length}\n*${themeemoji} Url :* ${text}\n\n*${botname}*` }, { quoted: m })
                        for (let i of result.medias) {
                            if (i.url.includes('mp4')) {
                                let link = await getBuffer(i.url)
                                AbadIng.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
                            } else {
                                let link = await getBuffer(i.url)
                                AbadIng.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
                            }
                        }
                    }).catch((err) => reply(mess.error))
            }
                break
            case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
                try {
                    hx.igdl(args[0]).then(async (resed) => {
                        ini_anu = []
                        anu_list = []
                        textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
                        urut = 1
                        for (let i = 0; i < resed.medias.length; i++) {
                            ini_anu.push({
                                "type": resed.medias[i].fileType,
                                "url": resed.medias[i].url
                            })
                        }
                        ilod = 1
                        for (let i of ini_anu) {
                            anu_list.push({ buttonId: `ig ${i.type} ${i.url}`, buttonText: { displayText: `Media ${ilod++}` }, type: 1 })
                        }
                        textbv += `\n\n_Select the media below to download_`
                        let buttons = anu_list
                        let buttonMessage = {
                            image: log0,
                            jpegThumbnail: thum,
                            caption: textbv,
                            footer: `${global.botname}`,
                            buttons: buttons,
                            headerType: 4
                        }
                        AbadIng.sendMessage(from, buttonMessage, { quoted: m })
                    })
                } catch (err) {
                    reply(String(err))
                }
            }
                break
            case 'ig': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (args[0] === "mp4") {
                    AbadIng.sendMessage(from, { video: { url: args[1] }, caption: 'Done!', mimetype: 'video/mp4' }, { quoted: m })
                } else if (args[0] === "jpg") {
                    AbadIng.sendMessage(from, { image: { url: args[1] }, caption: 'Done!' }, { quoted: m })
                } else {
                    reply("Error! ")
                }
            }
                break
            case 'mp4': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return reply(`Where's the link ?`)
                try {
                    AbadIng.sendMessage(from, {
                        video: { url: args[0] }, caption: "Succes", contextInfo: {
                            externalAdReply: {
                                title: `${global.botname}`,
                                body: `${global.ownername}`,
                                thumbnail: log0,
                                mediaType: 2,
                                mediaUrl: `${global.websitex}`,
                                sourceUrl: `${global.websitex}`
                            }
                        }
                    }, { quoted: m })
                } catch {
                    reply("Link error!")
                }
            }
                break
            case 'jpeg': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return reply(`Where's the link?`)
                try {
                    AbadIng.sendMessage(from, {
                        image: { url: args[0] }, caption: "Success", contextInfo: {
                            externalAdReply: {
                                title: `${global.botname}`,
                                body: `${global.ownername}`,
                                thumbnail: log0,
                                mediaType: 2,
                                mediaUrl: `${global.websitex}`,
                                sourceUrl: `${global.websitex}`
                            }
                        }
                    }, { quoted: m })
                } catch {
                    reply("Link error")
                }
            }
                break
            case 'igtv': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Where is the link boss?`)
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*The link you provided is not valid*')
                instagramdlv3(`${text}`).then(async (data) => {
                    var buf = await getBuffer(data[0].thumbnail)
                    AbadIng.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail: buf, caption: `${botname}` }, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
                break
            case 'twitter': case 'td': case 'twitterdl': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`The link you provided is not valid`)
                Abadkey.Twitter(`${text}`).then(async (data) => {
                    let txt = `*TWITTER DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*${themeemoji}TYPE :* ${data.medias[1].extension}\n`
                    txt += `*${themeemoji}SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*${themeemoji}DURATION :* ${data.medias.length}\n`
                    txt += `*${themeemoji}URL :* ${data.url}\n\n`
                    txt += `*${botname}*`
                    buf = await getBuffer(data.thumbnail)
                    AbadIng.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m })
                    for (let i of data.medias) {
                        AbadIng.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail: buf, caption: `*${text}*` }, { quoted: m })
                    }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
                break
            case 'twittermp3': case 'twitteraudio': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*The link you provided is not valid*`)
                Abadkey.Twitter(`${text}`).then(async (data) => {
                    AbadIng.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4' }, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
                break
            case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Where is the link bro?\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
                let bocil = require('@bochilteam/scraper')
                bocil.facebookdlv2(`${text}`).then(async (data) => {
                    let txt = `*FB DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.result[0].quality}\n`
                    txt += `*${themeemoji}DESCRIPTION :* ${data.description}\n`
                    txt += `*${themeemoji}ID :* ${watermark}\n`
                    txt += `*${themeemoji}URL :* ${text}\n\n`
                    buf = await getBuffer(data.thumbnail)
                    AbadIng.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m })
                    for (let i of data.result) {
                        AbadIng.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail: buf, caption: `*${themeemoji} Quality :* ${i.quality}` }, { quoted: m })
                    }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
                break
            case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Where is the link?\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
                let noh = require('@bochilteam/scraper')
                noh.savefrom(`${text}`).then(async (anu) => {
                    AbadIng.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
                break
            case 'tiktok': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply('Where is the link?')
                reply(mess.wait)
                if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
                const musim_rambutan = await AbadBotIncTiktok(`${q}`).catch(e => {
                    reply(mess.error)
                })
                console.log(musim_rambutan)
                const Abadtiktoknowm = musim_rambutan.result.nowatermark
                texttk = `Wanna download no watermark or audio?
_Please choose the button below_`
                let buttons = [
                    { buttonId: `ttwm ${q}`, buttonText: { displayText: 'Water ❌' }, type: 1 },
                    { buttonId: `ttaud ${q}`, buttonText: { displayText: 'Audio 🎶' }, type: 1 }
                ]
                let buttonMessage = {
                    video: { url: Abadtiktoknowm },
                    caption: texttk,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: `${ownername}`,
                            body: `${pushname}`,
                            thumbnail: log0,
                            mediaType: 1,
                            mediaUrl: q,
                            sourceUrl: q
                        }
                    }
                }
                AbadIng.sendMessage(from, buttonMessage, { quoted: m })
            }
                break
            case 'tiktokwm': case 'ttwm': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply('Where is the link?')
                reply(mess.wait)
                if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
                const musim_rambutan = await AbadBotIncTiktok(`${q}`).catch(e => {
                    reply(mess.error)
                })
                console.log(musim_rambutan)
                const Abadtiktokop = musim_rambutan.result.watermark
                AbadIng.sendMessage(from, { video: { url: Abadtiktokop }, caption: "Here you go!" }, { quoted: m })
            }
                break
            case 'tiktokaudio':
            case 'tiktokmusic':
            case 'ttaud': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!q) return reply('Where is the audio?')
                if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
                const musim_rambutan = await AbadBotIncTiktok(`${q}`).catch(e => {
                    reply(mess.error)
                })
                console.log(musim_rambutan)
                const Abadytiktokaudio = musim_rambutan.result.nowatermark
                AbadIng.sendMessage(from, { audio: { url: Abadytiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
            }
                break
            case 'play2': case 'ytplay2': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let ytvc = await hx.youtube(anu.url)
                let buttons = [
                    { buttonId: `.ytmp4 ${anu.url}`, buttonText: { displayText: 'VIDEO' }, type: 1 },
                    { buttonId: `.ytmp3 ${anu.url}`, buttonText: { displayText: 'AUDIO' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `*── 「 YOUTUBE PLAY 」 ──*

Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Uploaded : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Description : ${anu.description}
Url : ${anu.url}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'ytdl2': case 'yt2': case 'youtube2': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (!args[0]) return reply(mess.linkm)
                try {
                    hx.youtube(args[0]).then(async (res) => {
                        textyt = `*── 「 YOUTUBE DOWNLOAD 」 ──*

${themeemoji} Title : ${res.title}
${themeemoji} Size : ${res.size}
${themeemoji} Quality : ${res.quality}

_Select video or audio and wait a while_`
                        let buttons = [
                            { buttonId: `.ytmp4 ${res.link}`, buttonText: { displayText: 'VIDEO' }, type: 1 },
                            { buttonId: `.ytmp3 ${res.link}`, buttonText: { displayText: 'AUDIO' }, type: 1 }
                        ]
                        let buttonMessage = {
                            image: { url: res.thumb },
                            caption: textyt,
                            footer: botname,
                            buttons: buttons,
                            headerType: 4,
                            contextInfo: {
                                externalAdReply: {
                                    title: res.title,
                                    body: ownername,
                                    thumbnail: { url: res.thumb },
                                    mediaType: 2,
                                    mediaUrl: args[0],
                                    sourceUrl: args[0]
                                }
                            }
                        }
                        AbadIng.sendMessage(from, buttonMessage, { quoted: m })
                    }).catch(_ => _)
                } catch {
                    reply("Error link!")
                }
            }
                break
            case 'music': case 'play': case 'song': case 'ytplay': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let ytvc = await hx.youtube(anu.url)
                let buttons = [
                    { buttonId: `ytvd ${ytvc.link}`, buttonText: { displayText: '► Video' }, type: 1 },
                    { buttonId: `ytad ${ytvc.mp3}`, buttonText: { displayText: '♫ Audio' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `*| YOUTUBE PLAY |*

${global.themeemoji} Title : ${anu.title}
${global.themeemoji} Ext : Search
${global.themeemoji} ID : ${anu.videoId}
${global.themeemoji} Duration : ${anu.timestamp}
${global.themeemoji} Viewers : ${anu.views}
${global.themeemoji} Uploaded : ${anu.ago}
${global.themeemoji} Author : ${anu.author.name}
${global.themeemoji} Channel : ${anu.author.url}
${global.themeemoji} Description : ${anu.description}
${global.themeemoji} Url : ${anu.url}`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: anu.title,
                            body: `${global.botname}`,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: anu.url,
                            sourceUrl: anu.url
                        }
                    }
                }
                AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'getmusic': case 'getvideo': case 'yt': case 'youtube': case 'ytvideo': case 'ytmp3': case 'ytmp4': case 'ytmusic': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args[0]) return reply(mess.linkm)
                try {
                    hx.youtube(args[0]).then(async (res) => {
                        textyt = `*| YOUTUBE DOWNLOADER |*

${global.themeemoji} Title : ${res.title}
${global.themeemoji} Size : ${res.size}
${global.themeemoji} Quality : ${res.quality}

_Select video or audio and wait a while_`
                        let buttons = [
                            { buttonId: `ytvd ${res.link}`, buttonText: { displayText: '► Video' }, type: 1 },
                            { buttonId: `ytad ${res.mp3}`, buttonText: { displayText: '♫ Audio' }, type: 1 }
                        ]
                        let buttonMessage = {
                            image: { url: res.thumb },
                            caption: textyt,
                            footer: `${botname}`,
                            buttons: buttons,
                            headerType: 4,
                            contextInfo: {
                                externalAdReply: {
                                    title: res.title,
                                    body: `${global.ownername}`,
                                    thumbnail: { url: res.thumb },
                                    mediaType: 2,
                                    mediaUrl: args[0],
                                    sourceUrl: args[0]
                                }
                            }
                        }
                        AbadIng.sendMessage(from, buttonMessage, { quoted: m })
                    }).catch(_ => _)
                } catch {
                    reply("Link error!")
                }
            }
                break
            case 'ytvd': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                AbadIng.sendMessage(from, {
                    video: { url: args[0] }, mimetype: "video/mp4", caption: "Success", contextInfo: {
                        externalAdReply: {
                            title: `${global.botname}`,
                            body: `${global.botname}`,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: `${global.websitex}`,
                            sourceUrl: `${global.websitex}`
                        }
                    }
                }, { quoted: m })
            }
                break
            case 'ytad': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                AbadIng.sendMessage(from, {
                    audio: { url: args[0] }, mimetype: "audio/mp4", ptt: true, contextInfo: {
                        externalAdReply: {
                            title: `${global.botname}`,
                            body: `${global.botname}`,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: `${global.websitex}`,
                            sourceUrl: `${global.websitex}`
                        }
                    }
                }, { quoted: m })
            }
                break
            case 'ytshorts': case 'shorts': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`*Use ${prefix + command} put yt shorts link*`)
                if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`The link you provided is not valid`)
                Abadkey.Youtube(`${text}`).then(async (data) => {
                    if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Over Limit* ' + util.format(data))
                    cap = `
*YOUTUBE SHORTS*

*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}\n*${themeemoji}DURATION* ${data.duration}\n*${themeemoji}ID:* ${data.medias[0].cached}\n*${themeemoji}LINK:* ${data.url}\n\n*${botname}*`
                    buf = await getBuffer(data.thumbnail)
                    AbadIng.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${cap}` }, { quoted: m })
                    AbadIng.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail: buf, caption: `*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
                break
            case 'couplepp': case 'ppcouple': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                AbadIng.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                AbadIng.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
                break
            case 'ytdl': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)
                if (anu.filesize_video >= 999999) return reply('*File Over Limit* ' + util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)
                AbadIng.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}` }, { quoted: m }).catch((err) => reply(mess.error))
                AbadIng.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail: tummb, caption: `${util.format(anu)}` }, { quoted: m }).catch((err) => reply(mess.error))
            }
                break
            case 'ytmp32':
            case 'youtubemp32': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (args.length < 1) return reply('Where is the link?')
                try {
                    await yta(args[0])
                        .then((res) => {
                            const { dl_link } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                .then((a) => {

                                    AbadIng.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
                                })

                        })
                } catch (e) {
                    reply(from, `Access denied, can't download!. Try using another link`, { quoted: m })
                }
            }
                break
            case 'ytmp42':
            case 'youtubemp42': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (args.length < 1) return reply('the link?')
                try {
                    await ytv(args[0])
                        .then((res) => {
                            const { dl_link } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                .then((a) => {

                                    AbadIng.sendMessage(from, { video: { url: dl_link }, caption: "By Aldi Store" }, { quoted: m })
                                })

                        })
                } catch (e) {
                    reply(from, `Access denied, can't download!. Try using another link`, { quoted: m })
                }
            }
                break
            case 'pinterest': case 'pin': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return reply("What picture are you looking for?")
                try {
                    hx.pinterest(args.join(" ")).then(async (res) => {
                        imgnyee = res[Math.floor(Math.random() * res.length)]
                        let buttons = [
                            { buttonId: `pinterest ${args.join(" ")}`, buttonText: { displayText: 'Next Image 👀' }, type: 1 }
                        ]
                        let buttonMessage = {
                            image: { url: imgnyee },
                            caption: `${global.dogeemoji} Title : ` + args.join(" ") + `\n${global.dogeemoji} Media Url : ` + imgnyee,
                            footer: `${global.botname}`,
                            buttons: buttons,
                            headerType: 4,
                            contextInfo: {
                                externalAdReply: {
                                    title: `${global.botname}`,
                                    body: `${global.ownername}`,
                                    thumbnail: log0,
                                    mediaType: 2,
                                    mediaUrl: `${global.websitex}`,
                                    sourceUrl: `${global.websitex}`
                                }
                            }
                        }
                        AbadIng.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }).catch(_ => _)
                } catch {
                    reply("Error")
                }
            }
                break
            case 'img':
            case 'image': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                AbadIng.sendMessage(m.chat, { image: { url: result }, caption: ` ${themeemoji} Media Url : ` + result }, { quoted: m })
            }
                break
            case 'swm': case 'take': case 'stickerwm': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                if (m.quoted.isAnimated === true) {
                    AbadIng.downloadAndSaveMediaMessage(quoted, "gifee")
                    AbadIng.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await AbadIng.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await AbadIng.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                    await fs.unlinkSync(encmedia)
                } else {
                    reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
                break
            case 'wasted':
            case 'imagewasted': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (isBan) return reply(mess.ban)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGa = await floNime(dwnld)
                    buffer = `https://zenzapis.xyz/photoeditor/wasted?url=${fatGa.result.url}&apikey=Nyarlathotep`
                    AbadIng.sendMessage(from, { image: { url: buffer }, caption: "Here you go!" }, { quoted: m })
                }
            }
                break
            case 'smeme': case 'stickermeme': case 'stickmeme': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let { TelegraPh } = require('./lib/uploader')
                if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
                if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
                if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
                reply(mess.wait)
                mee = await AbadIng.downloadAndSaveMediaMessage(quoted)
                mem = await TelegraPh(mee)
                meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
                memek = await AbadIng.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(memek)
            }
                break
            case 'sgif': case 'sticker': case 's': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await AbadIng.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await AbadIng.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                    reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
                break
            case 'wiki':
                if (args.length < 1) return reply('What Are You Looking For?? ')
                const res2 = await wikiSearch(q).catch(e => {
                    return reply('_[ ! ] Error Result Not Found_')
                })
                const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
                AbadIng.sendMessage(from, { image: { url: res2[0].thumb }, caption: result2 })
                break
            case 'covid':
                const c = await covid()
                var { kasus, kematian, sembuh } = c[0]
                AbadIng.sendMessage(from, { text: `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}` }, m)
                break
            case 'playstore': case 'apk':
                if (!q) return reply('what are you looking for?')
                let play = await hx.playstore(q)
                let storee = '❉─────────────────────❉\n'
                for (let i of play) {
                    storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
                }
                reply(storee)
                break
            case 'couple': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(`${mess.group}`)
                let member = participants.map(u => u.id)
                let orang = member[Math.floor(Math.random() * member.length)]
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
                let menst = [orang, jodoh]
                let buttons = [
                    { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                ]
                await AbadIng.sendButtonText(m.chat, buttons, jawab, AbadIng.user.name, m, { mentions: menst })
            }
                break
            case 'mysoulmate': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(`${mess.group}`)
                let member = participants.map(u => u.id)
                let me = m.sender
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let ments = [me, jodoh]
                let buttons = [
                    { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                ]
                await AbadIng.sendButtonText(m.chat, buttons, jawab, AbadIng.user.name, m, { mentions: ments })
            }
                break
            case 'awesomecheck':
            case 'greatcheck':
            case 'gaycheck':
            case 'beautifulcheck':
            case 'cutecheck':
            case 'lesbicheck':
            case 'lesbiancheck':
            case 'hornycheck':
            case 'prettycheck':
            case 'lovelycheck':
            case 'uglycheck':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Asteria`)
                const sangeh = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                AbadIng.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
                break
            case 'charactercheck':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Asteria`)
                const Abady = ['Compassionate', 'Generous', 'Grumpy', 'Forgiving', 'Obedient', 'Good', 'Simp', 'Kind-Hearted', 'patient', 'UwU', 'top, anyway', 'Helpful']
                const taky = Abady[Math.floor(Math.random() * Abady.length)]
                AbadIng.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
                break
            case 'stupid':
            case 'foolish':
            case 'smart':
            case 'idiot':
            case 'gay':
            case 'lesbi':
            case 'bastard':
            case 'stubble':
            case 'dog':
            case 'fuck':
            case 'ape':
            case 'noob':
            case 'great':
            case 'horny':
            case 'wibu':
            case 'asshole':
            case 'handsome':
            case 'beautiful':
            case 'cute':
            case 'kind':
            case 'ugly':
            case 'pretty':
            case 'lesbian':
            case 'randi':
            case 'gandu':
            case 'madarchod':
            case 'kala':
            case 'gora':
            case 'chutiya':
            case 'nibba':
            case 'nibbi':
            case 'bhosdiwala':
            case 'chutmarika':
            case 'bokachoda':
            case 'suarerbaccha':
            case 'bolochoda':
            case 'muthal':
            case 'muthbaaz':
            case 'randibaaz':
            case 'topibaaz':
            case 'cunt':
            case 'nerd':
            case 'behenchod':
            case 'behnchoda':
            case 'bhosdika':
            case 'nerd':
            case 'mc':
            case 'bsdk':
            case 'bhosdk':
            case 'nigger':
            case 'loda':
            case 'laund':
            case 'nigga':
            case 'noobra':
            case 'tharki':
            case 'nibba':
            case 'nibbi':
            case 'mumu':
            case 'rascal':
            case 'scumbag':
            case 'nuts':
            case 'comrade':
            case 'fagot':
            case 'scoundrel':
            case 'ditch':
            case 'dope':
            case 'gucci':
            case 'lit':
            case 'dumbass':
            case 'sexy':
            case 'crackhead':
            case 'mf':
            case 'motherfucker':
            case 'dogla':
            case 'bewda':
            case 'boka':
            case 'khanki':
            case 'bal':
            case 'sucker':
            case 'fuckboy':
            case 'playboy':
            case 'fuckgirl':
            case 'playgirl':
            case 'hot': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(`${mess.group}`)
                let member = participants.map(u => u.id)
                let me = m.sender
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
                let ments = [me, jodoh]
                let buttons = [
                    { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                ]
                await AbadIng.sendButtonText(m.chat, buttons, jawab, botname, m, { mentions: ments })
            }
                break
            //════════════════════════════//
            case 'mediafire': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
                const baby1 = await mediafireDl(text)
                if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* ' + util.format(baby1))
                const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
                reply(`${result4}`)
                AbadIng.sendMessage(m.chat, { document: { url: baby1[0].link }, fileName: baby1[0].nama, mimetype: baby1[0].mime }, { quoted: m }).catch((err) => reply(mess.error))
            }
                break
            case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot':
            case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm':
            case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!AntiNsfw) return reply(mess.nsfw)
                try {
                    reply(mess.wait)
                    NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
                    YesHorny = await getBuffer(NoHorny.result)
                    AbadIng.sendMessage(from, { image: YesHorny }, { quoted: m })
                } catch (e) { error("Error") }
                break
            case 'spank':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                let spbuff = await getBuffer(spankd.data.url)
                let spgif = await GIFBufferToVideoBuffer(spbuff)
                await AbadIng.sendMessage(m.chat, { video: spgif, gifPlayback: true }, { quoted: m }).catch(err => {
                    return reply('Error!')
                })
                break
            case 'blowjobgif': case 'bj':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)
                let bjf = await getBuffer(bjd.data.url)
                let bjif = await GIFBufferToVideoBuffer(bjf)
                await AbadIng.sendMessage(m.chat, { video: bjif, gifPlayback: true }, { quoted: m }).catch(err => {
                    return reply('error..')
                })
                break
            case 'hentaivid': case 'hentaivideo': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                AbadIng.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${dogeemoji} Title : ${result912.title}\n${dogeemoji} Category : ${result912.category}\n${dogeemoji} Mimetype : ${result912.type}\n${dogeemoji} Views : ${result912.views_count}\n${dogeemoji} Shares : ${result912.share_count}\n${dogeemoji} Source : ${result912.link}\n${dogeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
                break
            case 'trap':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
                let trapbot = [
                    { buttonId: `trap`, buttonText: { displayText: `Next ⚡` }, type: 1 },
                ]
                let button2Messages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    buttons: trapbot,
                    headerType: 1
                }
                await AbadIng.sendMessage(m.chat, button2Messages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'hentai-neko':
            case 'hneko':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!AntiNsfw) return reply(mess.nsfw)
                waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
                let hnekobot = [
                    { buttonId: `.hneko`, buttonText: { displayText: `Next ⚡` }, type: 1 },
                ]
                let button3Messages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    buttons: hnekobot,
                    headerType: 1
                }
                await AbadIng.sendMessage(m.chat, button3Messages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'hentai-waifu':
            case 'nwaifu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)
                let nwaifubot = [
                    { buttonId: `.hneko`, buttonText: { displayText: `Next ⚡` }, type: 1 },
                ]
                let button4Messages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    buttons: nwaifubot,
                    headerType: 1
                }
                await AbadIng.sendMessage(m.chat, button4Messages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'gasm':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttonsssMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttonsssMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallpubg': case 'wallml':
                try {
                    if (isBan) return reply(mess.ban)
                    if (isBanChat && !isCreator) return
                    reply(mess.wait)
                    nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`)
                    nyz3 = await getBuffer(nyz2.list.gambar)
                    AbadIng.sendMessage(from, { image: nyz3, caption: `By ${global.botname}` }, { quoted: m })
                } catch (e) {
                    error("Error!")
                }
                break
            case 'smug2':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let button1ssMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, button1ssMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'foxgirl':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let button12ssMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, button12ssMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animenom':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!m.isGroup) return replay(mess.group)
                waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
                let xxhnekobot = [
                    { buttonId: `.nom`, buttonText: { displayText: `Next ⚡` }, type: 1 },
                ]
                let xx1button3Messages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    buttons: xxhnekobot,
                    headerType: 1
                }
                await AbadIng.sendMessage(m.chat, xx1button3Messages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'waifu3':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let button112ssMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, button112ssMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'neko2':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
                    { buttonId: `.neko`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttonssMessage = {
                    image: { url: waifud.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbutsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttonssMessage, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'woof':
            case '8ball':
            case 'goose':
            case 'gecg':
            case 'feed':
            case 'avatar':
            case 'lizard':
            case 'meow':
            case 'tickle':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttonssMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttonssMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animecuddle':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                mesa = await neko.hug()
                var wbuttsss = [
                    { buttonId: `.animecuddle`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttonsoMessages = {
                    image: { url: mesa.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttonsoMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animeslap':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let btutttonssMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, btutttonssMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animepat':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let xxbuttonssMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, xxbuttonssMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animeneko':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttonsTsMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttonsTsMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animehug':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttonussMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttonussMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animekiss':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let bxxuttonssMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, bxxuttonssMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animewlp':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttoxnssMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttoxnssMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animespank':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttonssxMessages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttonssxMessages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'shinobu2':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
                var wbutsss = [
                    { buttonId: `.shinobu`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttonsesMessage = {
                    image: { url: ud.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbutsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttonsesMessage, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'megumin2':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                ud = await axios.get('https://waifu.pics/api/sfw/megumin')
                var wbutsss = [
                    { buttonId: `.megumin`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let buttonzMessage = {
                    image: { url: ud.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbutsss,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, buttonzMessage, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'awoo2':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
                var wbuttsss = [
                    { buttonId: `.${command}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let button1Messages = {
                    image: { url: waifudd.data.url },
                    caption: `Here you go!`,
                    footer: `${global.botname}`,
                    buttons: wbuttsss,
                    headerType: 2
                }
                await AbadIng.sendMessage(m.chat, button1Messages, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                break
            case 'animewall2': case 'animewallpaper2':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                const { AnimeWallpaper } = require("anime-wallpaper")
                if (!q) return reply('What wallpaper do you want?')
                const wall = new AnimeWallpaper();
                const pages = [1, 2, 3, 4];
                const random = pages[Math.floor(Math.random() * pages.length)]
                const wallpaper = await wall
                    .getAnimeWall4({ title: q, type: "sfw", page: pages })
                    .catch(() => null);
                const i = Math.floor(Math.random() * wallpaper.length);
                var walb = [
                    { buttonId: `.${command} ${q}`, buttonText: { displayText: `Next ✨` }, type: 1 },
                ]
                let wal = {
                    image: { url: wallpaper[i].image },
                    caption: `*Query :* ${q}`,
                    footer: `${global.botname}`,
                    buttons: walb,
                    headerType: 4
                }
                await AbadIng.sendMessage(m.chat, wal, { quoted: m }).catch(err => {
                    return ('Error!')
                })
                //AbadIng.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
                break
            case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'shinobu': case 'megumin': case 'handhold':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                axios.get(`https://api.waifu.pics/sfw/${command}`)
                    .then(({ data }) => {
                        AbadIng.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
                    })
                break
            case 'waifu': case 'loli':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                axios.get(`https://api.waifu.pics/sfw/waifu`)
                    .then(({ data }) => {
                        AbadIng.sendImage(m.chat, data.url, mess.success, m)
                    })
                break
            case 'lyrics': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
                reply(mess.wait)
                const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
                const result = await lyricsv2(text).catch(async _ => await lyrics(text))
                reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
            }
                break
            case 'quotes':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var res = await Quotes()
                teks = "══════════════════"
                teks += `\nAuthor: ${res.author}\n`
                teks += `\nQuotes:\n`
                teks += `${res.quotes}\n`
                teks += "══════════════════"
                replay(teks)
                break
            case 'react': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                AbadIng.sendMessage(m.chat, reactionMessage)
            }
                break
            case 'anonymous': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (m.isGroup) return reply(mess.private)
                this.anonymous = this.anonymous ? this.anonymous : {}
                let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: 'Start 🚶' }, type: 1 }
                ]
                AbadIng.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await AbadIng.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, AbadIng.user.name, m)
            }
                break
            case 'keluar': case 'leave': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (m.isGroup) return reply('Feature Cannot Be Used In Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start 🚶' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                    reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await AbadIng.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (m.isGroup) return reply('Feature Cannot Be Used In Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'leave', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, AbadIng.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: ' Skip ⏩' }, type: 1 },
                        { buttonId: 'leave', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AbadIng.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AbadIng.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AbadIng.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'leave', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, AbadIng.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (m.isGroup) return reply('Feature Cannot Be Used In Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await AbadIng.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip ⏩' }, type: 1 },
                        { buttonId: 'leave', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AbadIng.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AbadIng.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AbadIng.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'leave', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await AbadIng.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, AbadIng.user.name, m)
                }
            }
                break
            case 'leavegc': case 'leavegroup': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(mess.wait)
                if (!isCreator) return replay(`${mess.owner}`)
                await AbadIng.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'sound1':
            case 'sound2':
            case 'sound3':
            case 'sound4':
            case 'sound5':
            case 'sound6':
            case 'sound7':
            case 'sound8':
            case 'sound9':
            case 'sound10':
            case 'sound11':
            case 'sound12':
            case 'sound13':
            case 'sound14':
            case 'sound15':
            case 'sound16':
            case 'sound17':
            case 'sound18':
            case 'sound19':
            case 'sound20':
            case 'sound21':
            case 'sound22':
            case 'sound23':
            case 'sound24':
            case 'sound25':
            case 'sound26':
            case 'sound27':
            case 'sound28':
            case 'sound29':
            case 'sound30':
            case 'sound31':
            case 'sound32':
            case 'sound33':
            case 'sound34':
            case 'sound35':
            case 'sound36':
            case 'sound37':
            case 'sound38':
            case 'sound39':
            case 'sound40':
            case 'sound41':
            case 'sound42':
            case 'sound43':
            case 'sound44':
            case 'sound45':
            case 'sound46':
            case 'sound47':
            case 'sound48':
            case 'sound49':
            case 'sound50':
            case 'sound51':
            case 'sound52':
            case 'sound53':
            case 'sound54':
            case 'sound55':
            case 'sound56':
            case 'sound57':
            case 'sound58':
            case 'sound59':
            case 'sound60':
            case 'sound61':
            case 'sound62':
            case 'sound63':
            case 'sound64':
            case 'sound65':
            case 'sound66':
            case 'sound67':
            case 'sound68':
            case 'sound69':
            case 'sound70':
            case 'sound71':
            case 'sound72':
            case 'sound73':
            case 'sound74':
            case 'sound75':
            case 'sound76':
            case 'sound77':
            case 'sound78':
            case 'sound79':
            case 'sound80':
            case 'sound81':
            case 'sound82':
            case 'sound83':
            case 'sound84':
            case 'sound85':
            case 'sound86':
            case 'sound87':
            case 'sound88':
            case 'sound89':
            case 'sound90':
            case 'sound91':
            case 'sound92':
            case 'sound93':
            case 'sound94':
            case 'sound95':
            case 'sound96':
            case 'sound97':
            case 'sound98':
            case 'sound99':
            case 'sound100':
            case 'sound101':
            case 'sound102':
            case 'sound103':
            case 'sound104':
            case 'sound105':
            case 'sound106':
            case 'sound107':
            case 'sound108':
            case 'sound109':
            case 'sound110':
            case 'sound111':
            case 'sound112':
            case 'sound113':
            case 'sound114':
            case 'sound115':
            case 'sound116':
            case 'sound117':
            case 'sound118':
            case 'sound119':
            case 'sound120':
            case 'sound121':
            case 'sound122':
            case 'sound123':
            case 'sound124':
            case 'sound125':
            case 'sound126':
            case 'sound127':
            case 'sound128':
            case 'sound129':
            case 'sound130':
            case 'sound131':
            case 'sound132':
            case 'sound133':
            case 'sound134':
            case 'sound135':
            case 'sound136':
            case 'sound137':
            case 'sound138':
            case 'sound139':
            case 'sound140':
            case 'sound141':
            case 'sound142':
            case 'sound143':
            case 'sound144':
            case 'sound145':
            case 'sound146':
            case 'sound147':
            case 'sound148':
            case 'sound149':
            case 'sound150':
            case 'sound151':
            case 'sound152':
            case 'sound153':
            case 'sound154':
            case 'sound155':
            case 'sound156':
            case 'sound157':
            case 'sound158':
            case 'sound159':
            case 'sound160':
            case 'sound161':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                Abady_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
                await AbadIng.sendMessage(m.chat, { audio: Abady_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                break
            case 'bcgc': case 'bcgroup': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return replay(mess.owner)
                if (!args.join(" ")) return replay(`Where is the text?\n\nExample : ${prefix + command} ${global.ownername}`)
                let getGroups = await AbadIng.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'Asteria Group OF 🍓',
                            url: `${global.websitex}`
                        }
                    }, {
                        urlButton: {
                            displayText: '🎗 Script  🎗',
                            url: `${global.botscript}`
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Bot Status 🚀',
                            id: 'ping'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Menu 🐰',
                            id: 'menu'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Owner 😈',
                            id: 'owner'
                        }
                    }]
                    let txt = `*「 ${global.ownername} Broadcast」*\n\n${text}`
                    AbadIng.send5ButImg(i, txt, `${global.botname}`, log0, btn, thum)
                }
                replay(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
                break
            case 'bc': case 'broadcast': case 'bcall': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return replay(mess.owner)
                if (!args.join(" ")) return replay(`Where is the text??\n\nExample : ${prefix + command} ${global.ownername}`)
                let anu = await store.chats.all().map(v => v.id)
                replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
                for (let yoi of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'Asteria Group OF 🍓',
                            url: `${global.websitex}`
                        }
                    }, {
                        urlButton: {
                            displayText: '🎗 Script  🎗',
                            url: `${global.botscript}`
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Bot Status 🚀',
                            id: 'ping'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Menu 🐰',
                            id: 'menu'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Owner 😈',
                            id: 'owner'
                        }
                    }]
                    let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
                    AbadIng.send5ButImg(yoi, txt, `${global.botname}`, log0, btn, thum)
                }
                replay('Broadcast Success')
            }
                break
            case 'setmenu': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                if (!isCreator) return reply(mess.owner)
                let setbot = db.data.settings[botNumber]
                if (args[0] === 'templateImage') {
                    setbot.templateImage = true
                    setbot.templateVideo = false
                    setbot.templateGif = false
                    setbot.templateMsg = false
                    setbot.templateDocument = false
                    reply(mess.success)
                } else if (args[0] === 'templateGif') {
                    setbot.templateImage = false
                    setbot.templateVideo = false
                    setbot.templateGif = true
                    setbot.templateMsg = false
                    setbot.templateDocument = false
                    reply(mess.success)
                } else if (args[0] === 'templateMessage') {
                    setbot.templateImage = false
                    setbot.templateVideo = false
                    setbot.templateGif = false
                    setbot.templateMsg = true
                    setbot.templateDocument = false
                    reply(mess.success)
                } else if (args[0] === 'templateDocument') {
                    setbot.templateImage = false
                    setbot.templateVideo = false
                    setbot.templateGif = false
                    setbot.templateMsg = false
                    setbot.templateDocument = true
                    reply(mess.success)
                } else {
                    let sections = [
                        {
                            title: "😛CHANGE BOT MENU😛",
                            rows: [
                                { title: "Image Menu", rowId: `setmenu templateImage`, description: `Tap to change bot menu to Image Menu` },
                                { title: "Gif Menu", rowId: `setmenu templateGif`, description: `Tap to change bot menu to Gif Menu` },
                                { title: "Text Menu", rowId: `setmenu templateMessage`, description: `Tap to change bot menu to Text Menu` },
                                { title: "Document Menu", rowId: `setmenu templateDocument`, description: `Tap to change bot menu to Document Menu` }
                            ]
                        },
                    ]
                    AbadIng.sendListMsg(m.chat, `Please select the menu you want to change!`, ` `, AbadIng.user.name, `Click Here`, sections, m)
                }
            }
                break
            case 'command': {
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    listMessage: {
                        title: `Hi ${pushname}`,
                        description: `Please Choose The Menu\n\n`,
                        buttonText: "Menu",
                        footerText: `${global.botname}`,
                        listType: "SINGLE_SELECT",
                        sections: [{
                            "title": "Initial Features Of Bot 🦄",
                            "rows": [
                                {
                                    "title": "Other ☕",
                                    "description": "Displays The List Of Other Features",
                                    "rowId": `${prefix}othermenu`
                                }
                            ]
                        },
                        {
                            "title": "Bot Features ❤️",
                            "rows": [
                                {
                                    "title": "All Menu 🥀",
                                    "description": "Displays The List Of All The Features!",
                                    "rowId": `${prefix}allmenu`
                                },
                                {
                                    "title": "Owner Menu 💠",
                                    "description": "Displays The List Of Owner Features",
                                    "rowId": `${prefix}ownermenu`
                                },
                                {
                                    "title": "Group Menu ✨",
                                    "description": "Displays The List Of Main Features",
                                    "rowId": `${prefix}groupmenu`
                                },
                                {
                                    "title": "Rpg Menu 🏞️",
                                    "description": "Displays The List Of Rpg Features",
                                    "rowId": `${prefix}rpgmenu`
                                },
                                {
                                    "title": "Maker Menu 🌈",
                                    "description": "Displays The List Of Logo Making Features",
                                    "rowId": `${prefix}makermenu`
                                },
                                {
                                    "title": "Sound Menu 🎵",
                                    "description": "Displays The List Of Sound Features",
                                    "rowId": `${prefix}soundmenu`
                                },
                                {
                                    "title": "Download Menu ↘️",
                                    "description": "Displays The List Of Download Features",
                                    "rowId": `${prefix}downloadmenu`
                                },
                                {
                                    "title": "Sticker Menu 🃏",
                                    "description": "Displays The List Of Sticker Features",
                                    "rowId": `${prefix}stickermenu`
                                },
                                {
                                    "title": "Search Menu 🔎",
                                    "description": "Displays The List Of Searching Features",
                                    "rowId": `${prefix}searchmenu`
                                },
                                {
                                    "title": "Tool Menu ⚙️",
                                    "description": "Displays The List Of Tool Features",
                                    "rowId": `${prefix}toolmenu`
                                },
                                {
                                    "title": "Random Image Menu 🌆",
                                    "description": "Displays The List Of Random Image Features",
                                    "rowId": `${prefix}randomimagemenu`
                                },
                                {
                                    "title": "Random Sticker Menu ☺️",
                                    "description": "Displays The List Of Anime Sticker Features",
                                    "rowId": `${prefix}randomstickermenu`
                                },
                                {
                                    "title": "Nsfw Menu 🤓",
                                    "description": "Displays The List Of Nsfe Features",
                                    "rowId": `${prefix}nsfwmenu`
                                },
                                {
                                    "title": "Fun Menu 🕺",
                                    "description": "Displays The List Of Fun Features",
                                    "rowId": `${prefix}funmenu`
                                },
                                {
                                    "title": "Game Menu 🎮",
                                    "description": "Displays The List Of Game Features",
                                    "rowId": `${prefix}makermenu`
                                },
                                {
                                    "title": "Convert Menu ⚒️",
                                    "description": "Displays The List Of Convert Features",
                                    "rowId": `${prefix}convertmenu`
                                },
                                {
                                    "title": "Database Menu ♻️",
                                    "description": "Displays The List Of Database Features",
                                    "rowId": `${prefix}databasemenu`
                                },
                                {
                                    "title": "Repair Menu 🚫",
                                    "description": "Displays The List Of Database Features",
                                    "rowId": `${prefix}repairmenu`
                                }
                            ]
                        },
                        {
                            "title": "Credit ©️",
                            "rows": [
                                {
                                    "title": "Thanks To ❤️",
                                    "description": "Displays The List Of Credit Of The Bot !!",
                                    "rowId": `${prefix}tqtt`
                                }
                            ]
                        }
                        ],
                        listType: 1
                    }
                }), {})
                AbadIng.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
                break
            case 'allmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'All Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 ALL MENU 🔥*
╰━┬≯
╭━┤ 〘 *_Group_* 〙
┊   ╰━─┈
┊ ${prefix}grupsetting
┊ ${prefix}vote
┊ ${prefix}upvote
┊ ${prefix}devote
┊ ${prefix}checkvote
┊ ${prefix}deletevote
┊ ${prefix}afk
┊ ${prefix}welcome
┊ ${prefix}autoreply
┊ ${prefix}autoreply
┊ ${prefix}autorevoke
┊ ${prefix}leveling
┊ ${prefix}autosticker
┊ ${prefix}antilinkgc
┊ ${prefix}antilinkyoutubevideo
┊ ${prefix}antilinkyoutubechannel
┊ ${prefix}antilinkinstagram
┊ ${prefix}antilinkfacebook
┊ ${prefix}antilinktelegram
┊ ${prefix}antilinktiktok
┊ ${prefix}antilinktwitter
┊ ${prefix}antilinkall
┊ ${prefix}antivirus
┊ ${prefix}antitoxic
┊ ${prefix}antiwame
┊ ${prefix}antiviewonce
┊ ${prefix}nsfw
┊ ${prefix}setnamegroup
┊ ${prefix}setdesc
┊ ${prefix}setgruppp
┊ ${prefix}tagall
┊ ${prefix}hidetag
┊ ${prefix}grouplink
┊ ${prefix}resetlinkgroup
┊ ${prefix}resetlink
┊ ${prefix}group
┊ ${prefix}editinfo
┊ ${prefix}promote
┊ ${prefix}demote
┊ ${prefix}kick
┊ ${prefix}add
┊ ${prefix}getpp 
╰━┬≯ 
╭━┤ 〘 *_Rpg_* 〙
┊   ╰━─┈
┊ ${prefix}profile
┊ ${prefix}fishing
┊ ${prefix}blood
┊ ${prefix}stab
┊ ${prefix}mine
┊ ${prefix}buy
┊ ${prefix}sell
┊ ${prefix}heal
┊ ${prefix}hunt
╰━┬≯ 
╭━┤ 〘 *_Maker_* 〙
┊   ╰━─┈	
┊ ${prefix}orange
┊ ${prefix}summer
┊ ${prefix}valentine
┊ ${prefix}blackpink
┊ ${prefix}blackpink1
┊ ${prefix}business3d
┊ ${prefix}diamond
┊ ${prefix}summertime
┊ ${prefix}golden
┊ ${prefix}carved
╰━┬≯ 
╭━┤ 〘 *_Download_* 〙
┊   ╰━─┈
┊ ${prefix}instagramstory
┊ ${prefix}instagramstory2
┊ ${prefix}instagram2
┊ ${prefix}instagram
┊ ${prefix}instagramreels
┊ ${prefix}ig
┊ ${prefix}mp4
┊ ${prefix}jpeg
┊ ${prefix}igtv
┊ ${prefix}twitter
┊ ${prefix}twitteraudio
┊ ${prefix}facebook
┊ ${prefix}facebookaudio
┊ ${prefix}play2
┊ ${prefix}ytdl2
┊ ${prefix}play
┊ ${prefix}song
┊ ${prefix}ytplay
┊ ${prefix}getmusic
┊ ${prefix}getvideo
┊ ${prefix}youtube
┊ ${prefix}ytmp3
┊ ${prefix}ytmp4
┊ ${prefix}ytvd
┊ ${prefix}ytad
┊ ${prefix}ytshorts
┊ ${prefix}ytdl
┊ ${prefix}youtubemp32
┊ ${prefix}youtubemp42
┊ ${prefix}pinterest
┊ ${prefix}mediafire
╰━┬≯ 
╭━┤ 〘 *_Search_* 〙
┊   ╰━─┈
┊ ${prefix}wikimedia
┊ ${prefix}quoteanime
┊ ${prefix}ringtone
┊ ${prefix}happymod
┊ ${prefix}ytsearch
┊ ${prefix}gimage
┊ ${prefix}google
┊ ${prefix}image
┊ ${prefix}wiki
┊ ${prefix}playstore
┊ ${prefix}lyrics
╰━┬≯ 
╭━┤ 〘 *_Convert_* 〙
┊   ╰━─┈
┊ ${prefix}volume
┊ ${prefix}tempo
┊ ${prefix}toimage
┊ ${prefix}toimg
┊ ${prefix}tomp4
┊ ${prefix}tovideo
┊ ${prefix}toaud
┊ ${prefix}toaudio
┊ ${prefix}tomp3
┊ ${prefix}tovn
┊ ${prefix}toptt
┊ ${prefix}togif
┊ ${prefix}tourl
╰━┬≯ 
╭━┤ 〘 *_Random_* 〙
┊   ╰━─┈
┊ ${prefix}coffee
┊ ${prefix}wallpaper
┊ ${prefix}animewallpaper
┊ ${prefix}ppcouple
┊ ${prefix}smug2
┊ ${prefix}foxgirl
┊ ${prefix}animenom
┊ ${prefix}waifu3
┊ ${prefix}neko2
┊ ${prefix}woof
┊ ${prefix}8ball
┊ ${prefix}goose
┊ ${prefix}gecg
┊ ${prefix}feed
┊ ${prefix}avatar
┊ ${prefix}lizard
┊ ${prefix}meow
┊ ${prefix}tickle
┊ ${prefix}animecuddle
┊ ${prefix}animeslap
┊ ${prefix}animepat
┊ ${prefix}animeneko
┊ ${prefix}animehug
┊ ${prefix}animekiss
┊ ${prefix}animewlp
┊ ${prefix}animespank
┊ ${prefix}shinobu2
┊ ${prefix}megumin2
┊ ${prefix}awoo2
┊ ${prefix}animewallpaper2
┊ ${prefix}waifu
┊ ${prefix}loli
╰━┬≯ 
╭━┤ 〘 *_Sticker_* 〙
┊   ╰━─┈
┊ ${prefix}emojimix
┊ ${prefix}emoji
┊ ${prefix}emojimix2
┊ ${prefix}ttp
┊ ${prefix}take
┊ ${prefix}stickermeme
┊ ${prefix}sticker
╰━┬≯ 
╭━┤ 〘 *_Random Sticker_* 〙
┊   ╰━─┈
┊ ${prefix}lovesticker
┊ ${prefix}gurastick
┊ ${prefix}dogesticker
┊ ${prefix}patricksticker
┊ ${prefix}cry
┊ ${prefix}kill
┊ ${prefix}hug
┊ ${prefix}pat
┊ ${prefix}lick
┊ ${prefix}kiss
┊ ${prefix}bite
┊ ${prefix}yeet
┊ ${prefix}neko
┊ ${prefix}bully
┊ ${prefix}bonk
┊ ${prefix}wink
┊ ${prefix}poke
┊ ${prefix}nom
┊ ${prefix}slap
┊ ${prefix}smile
┊ ${prefix}wave
┊ ${prefix}awoo
┊ ${prefix}blush
┊ ${prefix}smug
┊ ${prefix}glomp
┊ ${prefix}happy
┊ ${prefix}dance
┊ ${prefix}cringe
┊ ${prefix}cuddle
┊ ${prefix}highfive
┊ ${prefix}shinobu
┊ ${prefix}megumin
┊ ${prefix}handhold
╰━┬≯ 
╭━┤ 〘 *_Nsfw_* 〙
┊   ╰━─┈
┊ ${prefix}masturbation
┊ ${prefix}jahy
┊ ${prefix}hentai
┊ ${prefix}glasses
┊ ${prefix}gangbang
┊ ${prefix}foot
┊ ${prefix}femdom
┊ ${prefix}cum
┊ ${prefix}ero
┊ ${prefix}cuckold
┊ ${prefix}blowjob
┊ ${prefix}bdsm
┊ ${prefix}ahegao
┊ ${prefix}ass
┊ ${prefix}orgy
┊ ${prefix}panties
┊ ${prefix}pussy
┊ ${prefix}thighs
┊ ${prefix}yuri
┊ ${prefix}tentacles
┊ ${prefix}spank
┊ ${prefix}blowjobgif
┊ ${prefix}hentaivideo
┊ ${prefix}trap
┊ ${prefix}hentai-neko
┊ ${prefix}hentai-waifu
┊ ${prefix}gasm
╰━┬≯ 
╭━┤ 〘 *_Game_* 〙
┊   ╰━─┈
┊ ${prefix}suitpvp
┊ ${prefix}suit
┊ ${prefix}tictactoe
┊ ${prefix}delttc
┊ ${prefix}math
┊ ${prefix}anonymous
┊ ${prefix}leave	
┊ ${prefix}start
┊ ${prefix}next
╰━┬≯ 
╭━┤ 〘 *_Fun_* 〙
┊   ╰━─┈
┊ ${prefix}halahx
┊ ${prefix}hilihx
┊ ${prefix}huluhx
┊ ${prefix}helehx
┊ ${prefix}holohx
┊ ${prefix}fliptext
┊ ${prefix}bass
┊ ${prefix}blown
┊ ${prefix}deep
┊ ${prefix}earrape
┊ ${prefix}fast
┊ ${prefix}fat
┊ ${prefix}nightcore
┊ ${prefix}reverse
┊ ${prefix}robot
┊ ${prefix}slow
┊ ${prefix}smooth
┊ ${prefix}tupai
┊ ${prefix}wasted
╰━┬≯ 
╭━┤ 〘 *_Fun Groups_* 〙
┊   ╰━─┈
┊ ${prefix}couple
┊ ${prefix}mysoulmate
┊ ${prefix}awesomecheck
┊ ${prefix}greatcheck
┊ ${prefix}gaycheck
┊ ${prefix}beautifulcheck
┊ ${prefix}cutecheck
┊ ${prefix}lesbicheck
┊ ${prefix}lesbiancheck
┊ ${prefix}hornycheck
┊ ${prefix}prettycheck
┊ ${prefix}lovelycheck
┊ ${prefix}uglycheck
┊ ${prefix}charactercheck
┊ ${prefix}stupid
┊ ${prefix}foolish
┊ ${prefix}smart
┊ ${prefix}idiot
┊ ${prefix}gay
┊ ${prefix}lesbi
┊ ${prefix}bastard
┊ ${prefix}stubble
┊ ${prefix}dog
┊ ${prefix}fuck
┊ ${prefix}ape
┊ ${prefix}noob
┊ ${prefix}great
┊ ${prefix}horny
┊ ${prefix}wibu
┊ ${prefix}asshole
┊ ${prefix}handsome
┊ ${prefix}beautiful
┊ ${prefix}cute
┊ ${prefix}kind
┊ ${prefix}ugly
┊ ${prefix}pretty
┊ ${prefix}lesbian
┊ ${prefix}randi
┊ ${prefix}gandu
┊ ${prefix}madarchod
┊ ${prefix}kala
┊ ${prefix}gora
┊ ${prefix}chutiya
┊ ${prefix}nibba
┊ ${prefix}nibbi
┊ ${prefix}bhosdiwala
┊ ${prefix}chutmarika
┊ ${prefix}bokachoda
┊ ${prefix}suarerbaccha
┊ ${prefix}bolochoda
┊ ${prefix}muthal
┊ ${prefix}muthbaaz
┊ ${prefix}randibaaz
┊ ${prefix}topibaaz
┊ ${prefix}cunt
┊ ${prefix}nerd
┊ ${prefix}behenchod
┊ ${prefix}behnchoda
┊ ${prefix}bhosdika
┊ ${prefix}nerd
┊ ${prefix}mc
┊ ${prefix}bsdk
┊ ${prefix}bhosdk
┊ ${prefix}nigger
┊ ${prefix}loda
┊ ${prefix}laund
┊ ${prefix}nigga
┊ ${prefix}noobra
┊ ${prefix}tharki
┊ ${prefix}nibba
┊ ${prefix}nibbi
┊ ${prefix}mumu
┊ ${prefix}rascal
┊ ${prefix}scumbag
┊ ${prefix}nuts
┊ ${prefix}comrade
┊ ${prefix}fagot
┊ ${prefix}scoundrel
┊ ${prefix}ditch
┊ ${prefix}dope
┊ ${prefix}gucci
┊ ${prefix}lit
┊ ${prefix}dumbass
┊ ${prefix}sexy
┊ ${prefix}crackhead
┊ ${prefix}mf
┊ ${prefix}motherfucker
┊ ${prefix}dogla
┊ ${prefix}bewda
┊ ${prefix}boka
┊ ${prefix}khanki
┊ ${prefix}bal	
┊ ${prefix}sucker
┊ ${prefix}fuckboy
┊ ${prefix}playboy
┊ ${prefix}fuckgirl
┊ ${prefix}playgirl
┊ ${prefix}hot
╰━┬≯ 
╭━┤ 〘 *_Sounds_* 〙
┊   ╰━─┈
┊ ${prefix}sound1
┊ ${prefix}sound2
┊ ${prefix}sound3
┊ ${prefix}sound4
┊ ${prefix}sound5
┊ ${prefix}sound6
┊ ${prefix}sound7
┊ ${prefix}sound8
┊ ${prefix}sound9
┊ ${prefix}sound10
┊ ${prefix}sound11
┊ ${prefix}sound12
┊ ${prefix}sound13
┊ ${prefix}sound14
┊ ${prefix}sound15
┊ ${prefix}sound16
┊ ${prefix}sound17
┊ ${prefix}sound18
┊ ${prefix}sound19
┊ ${prefix}sound20
┊ ${prefix}sound21
┊ ${prefix}sound22
┊ ${prefix}sound23
┊ ${prefix}sound24
┊ ${prefix}sound25
┊ ${prefix}sound26
┊ ${prefix}sound27
┊ ${prefix}sound28
┊ ${prefix}sound29
┊ ${prefix}sound30
┊ ${prefix}sound31
┊ ${prefix}sound32
┊ ${prefix}sound33
┊ ${prefix}sound34
┊ ${prefix}sound35
┊ ${prefix}sound36
┊ ${prefix}sound37
┊ ${prefix}sound38
┊ ${prefix}sound39
┊ ${prefix}sound40
┊ ${prefix}sound41
┊ ${prefix}sound42
┊ ${prefix}sound43
┊ ${prefix}sound44
┊ ${prefix}sound45
┊ ${prefix}sound46
┊ ${prefix}sound47
┊ ${prefix}sound48
┊ ${prefix}sound49
┊ ${prefix}sound50
┊ ${prefix}sound51
┊ ${prefix}sound52
┊ ${prefix}sound53
┊ ${prefix}sound54
┊ ${prefix}sound55
┊ ${prefix}sound56
┊ ${prefix}sound57
┊ ${prefix}sound58
┊ ${prefix}sound59
┊ ${prefix}sound60
┊ ${prefix}sound61
┊ ${prefix}sound62
┊ ${prefix}sound63
┊ ${prefix}sound64
┊ ${prefix}sound65
┊ ${prefix}sound66
┊ ${prefix}sound67
┊ ${prefix}sound68
┊ ${prefix}sound69
┊ ${prefix}sound70
┊ ${prefix}sound71
┊ ${prefix}sound72
┊ ${prefix}sound73
┊ ${prefix}sound74
┊ ${prefix}sound75
┊ ${prefix}sound76
┊ ${prefix}sound77
┊ ${prefix}sound78
┊ ${prefix}sound79
┊ ${prefix}sound80
┊ ${prefix}sound81
┊ ${prefix}sound82
┊ ${prefix}sound83
┊ ${prefix}sound84
┊ ${prefix}sound85
┊ ${prefix}sound86
┊ ${prefix}sound87
┊ ${prefix}sound88
┊ ${prefix}sound89
┊ ${prefix}sound90
┊ ${prefix}sound91
┊ ${prefix}sound92
┊ ${prefix}sound93
┊ ${prefix}sound94
┊ ${prefix}sound95
┊ ${prefix}sound96
┊ ${prefix}sound97
┊ ${prefix}sound98
┊ ${prefix}sound99
┊ ${prefix}sound100
┊ ${prefix}sound101
┊ ${prefix}sound102
┊ ${prefix}sound103
┊ ${prefix}sound104
┊ ${prefix}sound105
┊ ${prefix}sound106
┊ ${prefix}sound107
┊ ${prefix}sound108
┊ ${prefix}sound109
┊ ${prefix}sound110
┊ ${prefix}sound111
┊ ${prefix}sound112
┊ ${prefix}sound113
┊ ${prefix}sound114
┊ ${prefix}sound115
┊ ${prefix}sound116
┊ ${prefix}sound117
┊ ${prefix}sound118
┊ ${prefix}sound119
┊ ${prefix}sound120
┊ ${prefix}sound121
┊ ${prefix}sound122
┊ ${prefix}sound123
┊ ${prefix}sound124
┊ ${prefix}sound125
┊ ${prefix}sound126
┊ ${prefix}sound127
┊ ${prefix}sound128
┊ ${prefix}sound129
┊ ${prefix}sound130
┊ ${prefix}sound131
┊ ${prefix}sound132
┊ ${prefix}sound133
┊ ${prefix}sound134
┊ ${prefix}sound135
┊ ${prefix}sound136
┊ ${prefix}sound137
┊ ${prefix}sound138
┊ ${prefix}sound139
┊ ${prefix}sound140
┊ ${prefix}sound141
┊ ${prefix}sound142
┊ ${prefix}sound143
┊ ${prefix}sound144
┊ ${prefix}sound145
┊ ${prefix}sound146
┊ ${prefix}sound147
┊ ${prefix}sound148
┊ ${prefix}sound149
┊ ${prefix}sound150
┊ ${prefix}sound151
┊ ${prefix}sound152
┊ ${prefix}sound153
┊ ${prefix}sound154
┊ ${prefix}sound155
┊ ${prefix}sound156
┊ ${prefix}sound157
┊ ${prefix}sound158
┊ ${prefix}sound159
┊ ${prefix}sound160
┊ ${prefix}sound161
╰━┬≯ 
╭━┤ 〘 *_Tools_* 〙
┊   ╰━─┈
┊ ${prefix}areaoftriangle
┊ ${prefix}perimeteroftriangle
┊ ${prefix}areaofsquare
┊ ${prefix}pythagoras
┊ ${prefix}multiply
┊ ${prefix}perimeterofsquare
┊ ${prefix}square
┊ ${prefix}cubic
┊ ${prefix}toletter
┊ ${prefix}autostickerpc
┊ ${prefix}calculator
┊ ${prefix}translate
╰━┬≯ 
╭━┤ 〘 *_Database_* 〙
┊   ╰━─┈
┊ ${prefix}setcmd
┊ ${prefix}addcmd
┊ ${prefix}delcmd
┊ ${prefix}listcmd
┊ ${prefix}lockcmd
┊ ${prefix}addmsg
┊ ${prefix}getmsg
┊ ${prefix}listmsg
┊ ${prefix}delmsg
┊ ${prefix}deletemsg
╰━┬≯ 
╭━┤ 〘 *_Other_* 〙
┊   ╰━─┈
┊ ${prefix}menu
┊ ${prefix}script
┊ ${prefix}delete
┊ ${prefix}report
┊ ${prefix}speed
┊ ${prefix}ping
┊ ${prefix}botstatus
┊ ${prefix}speedtest
┊ ${prefix}owner
┊ ${prefix}quoted
┊ ${prefix}covid
┊ ${prefix}react
┊ ${prefix}command
┊ ${prefix}allmenu
┊ ${prefix}tqtt
╰━┬≯ 
╭━┤ 〘 *_Owner_* 〙
┊   ╰━─┈	        
┊ ${prefix}banchat
┊ ${prefix}botgroups
┊ ${prefix}limituser
┊ ${prefix}leaderboard
┊ ${prefix}getcase
┊ ${prefix}listpc
┊ ${prefix}listgc
┊ ${prefix}ban
┊ ${prefix}antitag
┊ ${prefix}cowner
┊ ${prefix}block
┊ ${prefix}unblock
┊ ${prefix}setppbot
┊ ${prefix}autoreadsw
┊ ${prefix}autoreadstatus
┊ ${prefix}join
┊ ${prefix}self
┊ ${prefix}public
┊ ${prefix}setbio
┊ ${prefix}leavegroup
┊ ${prefix}bcgc
┊ ${prefix}bcgroup
┊ ${prefix}bc
┊ ${prefix}broadcast
┊ ${prefix}setmenu
┊ ${prefix}ownermenu
╰━┬≯ 
╭━┤ 〘 *_Repair_* 〙
┊   ╰━─┈	
┊ ${prefix}ghfollowing
┊ ${prefix}rentbot
┊ ${prefix}rentlist
┊ ${prefix}rentallist
┊ ${prefix}rentcheck
┊ ${prefix}listonline
┊ ${prefix}chatinfo
┊ ${prefix}virtex
┊ ${prefix}ephemeral
┊ ${prefix}inspectgclink
┊ ${prefix}write
┊ ${prefix}tiktok
┊ ${prefix}tiktokwm
┊ ${prefix}tiktokaudio
┊ ${prefix}wallneon
┊ ${prefix}wallrandom
┊ ${prefix}wallcode
┊ ${prefix}wallpubg
┊ ${prefix}wallml
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'ownermenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Owner Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Owner Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}banchat
┊ ${prefix}botgroups
┊ ${prefix}limituser
┊ ${prefix}leaderboard
┊ ${prefix}getcase
┊ ${prefix}listpc
┊ ${prefix}listgc
┊ ${prefix}ban
┊ ${prefix}antitag
┊ ${prefix}cowner
┊ ${prefix}block
┊ ${prefix}unblock
┊ ${prefix}setppbot
┊ ${prefix}autoreadsw
┊ ${prefix}autoreadstatus
┊ ${prefix}join
┊ ${prefix}self
┊ ${prefix}public
┊ ${prefix}setbio
┊ ${prefix}leavegroup
┊ ${prefix}bcgc
┊ ${prefix}bcgroup
┊ ${prefix}bc
┊ ${prefix}broadcast
┊ ${prefix}setmenu
┊ ${prefix}ownermenu
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'groupmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Group Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Group Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}grupsetting
┊ ${prefix}vote
┊ ${prefix}upvote
┊ ${prefix}devote
┊ ${prefix}checkvote
┊ ${prefix}deletevote
┊ ${prefix}afk
┊ ${prefix}welcome
┊ ${prefix}autoreply
┊ ${prefix}autoreply
┊ ${prefix}autorevoke
┊ ${prefix}leveling
┊ ${prefix}autosticker
┊ ${prefix}antilinkgc
┊ ${prefix}antilinkyoutubevideo
┊ ${prefix}antilinkyoutubechannel
┊ ${prefix}antilinkinstagram
┊ ${prefix}antilinkfacebook
┊ ${prefix}antilinktelegram
┊ ${prefix}antilinktiktok
┊ ${prefix}antilinktwitter
┊ ${prefix}antilinkall
┊ ${prefix}antivirus
┊ ${prefix}antitoxic
┊ ${prefix}antiwame
┊ ${prefix}antiviewonce
┊ ${prefix}nsfw
┊ ${prefix}setnamegroup
┊ ${prefix}setdesc
┊ ${prefix}setgruppp
┊ ${prefix}tagall
┊ ${prefix}hidetag
┊ ${prefix}grouplink
┊ ${prefix}resetlinkgroup
┊ ${prefix}resetlink
┊ ${prefix}group
┊ ${prefix}editinfo
┊ ${prefix}promote
┊ ${prefix}demote
┊ ${prefix}kick
┊ ${prefix}add
┊ ${prefix}getpp 
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'rpgmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Rpg Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Rpg Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}profile
┊ ${prefix}fishing
┊ ${prefix}blood
┊ ${prefix}stab
┊ ${prefix}mine
┊ ${prefix}buy
┊ ${prefix}sell
┊ ${prefix}heal
┊ ${prefix}hunt
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'makermenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Maker Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Maker Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}orange
┊ ${prefix}summer
┊ ${prefix}valentine
┊ ${prefix}blackpink
┊ ${prefix}blackpink1
┊ ${prefix}business3d
┊ ${prefix}diamond
┊ ${prefix}summertime
┊ ${prefix}golden
┊ ${prefix}carved
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'downloadmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Download Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Download Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}instagramstory
┊ ${prefix}instagramstory2
┊ ${prefix}instagram2
┊ ${prefix}instagram
┊ ${prefix}instagramreels
┊ ${prefix}ig
┊ ${prefix}mp4
┊ ${prefix}jpeg
┊ ${prefix}igtv
┊ ${prefix}twitter
┊ ${prefix}twitteraudio
┊ ${prefix}facebook
┊ ${prefix}facebookaudio
┊ ${prefix}play2
┊ ${prefix}ytdl2
┊ ${prefix}play
┊ ${prefix}song
┊ ${prefix}ytplay
┊ ${prefix}getmusic
┊ ${prefix}getvideo
┊ ${prefix}youtube
┊ ${prefix}ytmp3
┊ ${prefix}ytmp4
┊ ${prefix}ytvd
┊ ${prefix}ytad
┊ ${prefix}ytshorts
┊ ${prefix}ytdl
┊ ${prefix}youtubemp32
┊ ${prefix}youtubemp42
┊ ${prefix}pinterest
┊ ${prefix}mediafire
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'searchmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Search Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Search Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}wikimedia
┊ ${prefix}quoteanime
┊ ${prefix}ringtone
┊ ${prefix}happymod
┊ ${prefix}ytsearch
┊ ${prefix}gimage
┊ ${prefix}google
┊ ${prefix}image
┊ ${prefix}wiki
┊ ${prefix}playstore
┊ ${prefix}lyrics
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'convertmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Convert Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Convert Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}volume
┊ ${prefix}tempo
┊ ${prefix}toimage
┊ ${prefix}toimg
┊ ${prefix}tomp4
┊ ${prefix}tovideo
┊ ${prefix}toaud
┊ ${prefix}toaudio
┊ ${prefix}tomp3
┊ ${prefix}tovn
┊ ${prefix}toptt
┊ ${prefix}togif
┊ ${prefix}tourl
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'randomimagemenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Random Image Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Random Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}coffee
┊ ${prefix}wallpaper
┊ ${prefix}animewallpaper
┊ ${prefix}ppcouple
┊ ${prefix}smug2
┊ ${prefix}foxgirl
┊ ${prefix}animenom
┊ ${prefix}waifu3
┊ ${prefix}neko2
┊ ${prefix}woof
┊ ${prefix}8ball
┊ ${prefix}goose
┊ ${prefix}gecg
┊ ${prefix}feed
┊ ${prefix}avatar
┊ ${prefix}lizard
┊ ${prefix}meow
┊ ${prefix}tickle
┊ ${prefix}animecuddle
┊ ${prefix}animeslap
┊ ${prefix}animepat
┊ ${prefix}animeneko
┊ ${prefix}animehug
┊ ${prefix}animekiss
┊ ${prefix}animewlp
┊ ${prefix}animespank
┊ ${prefix}shinobu2
┊ ${prefix}megumin2
┊ ${prefix}awoo2
┊ ${prefix}animewallpaper2
┊ ${prefix}waifu
┊ ${prefix}loli
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'stickermenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Sticker Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Random Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}emojimix
┊ ${prefix}emoji
┊ ${prefix}emojimix2
┊ ${prefix}ttp
┊ ${prefix}take
┊ ${prefix}stickermeme
┊ ${prefix}sticker
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'randomstickermenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Anime Sticker Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Random Sticker Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}lovesticker
┊ ${prefix}gurastick
┊ ${prefix}dogesticker
┊ ${prefix}patricksticker
┊ ${prefix}cry
┊ ${prefix}kill
┊ ${prefix}hug
┊ ${prefix}pat
┊ ${prefix}lick
┊ ${prefix}kiss
┊ ${prefix}bite
┊ ${prefix}yeet
┊ ${prefix}neko
┊ ${prefix}bully
┊ ${prefix}bonk
┊ ${prefix}wink
┊ ${prefix}poke
┊ ${prefix}nom
┊ ${prefix}slap
┊ ${prefix}smile
┊ ${prefix}wave
┊ ${prefix}awoo
┊ ${prefix}blush
┊ ${prefix}smug
┊ ${prefix}glomp
┊ ${prefix}happy
┊ ${prefix}dance
┊ ${prefix}cringe
┊ ${prefix}cuddle
┊ ${prefix}highfive
┊ ${prefix}shinobu
┊ ${prefix}megumin
┊ ${prefix}handhold
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'nsfwmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Nsfw Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Nsfw Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}lovesticker
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'funmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Fun Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Fun Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}lovesticker
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'soundmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Sound Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Sounds Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}lovesticker
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'gamemenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Game Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Game Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}lovesticker
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'toolmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Tool Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Tool Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}lovesticker
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'databasemenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Database Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Database Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}lovesticker
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'othermenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Other Menu')
                await AbadIng.send5ButImg(from, `━─━─┈
┊ *🔥 Other Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}lovesticker
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'repairmenu':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                var unicorn = await getBuffer(picak + 'Repair Menu')
                await AbadIng.send5ButImg(from, `╭━─━─┈
┊ *🔥 Repair Menu 🔥*
╰━┬≯
╭━┤ 
┊   ╰━─┈	
┊ ${prefix}ghfollowing
┊ ${prefix}rentbot
┊ ${prefix}rentlist
┊ ${prefix}rentallist
┊ ${prefix}rentcheck
┊ ${prefix}listonline
┊ ${prefix}chatinfo
┊ ${prefix}virtex
┊ ${prefix}ephemeral
┊ ${prefix}inspectgclink
┊ ${prefix}write
┊ ${prefix}tiktok
┊ ${prefix}tiktokwm
┊ ${prefix}tiktokaudio
┊ ${prefix}wallneon
┊ ${prefix}wallrandom
┊ ${prefix}wallcode
┊ ${prefix}wallpubg
┊ ${prefix}wallml
╰━┬≯ 
╭━┤
┊   ╰━─┈
┊ Use los comandos como
┊ estan escritos en el menu
╰━─━─━─┈` + '' + ' ', `${botname}`, unicorn, [{ "urlButton": { "displayText": "🍒 Asteria Group OF 🍒", "url": `${linkz1}` } }, { "urlButton": { "displayText": "Script🔖", "url": `${botscript}` } }, { "quickReplyButton": { "displayText": "Donate 🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "Owner 👤", "id": 'owner' } }])
                break
            case 'tqtt':
                if (isBan) return reply(mess.ban)
                if (isBanChat && !isCreator) return
                reply(`Thanks to
My family
And all friends who helped assemble this sexy script !!!`)
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
                    } catch (e) {
                        AbadIng.sendMessage(from, { image: err4r, caption: String(e) }, { quoted: m })
                    }
                }
                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await AbadIng.sendMessage(from, { image: err4r, caption: String(err) }, { quoted: m })
                    }
                }
                //anonymous msg forwarder
                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return replay(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return AbadIng.sendMessage(from, { image: err4r, caption: String(err) }, { quoted: m })
                        if (stdout) return replay(stdout)
                    })
                }
                //anti-tag
                const listTag = [`${global.ownertag}@s.whatsapp.net`]
                const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
                //anti-tag 2
                if (listTag.includes(partiNum)) {
                    if (antitags === false) return
                    if (!m.isGroup) return
                    if (m.key.fromMe) return
                    sendNye = fs.readFileSync('./Resources/theme/yourtag.webp')
                    AbadIng.sendReadReceipt(m.chat, m.sender, [m.key.id])
                    AbadIng.sendMessage(from, { sticker: sendNye, contextInfo: { forwardingScore: 800, isForwarded: true } }, { quoted: m })
                }
                //anti-tag 3
                if (budy.includes(`${global.ownertag}`)) {
                    if (antitags === false) return
                    if (!m.isGroup) return
                    if (m.key.fromMe) return
                    sendNye = fs.readFileSync('./Resources/theme/yourtag.webp')
                    AbadIng.sendReadReceipt(m.chat, m.sender, [m.key.id])
                    AbadIng.sendMessage(from, { sticker: sendNye, contextInfo: { forwardingScore: 800, isForwarded: true } }, { quoted: m })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.database
                    if (!(budy.toLowerCase() in msgs)) return
                    AbadIng.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }
    } catch (err) {
        AbadIng.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), { quoted: m })
        console.log(err)
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
