import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Clock, Music, Utensils, Sparkles, Cake } from "lucide-react";
import AnimatedText from "./AnimatedText";

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  icon: any;
  index: number;
  key?: any;
}

function TimelineCard({
  time,
  title,
  description,
  icon: IconComponent,
  index,
}: TimelineItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-15% 0px -15% 0px" });

  const isEven = index % 2 === 0;

  return (
    <div ref={cardRef} className="relative flex flex-col md:flex-row items-center justify-between md:my-10 my-16 w-full">
      {/* LEFT CONTENT (Desktop: Alternating card, Mobile: Always right of the line) */}
      <div className={`w-full md:w-[45%] ${isEven ? "md:text-right md:order-1" : "md:order-3 text-left"} text-left px-4 pl-14 md:pl-0 md:px-0`}>
        {isInView && (
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-6 rounded-xl bg-bordeaux-dark/85 border border-beige-base/20 gold-shadow backdrop-blur-md"
          >
            {/* Time Stamp */}
            <div className={`flex items-center gap-2 mb-2 ${isEven ? "md:justify-end" : "justify-start"} text-beige-bright font-serif-luxury text-sm tracking-widest`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{time}</span>
            </div>

            {/* French Title */}
            <h4 className="font-serif-luxury text-base text-beige-bright uppercase tracking-wider mb-3">
              {title}
            </h4>

            {/* French Description with typewriter / word fade-in */}
            <div className="font-sans-body text-[10px] md:text-xs text-beige-light/80 leading-relaxed uppercase tracking-wider">
              <AnimatedText text={description} variant="word" delay={0.2} />
            </div>
          </motion.div>
        )}
      </div>

      {/* TIMELINE POINT (CENTER DOT) */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="w-10 h-10 rounded-full bg-bordeaux-base border-2 border-beige-base flex items-center justify-center shadow-[0_0_15px_rgba(235,220,201,0.4)]"
        >
          <IconComponent className="w-4 h-4 text-beige-bright animate-pulse" />
        </motion.div>
        
        {/* Soft glowing concentric ring */}
        <div className="absolute w-14 h-14 rounded-full border border-beige-base/25 animate-ping opacity-25 pointer-events-none" />
      </div>

      {/* RIGHT SPACE (Placeholder for desktop alignment) */}
      <div className="hidden md:block w-[45%] md:order-2" />
    </div>
  );
}

export default function ProgrammeTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-10% 0px -10% 0px" });

  const timelineItems = [
    {
      time: "14:00",
      title: "Début & Accueil",
      description: "Accueil chaleureux avec une sélection raffinée de douceurs sucrées, pièces salées gourmandes, boissons rafraîchissantes et thés traditionnels parfumés.",
      icon: Clock,
    },
    {
      time: "15:00",
      title: "Entrée Solennelle",
      description: "Entrée majestueuse de nos magnifiques fiancés, Nina et Merwane, sous les applaudissements et accompagnée d'un accueil musical traditionnel d'honneur.",
      icon: Music,
    },
    {
      time: "17:00",
      title: "Dîner de Fête",
      description: "Partage d'un somptueux dîner gastronomique de fête préparé avec soin en l'honneur de cette promesse d'union éternelle.",
      icon: Utensils,
    },
    {
      time: "19:00",
      title: "Soirée Festive",
      description: "Une ambiance extraordinaire, chaleureuse et dansante pour célébrer le bonheur de notre couple complice en musique.",
      icon: Sparkles,
    },
    {
      time: "21:00",
      title: "Gâteaux & Douceurs",
      description: "Découpe officielle de la pièce montée de fiançailles accompagnée de douceurs d'exception et de cafés pour clore cette merveilleuse journée.",
      icon: Cake,
    },
  ];

  return (
    <div ref={timelineRef} className="relative w-full max-w-4xl mx-auto my-20 px-4">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="font-serif-luxury text-xs text-beige-base uppercase tracking-[0.3em] block mb-2">
          Le Déroulement de la Fête
        </span>
        <h2 className="font-serif-luxury text-3xl md:text-4xl text-beige-bright filter drop-shadow">
          PROGRAMME
        </h2>
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-beige-base to-transparent mx-auto mt-3" />
      </div>

      {/* Timeline core structure */}
      <div className="relative mt-12">
        {/* TALL BEIGE LINE */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-beige-base/10 via-beige-base/60 to-beige-base/10 z-10">
          {/* Active drawing line on scroll viewport entry */}
          {isTimelineInView && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-b from-beige-bright via-beige-base to-beige-bright origin-top"
            />
          )}
        </div>

        {/* TIMELINE CARDS */}
        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <TimelineCard
              key={index}
              time={item.time}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
