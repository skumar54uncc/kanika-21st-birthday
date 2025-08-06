import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEgg = () => {
  const [isPopping, setIsPopping] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [poppedHearts, setPoppedHearts] = useState(0);

  const handleHeartPop = () => {
    setIsPopping(true);
    
    setTimeout(() => {
      setIsPopping(false);
      setTimeout(() => {
        setShowLetter(true);
      }, 500);
    }, 3000);
  };

  const closeLetter = () => {
    setShowLetter(false);
  };

  const hearts = [
    { id: 1, emoji: '💖', size: 'text-8xl', delay: 0, x: '10%', y: '20%' },
    { id: 2, emoji: '💕', size: 'text-7xl', delay: 0.1, x: '25%', y: '15%' },
    { id: 3, emoji: '💗', size: 'text-9xl', delay: 0.2, x: '40%', y: '25%' },
    { id: 4, emoji: '💝', size: 'text-6xl', delay: 0.3, x: '55%', y: '10%' },
    { id: 5, emoji: '💖', size: 'text-8xl', delay: 0.4, x: '70%', y: '20%' },
    { id: 6, emoji: '💕', size: 'text-7xl', delay: 0.5, x: '85%', y: '15%' },
    { id: 7, emoji: '💗', size: 'text-9xl', delay: 0.6, x: '15%', y: '60%' },
    { id: 8, emoji: '💝', size: 'text-6xl', delay: 0.7, x: '30%', y: '70%' },
    { id: 9, emoji: '💖', size: 'text-8xl', delay: 0.8, x: '45%', y: '65%' },
    { id: 10, emoji: '💕', size: 'text-7xl', delay: 0.9, x: '60%', y: '75%' },
    { id: 11, emoji: '💗', size: 'text-9xl', delay: 1.0, x: '75%', y: '60%' },
    { id: 12, emoji: '💝', size: 'text-6xl', delay: 1.1, x: '90%', y: '70%' },
    { id: 13, emoji: '💖', size: 'text-8xl', delay: 1.2, x: '5%', y: '40%' },
    { id: 14, emoji: '💕', size: 'text-7xl', delay: 1.3, x: '95%', y: '45%' },
    { id: 15, emoji: '💗', size: 'text-9xl', delay: 1.4, x: '50%', y: '50%' }
  ];

  return (
    <>
      {/* Easter Egg Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          onClick={handleHeartPop}
          disabled={isPopping}
          className="w-12 h-12 bg-pink-500 rounded-full shadow-lg flex items-center justify-center text-white text-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          💖
        </motion.button>
      </motion.div>

             {/* Heart Pop Animation */}
       <AnimatePresence>
         {isPopping && (
           <motion.div
             className="fixed inset-0 pointer-events-none z-[9999]"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
           >
             {hearts.map((heart) => (
               <motion.div
                 key={heart.id}
                 className={`absolute ${heart.size} text-pink-500/30`}
                 style={{
                   left: heart.x,
                   top: heart.y
                 }}
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ 
                   scale: [0, 1.5, 1, 0.8, 0],
                   opacity: [0, 0.8, 0.6, 0.3, 0]
                 }}
                 transition={{ 
                   duration: 3,
                   delay: heart.delay,
                   ease: "easeOut"
                 }}
               >
                 {heart.emoji}
               </motion.div>
             ))}
           </motion.div>
         )}
       </AnimatePresence>

      {/* Love Letter Modal */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLetter}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[80vh] overflow-y-auto relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sparkle Effects */}
              <motion.div
                className="absolute top-4 left-4 text-2xl"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute top-4 right-4 text-xl"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: [0, 1, 0], rotate: [0, -180, -360] }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute bottom-4 left-4 text-xl"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute bottom-4 right-4 text-2xl"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: [0, 1, 0], rotate: [0, -180, -360] }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                ⭐
              </motion.div>
              
              <div className="text-center">
                <motion.div
                  className="text-4xl mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  💌
                </motion.div>
                
                <h3 className="font-script text-2xl text-pink-600 mb-4">
                  Dear Kanika,
                </h3>
                
                <motion.div
                  className="text-gray-700 leading-relaxed space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p>
                    As you celebrate your 21st birthday, I wanted to take a moment to tell you how incredibly special you are.
                  </p>
                  
                  <p>
                    Your kindness, strength, and beautiful spirit have touched so many lives. You bring joy wherever you go, and your smile lights up every room you enter.
                  </p>
                  
                  <p>
                    This milestone birthday marks the beginning of an exciting new chapter in your life. I can't wait to see all the amazing things you'll accomplish and the wonderful person you'll continue to become.
                  </p>
                  
                  <p>
                    Thank you for being you - authentic, caring, and absolutely wonderful. You deserve all the happiness, love, and success that life has to offer.
                  </p>
                  
                  <p className="font-script text-lg text-pink-600">
                    Happy 21st Birthday, beautiful! 🎂✨
                  </p>
                  
                  <p className="text-sm text-gray-500 mt-6">
                    With all my love and best wishes for your special day.
                  </p>
                </motion.div>
                
                <motion.button
                  onClick={closeLetter}
                  className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEgg; 