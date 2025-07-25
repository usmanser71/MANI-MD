```js
module.exports = {
  name: 'ping',
  description: 'Check bot latency',
  async execute(sock, msg) {
    const from = msg.key.remoteJid;
    await sock.sendMessage(from, { text: 'Pong! 🏓 MANI-MD is active.' });
  }
}
