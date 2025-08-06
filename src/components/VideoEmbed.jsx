import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import YouTube from 'react-youtube';
import Modal from 'react-modal';

const VideoEmbed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // You can replace this with your actual YouTube video ID
  const videoId = process.env.REACT_APP_YOUTUBE_VIDEO_ID || 'qblC-P_N7r8'; // Kanika's birthday video
  
  const openModal = () => {
    // Stop instrumental music when video is clicked
    const timelineAudio = document.querySelector('#timeline audio');
    if (timelineAudio) {
      try {
        timelineAudio.pause();
        timelineAudio.currentTime = 0;
      } catch (error) {
        console.log('Error stopping timeline audio:', error);
      }
    }
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <section id="video" className="py-20 bg-birthday-peach">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-script text-4xl md:text-6xl text-pink-600 mb-4">
            A Special Message
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Click the thumbnail below to watch a heartfelt birthday message just for you!
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
            onClick={openModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Thumbnail */}
            <div className="relative">
                             <img
                 src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                 alt="Birthday Video Thumbnail"
                 className="w-full h-64 md:h-80 object-cover"
                 onError={(e) => {
                   e.target.src = "https://via.placeholder.com/800x450/FFE5F1/FF69B4?text=Birthday+Video";
                 }}
               />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-8 h-8 text-pink-600 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Video info */}
            <div className="bg-white p-6">
              <h3 className="font-script text-2xl text-pink-600 mb-2">
                Happy Birthday Kanika! 🎂
              </h3>
              <p className="text-gray-600">
                A special message filled with love, memories, and wishes for your 21st birthday.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="fixed inset-4 md:inset-20 bg-white rounded-2xl overflow-hidden"
          overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm"
          contentLabel="Birthday Video"
        >
          <div className="relative w-full h-full">
            {/* Close button */}
            <motion.button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* YouTube player */}
            <div className="w-full h-full">
              <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onReady}
                className="w-full h-full"
              />
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default VideoEmbed; 