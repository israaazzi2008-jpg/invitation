import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface EntranceDoorProps {
  onOpen: () => void;
}

// Gorgeous, detailed custom vector filigree for the corners to elevate the luxury feel
const CornerFiligree = ({ className }: { className?: string }) => (
  <svg className={`absolute w-24 h-24 md:w-32 md:h-32 pointer-events-none z-30 ${className}`} viewBox="0 0 100 100" fill="none">
    {/* Intricate golden baroque scrollwork */}
    <path d="M 4 4 L 92 4 C 80 12, 70 28, 70 44 C 70 60, 55 66, 44 66 C 28 66, 12 80, 4 92 Z" stroke="url(#gold-grad-door)" strokeWidth="1.2" fill="none" opacity="0.85" />
    <path d="M 10 10 L 75 10 C 65 18, 55 32, 55 46 C 55 56, 46 60, 36 60 C 22 60, 18 72, 10 75 Z" stroke="url(#gold-grad-door)" strokeWidth="0.8" fill="none" opacity="0.6" />
    
    {/* Decorative dots and accents */}
    <circle cx="12" cy="12" r="2.5" fill="url(#gold-grad-door)" opacity="0.9" />
    <circle cx="34" cy="12" r="1.5" fill="url(#gold-grad-door)" opacity="0.75" />
    <circle cx="12" cy="34" r="1.5" fill="url(#gold-grad-door)" opacity="0.75" />
    
    {/* Double border lines */}
    <path d="M 4 4 L 4 94" stroke="url(#gold-grad-door)" strokeWidth="1.2" opacity="0.8" />
    <path d="M 4 4 L 94 4" stroke="url(#gold-grad-door)" strokeWidth="1.2" opacity="0.8" />
  </svg>
);

export default function EntranceDoor({ onOpen }: EntranceDoorProps) {
  const [isOpening, setIsOpening] = useState(false);

  // Dynamic fallback image paths to prioritize user's custom "feg" image file, fallback to generated assets
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
          className="fixed inset-0 z-50 overflow-hidden bg-[#0d0102] flex items-center justify-center select-none"
        >
          {/* DEEP, LUXURIOUS FOREST-BORDEAUX GRADIENT BASE */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e13] via-[#240307] to-[#0a0001] z-0" />

          {/* DYNAMIC BLENDED HERO IMAGE (Left-aligned & perfectly blended / متداخل) */}
          <div className="absolute top-0 bottom-0 left-0 w-full md:w-[65%] z-10 pointer-events-none overflow-hidden">
            <img 
              src={currentFegSrc}
              onError={handleImgError}
              alt="Célébration" 
              className="w-full h-full object-cover object-left md:object-center opacity-85 transition-transform duration-[20000ms] ease-out scale-100 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Cinematic Gradient Mask for Seamless Integration (متداخل) */}
            {/* On mobile, fade out from top-to-bottom to keep readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0001] via-[#240307]/45 to-transparent md:hidden" />
            {/* On desktop, fade out beautifully from left-to-right into the dark negative space */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0a1e13]/10 via-[#240307]/45 to-[#0a0001] [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_45%,rgba(0,0,0,0.85)_65%,rgba(0,0,0,0)_100%)]" />
            <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#0a0001]" />
          </div>

          {/* Golden Gradient Definition for vectors */}
          <svg className="hidden">
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
            
            {/* Corner Filigree Frames */}
            <CornerFiligree className="top-0 left-0" />
            <CornerFiligree className="top-0 right-0 rotate-90" />
            <CornerFiligree className="bottom-0 left-0 -rotate-90" />
            <CornerFiligree className="bottom-0 right-0 rotate-180" />
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
          <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-end px-6 sm:px-12 md:px-20 lg:px-32 z-30">
            
            {/* Left side spacer to hold the gorgeous portrait illustration space */}
            <div className="hidden md:flex md:w-[45%] h-full pointer-events-none" />

            {/* Right Side: Luxurious Dark Negative Space with Gold Calligraphic Text */}
            <div className="w-full md:w-[55%] max-w-lg md:max-w-2xl text-center md:text-right flex flex-col items-center md:items-end justify-center p-6 sm:p-10 md:p-0 rounded-2xl md:rounded-none bg-black/45 md:bg-transparent backdrop-blur-[3px] md:backdrop-blur-none border border-beige-base/10 md:border-none">
              
              {/* Interlocking Rings Divider (placed elegant and high up as header) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0, delay: 0.2 }}
                className="flex items-center justify-center md:justify-end w-full max-w-xs gap-3 mb-8"
              >
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-beige-base/40 to-beige-base/70 md:hidden" />
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-beige-base/70 hidden md:block" />
                <div className="relative w-10 h-5 flex items-center justify-center">
                  <div className="absolute left-0.5 w-4.5 h-4.5 rounded-full border border-beige-bright shadow-[0_0_6px_rgba(244,234,225,0.7)] bg-transparent z-10" />
                  <div className="absolute right-0.5 w-4.5 h-4.5 rounded-full border border-beige-dark shadow-[0_0_4px_rgba(188,168,142,0.5)] bg-transparent" />
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-beige-base/40 to-beige-base/70" />
              </motion.div>

              {/* Majestic Couple Names in Golden Calligraphy - Styled on a single beautifully balanced line with a luxurious "&" sign */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center md:justify-end gap-x-2.5 sm:gap-x-3.5 md:gap-x-4 gap-y-1 mb-8 w-full"
              >
                <span className="font-serif-decorative text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-[0.06em] gold-text-gradient filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] select-none">
                  NINA
                </span>
                <span className="font-pinyon text-beige-base text-4xl sm:text-5xl md:text-6xl tracking-normal select-none italic font-medium px-1.5 filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  &
                </span>
                <span className="font-serif-decorative text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-[0.06em] gold-text-gradient filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] select-none">
                  MERWANE
                </span>
              </motion.div>

              {/* A highly refined and honored invitation sentence */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.5 }}
                className="font-serif-royal italic text-base xs:text-lg md:text-xl lg:text-2xl text-beige-bright tracking-wide mb-10 max-w-md leading-relaxed text-center md:text-right filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
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
                className="relative px-12 py-4 bg-bordeaux-light hover:bg-[#9d2b38] border border-beige-base/60 hover:border-beige-bright text-beige-bright rounded-full font-serif-luxury text-xs tracking-[0.25em] uppercase cursor-pointer shadow-[0_4px_30px_rgba(139,38,50,0.45)] overflow-hidden group transition-all duration-300 font-bold"
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-beige-light/25 to-transparent -translate-x-full group-hover:animate-gold-shimmer" 
                  style={{ animation: 'shimmer 1.8s infinite' }} 
                />
                
                <span className="relative flex items-center justify-center gap-2">
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
