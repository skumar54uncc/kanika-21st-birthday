import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

const Hero = ({ onBirthdayStart, isBirthday: appIsBirthday }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [isBirthday, setIsBirthday] = useState(false);
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [showMusicButton, setShowMusicButton] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [exploreClicked, setExploreClicked] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [timerStopped, setTimerStopped] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Original birthday date: September 8, 2025 at 11:00 AM EST
    const targetDate = new Date('2025-09-08T11:00:00-04:00'); // America/New_York timezone

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
             } else {
         // Timer has reached zero
         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
         setIsBirthday(true);
         setShowConfetti(true);
         
         // Notify parent component that birthday has started
         onBirthdayStart();
         
         // Show music button immediately when timer ends
         setShowMusicButton(true);
         
         // Stop confetti after 15 seconds
         setTimeout(() => setShowConfetti(false), 15000);
       }
    };

    // Calculate initial time
    calculateTimeLeft();
    
    // Set up interval only if timer is not stopped
    if (!timerStopped) {
      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }
  }, [buttonClicked, timerStopped]);

  // Function to play birthday music
  const playBirthdayMusic = async () => {
    if (!audioRef.current) {
      console.log('Audio element not found');
      return 'failed';
    }

    try {
      audioRef.current.volume = 0.4;
      await audioRef.current.play();
      console.log('Birthday music started successfully!');
      return 'success';
    } catch (error) {
      console.log('Failed to play birthday music:', error);
      return 'failed';
    }
  };

  const countdownVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };



  // Handle music button click
  const handleMusicButtonClick = async () => {
    setShowMusicButton(false);
    setButtonClicked(true);
    setTimerStopped(true);
    
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.4;
        await audioRef.current.play();
        setMusicStarted(true);
        
        // Show love letter after 15 seconds
        setTimeout(() => {
          if (!exploreClicked) {
            setShowLoveLetter(true);
          }
        }, 15000);
      }
    } catch (error) {
      console.log('Failed to play music:', error);
    }
  };

    // Check if it's birthday time
  // Original birthday date: September 8, 2025 at 11:00 AM EST
  const targetDate = new Date('2025-09-08T11:00:00-04:00');
  const now = new Date();
  const isBirthdayTime = now >= targetDate || isBirthday || appIsBirthday; // Check all birthday states

  return (
          <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
      {/* Background gradient */}
      <div className="absolute inset-0 birthday-gradient"></div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎈
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      >
        🎂
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-2xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
      >
        ✨
      </motion.div>
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-60 left-1/4 text-3xl"
        animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute top-80 right-1/3 text-2xl"
        animate={{ y: [0, -18, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
      >
        🎸
      </motion.div>
      <motion.div
        className="absolute bottom-60 right-1/4 text-3xl"
        animate={{ y: [0, -22, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }}
      >
        💖
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-1/6 text-2xl"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 2.2 }}
      >
        💕
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/6 text-3xl"
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, delay: 1.8 }}
      >
        💗
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/3 text-2xl"
        animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, delay: 0.3 }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute bottom-1/2 right-1/3 text-3xl"
        animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 3.9, repeat: Infinity, delay: 2.5 }}
      >
        🌟
      </motion.div>
      <motion.div
        className="absolute top-2/3 left-2/3 text-2xl"
        animate={{ y: [0, -14, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, delay: 1.2 }}
      >
        💝
      </motion.div>
      <motion.div
        className="absolute bottom-2/3 right-2/3 text-3xl"
        animate={{ y: [0, -19, 0], rotate: [0, 7, 0] }}
        transition={{ duration: 4.1, repeat: Infinity, delay: 0.7 }}
      >
        🎈
      </motion.div>

                                                                                                               {/* Hidden audio element for birthday music */}
          <audio
            ref={audioRef}
            preload="auto"
            style={{ display: 'none' }}
                         onLoadedData={() => {
               setAudioReady(true);
             }}
             onError={(e) => {
               console.log('Audio loading error:', e);
             }}
          >
            <source src="/audio/birthday-song.mp3" type="audio/mpeg" />
            <source src="/audio/birthday-song.ogg" type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>

       {/* Confetti from all sides */}
       {showConfetti && (
         <>
           {/* Main confetti burst */}
           <Confetti
             width={window.innerWidth}
             height={window.innerHeight}
             recycle={false}
             numberOfPieces={300}
             colors={['#FFD700', '#FFB6C1', '#E6E6FA', '#FFE5F1', '#FFDAB9', '#FF69B4', '#FF1493']}
             gravity={0.3}
             wind={0.05}
           />
           
           {/* Left side confetti */}
           <Confetti
             width={window.innerWidth}
             height={window.innerHeight}
             recycle={false}
             numberOfPieces={150}
             colors={['#FFD700', '#FFB6C1', '#E6E6FA', '#FFE5F1', '#FFDAB9']}
             gravity={0.2}
             wind={0.1}
             confettiSource={{ x: 0, y: 0, w: 100, h: window.innerHeight }}
           />
           
           {/* Right side confetti */}
           <Confetti
             width={window.innerWidth}
             height={window.innerHeight}
             recycle={false}
             numberOfPieces={150}
             colors={['#FFD700', '#FFB6C1', '#E6E6FA', '#FFE5F1', '#FFDAB9']}
             gravity={0.2}
             wind={-0.1}
             confettiSource={{ x: window.innerWidth - 100, y: 0, w: 100, h: window.innerHeight }}
           />
           
           {/* Top confetti */}
           <Confetti
             width={window.innerWidth}
             height={window.innerHeight}
             recycle={false}
             numberOfPieces={200}
             colors={['#FFD700', '#FFB6C1', '#E6E6FA', '#FFE5F1', '#FFDAB9']}
             gravity={0.4}
             confettiSource={{ x: 0, y: 0, w: window.innerWidth, h: 100 }}
           />
         </>
       )}

             <div className="container mx-auto px-4 text-center relative z-10">
         <motion.div
           initial="hidden"
           animate="visible"
           variants={countdownVariants}
           className="space-y-8"
         >
                       {!isBirthdayTime ? (
              // Before birthday - Show only timer
              <>
                <motion.h1 
                  className="font-script text-5xl md:text-7xl text-pink-600 text-shadow mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  Kanika's 21st Birthday
                </motion.h1>
                
                                                   <motion.p 
                    className="text-xl md:text-2xl text-pink-600/90 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    September 8, 2025 • 11:00 AM EST
                  </motion.p>

                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto"
                  variants={countdownVariants}
                >
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6"
                      variants={numberVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className="text-3xl md:text-5xl font-bold text-gray-700 mb-2"
                        key={item.value}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.value.toString().padStart(2, '0')}
                      </motion.div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            ) : (
                           // After birthday - Show full experience
              <>
                <motion.h1 
                  className="font-script text-5xl md:text-7xl text-pink-600 text-shadow mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {showFinalMessage ? "Happy Birthday Beautiful Girl! 💖" : 
                   isBirthday ? "Happy Birthday Kanika! 🎉" : "Kanika's 21st Birthday"}
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-pink-600/90 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {isBirthday 
                    ? "Today is your special day! 🎂✨" 
                    : "September 8, 2025 • 11:00 AM EST"
                  }
                </motion.p>

                {isBirthday && !showFinalMessage && (
                  <motion.div
                    className="text-4xl md:text-6xl space-x-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    🎉 🎂 🎈 ✨ 🎊
                  </motion.div>
                )}

                {showFinalMessage && (
                  <motion.div
                    className="text-4xl md:text-6xl space-x-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    💖 💕 💗 💝 ✨
                  </motion.div>
                )}

                {/* Music Button - appears when autoplay fails */}
                {showMusicButton && (
                  <motion.div
                    className="mt-8"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <motion.button
                      onClick={handleMusicButtonClick}
                      className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🎵 Press Here for Further Surprise! ✨
                    </motion.button>
                  </motion.div>
                )}
              </>
           )}
         </motion.div>
       </div>

             {/* Scroll indicator - Only show after birthday */}
       {isBirthdayTime && (
         <motion.div
           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
             <motion.div
               className="w-1 h-3 bg-white/70 rounded-full mt-2"
               animate={{ y: [0, 12, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
             />
           </div>
         </motion.div>
       )}

       {/* Love Letter Overlay - Only show after birthday */}
       {isBirthdayTime && showLoveLetter && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl mx-4 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                className="text-6xl mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                💌
              </motion.div>
              
              <motion.h2
                className="font-script text-3xl md:text-4xl text-pink-600 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                My Dearest Kanika 💖
              </motion.h2>
              
              <motion.div
                className="text-gray-700 leading-relaxed space-y-4 text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <p>
                  As you turn 21, I want you to know how incredibly special you are. 
                  Your beautiful smile lights up every room you enter, and your kind heart 
                  touches everyone around you.
                </p>
                
                <p>
                  You've grown into such an amazing young woman - strong, intelligent, 
                  and full of dreams. Watching you blossom has been one of the greatest 
                  joys of my life.
                </p>
                
                <p>
                  May this year bring you endless happiness, love, and all the beautiful 
                  things you deserve. You are loved beyond measure! 💕
                </p>
                
                <p className="font-script text-2xl text-pink-600 mt-6">
                  Happy 21st Birthday, Beautiful! ✨
                </p>
              </motion.div>
              
                             <motion.div
                 className="text-4xl mt-6"
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 0.5, delay: 2 }}
               >
                 💖 🎂 ✨
               </motion.div>
               
                                                               {/* Explore Button */}
                                     <motion.button
                     onClick={() => {
                                                                                               // Stop birthday music completely
                         if (audioRef.current) {
                           try {
                             audioRef.current.pause();
                             audioRef.current.currentTime = 0;
                           } catch (error) {
                             console.log('Error stopping birthday audio:', error);
                           }
                         }
                       
                                                                                               // Start instrumental music
                         const timelineAudio = document.querySelector('#timeline audio');
                         if (timelineAudio) {
                           timelineAudio.volume = 0.2;
                           timelineAudio.loop = true;
                           timelineAudio.play().catch(e => {
                             console.log('Timeline music start failed:', e);
                             // Don't throw error, just log it
                           });
                         }
                       
                                                                                               // Reset all states
                         setShowLoveLetter(false);
                         setShowFinalMessage(false);
                         // Don't reset isBirthday - keep it true so timeline stays visible
                         setShowMusicButton(false);
                         setMusicStarted(false);
                         setExploreClicked(true);
                         setButtonClicked(false);
                         setTimerStopped(false);
                       
                                               // Scroll to timeline
                        setTimeout(() => {
                          const timelineSection = document.getElementById('timeline');
                          if (timelineSection) {
                            timelineSection.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }
                        }, 500);
                     }}
                 className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.5, delay: 2.5 }}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Explore Memories ✨
               </motion.button>
             </div>
           </motion.div>
         </motion.div>
       )}
    </section>
  );
};

export default Hero; 