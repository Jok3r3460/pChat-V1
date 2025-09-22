const fs = require('fs');
const path = require('path');
const express = require('express');
const http = require('http');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { Server } = require('socket.io');
const validUrl = require('valid-url');

// Custom bad words list including profanity, hate speech, and dangerous terms
const inappropriateWords = [
    'terrorist', 'isis', 'attack', 'bomb', 'kill', 'murder', 'hate',
    // Add other inappropriate words here
];

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: true, methods: ['GET','POST'] }));

const limiter = rateLimit({
  windowMs: 15*60*1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

app.use(express.static(path.join(__dirname, 'public')));

let users = {}; // socketId -> { name, color, fakeIp, lastMessageTime }

// Function to check for suspicious URLs
function containsSuspiciousUrls(text) {
    const words = text.split(' ');
    for (const word of words) {
        if (validUrl.isUri(word)) {
            // Check for suspicious domains
            const suspiciousDomains = ['porn', 'xxx', 'adult', 'sex'];
            if (suspiciousDomains.some(domain => word.toLowerCase().includes(domain))) {
                return true;
            }
        }
    }
    return false;
}

function genFakeIP(){
  return Array.from({length:4}, () => Math.floor(Math.random()*254)+1).join('.');
}

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*", methods: ["GET","POST"] } });

// helper to find socket id by username (exact match, first found)
function findSocketIdByName(targetName){
  for(const id of Object.keys(users)){
    if(users[id].name && users[id].name.toLowerCase() === targetName.toLowerCase()){
      return id;
    }
  }
  return null;
}

io.on('connection', (socket) => {
  const fakeIp = genFakeIP();
  users[socket.id] = { name: `Guest${Math.floor(Math.random()*10000)}`, color: '#00ff00', fakeIp };

  socket.on('set username', ({ name, color } = {}) => {
    if (typeof name === 'string' && name.trim().length) users[socket.id].name = name.trim().slice(0,32);
    if (typeof color === 'string' && color.length) users[socket.id].color = color;
  });

  socket.on('chat message', (msg) => {
    const sender = users[socket.id] || { name: 'Unknown', color:'#00ff00', fakeIp:'0.0.0.0' };
    
    // Rate limiting check - 5 seconds between messages
    const now = Date.now();
    if (sender.lastMessageTime && (now - sender.lastMessageTime) < 5000) {
        socket.emit('system', 'Please wait 5 seconds between messages.');
        return;
    }
    sender.lastMessageTime = now;

    const raw = String(msg || '').slice(0,2000);
    
    // Content filtering
    // Check for suspicious URLs
    if (containsSuspiciousUrls(raw)) {
        socket.emit('system', 'Message blocked: Contains suspicious URLs');
        return;
    }

    // Filter profanity and hate speech
    const hasInappropriateContent = inappropriateWords.some(word => 
        raw.toLowerCase().includes(word.toLowerCase())
    );
    
    if (hasInappropriateContent) {
        socket.emit('system', 'Message blocked: Contains inappropriate content');
        return;
    }

    // detect private syntax: starts with #username (alphanumeric and _ - until space)
    const pmMatch = raw.match(/^#([A-Za-z0-9_\-]{1,32})\s+([\s\S]*)$/);
    if(pmMatch){
      const targetName = pmMatch[1];
      const text = pmMatch[2].trim();
      const targetSocket = findSocketIdByName(targetName);
      if(!targetSocket){
        // send error back to sender only (as system message)
        socket.emit('system', `User "${targetName}" not found or not online.`);
        return;
      }
      const payload = { from: sender.name, fromId: socket.id, toName: targetName, text, color: sender.color, fakeIp: sender.fakeIp, private: true };
      // send to recipient and sender only
      io.to(targetSocket).emit('private message', payload);
      socket.emit('private message', payload);
      return;
    }

    // otherwise broadcast to everyone as global message
    const payload = { user: sender.name, color: sender.color, fakeIp: sender.fakeIp, text: raw, private: false };
    io.emit('chat message', payload);
  });

  socket.on('disconnect', () => {
    delete users[socket.id];
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => { console.log('Server listening on port', PORT); });
