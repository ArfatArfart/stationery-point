import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone, MessageCircle, ArrowRight, User, ExternalLink } from 'lucide-react';

const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-12 md:pt-16 pb-8 md:pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-10 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Stationery Point</h2>
              <p className="text-[11px] md:text-xs font-mono text-white/20 mt-1.5 md:mt-2 uppercase tracking-widest">Premium Essentials & Digital Services</p>
            </div>
            <p className="text-white/50 leading-relaxed text-xs md:text-sm">
              Your one-stop destination for premium stationery, electronics, Islamic items, and professional digital services. We blend quality with convenience.
            </p>
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-white/40 text-[10px] md:text-xs leading-relaxed max-w-[280px]"
              >
                Stay connected with us to get updates about new arrivals, offers, and services.
              </motion.p>
              <div className="flex gap-4 md:gap-4">
                {[
                  { Icon: Instagram, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Facebook, href: "#" },
                  { Icon: WhatsAppIcon, href: "https://chat.whatsapp.com/FdrX6URQBJI6Rvj1qObQ89" }
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target={href.startsWith('http') ? "_blank" : undefined}
                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                    whileHover={{ 
                      y: -5, 
                      color: '#fff', 
                      borderColor: 'rgba(255,255,255,0.4)',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                    }}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 transition-all duration-300"
                  >
                    <Icon size={18} className="md:w-[18px] md:h-[18px]" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4 md:space-y-8"
          >
            <h4 className="text-xs md:text-sm font-mono uppercase tracking-widest text-white">Quick Navigation</h4>
            <ul className="space-y-2.5 md:space-y-4">
              {[
                { label: 'Curated Collections', href: '#collections' },
                { label: 'Digital Services', href: '#services' },
                { label: 'Contact Us', href: '#contact' },
                { label: 'About Our Shop', href: '#about' },
                { label: 'Store Locator', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs md:text-sm">
                    <ArrowRight size={11} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all md:w-3 md:h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:space-y-8"
          >
            <h4 className="text-xs md:text-sm font-mono uppercase tracking-widest text-white">Service Highlights</h4>
            <ul className="space-y-2.5 md:space-y-4">
              {[
                'Aadhaar & PAN Updates',
                'High-Speed Printing',
                'Online Form Filling',
                'Islamic Gift Sets',
                'Premium Fragrances'
              ].map((service) => (
                <li key={service} className="flex items-center gap-2.5 md:gap-3 text-white/50 text-xs md:text-sm">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 md:space-y-8"
          >
            <h4 className="text-xs md:text-sm font-mono uppercase tracking-widest text-white">Visit Our Shop</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex gap-3.5 md:gap-4 text-white/50 text-xs md:text-sm">
                <User size={18} className="shrink-0 text-white/60 md:w-[18px] md:h-[18px]" />
                <div className="flex flex-col">
                  <span>Ishfaq Ahmad Dar</span>
                  <span className="text-[10px] text-white/20 uppercase tracking-tighter">Proprietor</span>
                </div>
              </li>
              <li className="flex gap-3.5 md:gap-4 text-white/50 text-xs md:text-sm">
                <MapPin size={18} className="shrink-0 text-white/60 md:w-[18px] md:h-[18px]" />
                <span>Hardu Suresh Pathpora Khag Road, <br />Budgam, Jammu & Kashmir</span>
              </li>
              <li className="flex gap-3.5 md:gap-4 text-white/50 text-xs md:text-sm">
                <Phone size={18} className="shrink-0 text-white/60 md:w-[18px] md:h-[18px]" />
                <div className="flex flex-col">
                  <a href="tel:+918899191030" className="hover:text-white transition-colors">+91 88991 91030</a>
                  <span className="text-[10px] text-white/20 uppercase tracking-tighter">Call for inquiry</span>
                </div>
              </li>
              <li className="flex gap-3.5 md:gap-4 text-white/50 text-xs md:text-sm">
                <WhatsAppIcon size={18} className="shrink-0 text-white/60 md:w-[18px] md:h-[18px]" />
                <div className="flex flex-col">
                  <a href="https://wa.me/918899191030" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 88991 91030</a>
                  <span className="text-[10px] text-white/20 uppercase tracking-tighter">WhatsApp Support</span>
                </div>
              </li>
              <li className="flex gap-3.5 md:gap-4 text-white/50 text-xs md:text-sm">
                <Mail size={18} className="shrink-0 text-white/60 md:w-[18px] md:h-[18px]" />
                <a href="mailto:iid9697@gmail.com" className="hover:text-white transition-colors">iid9697@gmail.com</a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://maps.app.goo.gl/oN1Xf6hUg1TKbPZP7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
                >
                  Visit Shop on Maps
                  <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-12 md:pt-20 border-t border-white/5 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-16"
          >
            <h4 className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-white mb-4">Shop Hours</h4>
            <div className="space-y-1 md:space-y-2">
              <p className="text-white/60 text-xs md:text-sm font-serif">Sunday – Saturday</p>
              <p className="text-white/80 text-sm md:text-base font-serif font-medium">9:00 AM – 8:00 PM</p>
              <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest font-mono mt-2">Open All Week</p>
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-2 md:gap-3">
            <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono">
              © 2026 Stationery Point
            </p>
            <p className="text-white/20 text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-mono">
              All Rights Reserved
            </p>
            <p className="text-white/10 text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-mono mt-4">
              Website Designed & Developed by Arfat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
