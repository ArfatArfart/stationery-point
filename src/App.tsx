import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'motion/react';

export default function App() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <main className="relative selection:bg-white selection:text-black overflow-x-hidden w-full">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} isScrolled={isScrolled} />
      
      <AnimatePresence>
        {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>

      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-2 md:py-8 px-6 bg-[#050505] relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col items-center mb-6 md:mb-10">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] text-white/20">Creative Essentials</span>
            </div>
            
            <h2 className="text-2xl md:text-5xl font-serif font-medium text-white mb-6 md:mb-10 tracking-tight text-center leading-tight">
              Supporting Your <span className="italic text-white/60">Creative Journey</span>
            </h2>

            <div className="grid md:grid-cols-1 gap-6 md:gap-10 max-w-4xl">
              <p className="text-base md:text-xl font-serif text-white/70 leading-relaxed text-center">
                Stationary Point is more than just a stationery shop — it is a trusted destination for students, professionals, and families. 
                We provide high-quality stationery, school essentials, creative supplies, and everyday digital services all in one place.
              </p>
              <p className="text-sm md:text-lg font-serif text-white/50 leading-relaxed text-center italic">
                Our goal is to make learning, creativity, and daily tasks easier for our community by offering reliable products, 
                friendly service, and a carefully selected range of useful items.
              </p>
            </div>

            <div className="mt-12 md:mt-20 flex flex-col items-center group/owner">
              {/* Owner Label */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-[10px] md:text-xs font-mono uppercase tracking-[0.8em] text-white/30 mb-4"
              >
                Owner
              </motion.span>

              {/* Owner Name */}
              <div className="relative">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight text-center"
                >
                  Ishfaq Ahmad Dar
                </motion.h3>
              </div>

              {/* Animated Divider Corrected */}
              <div className="flex flex-col items-center justify-center w-full mt-6 md:mt-8">
                <div className="relative flex items-center justify-center w-[280px]">
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-[#C0C0C0]/40 to-transparent relative"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Smooth background gradient instead of patchy glow */}
        <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] to-transparent opacity-40 pointer-events-none" />
      </section>

      {/* Section Transition Divider removed for cleaner look */}

      <div id="collections" className="relative z-10">
        <Categories />
      </div>

      <div id="contact" className="relative z-10">
        <Footer />
      </div>

      {/* Global Background Noise/Grain */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
