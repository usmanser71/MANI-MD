```js
module.exports = async function messageHandler(sock, messages) {
  const msg = messages[0];
  if (!msg.message || msg.key.fromMe) return;

  const from = msg.key.remoteJid;
  const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';

  if (text.toLowerCase() === 'ping') {
    await sock.sendMessage(from, { text: 'Pong! 🏓 MANI-MD is active.' });
  }

  if (text.toLowerCase() === 'hi') {
    await sock.sendMessage(from, { text: 'Hello! This is MANI-MD Bot ✅' });
  }

  // Yahan aur commands add kar sakte hain
}
