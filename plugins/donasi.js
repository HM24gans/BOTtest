let handler = async m => m.reply(`
╭─「 Donasi • DANA/PULSA 」
│ •  [0857-6715-4127]
│ •  [0857-6715-4127]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
