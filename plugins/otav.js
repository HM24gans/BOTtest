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

*Harga: mulai dari 4k-23k*
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
Algeria (+213) = 9k
Argentina (+54) = 9k
Austria (+43) = 12k
Azerbaijan (+994) = 11k
Belarus (+375) = 15k
Belgium (+32) = 11k
Bolivia (+591) = 9k
Brazil (+55) = 11k
Cambodia (+855) = 8k
Cameroon (+237) = 9k
Canada (+1) = 11k
Chad (+235) = 12k
China (+86) = 8k
Colombia (+57) = 10k
Croatia (+385) = 11k
Cyprus (+357) = 20k
Côte d'Ivoire (+225) = 13k
Egypt (+20) = 15k
El Salvador (+503) = 10k
Estonia (+372) = 11k
Ethiopia (+251) = 9k
France (+33) = 13k
Gambia (+220) = 12k
Germany (+49) = 16k
Ghana (+233) = 9k
Greece (+30) = 11k
Haiti (+509) = 11k
Hong Kong (+852) = 12k
India (+91) = 9k
Indonesia (+62) = 4k
Iran (+98) = 16k
Ireland (+353) = 8k
Israel (+972) = 12k
Kazakhstan (+7) = 8k
Kenya (+254) = 8k
Kyrgyztan (+996) = 11k
Macao (+853) = 9k
Malawi (+265) = 9k
Malaysia (+60) = 11k
Mali (+223) = 16k
Mauritania (+222) = 12k
Mexico (+52) = 9k
Montonegro (+382) = 11k
Morocco (+212) = 8k
Myanmar (+95) = 9k
Netherlands (+31) = 14k
New Caledonia (+687) = 20k
Nicaragua (+505) = 8k
Nigeria (+234) = 8k
Pakistan (+92) = 8k
Panama (+507) = 12k
Peru (+51) = 9k
Philippines (+63) = 8k
Puerto Rico (+1) = 9k
Reunion (+262) = 9k
Romania (+40) = 12k
Russia (+7) = 7k
Saudi Arabia (+966) = 12k
Senegal (+221) = 8k
Serbia (+381) = 12k
Singapore (+65) = 12k
South Africa (+27) = 8k
Spain (+34) = 16k
Sudan (+249) = 9k
Taiwan (+886) = 11k
Thailand (+66) = 8k
Togo (+228) = 10k
Tunisia (+216) = 9k
Turkey (+90) = 9k
UAE (+971) = 9k
Uganda (+256) = 9k
UK (+44) = 11k
Ukraine (+380) = 8k
Uzbekistan (+998) = 12k
Venezuela (+58) = 9k
Vietnam (+84) = 8k
Yemen (+967) = 16k
Zambia (+260) = 9k
Zimbabwe (+263) = 9k
*DAN LAIN-LAIN...*

*...: FAQ MOCH HUDHA XD :...*

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
