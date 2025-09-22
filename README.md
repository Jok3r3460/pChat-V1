# 💻 pChat-V1

🚀 **pChat-V1** is a live, secure chat platform designed in a retro **1990s hacker terminal style**.  
It's not social media — no signups, no tracking, no profiles. Just pick a username and start chatting instantly.

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7.2-green.svg)

---Chat-V1

🚀 **pChat-V1** is a live, anonymous chat platform designed in a retro **1990s hacker terminal style**.  
It’s not social media — no signups, no tracking, no profiles. Just pick a username, choose a color, and join the conversation instantly.

---

## ✨ Features

### Core Features
- 🕶️ **Anonymous Access** → No login or signup required
- 🌐 **Global Chatroom** → All users talk in a single lobby
- 🔒 **Private Messaging** → Use `#username <message>` for private conversations
- 🕑 **Ephemeral Chats** → Messages vanish when the page is refreshed
- 🛡️ **Privacy-Oriented** → Fake IPs shown in chat; real ones are hidden
- ⚡ **Fast & Lightweight** → Runs on Node.js, Express, and Socket.IO

### Security Features
- 🚫 **Rate Limiting** → 5-second cooldown between messages
- 🔍 **Content Moderation** → Automatic filtering of inappropriate content
- 🔒 **URL Protection** → Detection and blocking of suspicious URLs
- 🛡️ **XSS Prevention** → Input sanitization and validation
- 🔐 **Security Headers** → Helmet.js implementation
- 🌐 **CORS Protection** → Configured cross-origin resource sharing

### User Experience
- 📱 **Mobile Responsive** → Works on all devices
- 🔄 **Connection Status** → Real-time connection feedback
- ⌨️ **Keyboard Support** → Enter to send messages
- ♿ **Accessibility** → ARIA attributes and semantic HTML
- 🎨 **Retro Theme** → Classic green-on-black terminal style
- 💨 **Reduced Motion** → Support for users who prefer less animation

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

## 🔧 Technical Details

### Tech Stack
- **Frontend**: 
  - HTML5 & CSS3
  - Socket.IO Client
  - Responsive Design
  - Semantic HTML
- **Backend**: 
  - Node.js & Express.js
  - Socket.IO Server
  - Rate Limiting
  - Content Filtering
- **Security**: 
  - Helmet.js Security Headers
  - CORS Protection
  - Input Validation
  - XSS Prevention
  - Fake IP Masking
  - URL Filtering

### Project Structure
```
pChat/
├── server.js           # Main server file
├── package.json        # Dependencies
├── LICENSE            # MIT license
├── README.md          # Documentation
└── public/            # Static files
    ├── index.html     # Landing page
    ├── join.html      # Join page
    ├── chat.html      # Chat interface
    ├── styles.css     # Styling
    └── favicon.ico    # Site icon
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/pChat-V1.git
cd pChat-V1
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser:
```
http://localhost:3000
````

Visit 👉 `http://localhost:3000`

---

## 🌐 Deployment

### Recommended Platforms
1. **Render.com** (Free Tier):
   - Create a new Web Service
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`

2. **Alternative Options**:
   - Heroku
   - DigitalOcean
   - Railway.app
   - Fly.io

### Production Considerations
- Enable HTTPS
- Set up proper environment variables
- Consider using a CDN
- Implement backup solutions
- Monitor server resources

## 🛡️ Security Notes

- **Ephemeral Data**:
  - Messages vanish on refresh
  - No data persistence
  - No message logging

- **Privacy**:
  - Fake IPs in chat
  - Real IPs hidden
  - No user tracking
  - No cookies used

- **Security**:
  - Rate limiting enabled
  - Content filtering active
  - XSS prevention
  - CORS configured
  - Security headers set

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Update documentation
- Test thoroughly

## 🐛 Troubleshooting

### Common Issues

1. **Connection Problems**:
   - Check internet connection
   - Verify server is running
   - Check browser console

2. **Message Issues**:
   - Wait for rate limit cooldown
   - Check for filtered content
   - Verify connection status

3. **Mobile Issues**:
   - Enable JavaScript
   - Use modern browser
   - Clear cache if needed

## 📜 License

This project is free and open-source under the MIT License.

### You are free to:
- Use commercially
- Modify
- Distribute
- Use privately
- Use for patents

See [LICENSE](LICENSE) for the full text.

---

Created with ❤️ | MIT License © 2025
