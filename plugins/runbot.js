let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
conn.sendMessage(m.chat, {
  text: `*_Jasa Run Bot_*
*5RB*:15 Hari
*10RB*:25 Hari
*20RB*:35 Hari

*_Bot On 24 Jam Karena Run Via RDP_*`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Chat Jika Berminat 😉`,
      url: 'https://wa.me/6283174295037?text=Assalamualaikum%20Bang%20Saya%20Mau%20Run%20Bot%20'
    }
  }],
  footer: '©Dha/24 X Ikhsan'
})
}, 1000)
setTimeout(() => {
conn.reply(m.chat, '*_Harga? Sudah Pasti Paling murah_*', m)
}, 800)
setTimeout(() => {
conn.reply(m.chat, '*_BOT ONLINE 24 JAM_*', m)
}, 500)
setTimeout(() => {
conn.reply(m.chat, '*_Ready Jasa Run BOT_*', m)
}, 0)
}
handler.help = ['runbot']
handler.tag = ['internet']
handler.command = /^(runbot)$/i
handler.limit = true
module.exports = handler
