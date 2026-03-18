import React from 'react';
import { motion } from 'motion/react';

interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ setIsOpen }) => {
  const menuItems = [
    { name: 'Collections', id: 'collections' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
    { name: 'About Us', id: 'about' },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/60 z-[90] pointer-events-auto"
        onClick={() => setIsOpen(false)}
      />

      {/* Menu */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-[80%] bg-[#050505] z-[100] shadow-2xl flex flex-col p-8 pointer-events-auto"
      >
        <div className="flex flex-col gap-8 mt-16">
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => handleItemClick(item.id)}
              className="text-3xl font-serif text-white text-left border-b border-white/10 pb-4 hover:text-white/70 transition-colors cursor-pointer"
              style={{ touchAction: 'manipulation' }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
