import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import EntranceDoor from "./components/EntranceDoor";
import CountdownTimer from "./components/CountdownTimer";
import InvitationLetter from "./components/InvitationLetter";
import ProgrammeTimeline from "./components/ProgrammeTimeline";
import LocationCard from "./components/LocationCard";
import AnimatedText from "./components/AnimatedText";

export default function App() {
  const [doorOpened, setDoorOpened] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; top: string; left: string; size: number; delay: number; duration: number }[]>([]);
  const [petals, setPetals] = useState<{ id: number; left: string; size: number; delay: number; duration: number; sway: number; spin: number; spinEnd: number }[]>([]);

  const handleOpenDoor = () => {
    setDoorOpened(true);
  };

  // Generate random sparkles and falling rose petals across the main invitation background
  useEffect(() => {
    // Reduced sparkle and petal counts to massively improve performance on mobile/tablets
    const list = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3.5 + 1,
      delay: Math.random() * 4,
      duration: 5 + Math.random() * 5,
    }));
    setSparkles(list);

    const petalList = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 16 + 10, // size between 10px and 26px
      delay: Math.random() * 12,
      duration: 14 + Math.random() * 12, // 14s to 26s fall duration
      sway: Math.random() * 80 - 40, // horizontal drift range
      spin: Math.random() * 360, // initial rotation
      spinEnd: Math.random() * 360 + 180, // pre-calculate end rotation
    }));
    setPetals(petalList);
  }, []);

  return (
    <div className="relative min-h-screen bg-bordeaux-dark text-beige-light font-sans-body overflow-x-hidden selection:bg-beige-base selection:text-bordeaux-dark no-scrollbar">
      {/* BACKGROUND IMAGE OF LUXURIOUS LUSTRE AND FLOWERS SUSPENDED - RESTORED IN FULL NATURAL LUXURY COLORS */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-[0.84] filter brightness-[0.92] contrast-[1.03] saturate-[1.12]"
        style={{
          backgroundImage: `url("/gold_chandelier_flowers_1783085173996.jpg")`,
        }}
      />
      {/* Rich soft dark burgundy vignette to gracefully melt the image edges with the card backdrop for elite readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#2a0105]/35 via-[#350107]/55 to-[#1a0003]/85 pointer-events-none" />

      {/* Warm luxurious golden ambient aura behind the cards to make sure the background has deep gold highlights and premium warmth */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(223,207,183,0.22)_0%,rgba(53,1,7,0.35)_60%,rgba(35,1,7,0.85)_100%)] pointer-events-none" />

      {/* CHARGED BACKGROUND ART: BEAUTIFUL CHANDELIER (LUSTRE) IN THE BACK */}
      {doorOpened && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-start justify-center">
          <svg className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-[340px] text-beige-base/20 z-0 pointer-events-none filter drop-shadow-[0_8px_20px_rgba(235,220,201,0.15)]" viewBox="0 0 200 240">
            {/* Chain */}
            <line x1="100" y1="0" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Chandelier core pieces */}
            <path d="M92 50 H108 L104 65 H96 Z" fill="currentColor" />
            <path d="M100 65 Q100 110 100 130" stroke="currentColor" strokeWidth="3" fill="none" />
            {/* Main ornate crystal bowl */}
            <path d="M75 120 C75 150, 125 150, 125 120 Z" fill="currentColor" opacity="0.6" />
            {/* Elegant curved light arms */}
            <path d="M100 130 Q65 130 45 85" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M100 130 Q45 140 25 95" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M100 130 Q135 130 155 85" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M100 130 Q155 140 175 95" stroke="currentColor" strokeWidth="1.5" fill="none" />
            {/* Candle cups and glowing bulbs */}
            <rect x="41" y="75" width="8" height="10" fill="currentColor" />
            <circle cx="45" cy="70" r="3.5" className="fill-beige-bright animate-pulse" />
            <rect x="21" y="85" width="8" height="10" fill="currentColor" />
            <circle cx="25" cy="80" r="3.5" className="fill-beige-bright animate-pulse" />
            <rect x="151" y="75" width="8" height="10" fill="currentColor" />
            <circle cx="155" cy="70" r="3.5" className="fill-beige-bright animate-pulse" />
            <rect x="171" y="85" width="8" height="10" fill="currentColor" />
            <circle cx="175" cy="80" r="3.5" className="fill-beige-bright animate-pulse" />
            {/* Central main candle light */}
            <rect x="96" y="100" width="8" height="12" fill="currentColor" />
            <circle cx="100" cy="93" r="4" className="fill-beige-bright animate-pulse" />
            {/* Crystal beads details */}
            <line x1="45" y1="85" x2="100" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="155" y1="85" x2="100" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            {/* Hanging teardrop crystals */}
            <circle cx="45" cy="92" r="1.5" fill="currentColor" />
            <circle cx="25" cy="102" r="1.5" fill="currentColor" />
            <circle cx="155" cy="92" r="1.5" fill="currentColor" />
            <circle cx="175" cy="102" r="1.5" fill="currentColor" />
            <circle cx="100" cy="160" r="2" fill="currentColor" />
          </svg>
        </div>
      )}



      {/* Floating Animated Sparkles & Cascading Rose Petals (Highly Charged) */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Sparkles */}
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: [0, 0.85, 0],
              scale: [0.3, 1.3, 0.3],
              y: [0, 80], // Gentle slow downward drift
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sparkle.delay,
            }}
            className="absolute"
            style={{
              top: sparkle.top,
              left: sparkle.left,
            }}
          >
            {sparkle.id % 3 === 0 ? (
              <svg
                viewBox="0 0 24 24"
                className="text-beige-bright"
                style={{
                  width: `${sparkle.size * 3.8 + 6}px`,
                  height: `${sparkle.size * 3.8 + 6}px`,
                  filter: "drop-shadow(0 0 6px rgba(235, 220, 201, 0.9))",
                }}
              >
                {/* Beautiful luxury shimmering heart path */}
                <path
                  d="M12,21.35 L10.55,20.03 C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3 C9.24,3 10.91,3.81 12,5.08 C13.09,3.81 14.76,3 16.5,3 C19.58,3 22,5.41 22,8.5 C22,12.27 18.6,15.36 13.45,20.03 L12,21.35 Z"
                  fill="currentColor"
                />
              </svg>
            ) : sparkle.id % 3 === 1 ? (
              <svg
                viewBox="0 0 24 24"
                className="text-beige-dark"
                style={{
                  width: `${sparkle.size * 2.8 + 4}px`,
                  height: `${sparkle.size * 2.8 + 4}px`,
                  filter: "drop-shadow(0 0 4px rgba(213, 190, 159, 0.7))",
                }}
              >
                {/* Elegant outline heart */}
                <path
                  d="M12,21.35 L10.55,20.03 C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3 C9.24,3 10.91,3.81 12,5.08 C13.09,3.81 14.76,3 16.5,3 C19.58,3 22,5.41 22,8.5 C22,12.27 18.6,15.36 13.45,20.03 L12,21.35 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                />
              </svg>
            ) : (
              <div
                className="rounded-full bg-beige-bright"
                style={{
                  width: `${sparkle.size}px`,
                  height: `${sparkle.size}px`,
                  boxShadow: "0 0 10px rgba(235, 220, 201, 0.9)",
                }}
              />
            )}
          </motion.div>
        ))}

        {/* Cascading falling rose petals */}
        {petals.map((petal) => (
          <motion.div
            key={`petal-${petal.id}`}
            initial={{ 
              top: "-8%", 
              left: petal.left, 
              opacity: 0, 
              rotate: petal.spin,
              x: 0 
            }}
            animate={{
              top: "108%",
              opacity: [0, 0.85, 0.85, 0],
              rotate: [petal.spin, petal.spin + petal.spinEnd],
              x: [0, petal.sway, petal.sway * -0.5, petal.sway * 0.8],
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: petal.delay,
            }}
            className="absolute pointer-events-none"
          >
            <svg
              viewBox="0 0 100 100"
              style={{
                width: `${petal.size}px`,
                height: `${petal.size}px`,
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
              }}
            >
              <defs>
                <linearGradient id={`petal-grad-${petal.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" /> {/* Warm Sparkling Gold */}
                  <stop offset="35%" stopColor="#fda4af" /> {/* Soft Rose Pink */}
                  <stop offset="70%" stopColor="#db2777" /> {/* Bright Pink */}
                  <stop offset="100%" stopColor="#70010c" /> {/* Deep Royal Burgundy */}
                </linearGradient>
              </defs>
              {petal.id % 2 === 0 ? (
                <path
                  d="M50,15 C25,25 15,50 25,70 C35,85 65,85 75,70 C85,50 75,25 50,15 Z"
                  fill={`url(#petal-grad-${petal.id})`}
                  opacity="0.9"
                />
              ) : (
                <path
                  d="M50,85 C25,62 10,45 10,28 C10,15 20,5 34,5 C42,5 48,9 50,11 C52,9 58,5 66,5 C80,5 90,15 90,28 C90,45 75,62 50,85 Z"
                  fill={`url(#petal-grad-${petal.id})`}
                  opacity="0.85"
                />
              )}
            </svg>
          </motion.div>
        ))}
      </div>

      {/* ENTRANCE DOOR OVERLAY */}
      <AnimatePresence>
        {!doorOpened && (
          <EntranceDoor onOpen={handleOpenDoor} />
        )}
      </AnimatePresence>

      {/* MAIN INVITATION CONTENT (Revealed when door is opened) */}
      <main className={`relative z-20 w-full min-h-screen flex flex-col items-center justify-start pb-24 ${!doorOpened ? "h-screen overflow-hidden" : ""}`}>
        {/* Decorative Top Accent */}
        <div className="w-full h-8 bg-gradient-to-b from-beige-base/20 to-transparent relative flex justify-center pointer-events-none">
          <div className="absolute top-0 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-beige-base to-transparent" />
        </div>

        {/* WELCOME CALLIGRAPHY INTRO */}
        {doorOpened && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-center mt-10 mb-4 px-4 w-full max-w-xl flex flex-col items-center"
          >
            {/* Words of Honor at the very top */}
            <p className="font-pinyon text-4xl md:text-5xl text-beige-bright filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-2 select-none">
              En l'honneur de Nina & Merwane
            </p>
            <p className="font-serif-luxury text-[10px] md:text-[11px] text-beige-base uppercase tracking-[0.22em] md:tracking-[0.25em] leading-relaxed max-w-xs md:max-w-md filter drop-shadow opacity-95 text-center mb-5">
              Deux cœurs unis sous la bienveillance céleste, célébrés dans la joie et la sincérité
            </p>

            {/* Majestic Line with Center Accent */}
            <div className="flex items-center justify-center w-full max-w-xs mb-8 gap-3">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-beige-base/50 to-beige-base" />
              <div className="text-beige-bright text-[10px] animate-pulse">✦</div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-beige-base/50 to-beige-base" />
            </div>

            <span className="font-serif-luxury text-[10px] md:text-xs text-beige-dark tracking-[0.3em] uppercase block mb-3 opacity-80">
              Fiançailles de Nina & Merwane
            </span>
            <p className="font-arabic-quran text-2xl text-beige-bright max-w-md mx-auto leading-relaxed">
              بسم الله الرحمن الرحيم
            </p>
          </motion.div>
        )}

        {/* INVITATION LETTER */}
        {doorOpened && <InvitationLetter />}

        {/* COUNTDOWN TIMER */}
        {doorOpened && <CountdownTimer />}

        {/* PROGRAMME TIMELINE */}
        {doorOpened && <ProgrammeTimeline />}

        {/* LOCATION CARD */}
        {doorOpened && <LocationCard />}

        {/* MAJESTIC ENDING SECTION: يشرفنا حضوركم */}
        {doorOpened && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-xl mx-auto my-16 px-4 text-center"
          >
            <div className="p-6 sm:p-8 rounded-3xl border border-beige-base/30 glassmorphism gold-shadow relative overflow-hidden">
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-beige-base/40" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-beige-base/40" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-beige-base/40" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-beige-base/40" />
              
              <p className="font-pinyon text-4xl text-beige-base mb-4">Avec Honneur & Gratitude</p>
              
              {/* Calligraphy end message */}
              <div className="my-6">
                <p className="font-arabic-quran text-5xl text-beige-bright filter drop-shadow-[0_2px_8px_rgba(235,220,201,0.6)] leading-relaxed tracking-wider animate-pulse">
                  يشرفنا حضوركم
                </p>
              </div>

              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-beige-base to-transparent mx-auto mb-4" />
              
              <p className="font-sans-body text-[10px] text-beige-light/60 uppercase tracking-[0.2em] max-w-xs mx-auto leading-relaxed mb-6">
                <AnimatedText text="Votre présence bienveillante est le plus beau cadeau de notre union." variant="word" />
              </p>

              {/* Added majestic end signature/monogram */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center mt-6"
              >
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-beige-base/40 bg-bordeaux-dark/60 shadow-[0_0_12px_rgba(235,220,201,0.2)] mb-3">
                  <span className="font-serif-luxury text-sm font-semibold text-beige-bright tracking-wider">N ✦ M</span>
                </div>
                <p className="font-pinyon text-2xl text-beige-bright mb-1">Nina & Merwane</p>
                <p className="font-serif-luxury text-[8px] text-beige-dark/70 tracking-[0.3em] uppercase">Avec Amour & Bénédiction</p>
              </motion.div>
            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
}
