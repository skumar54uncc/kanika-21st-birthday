import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import VideoEmbed from './components/VideoEmbed';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';

// Set modal app element for react-modal
if (typeof window !== 'undefined') {
  const Modal = require('react-modal');
  Modal.setAppElement('#root');
}

function App() {
  const [isBirthday, setIsBirthday] = useState(false);

  // Check if it's birthday time
  useEffect(() => {
    const checkBirthday = () => {
          // Original birthday date: September 8, 2025 at 7:28 PM EST (exactly 21 years from birth)
    const targetDate = new Date('2025-09-08T19:28:00-04:00');
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        setIsBirthday(true);
      }
    };

    // Check immediately
    checkBirthday();
    
    // Check every second
    const interval = setInterval(checkBirthday, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Function to set birthday state from Hero component
  const handleBirthdayStart = () => {
    setIsBirthday(true);
  };

  return (
    <div className="App">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Always visible */}
        <Hero onBirthdayStart={handleBirthdayStart} isBirthday={isBirthday} />
        
        {/* Timeline Section - Only visible after timer ends */}
        {isBirthday && <Timeline />}
        
        {/* Video Section - Only visible after timer ends */}
        {isBirthday && <VideoEmbed />}
      </main>
      
      {/* Footer - Only visible after timer ends */}
      {isBirthday && <Footer />}
      
      {/* Easter Egg - Only visible after timer ends */}
      {isBirthday && <EasterEgg />}
      
      {/* Loading Screen */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-pink-400 to-purple-600 z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ pointerEvents: 'none' }}
      >
        <motion.div
          className="text-center text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🎂
          </motion.div>
          <h1 className="font-script text-3xl mb-2">Loading...</h1>
          <p className="text-white/80">Preparing something special for Kanika</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App; 