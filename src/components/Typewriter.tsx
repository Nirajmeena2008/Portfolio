import { motion } from "motion/react";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function Typewriter({ text, delay = 0, speed = 0.1, className = "" }: TypewriterProps) {
  const characters = Array.from(text);

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
      }}
      aria-label={text}
      className={`inline-flex items-center ${className}`}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          variants={{
            hidden: { opacity: 0, display: "none" },
            visible: { opacity: 1, display: "inline-block" },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {/* Blinking Cursor */}
      <motion.span
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: [0, 1, 0],
            transition: { repeat: Infinity, duration: 0.8, ease: "linear" },
          },
        }}
        className="inline-block w-[0.05em] h-[0.9em] bg-current ml-2"
      />
    </motion.span>
  );
}
