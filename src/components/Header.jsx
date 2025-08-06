import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if it's birthday time
  // For demo: Change to 30 seconds from now to test the countdown
  const demoTargetDate = new Date(Date.now() + 30000); // 30 seconds from now
  // Original: const targetDate = new Date('2025-09-08T11:00:00-04:00');
  const targetDate = demoTargetDate; // Use demo date for testing
  const now = new Date();
  const isBirthdayTime = now >= targetDate;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className={`font-script text-2xl md:text-3xl ${
              isScrolled ? 'text-pink-600' : 'text-pink-600'
            } text-shadow`}
            whileHover={{ scale: 1.05 }}
          >
            Kanika's 21st
          </motion.h1>
          
          <nav className="hidden md:flex space-x-8">
            {isBirthdayTime ? (
              // After birthday - Show all navigation
              [
                { id: 'hero', label: 'Home' },
                { id: 'timeline', label: 'Moments' },
                { id: 'video', label: 'Video' },
                { id: 'footer', label: 'Contact' }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-pink-600 hover:text-birthday-gold' 
                      : 'text-pink-600 hover:text-birthday-gold'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))
            ) : (
              // Before birthday - Show only Home
              <motion.button
                onClick={() => scrollToSection('hero')}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-pink-600 hover:text-birthday-gold' 
                    : 'text-pink-600 hover:text-birthday-gold'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.button>
            )}
          </nav>

          {/* Mobile menu button - Only show after birthday */}
          {isBirthdayTime && (
            <motion.button
              className="md:hidden p-2"
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className={`w-6 h-6 ${isScrolled ? 'text-pink-600' : 'text-pink-600'}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </motion.button>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 