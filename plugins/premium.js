let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
conn.sendMessage(m.chat, {
  text: `• *Premium / 30 Hari*
*Rp. 25.000 Dana*
*Rp. 30.000 Pulsa*

• *Premium Unlimited*
*Rp. 50.000 Dana*
*Rp. 55.000 Pulsa*`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Chat Jika Berminat`,
      url: 'https://wa.me/6283174295037?text=Assalamualaikum%20Bang%20Saya%20Mau%20Beli%20Premiumnya%20'
    }
  }],
  footer: '©Dha/24 X Ikhsan'
})
}, 0)
}
handler.help = ['premium']
handler.tag = ['premium']
handler.command = /^(premium)$/i

module.exports = handler
