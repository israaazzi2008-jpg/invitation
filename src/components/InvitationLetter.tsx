import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";

export default function InvitationLetter() {
  return (
    <div className="relative w-full max-w-2xl mx-auto my-16 px-4">
      {/* BIG BEAUTIFUL GOLDEN HEARTS IN THE CORNERS */}
      
      {/* Big Golden Heart - Top Left Corner */}
      <motion.div
        animate={{
          scale: [0.9, 1.1, 0.9],
          rotate: [-6, 6, -6],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-12 -left-4 md:-left-12 w-20 h-20 pointer-events-none z-30 filter drop-shadow-[0_4px_15px_rgba(235,220,201,0.7)]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="gold-heart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f4eae1" />
              <stop offset="30%" stopColor="#dfcfb7" />
              <stop offset="70%" stopColor="#bca88e" />
              <stop offset="100%" stopColor="#8c765c" />
            </linearGradient>
          </defs>
          {/* Majestic stylized luxury heart */}
          <path
            d="M50,85 C25,62 10,45 10,28 C10,15 20,5 34,5 C42,5 48,9 50,11 C52,9 58,5 66,5 C80,5 90,15 90,28 C90,45 75,62 50,85 Z"
            fill="url(#gold-heart-grad)"
            stroke="#f4eae1"
            strokeWidth="1.5"
          />
          {/* Inner luxury highlight crescent */}
          <path
            d="M34,9 C24,9 16,17 16,28 C16,38 24,50 42,66"
            stroke="#f4eae1"
            strokeWidth="1.2"
            fill="none"
            opacity="0.45"
            strokeLinecap="round"
          />
          {/* Little elegant spark center */}
          <circle cx="50" cy="36" r="3" fill="#f4eae1" className="animate-pulse" />
        </svg>
      </motion.div>

      {/* Big Golden Heart - Top Right Corner */}
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          rotate: [6, -6, 6],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="absolute -top-12 -right-4 md:-right-12 w-20 h-20 pointer-events-none z-30 filter drop-shadow-[0_4px_15px_rgba(235,220,201,0.7)]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Majestic stylized luxury heart */}
          <path
            d="M50,85 C25,62 10,45 10,28 C10,15 20,5 34,5 C42,5 48,9 50,11 C52,9 58,5 66,5 C80,5 90,15 90,28 C90,45 75,62 50,85 Z"
            fill="url(#gold-heart-grad)"
            stroke="#f4eae1"
            strokeWidth="1.5"
          />
          {/* Inner luxury highlight crescent */}
          <path
            d="M34,9 C24,9 16,17 16,28 C16,38 24,50 42,66"
            stroke="#f4eae1"
            strokeWidth="1.2"
            fill="none"
            opacity="0.45"
            strokeLinecap="round"
          />
          {/* Little elegant spark center */}
          <circle cx="50" cy="36" r="3" fill="#f4eae1" className="animate-pulse" />
        </svg>
      </motion.div>

      {/* MAIN OVAL LETTER CONTAINER (CADRE OVAL) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-bordeaux-dark border-2 border-beige-base/40 p-6 xs:p-8 sm:p-12 md:p-16 gold-shadow glassmorphism w-full min-h-[580px] flex items-center justify-center rounded-3xl sm:rounded-[50%/35%] overflow-hidden"
      >
        {/* Real picture of swans in the background, styled as a premium backdrop for the entire cadre */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[20px] sm:rounded-[50%/35%]">
          <img 
            src="/swan.webp" 
            alt="Deux cygnes amoureux" 
            className="w-full h-full object-cover transition-transform duration-[15000ms] hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Burgundy shadow vignette: gives a soft burgundy tint over the swans while shading the outer area with dark bordeaux shadows for maximum text clarity */}
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-multiply" 
            style={{
              background: "radial-gradient(circle, rgba(92, 6, 18, 0.4) 20%, rgba(53, 1, 7, 0.85) 85%)"
            }}
          />
          {/* Subtle dark layout layer to ensure absolute legibility under any light */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>

        {/* Inner thin beige border */}
        <div className="absolute inset-3 sm:inset-4 border border-beige-base/20 rounded-[20px] sm:rounded-[50%/35%] pointer-events-none z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center w-full max-w-lg">
          
          {/* Quranic Verse Calligraphy */}
          <div className="my-5 flex flex-col items-center w-full">
            <p className="font-arabic-quran text-4xl md:text-5xl text-beige-bright filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-relaxed text-center animate-pulse tracking-wide select-none">
              وخلقناكم أزواجاً
            </p>
            <p className="font-serif-luxury text-[10px] text-beige-bright/80 tracking-[0.22em] mt-1 text-center uppercase filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              — Sourate An-Naba, Verset 8
            </p>
 
            {/* A line and rings between the line */}
            <div className="flex items-center justify-center w-full max-w-xs my-6 gap-3">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-beige-base/60 to-beige-base" />
              {/* Overlapping gold rings in the middle of the line */}
              <div className="relative w-12 h-6 flex items-center justify-center">
                {/* Ring 1 - Left */}
                <div className="absolute left-1 w-5.5 h-5.5 rounded-full border-2 border-beige-bright shadow-[0_0_8px_rgba(244,234,225,0.8)] bg-transparent z-10" />
                {/* Ring 2 - Right (interlocking) */}
                <div className="absolute right-1 w-5.5 h-5.5 rounded-full border-2 border-beige-dark shadow-[0_0_6px_rgba(188,168,142,0.6)] bg-transparent" />
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-beige-base/60 to-beige-base" />
            </div>
          </div>
 
          {/* Couple Invitation Header in elegant French */}
          <div className="my-4 px-3">
            <p className="font-serif-luxury text-[11px] md:text-xs text-beige-bright tracking-[0.22em] leading-relaxed text-center uppercase filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
              Sous le regard bienveillant du Très-Haut, nous avons l'immense bonheur de vous annoncer notre promesse d'union éternelle et sacrée
            </p>
          </div>
 
          {/* Names of Couple */}
          <div className="my-5">
            <h1 className="font-script-luxury text-6xl md:text-7xl text-beige-bright filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] leading-none text-center select-none font-semibold">
              Nina & Merwane
            </h1>
            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-beige-base to-transparent mx-auto mt-4" />
          </div>
 
          {/* Honorable French Welcoming Invitation Words */}
          <div className="space-y-4 px-4 my-4 font-sans-body text-xs md:text-sm uppercase tracking-[0.16em] text-beige-bright font-medium leading-relaxed text-center filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)]">
            <div>
              <AnimatedText 
                text="C'est avec une joie infinie que nous serions honorés de vous compter parmi nos invités d'exception pour sceller cette promesse d'amour."
                variant="word"
                delay={0.2}
              />
            </div>
            
            <div className="text-beige-base font-serif-luxury text-[11px] md:text-xs tracking-[0.18em] py-1 text-center leading-relaxed font-bold">
              <AnimatedText 
                text="Votre présence bienveillante illuminera notre fête et comblera nos cœurs de bonheur."
                variant="word"
                delay={0.4}
              />
            </div>
          </div>
 
          {/* Elegant Divider */}
          <div className="mt-8 text-beige-base/50 text-sm text-center">
            ✦ ✨ ✦
          </div>
 
        </div>
      </motion.div>
    </div>
  );
}
