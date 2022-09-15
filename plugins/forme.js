let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
conn.sendMessage(m.chat, {
  text: `Ambil Di Link Yang Ada di button:v`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Ambil Disini`,
      url: 'https://teknosimple.com/hugiladxwyE'
    }
  }],
  footer: 'Ni Ambil'v'
})
}, 15000)
setTimeout(() => {
conn.reply(m.chat, 'Ngk Gua Enc Kok Bang', m)
}, 10000)
setTimeout(() => {
conn.reply(m.chat, 'Mau Beneran Kah Bang?', m)
}, 5000)
setTimeout(() => {
conn.reply(m.chat, 'Cari Sc Bot Nya Bang?', m)
}, 0)
}
handler.help = ['sc']
handler.tag = ['internet']
handler.command = /^(sc)$/i

module.exports = handler
