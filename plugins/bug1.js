import fs from 'fs';

let handler = async (m, { conn, text }) => {
  const thumb = fs.readFileSync("./src/avatar_contact.png")

  let pek = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `tolll`, "jpegThumbnail": thumb } } }

  conn.sendMessage(text ? text : m.chat, { text: " " }, { quoted: pek })
  }
handler.help = ['bugji']
handler.tags = ['owner']
handler.command = /^bugji$/i

handler.owner = true

export default handler