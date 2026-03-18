import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const products = [
  {
    id: 'pen',
    name: 'Premium Fountain Pen',
    description: 'Elegant writing instrument with a smooth-flow nib and ergonomic grip. Crafted for those who value the art of writing.',
    color: '#1a1a1a',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pencil',
    name: 'Artistic Graphite Pencil',
    description: 'High-quality graphite core for precise sketching and smooth shading. The perfect companion for every artist.',
    color: '#eab308',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'book',
    name: 'Hardcover Journal',
    description: 'Premium acid-free paper wrapped in a durable, textured hardcover. Capture your thoughts in style.',
    color: '#991b1b',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ruler',
    name: 'Precision Steel Ruler',
    description: 'Laser-etched markings on high-grade stainless steel for absolute accuracy. A tool built for a lifetime.',
    color: '#71717a',
    image: 'https://images.unsplash.com/photo-1586075010633-24701bd6e8b7?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Container */}
          <div className="w-full md:w-1/2 aspect-square rounded-3xl relative overflow-hidden group bg-white/5 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.name}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Featured Item</p>
                <h3 className="text-xl font-serif text-white">{activeProduct.name}</h3>
              </div>
            </div>
          </div>

          {/* Product Info & Selector */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white/40">Product Showcase</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-6">
                Crafted for <br />
                <span className="italic text-white/70">Perfection</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                {activeProduct.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product)}
                  className={cn(
                    "p-6 rounded-2xl text-left transition-all duration-300 border",
                    activeProduct.id === product.id 
                      ? "bg-white/10 border-white/20 scale-[1.02]" 
                      : "bg-white/5 border-transparent hover:bg-white/10"
                  )}
                >
                  <div 
                    className="w-8 h-8 rounded-full mb-4 shadow-lg" 
                    style={{ backgroundColor: product.color }}
                  />
                  <span className="block text-sm font-medium text-white">{product.name}</span>
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide hover:bg-white/90 transition-colors"
            >
              Explore Collection
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
