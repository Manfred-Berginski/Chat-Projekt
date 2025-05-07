import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = createServer(app);
const io = new Server(server);
const file = path.join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();
if (!db.data) {
  db.data = { messages: [] };
  await db.write();
  console.log('✅ Neue Datenbankstruktur erstellt!');
} else {
  console.log('✅ Datenbank geladen!');
}

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('🟢 Benutzer verbunden');

  socket.emit('chat history', db.data.messages);

  socket.on('chat message', async (msg) => {
    const message = { text: msg, timestamp: Date.now() };
    db.data.messages.push(message);
    await db.write();
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('🔴 Benutzer getrennt');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
