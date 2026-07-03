import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Key } from "lucide-react";
import AnimatedText from "./AnimatedText";

interface EntranceDoorProps {
  onOpen: () => void;
}

export default function EntranceDoor({ onOpen }: EntranceDoorProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Let the animation complete before calling onOpen to unmount/transition
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bordeaux-radial-gradient flex items-center justify-center">
      {/* Golden Gradient Definitions */}
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

      {/* Decorative Beige Frame around the entire screen */}
      <div className="absolute inset-4 border border-beige-base/30 pointer-events-none z-40">
        <div className="absolute inset-1 border border-beige-base/10" />
        {/* Beige corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-beige-base" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-beige-base" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-beige-base" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-beige-base" />
      </div>

      {/* Floating Sparkles/Rose Petals drifting down */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-beige-bright/35 blur-[1px]"
            style={{
              top: `${Math.random() * -20}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `float-down ${5 + Math.random() * 7}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Door Panels Container */}
      <div className="absolute inset-0 flex z-30">
        {/* LEFT DOOR PANEL */}
        <motion.div
          animate={isOpening ? { x: "-100%", rotateY: -85, opacity: 0 } : { x: "0%", rotateY: 0 }}
          transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-bordeaux-dark border-r border-beige-base/50 relative flex flex-col justify-between p-4 xs:p-6 md:p-8 shadow-[25px_0_50px_rgba(0,0,0,0.95)] origin-left z-30 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(35, 1, 7, 0.98), rgba(53, 6, 12, 0.92)), url("/wedding_hall_door_1783085161030.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        >
          {/* Ornate Gold Filigree Molding for Left Panel */}
          <div className="absolute inset-3 md:inset-6 border-2 border-beige-base/30 rounded pointer-events-none flex flex-col justify-around p-2 md:p-4">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect x="2" y="2" width="96" height="96" fill="none" stroke="url(#gold-grad-door)" strokeWidth="0.8" opacity="0.85" rx="2" />
              <rect x="4" y="4" width="92" height="92" fill="none" stroke="url(#gold-grad-door)" strokeWidth="0.3" opacity="0.5" rx="1.5" />
              {/* Classical corner ornaments */}
              <path d="M2 12 C6 12, 12 6, 12 2 M2 8 L8 2" fill="none" stroke="url(#gold-grad-door)" strokeWidth="0.6" />
              <path d="M2 88 C6 88, 12 94, 12 98 M2 92 L8 98" fill="none" stroke="url(#gold-grad-door)" strokeWidth="0.6" />
            </svg>
            
            <div className="w-full h-[40%] border border-beige-base/20 rounded bg-bordeaux-dark/40 shadow-inner flex items-center justify-center relative">
              <div className="absolute inset-2 border border-dashed border-beige-base/10 rounded" />
              <svg className="w-8 h-8 md:w-12 md:h-12 fill-none stroke-beige-base/30 stroke-[0.5]" viewBox="0 0 100 100">
                <path d="M50 10 L90 50 L50 90 L10 50 Z" />
              </svg>
            </div>
            <div className="w-full h-[45%] border border-beige-base/20 rounded bg-bordeaux-dark/40 shadow-inner flex items-center justify-center relative">
              <div className="absolute inset-2 border border-dashed border-beige-base/10 rounded" />
              <svg className="w-8 h-8 md:w-12 md:h-12 fill-none stroke-beige-base/30 stroke-[0.5]" viewBox="0 0 100 100">
                <path d="M50 10 L90 50 L50 90 L10 50 Z" />
              </svg>
            </div>
          </div>

          <div className="z-10 pt-10 pl-2">
            {/* Corner spacer */}
          </div>

          {/* Real Ornate Door Handle Left */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 flex items-center">
            <div className="w-2.5 h-20 md:w-3 md:h-28 bg-gradient-to-r from-beige-dark via-beige-bright to-beige-dark rounded-l-md shadow-[5px_2px_15px_rgba(0,0,0,0.8)] border border-bordeaux-dark" />
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-tr from-beige-dark to-beige-bright rounded-full -ml-2 md:-ml-2.5 border border-bordeaux-dark shadow-md" />
          </div>

          <div className="z-10 pl-2 xs:pl-4 pb-4 md:pb-10">
            <p className="font-pinyon text-3xl xs:text-4xl text-beige-bright filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Fiançailles
            </p>
          </div>
        </motion.div>

        {/* RIGHT DOOR PANEL */}
        <motion.div
          animate={isOpening ? { x: "100%", rotateY: 85, opacity: 0 } : { x: "0%", rotateY: 0 }}
          transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
          className="w-1/2 h-full bg-bordeaux-dark border-l border-beige-base/50 relative flex flex-col justify-between p-4 xs:p-6 md:p-8 shadow-[-25px_0_50px_rgba(0,0,0,0.95)] origin-right z-30 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(35, 1, 7, 0.98), rgba(53, 6, 12, 0.92)), url("/wedding_hall_door_1783085161030.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        >
          {/* Ornate Gold Filigree Molding for Right Panel */}
          <div className="absolute inset-3 md:inset-6 border-2 border-beige-base/30 rounded pointer-events-none flex flex-col justify-around p-2 md:p-4">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect x="2" y="2" width="96" height="96" fill="none" stroke="url(#gold-grad-door)" strokeWidth="0.8" opacity="0.85" rx="2" />
              <rect x="4" y="4" width="92" height="92" fill="none" stroke="url(#gold-grad-door)" strokeWidth="0.3" opacity="0.5" rx="1.5" />
              {/* Classical corner ornaments */}
              <path d="M98 12 C94 12, 88 6, 88 2 M98 8 L92 2" fill="none" stroke="url(#gold-grad-door)" strokeWidth="0.6" />
              <path d="M98 88 C94 88, 88 94, 88 98 M98 92 L92 98" fill="none" stroke="url(#gold-grad-door)" strokeWidth="0.6" />
            </svg>
            
            <div className="w-full h-[40%] border border-beige-base/20 rounded bg-bordeaux-dark/40 shadow-inner flex items-center justify-center relative">
              <div className="absolute inset-2 border border-dashed border-beige-base/10 rounded" />
              <svg className="w-8 h-8 md:w-12 md:h-12 fill-none stroke-beige-base/30 stroke-[0.5]" viewBox="0 0 100 100">
                <path d="M50 10 L90 50 L50 90 L10 50 Z" />
              </svg>
            </div>
            <div className="w-full h-[45%] border border-beige-base/20 rounded bg-bordeaux-dark/40 shadow-inner flex items-center justify-center relative">
              <div className="absolute inset-2 border border-dashed border-beige-base/10 rounded" />
              <svg className="w-8 h-8 md:w-12 md:h-12 fill-none stroke-beige-base/30 stroke-[0.5]" viewBox="0 0 100 100">
                <path d="M50 10 L90 50 L50 90 L10 50 Z" />
              </svg>
            </div>
          </div>

          <div className="z-10 text-right pt-10 pr-2">
            {/* Corner spacer */}
          </div>

          {/* Real Ornate Door Handle Right */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-40 flex items-center">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-tr from-beige-dark to-beige-bright rounded-full -mr-2 md:-mr-2.5 border border-bordeaux-dark shadow-md z-10" />
            <div className="w-2.5 h-20 md:w-3 md:h-28 bg-gradient-to-l from-beige-dark via-beige-bright to-beige-dark rounded-r-md shadow-[-5px_2px_15px_rgba(0,0,0,0.8)] border border-bordeaux-dark" />
          </div>

          <div className="z-10 text-right pr-2 xs:pr-4 pb-4 md:pb-10">
            <p className="font-serif-luxury text-[10px] xs:text-xs tracking-[0.18em] xs:tracking-[0.25em] text-beige-base font-semibold filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              19 Septembre 2026
            </p>
          </div>
        </motion.div>
      </div>

      {/* OVERLAY INVITATION INFO (Centred over the door seam before opening) */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, y: -20 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="absolute z-40 text-center flex flex-col items-center max-w-md px-4 pointer-events-auto"
          >
            {/* Couple names heading */}
            <h1 className="font-serif-luxury text-[2.25rem] xs:text-5xl md:text-6xl lg:text-7xl text-beige-bright tracking-widest filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mt-8 mb-6 font-bold leading-[1.1] text-center">
              NINA & <br /> MERWANE
            </h1>
            
            <p className="font-sans-body text-[10px] xs:text-[11px] md:text-xs text-beige-base uppercase tracking-[0.22em] mb-10 max-w-sm text-center leading-relaxed font-medium filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Nous avons l'honneur de vous <br /> convier à célébrer notre bonheur
            </p>

            {/* Glowing Door Handle / Open Button */}
            <motion.button
              id="open_invitation_door_button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpen}
              className="relative px-12 py-4 bg-bordeaux-light/80 hover:bg-bordeaux-light border border-beige-base/60 hover:border-beige-base text-beige-bright rounded-full font-serif-luxury text-xs tracking-[0.25em] uppercase cursor-pointer gold-shadow overflow-hidden group transition-all duration-300"
            >
              {/* Shimmer overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-beige-light/20 to-transparent -translate-x-full group-hover:animate-gold-shimmer" 
                   style={{ animation: 'shimmer 1.5s infinite' }} />
              
              <span className="relative flex items-center gap-2 font-bold">
                Ouvrir les Portes
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Suspended Flowers / Chandelier Behind Doors (Peeks through briefly when opening) */}
      <div className="absolute inset-0 z-10 bordeaux-radial-gradient flex flex-col justify-between items-center pointer-events-none opacity-50">
        <div className="w-full h-1/3 bg-gradient-to-b from-bordeaux-dark to-transparent" />
        <div className="w-full h-1/3 bg-gradient-to-t from-bordeaux-dark to-transparent" />
      </div>

      {/* Style overrides for custom drift keyframes */}
      <style>{`
        @keyframes float-down {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(110vh) rotate(360deg) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
