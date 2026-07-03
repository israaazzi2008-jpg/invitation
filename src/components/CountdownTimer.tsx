import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function CountdownTimer() {
  const targetDate = new Date("2026-09-19T14:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "Jours", value: timeLeft.days, abbr: "J" },
    { label: "Heures", value: timeLeft.hours, abbr: "H" },
    { label: "Minutes", value: timeLeft.minutes, abbr: "M" },
    { label: "Secondes", value: timeLeft.seconds, abbr: "S" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto my-12 px-4">
      {/* MAIN TIMER CADRE (ELEGANT REGAL FRAME) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl border-2 border-beige-base/50 p-4 sm:p-6 md:p-8 gold-shadow glassmorphism"
      >
        {/* Framing Inner Border lines */}
        <div className="absolute inset-2 border border-beige-base/20 rounded-xl pointer-events-none" />

        {/* PROMINENT WEDDING RINGS - ELEGANTLY OVERLAPPING */}
        <div className="flex justify-center mb-6 relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-28 h-16 flex items-center justify-center"
          >
            {/* Ring 1 - Left */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 w-14 h-14 rounded-full border-[5px] border-beige-base shadow-[0_0_15px_rgba(235,220,201,0.6)] flex items-center justify-center bg-transparent z-10"
            >
              {/* Sparkle on ring */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-beige-bright rounded-full animate-pulse shadow-[0_0_8px_rgba(244,234,225,0.9)]" />
            </motion.div>

            {/* Ring 2 - Right (interlocking) */}
            <motion.div
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-2 w-14 h-14 rounded-full border-[5px] border-beige-dark shadow-[0_0_12px_rgba(213,190,159,0.5)] flex items-center justify-center bg-transparent"
            >
              {/* Sparkle on second ring */}
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-beige-bright rounded-full animate-pulse shadow-[0_0_6px_rgba(244,234,225,0.9)]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Cadre Header Text */}
        <div className="relative z-10 text-center mb-5">
          <span className="font-serif-luxury text-xs text-beige-base uppercase tracking-[0.25em]">
            Le Compte à Rebours
          </span>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-beige-base to-transparent mx-auto mt-2" />
        </div>

        {/* TIMER DIGITS GRID */}
        <div className="relative z-10 grid grid-cols-4 gap-2 md:gap-4 justify-items-center max-w-sm mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              {/* Digit Box */}
              <div className="relative w-full aspect-square max-w-[70px] bg-bordeaux-dark/90 border border-beige-base/30 rounded-lg flex flex-col items-center justify-center p-2 shadow-inner">
                {/* Beige glowing numbers */}
                <span className="font-serif-luxury text-xl md:text-2xl text-beige-bright filter drop-shadow-[0_2px_4px_rgba(235,220,201,0.4)]">
                  {String(unit.value).padStart(2, "0")}
                </span>
                
                {/* Abbreviation short label */}
                <span className="font-sans-body text-[8px] text-beige-dark/70 uppercase tracking-widest mt-1">
                  {unit.abbr}
                </span>
              </div>

              {/* French Label */}
              <span className="font-sans-body text-[8px] md:text-[10px] text-beige-light/80 uppercase tracking-widest mt-2 text-center">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Countdown footer info */}
        <div className="relative z-10 text-center mt-6">
          {timeLeft.isCompleted ? (
            <p className="font-serif-luxury text-sm text-beige-bright uppercase tracking-widest animate-pulse">
              C'est le Grand Jour !
            </p>
          ) : (
            <p className="font-sans-body text-[10px] text-beige-light/60 uppercase tracking-[0.15em] leading-relaxed">
              Le 19 Septembre 2026 à 14h00
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
