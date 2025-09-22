# 💻 pChat-V1

🚀 **pChat-V1** is a live, anonymous chat platform designed in a retro **1990s hacker terminal style**.  
It’s not social media — no signups, no tracking, no profiles. Just pick a username, choose a color, and join the conversation instantly.

---

## ✨ Features

- 🕶️ **Anonymous Access** → No login or signup required.  
- 🎨 **Custom Colors** → Pick from 12 hacker-style colors for your username.  
- 🌐 **Global Chatroom** → All users talk in a single lobby.  
- 🔒 **Private Sidebar Messages** → Use `#username <message>` to start a private thread in the sidebar.  
- 🕑 **Ephemeral Chats** → Messages vanish when the page is refreshed.  
- 🛡️ **Privacy-Oriented** → Fake IPs shown in chat; real ones are hidden.  
- ⚡ **Fast & Lightweight** → Runs on Node.js, Express, and Socket.IO for real-time communication.  

---

## 🖥️ User Flow

1. **Boot Screen** → Retro hacker-style taunting sequence.  
2. **Join Screen** → Choose a username & color.  
3. **Chat Lobby**  
   - 💬 **70% screen** → Global chat with everyone.  
   - 📩 **30% sidebar** → Private messages via `#username`.  

---

## 🌐 Live Demo

👉 [Visit pChat-V1 Online](https://your-live-url-here.com)  

*(replace with your actual deployment link once live)*  

---

## 🔧 Tech Stack

- **Frontend**: HTML5, CSS3 (green-on-black hacker terminal theme)  
- **Backend**: Node.js + Express.js  
- **Realtime**: Socket.IO  
- **Security**: Helmet.js, CORS, fake IP masking  

---

## 🚀 Run Locally

Clone the repo and start the server:

```bash
git clone https://github.com/YOUR_USERNAME/pChat-V1.git
cd pChat-V1
npm install
npm start
````

Visit 👉 `http://localhost:3000`

---

## 🛡️ Security Notes

* Chats are **ephemeral** → auto-vanish on refresh.
* Fake IPs are generated for display.
* Real IPs are hidden in chat, but standard server/network logs may still exist depending on your hosting.
* Use HTTPS in production for encrypted traffic.

---

## 📜 License

MIT License © 2025 — Free for anyone to use, modify, and share.
