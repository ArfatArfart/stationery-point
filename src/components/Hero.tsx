import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effect for background
  const yParallax = useTransform(scrollY, [0, 1000], [0, 100]);
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const yParallaxSmooth = useSpring(yParallax, springConfig);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image with Parallax and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images3.alphacoders.com/114/1141294.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: yParallaxSmooth
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 will-change-transform"
        />
        {/* Bottom Gradient Overlay */}
        <div 
          className="absolute inset-0 z-[1]" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.95) 100%)' 
          }} 
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center px-2 text-center w-full max-w-full">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mb-1 md:mb-2"
          >
            <span className="text-[9px] md:text-xs font-sans tracking-[0.8em] uppercase text-white/70 font-medium block">
              WELCOME TO
            </span>
          </motion.div>
          
          {/* Main Title - ONE LINE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="w-full will-change-transform"
          >
            <h1 
              className="text-[clamp(42px,12vw,64px)] md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white leading-[1.05] md:leading-none text-center whitespace-nowrap mx-auto w-full max-w-full px-2"
              style={{ letterSpacing: '-1px' }}
            >
              Stationery Point
            </h1>
          </motion.div>

            {/* Name Text & Underline */}
          <div className="flex flex-col items-center mt-3 md:mt-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            >
              <span className="text-[9px] md:text-xs font-sans tracking-[0.6em] uppercase text-white/70 font-medium block [font-variant:small-caps]">
                HARDU SURESH KHAG
              </span>
            </motion.div>
            
            {/* Animated Underline - Exact Copy of Owner Section Style */}
            <div className="flex flex-col items-center justify-center w-full mt-4">
              <div className="relative flex items-center justify-center w-[120px] md:w-[180px]">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: "circOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent relative shadow-[0_0_8px_rgba(255,255,255,0.3)] will-change-[width,opacity]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/30">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" 
          />
        </motion.div>
      </div>
    </section>
  );
}
