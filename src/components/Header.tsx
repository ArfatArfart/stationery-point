import React from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen, isScrolled }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500 px-4 py-3 md:px-8 lg:px-12 md:py-4 ${
        isScrolled 
          ? 'bg-[#050505] border-b border-white/5 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3 md:gap-5 group cursor-pointer">
          <div className="p-2 md:p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shadow-xl relative overflow-hidden">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <path d="M12 2V15" strokeWidth="1" opacity="0.3" />
              <path d="M12 21L9 17H15L12 21Z" fill="currentColor" />
              <path d="M9 7C7 7 7 10 9 11C11 12 11 15 9 15" />
              <path d="M12 7H14C16 7 16 11 14 11H12" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl brand-title text-white leading-none">
              Stationery Point
            </span>
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-white/80 font-mono mt-1 group-hover:text-white transition-colors">
              Premium Essentials
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 lg:gap-12">
          {['Collections', 'Services', 'Contact', 'About Us'].map((item) => (
            <a 
              key={item} 
              href={item === 'About Us' ? '#about' : `#${item.toLowerCase()}`} 
              className="nav-link relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white/60 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Hamburger Button - Clean & Minimal */}
        <button 
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className="lg:hidden p-2 text-white bg-white/10 rounded-lg cursor-pointer relative z-[9999] pointer-events-auto hover:bg-white/20 transition-colors"
          style={{ touchAction: 'manipulation' }}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
