import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface EntranceDoorProps {
  onOpen: () => void;
}

// Elegant, luxurious golden leaf (feuille d'or) cascading downwards from the top-right corner
const GoldenLeafCorner = ({ className }: { className?: string }) => (
  <svg className={`absolute w-16 h-28 sm:w-20 sm:h-36 md:w-24 md:h-44 pointer-events-none z-40 ${className}`} viewBox="0 0 100 160" fill="none">
    {/* Delicate fine outer borders near the corner */}
    <path d="M 100 4 L 60 4" stroke="url(#gold-grad-door)" strokeWidth="1.0" opacity="0.8" />
    <path d="M 96 0 L 96 40" stroke="url(#gold-grad-door)" strokeWidth="1.0" opacity="0.8" />
    <path d="M 100 9 L 75 9" stroke="url(#gold-grad-door)" strokeWidth="0.6" opacity="0.4" />
    <path d="M 91 0 L 91 50" stroke="url(#gold-grad-door)" strokeWidth="0.6" opacity="0.4" />

    {/* Sinuous, elegant main stem curving down-left */}
    <path d="M 96 0 Q 80 60, 40 130" stroke="url(#gold-grad-door)" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
    <path d="M 96 0 Q 80 60, 40 130" stroke="#fff" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />

    {/* Exquisite small golden leaves cascading down */}
    {/* Leaf 1 (upper) */}
    <path d="M 90 12 C 78 18, 65 30, 60 42 C 70 38, 85 28, 90 12 Z" fill="url(#gold-grad-door)" opacity="0.95" />
    <path d="M 90 12 Q 75 25, 60 42" stroke="#fff" strokeWidth="0.4" opacity="0.4" />

    {/* Leaf 2 (mid) */}
    <path d="M 80 45 C 65 52, 52 70, 48 85 C 58 78, 74 65, 80 45 Z" fill="url(#gold-grad-door)" opacity="0.9" />
    <path d="M 80 45 Q 64 61, 48 85" stroke="#fff" strokeWidth="0.4" opacity="0.4" />

    {/* Leaf 3 (lower) */}
    <path d="M 66 82 C 50 90, 42 110, 38 122 C 46 115, 60 102, 66 82 Z" fill="url(#gold-grad-door)" opacity="0.85" />
    <path d="M 66 82 Q 52 98, 38 122" stroke="#fff" strokeWidth="0.4" opacity="0.4" />

    {/* Secondary small decorative leaves branching out right/down */}
    <path d="M 97 8 C 99 22, 94 36, 88 42 C 92 28, 96 16, 97 8 Z" fill="url(#gold-grad-door)" opacity="0.8" />
    <path d="M 86 48 C 88 64, 82 78, 74 84 C 79 70, 84 56, 86 48 Z" fill="url(#gold-grad-door)" opacity="0.8" />
    <path d="M 72 88 C 74 102, 68 114, 61 120 C 65 108, 70 96, 72 88 Z" fill="url(#gold-grad-door)" opacity="0.75" />

    {/* Fine accent organic tendril scroll */}
    <path d="M 96 4 Q 72 32, 80 52" stroke="url(#gold-grad-door)" strokeWidth="0.6" fill="none" opacity="0.5" />

    {/* Delicate tiny pearls dropping from leaf tips */}
    <line x1="48" y1="85" x2="48" y2="97" stroke="url(#gold-grad-door)" strokeWidth="0.5" opacity="0.4" />
    <circle cx="48" cy="99" r="1.2" fill="url(#gold-grad-door)" opacity="0.8" />

    <line x1="38" y1="122" x2="38" y2="136" stroke="url(#gold-grad-door)" strokeWidth="0.5" opacity="0.4" />
    <circle cx="38" cy="138" r="1.5" fill="url(#gold-grad-door)" opacity="0.9" />

    <line x1="40" y1="130" x2="40" y2="148" stroke="url(#gold-grad-door)" strokeWidth="0.5" opacity="0.4" />
    <circle cx="40" cy="150" r="1.8" fill="url(#gold-grad-door)" opacity="0.95" />
  </svg>
);

export default function EntranceDoor({ onOpen }: EntranceDoorProps) {
  const [isOpening, setIsOpening] = useState(false);

  // Dynamic fallback image paths to prioritize user's custom image files, fallback to generated assets
  const fegPaths = [
    "/feg.png",
    "/feg.jpg",
    "/feg.jpeg",
    "/feg.webp",
    "/gold_chandelier_flowers_1783085173996.jpg"
  ];
  const [imgIndex, setImgIndex] = useState(0);

  const handleImgError = () => {
    if (imgIndex < fegPaths.length - 1) {
      setImgIndex(prev => prev + 1);
    }
  };

  const currentFegSrc = fegPaths[imgIndex];

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1500); // Smooth transition duration
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(15px)"
          }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 overflow-hidden bg-[#0d0102] flex flex-row select-none"
        >
          {/* DEEP, LUXURIOUS FOREST-BORDEAUX GRADIENT BASE */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e13] via-[#240307] to-[#0a0001] z-0" />

          {/* DYNAMIC BLENDED HERO IMAGE (Left-aligned & perfectly blended / متداخل) */}
          <div className="absolute inset-y-0 left-0 w-[52%] xs:w-[48%] md:w-[60%] h-full z-10 pointer-events-none overflow-hidden">
            <img 
              src={currentFegSrc}
              onError={handleImgError}
              alt="Célébration" 
              className="w-full h-full object-cover object-center opacity-85 transition-transform duration-[20000ms] ease-out scale-100 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Cinematic Gradient Mask for Seamless Integration (متداخل) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e13]/5 via-[#240307]/45 to-[#0a0001] [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_35%,rgba(0,0,0,0.85)_65%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-r from-transparent to-[#0a0001]" />
          </div>

          {/* Golden Gradient Definition for vectors */}
          <svg className="absolute w-0 h-0 opacity-0 pointer-events-none" aria-hidden="true">
            <defs>
              <linearGradient id="gold-grad-door" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bca88e" />
                <stop offset="30%" stopColor="#dfcfb7" />
                <stop offset="50%" stopColor="#ebdcc9" />
                <stop offset="70%" stopColor="#dfcfb7" />
                <stop offset="100%" stopColor="#bca88e" />
              </linearGradient>
            </defs>
          </svg>

          {/* LUXURIOUS ORNATE BORDER WITH CORNER FILIGREES */}
          <div className="absolute inset-4 md:inset-6 border border-beige-base/15 pointer-events-none z-30">
            <div className="absolute inset-1 border border-beige-base/5" />
            
            {/* Single luxurious golden leaf cascading downwards from the top-right corner */}
            <GoldenLeafCorner className="top-0 right-0" />
          </div>

          {/* Floating magical gold dust drifting behind text */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-beige-light/35 blur-[0.4px]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2.5 + 1}px`,
                  height: `${Math.random() * 2.5 + 1}px`,
                  animation: `float-slow ${7 + Math.random() * 9}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* MAIN INTERACTIVE AREA */}
          <div className="relative flex-1 w-full flex flex-row items-center justify-end px-3 xs:px-6 sm:px-12 md:px-20 lg:px-32 z-30">
            
            {/* Left side spacer to hold the gorgeous portrait illustration space */}
            <div className="w-[35%] xs:w-[40%] md:w-[45%] h-full pointer-events-none" />

            {/* Right Side: Luxurious Dark Negative Space with Gold Calligraphic Text */}
            <div className="w-[65%] xs:w-[60%] md:w-[55%] max-w-lg md:max-w-2xl text-right flex flex-col items-end justify-center pr-2 xs:pr-4 md:pr-0 bg-transparent">
              
              {/* Interlocking Rings Divider (placed elegant and high up as header) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0, delay: 0.2 }}
                className="flex items-center justify-end w-full max-w-xs gap-1.5 xs:gap-3 mb-2 sm:mb-8"
              >
                <div className="h-[1px] w-12 xs:w-24 bg-gradient-to-r from-transparent to-beige-base/70" />
                <div className="relative w-8 h-4 xs:w-10 xs:h-5 flex items-center justify-center">
                  <div className="absolute left-0.5 w-3.5 h-3.5 xs:w-4.5 xs:h-4.5 rounded-full border border-beige-bright shadow-[0_0_6px_rgba(244,234,225,0.7)] bg-transparent z-10" />
                  <div className="absolute right-0.5 w-3.5 h-3.5 xs:w-4.5 xs:h-4.5 rounded-full border border-beige-dark shadow-[0_0_4px_rgba(188,168,142,0.5)] bg-transparent" />
                </div>
              </motion.div>

              {/* Majestic Couple Names in Golden Calligraphy - Styled on a single beautifully balanced line with a luxurious "&" sign */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="flex flex-wrap items-center justify-end gap-x-1 xs:gap-x-2.5 sm:gap-x-3.5 md:gap-x-4 gap-y-0.5 mb-2 sm:mb-8 w-full"
              >
                <span className="font-serif-decorative text-lg xs:text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.06em] gold-text-gradient filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] select-none">
                  NINA
                </span>
                <span className="font-pinyon text-beige-base text-xl xs:text-2xl sm:text-3xl md:text-6xl tracking-normal select-none italic font-medium px-0.5 filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  &
                </span>
                <span className="font-serif-decorative text-lg xs:text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.06em] gold-text-gradient filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] select-none">
                  MERWANE
                </span>
              </motion.div>

              {/* A highly refined and honored invitation sentence */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.5 }}
                className="font-serif-royal italic text-[12px] xs:text-xs sm:text-lg md:text-xl lg:text-2xl text-beige-bright tracking-wide mb-3 xs:mb-6 sm:mb-10 max-w-md leading-relaxed text-right filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] px-1"
              >
                « Nous serions infiniment honorés de votre présence pour célébrer notre union. »
              </motion.p>

              {/* Glowing Interactive Enter Button - Styled for perfect click target */}
              <motion.button
                id="open_invitation_door_button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpen}
                className="relative px-4 py-2.5 xs:px-8 xs:py-3 md:px-12 md:py-4 bg-bordeaux-light hover:bg-[#9d2b38] border border-beige-base/60 hover:border-beige-bright text-beige-bright rounded-full font-serif-luxury text-[10px] xs:text-[10px] md:text-xs tracking-[0.15em] xs:tracking-[0.25em] uppercase cursor-pointer shadow-[0_4px_30px_rgba(139,38,50,0.45)] overflow-hidden group transition-all duration-300 font-bold"
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-beige-light/25 to-transparent -translate-x-full group-hover:animate-gold-shimmer" 
                  style={{ animation: 'shimmer 1.8s infinite' }} 
                />
                
                <span className="relative flex items-center justify-center gap-2 whitespace-nowrap">
                  Ouvrir l'Invitation
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



