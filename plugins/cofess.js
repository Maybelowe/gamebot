let handler = async (m, { conn, command, text, usedPrefix }) => {
  let prefix = usedPrefix;
  if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomor target|nama pengirim|pesan\n\nContoh ${prefix}${command} 62831xxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxx|crush mu|I have a crush on you\n\nTenang aja privasi aman kokk`)
  let nomor = text.split('|')[0] ? text.split('|')[0] : text
	let saking = text.split('|')[1] ? text.split('|')[1] : text
	let pesan = text.split('|')[2] ? text.split('|')[2] : ''
  if (pesan.length < 1) return m.reply(`Harus di isi semua! ex: ${prefix}menfess 62831xx|orang|hallo kamu`)
  
  let menn = `
  Hai kak, ada confess nihh!
  
  Dari: ${saking}
  Pesan: ${pesan}
  `

  let gambar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU'
  
  await conn.sendHydrated(nomor + '@s.whatsapp.net', menn.trim(), 'Metro Bot @ 2022', gambar, 'https://instagram.com/akmall.kz', 'Support Us!', null, null, [
    ['Confirm', `${usedPrefix}confirmconfes ${m.sender}`],
  ], m)

  setTimeout(() => {
    m.reply(`Berhasil mengirim ${command}`)
  }, 3000)
}
handler.help = ['confess', 'menfess']
handler.tags = ['fun']
handler.command = /^(confes|menfes|confess|menfess)$/i

handler.private = true

export default handler