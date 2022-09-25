let handler = async ({ conn, text }) => {
  conn.sendMessage(text, { text: 'Ciee, confessmu udah diterima nih!' })
}
handler.command = /^confirmconfes$/i

handler.private = true

export default handler