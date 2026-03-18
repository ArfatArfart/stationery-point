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
      { name: "Premium Pens", icon: <PenTool className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/71DpMoiDPFL.jpg" },
      { name: "Art Pencils", icon: <Pencil className="w-5 h-5" />, img: "https://finearttutorials.com/wp-content/uploads/2020/11/Pencil-art-hero2-1024x768.jpg" },
      { name: "Notebooks", icon: <Book className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/419BYHl+wOL._AC_.jpg" },
      { name: "Highlighters", icon: <Highlighter className="w-5 h-5" />, img: "https://tse1.mm.bing.net/th/id/OIP.GWibB1An_JlOalVRHA1BwwHaHI?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Markers", icon: <Palette className="w-5 h-5" />, img: "https://m.media-amazon.com/images/S/aplus-media/vc/a5612a50-2aa5-470b-8960-a5d0e22ebdde.jpg" },
      { name: "Geometry Boxes", icon: <Compass className="w-5 h-5" />, img: "https://tse4.mm.bing.net/th/id/OIP.PpHhqcIrevjJwqbaiD_yJQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Sketchbooks", icon: <ImageIcon className="w-5 h-5" />, img: "https://i.pinimg.com/originals/73/a7/8c/73a78c5e2fecdf61028574f24d437b66.jpg" },
      { name: "Office Diaries", icon: <BookOpen className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/613o+7CaMPL._AC_.jpg" },
    ]
  },
  {
    title: "Electronics",
    desc: "Tech & Gadgets",
    items: [
      { name: "Data Cables", icon: <Zap className="w-5 h-5" />, img: "https://cdn.shopify.com/s/files/1/0736/9723/1128/files/91086caf-0af3-4951-9470-fccfd605e83e_1694525178650066faa21543788.jpg?v=1694525180 " },
      { name: "Headphones", icon: <Headphones className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/61ko4A9mefL._AC_SL1500_.jpg " },
      { name: "Mobile Chargers", icon: <Battery className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/61ABnZvvmrL._SL1500_.jpg " },
      { name: "Calculators", icon: <Calculator className="w-5 h-5" />, img: "https://i1.adis.ws/i/canon/4299B010_F-718SGA-DBL-Black/4299b010_f-718sga-dbl-black?w=1500&bg=gray95 " },
      { name: "USB Drives", icon: <Usb className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/61Rje75BfpL._AC_SL1500_.jpg " },
      { name: "Power Banks", icon: <Battery className="w-5 h-5" />, img: "https://tse3.mm.bing.net/th/id/OIP.pFg5JLrbgyeTHVObhZtujAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Earphones", icon: <Headphones className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/51CJEbWA8XL._SL1500_.jpg " },
      { name: "Mini Speakers", icon: <Speaker className="w-5 h-5" />, img: "https://th.bing.com/th/id/OIP.g4nT_zW-ctOOxU537azowAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 " },
    ]
  },
  {
    title: "Islamic Frames",
    desc: "Spiritual Wall Art",
    items: [
      { name: "Allah Name Frame", icon: <ImageIcon className="w-5 h-5" />, img: " https://m.media-amazon.com/images/I/81ZrcWvTznL.jpg" },
      { name: "Ayatul Kursi Frame", icon: <ImageIcon className="w-5 h-5" />, img: "https://tse1.mm.bing.net/th/id/OIP.8TSr6UU0w22resrh0ZB0MAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Surah Ikhlas Frame", icon: <ImageIcon className="w-5 h-5" />, img: "https://i.etsystatic.com/21200002/r/il/e1891a/3813311658/il_1588xN.3813311658_sz4b.jpg " },
      { name: "Surah Rahman Frame", icon: <ImageIcon className="w-5 h-5" />, img: "https://media.karousell.com/media/photos/products/2022/10/22/surah_ar_rahman_bronze_mirror__1666420039_33888a2e_progressive " },
      { name: "Bismillah Frame", icon: <ImageIcon className="w-5 h-5" />, img: "https://i.etsystatic.com/14995413/r/il/d085b6/5097614022/il_fullxfull.5097614022_eyaa.jpg " },
      { name: "Masjid Frame", icon: <ImageIcon className="w-5 h-5" />, img: "https://i.pinimg.com/originals/6b/8b/c5/6b8bc52e6cc313d8eaa0fda5a25d2b8a.png " },
      { name: "Kaaba Frame", icon: <ImageIcon className="w-5 h-5" />, img: "https://media.karousell.com/media/photos/products/2022/4/15/golden_kaaba_photo_frame_1649999839_275dfcdd.jpg " },
      { name: "Islamic Calligraphy Frame", icon: <Palette className="w-5 h-5" />, img: "https://www.frameworld.pk/cdn/shop/files/al301672b.jpg?v=1708156237 " },
    ]
  },
  {
    title: "Fragrances",
    desc: "Pure Attar Collection",
    items: [
      { name: "Oud Attar", icon: <Droplets className="w-5 h-5" />, img: "https://tse4.mm.bing.net/th/id/OIP.rKipdSzXstJxDUMJT5uSsgHaI4?w=1500&h=1800&rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Amber Attar", icon: <Droplets className="w-5 h-5" />, img: "https://i.etsystatic.com/46869959/r/il/ccde9b/6821556993/il_1080xN.6821556993_qsi1.jpg " },
      { name: "Rose Attar", icon: <Droplets className="w-5 h-5" />, img: "https://kannaujattar.com/wp-content/uploads/2019/05/Ruh-Gulab-Pure-Rose-Extraxt-Kannauj-Buy-Online.jpg " },
      { name: "Musk Attar", icon: <Droplets className="w-5 h-5" />, img: "https://fimgs.net/images/secundar/o.39419.jpg " },
      { name: "Sandalwood Attar", icon: <Droplets className="w-5 h-5" />, img: "https://www.aranyamperfumes.com/cdn/shop/files/Chandan_Premium_Attar_1.png?v=1732870286&width=2000 " },
      { name: "Jasmine Attar", icon: <Droplets className="w-5 h-5" />, img: "https://tse4.mm.bing.net/th/id/OIP.5rxi4xyd3507oOfvvUxAbwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "White Musk Attar", icon: <Droplets className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/61NLjbF8nmL._SL1080_.jpg " },
      { name: "Oudh Hindi Attar", icon: <Droplets className="w-5 h-5" />, img: "https://cdn11.bigcommerce.com/s-lu1tw1pz/images/stencil/1280x1280/products/105/1743/11B-OudhHindiB__53434.1559173821.jpg?c=2 " },
    ]
  },
  {
    title: "School Supplies",
    desc: "Back to School",
    items: [
      { name: "School Tiffin", icon: <Utensils className="w-5 h-5" />, img: "https://img.freepik.com/premium-photo/school-tiffin-box-back-school-concept_1286302-1982.jpg " },
      { name: "Lunch Boxes", icon: <Coffee className="w-5 h-5" />, img: "https://i.pinimg.com/originals/ab/9c/03/ab9c036dd4eaf42f5966ef03df13378b.jpg " },
      { name: "Water Bottles", icon: <Droplets className="w-5 h-5" />, img: "https://aromatherapynaturals.com/wp-content/uploads/2025/01/best_stylish_water_bottles.jpg " },
      { name: "School Bags", icon: <Backpack className="w-5 h-5" />, img: "https://tse4.mm.bing.net/th/id/OIP.3ItJx9AmG-m6llIju39WYQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "School Uniforms", icon: <Shirt className="w-5 h-5" />, img: "https://5.imimg.com/data5/SELLER/Default/2023/1/QA/TM/KA/61259432/school-kids-tshirt-and-school-uniform-pant-500x500.jpeg " },
      { name: "School Ties", icon: <Tag className="w-5 h-5" />, img: "https://le-cdn.website-editor.net/6e4c37ead3b9423f90cd336fc536d4a6/dms3rep/multi/opt/BT5030BROMFORDS+copy-1920w.jpg " },
      { name: "Pencil Boxes", icon: <Briefcase className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/61wEerkWivL._AC_.jpg " },
      { name: "School Kits", icon: <Award className="w-5 h-5" />, img: "https://tse1.mm.bing.net/th/id/OIP.fTiJseSnLbq1kWgZDg1FfAHaHU?rs=1&pid=ImgDetMain&o=7&rm=3 " },
    ]
  },
  {
    title: "Camping",
    desc: "Outdoor Adventure",
    rentalNote: "Camping Gears Available for Rent",
    items: [
      { name: "Camping Tent", icon: <Tent className="w-5 h-5" />, img: "https://i5.walmartimages.com/asr/e772542a-77d0-469f-8629-1b9dc098bce2.595227e94d4749c0ebc6409b24ad5121.jpeg" },
      { name: "Sleeping Bag", icon: <Wind className="w-5 h-5" />, img: "https://tse4.mm.bing.net/th/id/OIP.V2E-wkLnIqi656aobmr7rwHaHa?w=3024&h=3024&rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Portable Flashlight", icon: <Flashlight className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/81yZQeM4z2L._AC_.jpg " },
      { name: "Camping Gas Stove", icon: <Zap className="w-5 h-5" />, img: "https://tse4.mm.bing.net/th/id/OIP.xTLDmkYjV5PWJLw3bLLD3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Camping Backpack", icon: <Backpack className="w-5 h-5" />, img: "https://i5.walmartimages.com/asr/19c1cbe6-fe61-47e1-bcb1-9a0f12a4d2e5_1.6f49ca0b058b5deb46cc8d300f5e686f.jpeg " },
      { name: "Camping Cook Set", icon: <Utensils className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/61KLUcrFxpL._AC_.jpg " },
      { name: "Portable Lantern", icon: <Lamp className="w-5 h-5" />, img: "https://tse4.mm.bing.net/th/id/OIP.B43AARw4XH_J22AukQaWpwHaEO?rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Multi-Tool Pocket Knife", icon: <Wrench className="w-5 h-5" />, img: "https://tse2.mm.bing.net/th/id/OIP.LSZgxl3X5c49nBZrMxmbdwHaEP?rs=1&pid=ImgDetMain&o=7&rm=3 " },
    ]
  },
  {
    title: "Toys",
    desc: "Fun & Games",
    items: [
      { name: "Kids Toys", icon: <Truck className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/71m3wWCRtEL._AC_SL1500_.jpg" },
      { name: "Electronic Toy Cars", icon: <Gamepad2 className="w-5 h-5" />, img: "https://image.made-in-china.com/2f0j00QbIqrSszbHkB/Wholesale-of-Electric-Toy-Cars-Front-and-Rear-Swing-Function-Double-Door-Design.jpg" },
      { name: "Teddy Bears", icon: <Smile className="w-5 h-5" />, img: "https://tse1.explicit.bing.net/th/id/OIP.mnaCig_hip-9Te9jOhyzoAHaFw?rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Racing Cars", icon: <Car className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/51FLZUEcHXL.jpg " },
      { name: "Balloons", icon: <Wind className="w-5 h-5" />, img: "https://thumbs.dreamstime.com/b/party-helium-balloons-bunch-colorful-birthday-decoration-multicolored-d-rendered-illustration-isolated-black-party-helium-121182907.jpg " },
      { name: "Educational Toys", icon: <BookOpen className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/71mHv9f8GsL._AC_SL1500_.jpg " },
      { name: "Building Toys", icon: <Layers className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/71XMvqoyzsL.jpg " },
      { name: "Creative Learning Toys", icon: <Palette className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/81LnczdAkXL._AC_.jpg " },
    ]
  },
  {
    title: "Gifts",
    desc: "Perfect Gift Ideas",
    items: [
      { name: "Gift Boxes", icon: <Package className="w-5 h-5" />, img: "https://th.bing.com/th/id/OIP.1P0lKxY-L4TKwSt6cc4tqwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Greeting Cards", icon: <StickyNote className="w-5 h-5" />, img: "https://i.etsystatic.com/14087687/r/il/747409/4857878762/il_fullxfull.4857878762_j872.jpg " },
      { name: "Decorative Items", icon: <Star className="w-5 h-5" />, img: "https://ik.imagekit.io/2xkwa8s1i/img/npl_raw_images/2vases/WVASECMVMLGL/WVASECMVMLGL_LS_1.jpg?tr=w-1200 " },
      { name: "Special Occasion Gifts", icon: <Gift className="w-5 h-5" />, img: "https://tse1.mm.bing.net/th/id/OIP.H-_aKclSnmq84PYATqqcBAHaHa?w=500&h=500&rs=1&pid=ImgDetMain&o=7&rm=3 " },
    ]
  },
  {
    title: "Artificial Flowers",
    desc: "Elegant Home Decor",
    items: [
      { name: "Rose Flowers", icon: <Flower className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/71dEnbFkofL.jpg " },
      { name: "Bouquets", icon: <Flower2 className="w-5 h-5" />, img: "https://tse2.mm.bing.net/th/id/OIP.sbakj3EkrHU_jGb1cmYu4gHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Decorative Flower Stems", icon: <Flower className="w-5 h-5" />, img: "https://tse1.mm.bing.net/th/id/OIP.Jh4FHmxLP5xIHZZfaLHFaQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Flower Baskets", icon: <ShoppingBag className="w-5 h-5" />, img: "https://i.pinimg.com/originals/2c/49/dd/2c49dd3c12f59ff6454a753538c2ffe6.jpg " },
      { name: "Artificial Flower Pots", icon: <Flower2 className="w-5 h-5" />, img: "https://m.media-amazon.com/images/I/71kfiHwSjGL._AC_SL1500_.jpg " },
      { name: "Wedding Decoration Flowers", icon: <Heart className="w-5 h-5" />, img: "https://i.pinimg.com/originals/e3/8d/8e/e38d8e8be1bf8ba9e5e60505e8742065.jpg " },
      { name: "Gift Flowers", icon: <Gift className="w-5 h-5" />, img: "https://th.bing.com/th/id/OIP._W30H3Qj6pAVNsubrhI7kQHaHX?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 " },
      { name: "Table Decoration Flowers", icon: <Flower className="w-5 h-5" />, img: "https://th.bing.com/th/id/OIP.jXh7QT77O8z35KcRpOmj8gHaJ1?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 " },
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
