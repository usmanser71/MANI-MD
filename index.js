```js
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const chalk = require('chalk');
const config = require('./config');
const messageHandler = require('./lib/messageHandler');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth');
  const sock = makeWASocket({
    logger: undefined,
    printQRInTerminal: true,
    auth: state
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', ({ connection }) => {
    if (connection === 'open') {
      console.log(chalk.green(`✅ ${config.botName} Connected Successfully!`));
    }
  });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    await messageHandler(sock, messages);
  });
}

startBot();
```
