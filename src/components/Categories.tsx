import React from 'react';
import { motion } from 'motion/react';
import { 
  PenTool, 
  Book, 
  Pencil, 
  Headphones, 
  Smartphone, 
  Zap, 
  Heart, 
  Star, 
  Printer, 
  Copy, 
  FileText, 
  Wind,
  Layers,
  Palette,
  Highlighter,
  Compass,
  Image as ImageIcon,
  BookOpen,
  Speaker,
  Usb,
  Battery,
  Calculator,
  Moon,
  Droplets,
  Gift,
  User,
  Award,
  UserCheck,
  CreditCard,
  Globe,
  DollarSign,
  Ticket,
  Scan,
  Trophy,
  Smile,
  Scissors,
  Brush,
  Backpack,
  Utensils,
  Coffee,
  Shirt,
  Briefcase,
  Lamp,
  Flashlight,
  Shield,
  Wrench,
  Tent,
  Truck,
  Car,
  Flower,
  Flower2,
  Gamepad2,
  StickyNote,
  Package,
  ShoppingBag,
  Tag,
  GraduationCap,
  ClipboardCheck,
  Bus,
  Train,
  Plane,
  FileSearch,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  {
    title: "Stationery Items",
    desc: "Creative Essentials",
    items: [
      { name: "Premium Pens", icon: <PenTool className="w-5 h-5" />, img: "/stationery-point/s/spen1.jpg" },
      { name: "Art Pencils", icon: <Pencil className="w-5 h-5" />, img: "/stationery-point/s/sart1.jpg" },
      { name: "Notebooks", icon: <Book className="w-5 h-5" />, img: "/stationery-point/s/snote1.jpg" },
      { name: "Highlighters", icon: <Highlighter className="w-5 h-5" />, img: "/stationery-point/s/shigh1.jpg" },
      { name: "Markers", icon: <Palette className="w-5 h-5" />, img: "/stationery-point/s/smark1.jpg" },
      { name: "Geometry Boxes", icon: <Compass className="w-5 h-5" />, img: "/stationery-point/s/sgeom1.jpg" },
      { name: "Sketchbooks", icon: <ImageIcon className="w-5 h-5" />, img: "/stationery-point/s/ssket1.jpg" },
      { name: "Office Diaries", icon: <BookOpen className="w-5 h-5" />, img: "/stationery-point/s/sdiar1.jpg" },
    ]
  },
  {
    title: "Electronics",
    desc: "Tech & Gadgets",
    items: [
      { name: "Data Cables", icon: <Zap className="w-5 h-5" />, img: "/stationery-point/e/edata2.jpg " },
      { name: "Headphones", icon: <Headphones className="w-5 h-5" />, img: "/stationery-point/e/ehead2.jpg " },
      { name: "Mobile Chargers", icon: <Battery className="w-5 h-5" />, img: "/stationery-point/e/emob2.jpg " },
      { name: "Calculators", icon: <Calculator className="w-5 h-5" />, img: "/stationery-point/e/ecal2.jpg" },
      { name: "USB Drives", icon: <Usb className="w-5 h-5" />, img: "/stationery-point/e/eusb2.jpg " },
      { name: "Power Banks", icon: <Battery className="w-5 h-5" />, img: "/stationery-point/e/epow2.jpg " },
      { name: "Earphones", icon: <Headphones className="w-5 h-5" />, img: "/stationery-point/e/eear2.jpg " },
      { name: "Mini Speakers", icon: <Speaker className="w-5 h-5" />, img: "/stationery-point/e/espe2.jpg " },
    ]
  },
  {
    title: "Islamic Frames",
    desc: "Spiritual Wall Art",
    items: [
      { name: "Allah Name Frame", icon: <ImageIcon className="w-5 h-5" />, img: "/stationery-point/islamic/aall3.jpg " },
      { name: "Ayatul Kursi Frame", icon: <ImageIcon className="w-5 h-5" />, img: "/stationery-point/islamic/iaya3.jpg" },
      { name: "Surah Ikhlas Frame", icon: <ImageIcon className="w-5 h-5" />, img: "/stationery-point/islamic/isur3.jpg " },
      { name: "Surah Rahman Frame", icon: <ImageIcon className="w-5 h-5" />, img: " /stationery-point/islamic/isura3.jpg" },
      { name: "Bismillah Frame", icon: <ImageIcon className="w-5 h-5" />, img: "/stationery-point/islamic/ibis3.jpg" },
      { name: "Masjid Frame", icon: <ImageIcon className="w-5 h-5" />, img: "/stationery-point/islamic/imasj3.jpg" },
      { name: "Kaaba Frame", icon: <ImageIcon className="w-5 h-5" />, img: "/stationery-point/islamic/ikaba3.jpg " },
      { name: "Islamic Calligraphy Frame", icon: <Palette className="w-5 h-5" />, img: "/stationery-point/islamic/iis3.jpg " },
    ]
  },
  {
    title: "Fragrances",
    desc: "Pure Attar Collection",
    items: [
      { name: "Oud Attar", icon: <Droplets className="w-5 h-5" />, img: "/stationery-point/fragrances/oud.jpg " },
      { name: "Amber Attar", icon: <Droplets className="w-5 h-5" />, img: "/stationery-point/fragrances/amb.jpg " },
      { name: "Rose Attar", icon: <Droplets className="w-5 h-5" />, img: "/stationery-point/fragrances/ros.jpg " },
      { name: "Musk Attar", icon: <Droplets className="w-5 h-5" />, img: "/stationery-point/fragrances/mus.jpg " },
      { name: "Sandalwood Attar", icon: <Droplets className="w-5 h-5" />, img: "/stationery-point/fragrances/san.jpg " },
      { name: "Jasmine Attar", icon: <Droplets className="w-5 h-5" />, img: "/stationery-point/fragrances/jas.jpg " },
      { name: "White Musk Attar", icon: <Droplets className="w-5 h-5" />, img: "/stationery-point/fragrances/whi.jpg " },
      { name: "Oudh Hindi Attar", icon: <Droplets className="w-5 h-5" />, img: "/stationery-point/fragrances/oudh.jpg " },
    ]
  },
  {
    title: "School Supplies",
    desc: "Back to School",
    items: [
      { name: "School Tiffin", icon: <Utensils className="w-5 h-5" />, img: "/stationery-point/school/tif.jpg " },
      { name: "Lunch Boxes", icon: <Coffee className="w-5 h-5" />, img: " /stationery-point/school/lun.jpg " },
      { name: "Water Bottles", icon: <Droplets className="w-5 h-5" />, img: "/stationery-point/school/water.jpg " },
      { name: "School Bags", icon: <Backpack className="w-5 h-5" />, img: "/stationery-point/school/bag.jpg " },
      { name: "School Uniforms", icon: <Shirt className="w-5 h-5" />, img: "/stationery-point/school/uni.jpg " },
      { name: "School Ties", icon: <Tag className="w-5 h-5" />, img: "/stationery-point/school/tie.jpg " },
      { name: "penil Bocxes", icon: <Briefcase className="w-5 h-5" />, img: "/stationery-point/school/pen.jpg " },
      { name: "School Kits", icon: <Award className="w-5 h-5" />, img: "/stationery-point/school/kit.jpg " },
    ]
  },
  {
    title: "Camping",
    desc: "Outdoor Adventure",
    rentalNote: "Camping Gears Available for Rent",
    items: [
      { name: "Camping Tent", icon: <Tent className="w-5 h-5" />, img: "/stationery-point/camping/tent.jpg " },
      { name: "Sleeping Bag", icon: <Wind className="w-5 h-5" />, img: "/stationery-point/camping/sle.jpg " },
      { name: "Portable Flashlight", icon: <Flashlight className="w-5 h-5" />, img: "/stationery-point/camping/pro.jpg " },
      { name: "Camping Gas Stove", icon: <Zap className="w-5 h-5" />, img: "/stationery-point/camping/gas.jpg " },
      { name: "Camping Backpack", icon: <Backpack className="w-5 h-5" />, img: "/stationery-point/camping/bac.jpg " },
      { name: "Camping Cook Set", icon: <Utensils className="w-5 h-5" />, img: "/stationery-point/camping/cook.jpg " },
      { name: "Portable Lantern", icon: <Lamp className="w-5 h-5" />, img: "/stationery-point/camping/prot.jpg " },
      { name: "Multi-Tool Pocket Knife", icon: <Wrench className="w-5 h-5" />, img: "/stationery-point/camping/too.jpg" },
    ]
  },
  {
    title: "Toys",
    desc: "Fun & Games",
    items: [
      { name: "Kids Toys", icon: <Truck className="w-5 h-5" />, img: "/stationery-point/toys/kid.jpg " },
      { name: "Electronic Toy Cars", icon: <Gamepad2 className="w-5 h-5" />, img: "/stationery-point/toys/ele.jpg " },
      { name: "Teddy Bears", icon: <Smile className="w-5 h-5" />, img: "/stationery-point/toys/ted.jpg " },
      { name: "Racing Cars", icon: <Car className="w-5 h-5" />, img: "/stationery-point/toys/rac.jpg " },
      { name: "Balloons", icon: <Wind className="w-5 h-5" />, img: "/stationery-point/toys/bal.jpg " },
      { name: "Educational Toys", icon: <BookOpen className="w-5 h-5" />, img: "/stationery-point/toys/edu.jpg " },
      { name: "Building Toys", icon: <Layers className="w-5 h-5" />, img: "/stationery-point/toys/bui.jpg " },
      { name: "Creative Learning Toys", icon: <Palette className="w-5 h-5" />, img: "/stationery-point/toys/cre.jpg " },
    ]
  },
  {
    title: "Gifts",
    desc: "Perfect Gift Ideas",
    items: [
      { name: "Gift Boxes", icon: <Package className="w-5 h-5" />, img: "/stationery-point/gift/gif.jpg " },
      { name: "Greeting Cards", icon: <StickyNote className="w-5 h-5" />, img: "/stationery-point/gift/gre.jpg " },
      { name: "Decorative Items", icon: <Star className="w-5 h-5" />, img: "/stationery-point/gift/dec.jpg" },
      { name: "Special Gifts", icon: <Gift className="w-5 h-5" />, img: "/stationery-point/gift/spi.jpg " },
    ]
  },
  {
    title: "Artificial Flowers",
    desc: "Elegant Home Decor",
    items: [
      { name: "Rose Flowers", icon: <Flower className="w-5 h-5" />, img: "/stationery-point/artificial/ros.jpg " },
      { name: "Bouquets", icon: <Flower2 className="w-5 h-5" />, img: "/stationery-point/artificial/bou.jpg " },
      { name: "Decorative Flower Stems", icon: <Flower className="w-5 h-5" />, img: "/stationery-point/artificial/dec.jpg" },
      { name: "Flower Baskets", icon: <ShoppingBag className="w-5 h-5" />, img: "/stationery-point/artificial/flo.jpg " },
      { name: "Artificial Flower Pots", icon: <Flower2 className="w-5 h-5" />, img: "/stationery-point/artificial/art.jpg " },
      { name: "Wedding Decoration Flowers", icon: <Heart className="w-5 h-5" />, img: "/stationery-point/artificial/wed.jpg " },
      { name: "Gift Flowers", icon: <Gift className="w-5 h-5" />, img: "/stationery-point/artificial/gif.jpg " },
      { name: "Table Decoration Flowers", icon: <Flower className="w-5 h-5" />, img: "/stationery-point/artificial/tab.jpg " },
    ]
  },
  {
  title: "Sports",
  desc: "Feel The Enargy",
  items: [
    { name: "Football", icon: <Car className="w-5 h-5" />, img: "/stationery-point/sports/foo.jpg" },
    { name: "Volleyball", icon: <Star className="w-5 h-5" />, img: "/stationery-point/sports/vol.jpg"},
    { name: "Volleyball Net", icon: <Star classNmae="w-5 h-5" />, img: "/stationery-point/sports/net.jpg"},
    { name: "Circket Bat", icon: <Star className="w-5 h-" />, img: "/stationery-point/sports/cir.jpg"},
    { name: "Red Ball", icon: <Star className="w-5 h-5" />, img: "/stationery-point/sports/red.jpg"},
    { name: "White Ball", icon: <Star className="w-5 h-5" />, img: "/stationery-point/sports/whi.jpg"},
    { name: "Plastic Ball", icon: <Star className="w-5 h-5" />, img: "/stationery-point/sports/pla.jpg" },
    { name: "Volleyball Pump", icon: <Star className="w-5 h-5" />, img: "/stationery-point/sports/pum.jpg"},
  ]
 }
];

const services = [
  { name: "Online Form Filling", icon: <FileText />, desc: "Expert help with all online applications." },
  { name: "Driving License Applications", icon: <CreditCard />, desc: "New applications and renewals." },
  { name: "Airline Ticket Booking", icon: <Plane />, desc: "Hassle-free domestic & international travel." },
  { name: "Scholarship Applications", icon: <GraduationCap />, desc: "Assistance for students." },
  { name: "Government Scheme Registrations", icon: <Briefcase />, desc: "Register for various welfare schemes." },
  { name: "Document Printing & Photocopy", icon: <Printer />, desc: "High-quality prints and photocopies." },
  { name: "Online Exam Registrations", icon: <ClipboardCheck />, desc: "Fast and accurate digital submissions." },
  { name: "PAN Card Assistance", icon: <UserCheck />, desc: "New applications and corrections." },
  { name: "E-District Applications", icon: <Globe />, desc: "State government portal services." },
  { name: "Job Form Applications", icon: <FileSearch />, desc: "Stay updated with latest job openings." },
  { name: "Online Payments & Registrations", icon: <DollarSign />, desc: "Secure and fast digital transactions." },
  { name: "Passport Application Assistance", icon: <Globe />, desc: "New passport and renewal guidance." },
  { name: "Income & Caste Certificates", icon: <FileText />, desc: "Official document processing help." },
  { name: "Aadhaar Card Printing", icon: <User />, desc: "High-quality PVC card printing." },
  { name: "Utility Bill Payments", icon: <CreditCard />, desc: "Electricity, water, and gas bills." },
  { name: "Voter ID Services", icon: <UserCheck />, desc: "New registration and corrections." },
  { name: "Exam Form Applications", icon: <ClipboardCheck />, desc: "School and college exam forms." },
  { name: "Document Scanning", icon: <Scan />, desc: "High-resolution digital scanning." }
];

export default function Categories() {
  return (
    <section className="py-6 md:py-10 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] text-white/30"
          >
            Curated Collections
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-6xl font-serif font-bold text-white mt-4"
          >
            Beyond Just <span className="italic text-white/60">Paper</span>
          </motion.h2>
        </div>

        <div className="space-y-6 md:space-y-10">
          {categories.map((cat, idx) => (
            <div key={cat.title} className="space-y-4 md:space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="flex items-baseline justify-between border-b border-white/5 pb-4 mb-6"
              >
                <div className="space-y-1">
                  <h3 className="text-xl md:text-3xl font-serif text-white/90">{cat.title}</h3>
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[10px] md:text-xs font-mono text-white/30 uppercase tracking-[0.2em]"
                  >
                    {cat.desc}
                  </motion.p>
                  {cat.rentalNote && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-[9px] md:text-[11px] font-mono text-white/50 uppercase tracking-[0.15em] mt-1"
                    >
                      {cat.rentalNote}
                    </motion.p>
                  )}
                </div>
                <span className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase">Collection 0{idx + 1}</span>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: (i % 4) * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden card-premium shadow-2xl hover:shadow-white/10 will-change-transform"
                  >
                    <img 
                      src={item.img} 
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    {/* Subtle bottom gradient for text legibility without darkening the whole image */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity duration-500" />
                    
                    {/* Subtle Glow Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-gradient from-white/10 to-transparent pointer-events-none" />

                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      <div className="flex items-center gap-2 md:gap-3 text-white/40 mb-2 md:mb-3 group-hover:text-white/80 transition-colors duration-500">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500"
                        >
                          {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 14 })}
                        </motion.div>
                        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-mono">Premium</span>
                      </div>
                      <h4 className="text-sm md:text-2xl font-serif font-medium text-white leading-tight">{item.name}</h4>
                      
                      {/* Animated Underline */}
                      <div className="mt-2 md:mt-4 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-white/40 to-transparent transition-all duration-1000 ease-in-out" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div id="services" className="mt-10 md:mt-20 pt-6 md:pt-12 border-t border-white/10">
          <div className="mb-6 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)" }}
                className="inline-block px-[18px] py-[10px] rounded-[50px] bg-white/5 border border-white/15 backdrop-blur-[8px] transition-all duration-300 cursor-default"
              >
                <span className="text-[12px] font-mono uppercase tracking-[2px] text-white font-semibold">CSC Services</span>
              </motion.div>
              <h3 className="text-2xl md:text-4xl font-serif text-white">Digital & Online <span className="italic text-white/60">Services</span></h3>
              <p className="text-white/40 text-xs md:text-sm max-w-2xl font-serif">Professional assistance for all your digital documentation and online application needs.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: (i % 4) * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -5 }}
                className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center text-white/80 border border-white/10 group-hover:bg-white/20 group-hover:border-white/20 transition-all mb-3 md:mb-4 [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5">
                  {service.icon}
                </div>
                <h4 className="text-xs md:text-base font-serif text-white mb-1 md:mb-1 group-hover:text-white transition-colors">{service.name}</h4>
                <p className="text-[10px] md:text-[11px] text-white/40 leading-tight md:leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.desc}
                </p>
                
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-gradient from-white/[0.03] to-transparent pointer-events-none rounded-inherit" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
