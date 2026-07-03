import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: "word" | "sentence" | "letter";
  delay?: number;
  duration?: number;
  isArabic?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  variant = "word",
  delay = 0,
  duration = 0.5,
  isArabic = false,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  if (variant === "word" && !isArabic) {
    const words = text.split(" ");
    
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: delay,
        },
      },
    };

    const childVariants = {
      hidden: {
        opacity: 0,
        y: 12,
        filter: "blur(4px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: duration,
          ease: [0.21, 1.02, 0.43, 1.01], // Luxurious smooth cubic bezier
        },
      },
    };

    return (
      <motion.span
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`inline-flex flex-wrap justify-center gap-x-[0.3em] gap-y-1 ${className}`}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (variant === "letter" && !isArabic) {
    const chars = Array.from(text);
    
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03,
          delayChildren: delay,
        },
      },
    };

    const childVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration,
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.span
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`inline-block ${className}`}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Fallback / Arabic text: Animate by words (preserving RTL structure) or full sentence
  const sentenceVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: delay,
        duration: duration + 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={sentenceVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      {text}
    </motion.span>
  );
}
