# 🎂 Kanika's 21st Birthday Website

A beautiful, interactive birthday website built with React, Tailwind CSS, and Framer Motion. This single-page application features a countdown timer, confetti animations, photo slideshow, and a heartfelt love letter.

## ✨ Features

- **Countdown Timer**: Live countdown to September 8, 2025 at 11:00 AM EST
- **Confetti Animation**: Multi-directional confetti burst when timer reaches zero
- **Interactive Photo Slideshow**: 20 beautiful photos with navigation arrows
- **Background Music**: Soft instrumental music during the slideshow
- **Love Letter**: Heartfelt message with beautiful animations
- **YouTube Video**: Embedded private video with modal playback
- **Easter Egg**: Heart animation with sparkles
- **Mobile-First Design**: Fully responsive and touch-friendly
- **Beautiful Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kanika-birthday.git
   cd kanika-birthday
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
kanika-birthday/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── audio/
│   │   ├── birthday-song.mp3
│   │   └── instrumental.mp3
│   └── images/
│       ├── 01.jpg
│       ├── 02.jpg
│       └── ... (20 photos)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Timeline.jsx
│   │   ├── VideoEmbed.jsx
│   │   ├── Footer.jsx
│   │   └── EasterEgg.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Changing the Birthday Date
Edit the target date in `src/App.jsx` and `src/components/Hero.jsx`:
```javascript
const targetDate = new Date('2025-09-08T19:35:00-04:00');
```

### Adding Photos
1. Place your photos in the `public/images/` folder
2. Name them sequentially (01.jpg, 02.jpg, etc.)
3. Update the photos array in `src/components/Timeline.jsx`

### Changing Colors
Modify the custom colors in `tailwind.config.js`:
```javascript
colors: {
  'birthday-pink': '#FFB6C1',
  'birthday-gold': '#FFD700',
  'birthday-lavender': '#E6E6FA',
  // ... more colors
}
```

### Updating the Love Letter
Edit the love letter content in `src/components/Hero.jsx` around line 400.

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Push your code to GitHub
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Your site will be available at `https://yourusername.github.io/kanika-birthday`

### Option 2: Netlify (Free)
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy automatically on every push

### Option 3: Vercel (Free)
1. Connect your GitHub repository to Vercel
2. Framework preset: Create React App
3. Deploy automatically on every push

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Touch-friendly navigation
- Responsive design
- Optimized images
- Smooth scrolling
- Mobile-first approach

## 🎵 Audio Files

Make sure to include these audio files in the `public/audio/` folder:
- `birthday-song.mp3` - Birthday celebration music
- `instrumental.mp3` - Background music for slideshow

## 🔧 Environment Variables

Create a `.env` file in the root directory:
```
REACT_APP_YOUTUBE_VIDEO_ID=your_youtube_video_id
```

## 📄 License

This project is created with love for Kanika's 21st birthday. Feel free to use and modify for your own special occasions!

## 💝 Special Thanks

- React for the amazing framework
- Tailwind CSS for beautiful styling
- Framer Motion for smooth animations
- React Confetti for the celebration effects

---

**Made with ❤️ for Kanika's 21st Birthday** 