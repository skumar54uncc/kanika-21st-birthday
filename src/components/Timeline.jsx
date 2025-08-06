import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [hasShownAllPhotos, setHasShownAllPhotos] = useState(false);
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  const scrollContainerRef = useRef(null);

  const instrumentalAudioRef = useRef(null);

  // Photo slideshow data - all 20 images with consistent .jpg format
  const photos = [
    { 
      id: 1, 
      src: "/images/slideshow/kanika-01.jpg", 
      caption: "Beautiful memories with you",
      alt: "Kanika smiling"
    },
    { 
      id: 2, 
      src: "/images/slideshow/kanika-02.jpg", 
      caption: "Your infectious laughter",
      alt: "Kanika laughing"
    },
    { 
      id: 3, 
      src: "/images/slideshow/kanika-03.jpg", 
      caption: "Adventures together",
      alt: "Kanika on adventure"
    },
    { 
      id: 4, 
      src: "/images/slideshow/kanika-04.jpg", 
      caption: "Special moments captured",
      alt: "Kanika special moment"
    },
    { 
      id: 5, 
      src: "/images/slideshow/kanika-05.jpg", 
      caption: "Your beautiful smile",
      alt: "Kanika beautiful smile"
    },
    { 
      id: 6, 
      src: "/images/slideshow/kanika-06.jpg", 
      caption: "Friendship and fun",
      alt: "Kanika with friends"
    },
    { 
      id: 7, 
      src: "/images/slideshow/kanika-07.jpg", 
      caption: "Growing up beautifully",
      alt: "Kanika growing up"
    },
    { 
      id: 8, 
      src: "/images/slideshow/kanika-08.jpg", 
      caption: "Your journey to 21",
      alt: "Kanika journey"
    },
    { 
      id: 9, 
      src: "/images/slideshow/kanika-09.jpg", 
      caption: "Memories to cherish",
      alt: "Kanika memories"
    },
    { 
      id: 10, 
      src: "/images/slideshow/kanika-10.jpg", 
      caption: "Happy birthday, beautiful!",
      alt: "Kanika birthday"
    },
    { 
      id: 11, 
      src: "/images/slideshow/kanika-11.jpg", 
      caption: "Special moments together",
      alt: "Kanika special moments"
    },
    { 
      id: 12, 
      src: "/images/slideshow/kanika-12.jpg", 
      caption: "Beautiful memories",
      alt: "Kanika beautiful memories"
    },
    { 
      id: 13, 
      src: "/images/slideshow/kanika-13.jpg", 
      caption: "Your amazing journey",
      alt: "Kanika amazing journey"
    },
    { 
      id: 14, 
      src: "/images/slideshow/kanika-14.jpg", 
      caption: "Precious moments",
      alt: "Kanika precious moments"
    },
    { 
      id: 15, 
      src: "/images/slideshow/kanika-15.jpg", 
      caption: "Growing up beautifully",
      alt: "Kanika growing up"
    },
    { 
      id: 16, 
      src: "/images/slideshow/kanika-16.jpg", 
      caption: "Your journey to 21",
      alt: "Kanika journey"
    },
    { 
      id: 17, 
      src: "/images/slideshow/kanika-17.jpg", 
      caption: "Memories to cherish",
      alt: "Kanika memories"
    },
    { 
      id: 18, 
      src: "/images/slideshow/kanika-18.jpg", 
      caption: "Special moments together",
      alt: "Kanika special moments"
    },
    { 
      id: 19, 
      src: "/images/slideshow/kanika-19.jpg", 
      caption: "Beautiful memories",
      alt: "Kanika beautiful memories"
    },
    { 
      id: 20, 
      src: "/images/slideshow/kanika-20.jpg", 
      caption: "Happy birthday, beautiful!",
      alt: "Kanika birthday celebration"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => {
        const nextIndex = (prev + 1) % photos.length;
        
        // Check if we've completed a full cycle (shown all photos)
        if (nextIndex === 0 && !hasShownAllPhotos) {
          setHasShownAllPhotos(true);
          
          // Stop auto-play only (keep instrumental music playing)
          setIsAutoPlaying(false);
          
          // Show special message after a delay
          setTimeout(() => {
            setShowSpecialMessage(true);
            
            // Scroll to special message
            setTimeout(() => {
              const specialMessageSection = document.getElementById('special-message');
              if (specialMessageSection) {
                try {
                  specialMessageSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                } catch (error) {
                  console.log('Error scrolling to special message:', error);
                }
              }
            }, 1000);
          }, 2000);
        }
        
        return nextIndex;
      });
    }, 4000); // Change photo every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, photos.length, hasShownAllPhotos]);







  const goToPrevious = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? photos.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    setIsAutoPlaying(false);
  };

  const goToPhoto = (index) => {
    setCurrentPhotoIndex(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <section id="timeline" className="py-20 bg-birthday-lavender">


      {/* Hidden audio element for instrumental music */}
      <audio
        ref={instrumentalAudioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="/audio/timeline-instrumental.mp3" type="audio/mpeg" />
        <source src="/audio/timeline-instrumental.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-script text-4xl md:text-6xl text-pink-600 mb-4">
            Beautiful Memories
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A collection of precious moments and beautiful memories of Kanika's journey to 21.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
                     {/* Main Photo Display */}
           <motion.div
             className="relative rounded-2xl overflow-hidden"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
           >
                         {/* Photo */}
                           <div
                key={currentPhotoIndex}
                className="relative aspect-square w-full max-w-2xl mx-auto"
              >
               
                                             <img
                  src={photos[currentPhotoIndex].src}
                  alt={photos[currentPhotoIndex].alt}
                  className="w-full h-full object-cover object-center"
                                     onError={(e) => {
                     e.target.src = "https://via.placeholder.com/800x500/FFE5F1/FF69B4?text=Kanika's+Photo";
                   }}
                />
              
              {/* Overlay with caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <motion.p
                  key={currentPhotoIndex}
                  className="text-white text-lg md:text-xl font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {photos[currentPhotoIndex].caption}
                </motion.p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

                                       {/* Play/Pause Button */}
              <motion.button
                onClick={() => {
                  setIsAutoPlaying(!isAutoPlaying);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
               {isAutoPlaying ? (
                 <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                 </svg>
               ) : (
                 <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M8 5v14l11-7z"/>
                 </svg>
               )}
             </motion.button>

             
          </motion.div>

          {/* Photo Thumbnails */}
          <div className="mt-8">
            <div className="flex justify-center gap-2 overflow-x-auto pb-4">
              {photos.map((photo, index) => (
                <motion.button
                  key={photo.id}
                  onClick={() => goToPhoto(index)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentPhotoIndex 
                      ? 'border-pink-500 scale-110' 
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/80x80/FFE5F1/FF69B4?text=K";
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Photo Counter */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-600 text-sm">
              Photo {currentPhotoIndex + 1} of {photos.length}
            </p>
          </motion.div>
        </div>

                 <motion.div
           className="text-center mt-8"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
         >
           <p className="text-gray-600 text-sm">
             Click arrows to navigate • Auto-play can be paused
           </p>
         </motion.div>
       </div>

       {/* Special Message Section */}
       {showSpecialMessage && (
         <motion.div
           id="special-message"
           className="mt-20 text-center"
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
         >
           <motion.div
             className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl"
             initial={{ scale: 0.8 }}
             animate={{ scale: 1 }}
             transition={{ duration: 0.8, delay: 0.5 }}
           >
             <motion.div
               className="text-6xl mb-6"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.5, delay: 1 }}
             >
               🎬 ✨
             </motion.div>
             
             <motion.h2
               className="font-script text-3xl md:text-5xl text-pink-600 mb-6"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 1.2 }}
             >
               A Special Message for You 💖
             </motion.h2>
             
             <motion.div
               className="text-gray-700 leading-relaxed space-y-4 text-lg md:text-xl"
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 1.5 }}
             >
               <p>
                 Thank you for taking this beautiful journey through your memories. 
                 Each photo tells a story of your amazing journey to 21.
               </p>
               
               <p>
                 Now, get ready for a special surprise that was created just for you...
               </p>
               
               <p className="font-script text-2xl text-pink-600 mt-6">
                 Scroll down to watch your special video! 🎥
               </p>
             </motion.div>
             
             <motion.div
               className="text-4xl mt-6"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.5, delay: 2 }}
             >
               🎬 🎥 ✨
             </motion.div>
           </motion.div>
         </motion.div>
       )}
     </section>
   );
 };

export default Timeline; 