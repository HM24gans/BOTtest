let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
conn.sendMessage(m.chat, {
  text: `*_...: 📩 JUAL OTAV 📩 :..._*

*_Jual jasa OTAV_*
*(One Time Account Verification)*
*_Harga sangat terjangkau_*
*(paling murah SE-INDONESIA)*
*_Garansi berlaku apabila OTAV gagal terkirim_*

*Harga: mulai dari 5-50k*
*(Tergantung negara) 🌐*

*Pembayaran bisa dilakukan via:*
• *Dana*
• *Pulsa*
*Jangan lupa untuk menyertakan bukti pembayaran*

*⚠️ PERHATIAN! ⚠️*
*• Harga dibawah merupakan harga OTAV untuk WhatsApp, harga akan berbeda jika anda ingin melakukan OTAV untuk aplikasi lain*
*(misalnya Discord,Telegram,Tinder,OLX,dll)*

*_LIST NEGARA/COUNTRY CODE:_*

*Total list: 100+*
Algeria (+213) 
Argentina (+54)
Austria (+43) 
Azerbaijan (+994) 
Belarus (+375)
Belgium (+32)
Bolivia (+591)
Brazil (+55) =
Cambodia (+855) 
Cameroon (+237) 
Canada (+1) 
Chad (+235) 
China (+86) 
Colombia (+57) 
Croatia (+385) 
Cyprus (+357) 
Côte d'Ivoire (+225) 
Egypt (+20)
El Salvador (+503) 
Estonia (+372) 
Ethiopia (+251) 
France (+33) 
Gambia (+220) 
Germany (+49) 
Ghana (+233) 
Greece (+30) 
Haiti (+509) 
Hong Kong (+852)
India (+91) 
Indonesia (+62) 
Iran (+98) 
Ireland (+353) 
Israel (+972) 
Kazakhstan (+7) 
Kenya (+254) 
Kyrgyztan (+996) 
Macao (+853) 
Malawi (+265) 
Malaysia (+60) 
Mali (+223) 
Mauritania (+222)
Mexico (+52) 
Montonegro (+382) 
Morocco (+212) 
Myanmar (+95) 
Netherlands (+31)
New Caledonia (+687) 
Nicaragua (+505) 
Nigeria (+234) 
Pakistan (+92) 
Panama (+507) 
Peru (+51) 
Philippines (+63) 
Puerto Rico (+1) 
Reunion (+262) 
Romania (+40) 
Russia (+7) 
Saudi Arabia (+966) 
Senegal (+221) 
Serbia (+381) 
Singapore (+65) 
South Africa (+27) 
Spain (+34) 
Sudan (+249) 
Taiwan (+886) 
Thailand (+66) 
Togo (+228) 
Tunisia (+216) 
Turkey (+90) 
UAE (+971) 
Uganda (+256) 
UK (+44) 
Ukraine (+380)
Uzbekistan (+998)
Venezuela (+58) 
Vietnam (+84) 
Yemen (+967) 
Zambia (+260) 
Zimbabwe (+263) 
*DAN LAIN-LAIN...*

*...: FAQ Dha/24 :...*

*Q: Nomor yg didapatkan itu darimana min?*
*A: Semua nomor yg kami dapatkan dari penyuplai adalah real sim-card :D.*

*Q: Setelah saya beli nomor, lalu dikemudian hari saya butuh nomor sebelumnya, bisa dipakai lagi ga?*
*A: Tidak bisa, 1 nomor hanya bisa dipakai untuk 1 SMS, kalau Anda keluar/Log Out/Hapus APK, nomornya gabisa dipakai lagi :D.*

*Q: Berapa banyak waktu yg saya miliki untuk menunggu SMS?*
*A: 18 Menit.*

*Q: Gimana mimin menentukan harga?*
*A: Harga ditentukan oleh pesuplai (Penawaran & Permintaan).*

*Q: Apakah nomor yg diberikan legal?*
*A: Tentu saja legal, nomor yg kami miliki datang dari pesuplai yg dapat dipercaya.*

*Q: Saya ingin membeli nomor yg bisa digunakan berhari-hari dan berkali-kali, bisa min?*
*A: Bisa dong, dengan sistem Rent kamu bisa sewa nomor selama beberapa Jam,Hari,Minggu, dan Bulan yg telah ditentukan.*

*Q: Nomor yg saya beli, apakah kedepannya akan dijual lagi untuk diverifikasi orang lain?*
*A: Tidak, nomor yg sudah diaktivasi akan sepenuhnya dihapus dari server, nomor yg sudah kamu beli tidak akan dijual lagi :D.*

*Q: Proses penerimaan dan pengiriman SMS oleh Admin manual atau otomatis?*
*A: Proses SMS masuk sangat cepat, antara 1-18 menit dan dikirim secara otomatis.*

*Q: Apa alasan SMS tidak masuk-masuk?*
*A: Banyak faktor, salahsatu alasan nya adalah IP Address Anda tidak sesuai dengan nomor yg dipesan, jika IP Address Anda telah digunakan untuk verifikasi SMS berkali-kali lalu Anda ingin membeli nomor baru, disarankan untuk mengubah IP Address Anda sesuai dengan negara yg dibeli.*

*Q: Mengapa wajib merubah IP Address setelah sering melakukan SMS di IP yg sama?*
*A: Karena WhatsApp memiliki fitur penyaringan yg sangat baik, jika Anda membeli nomor menggunakan IP Address yg sama secara berulangkali, WhatsApp akan mendeteksi adanya aktivitas mencurigakan, jadi SMS tidak akan terkirim.*`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Chat Owner Jika Berminat`,
      url:  'https://wa.me/6283174295037?text=Assalamualaikum%20Bang%20Saya%20Mau%20Beli%20OTAVnya%20'
    }
  }],
  footer: '© Otav2022'
})
}, 1000)
setTimeout(() => {
conn.reply(m.chat, '_*Ok Kita Langsung Saja Kelist Nomor Dan Harga😁*_', m)
}, 800)
setTimeout(() => {
conn.reply(m.chat, '_*Harga?Sudah Pasti Paling Murah*_', m)
}, 500)
setTimeout(() => {
conn.reply(m.chat, '_*Ready Otav Untuk Verifikasi Whatsapp*_', m)
}, 0)
}
handler.help = ['otav']
handler.tag = ['internet']
handler.command = /^(otav)$/i

module.exports = handler
