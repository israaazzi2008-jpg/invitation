import { MapPin, Navigation, Map } from "lucide-react";
import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";

export default function LocationCard() {
  const handleOpenMap = () => {
    const mapUrl = "https://maps.app.goo.gl/1BekCCKKD8h2F2Zt8?g_st=ic";
    window.open(mapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative w-full max-w-xl mx-auto my-16 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border-2 border-beige-base/50 p-6 md:p-8 gold-shadow glassmorphism flex flex-col items-center"
      >
        {/* Frame borders */}
        <div className="absolute inset-2 border border-beige-base/20 rounded-xl pointer-events-none" />

        {/* Header Icon */}
        <div className="relative z-10 w-12 h-12 rounded-full bg-beige-base/10 border border-beige-base/30 flex items-center justify-center mb-4">
          <MapPin className="w-6 h-6 text-beige-bright animate-bounce" />
        </div>

        {/* Venue Title in French */}
        <span className="relative z-10 font-serif-luxury text-[10px] text-beige-base tracking-[0.25em] uppercase mb-1">
          Lieu d'Honneur
        </span>
        
        <h2 className="relative z-10 font-serif-luxury text-2xl md:text-3xl text-beige-bright filter drop-shadow text-center mb-2">
          SALLE DES FÊTES MARWA
        </h2>

        {/* Horizontal beige separator */}
        <div className="relative z-10 h-[1px] w-24 bg-gradient-to-r from-transparent via-beige-base to-transparent mb-6" />

        {/* Elegant words animation */}
        <div className="relative z-10 text-center text-beige-light/90 max-w-sm mb-6">
          <p className="font-pinyon text-3xl text-beige-base mb-2">Lieu de la Célébration</p>
          <div className="font-sans-body text-[10px] md:text-xs uppercase tracking-widest leading-relaxed">
            <AnimatedText text="C'est dans l'écrin somptueux de la Salle des Fêtes Marwa que nous aurons l'honneur de vous accueillir pour sceller notre promesse d'amour." variant="word" />
          </div>
        </div>

        {/* Mock Graphic Map Frame */}
        <div className="relative z-10 w-full h-40 rounded-lg border border-beige-base/20 bg-bordeaux-dark/95 overflow-hidden mb-6 flex items-center justify-center shadow-inner group">
          {/* Decorative geometric vector map pattern using beige color */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ebdcc9_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Animated concentric radar waves */}
          <div className="absolute w-24 h-24 rounded-full border border-beige-base/30 animate-ping opacity-15" />
          <div className="absolute w-12 h-12 rounded-full border-2 border-beige-base/40 animate-pulse bg-beige-base/10" />

          {/* Central Map pin on elegant graphics */}
          <div className="relative z-15 flex flex-col items-center">
            <Map className="w-8 h-8 text-beige-bright mb-1 filter drop-shadow" />
            <span className="font-serif-luxury text-[9px] tracking-[0.2em] text-beige-base uppercase">
              Salle de Réception Marwa
            </span>
          </div>
          
          {/* Border details */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-beige-base/40" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-beige-base/40" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-beige-base/40" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-beige-base/40" />
        </div>

        {/* Navigation Button */}
        <motion.button
          id="navigate_to_salle_button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpenMap}
          className="relative z-10 flex items-center gap-2 px-6 py-3 bg-bordeaux-light border border-beige-base/60 text-beige-bright rounded-full font-serif-luxury text-xs tracking-widest uppercase cursor-pointer gold-shadow overflow-hidden group"
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-beige-light/20 to-transparent -translate-x-full group-hover:animate-gold-shimmer"
               style={{ animation: 'shimmer 1.5s infinite' }} />
               
          <Navigation className="w-4 h-4 text-beige-bright" />
          <span>Itinéraire & Plan</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
