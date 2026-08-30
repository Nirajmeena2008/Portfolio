import { motion } from "motion/react";

export function Marquee() {
  const text = "VIDEO EDITING \u2014 WEB DEVELOPMENT \u2014 C++ PROGRAMMING \u2014 PYTHON \u2014 ";
  
  return (
    <div className="w-full overflow-hidden bg-neutral-900 border-y border-neutral-800 py-10 flex whitespace-nowrap select-none">
      <motion.div
        className="flex text-5xl md:text-7xl font-semibold tracking-tighter text-transparent uppercase"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        <span className="pr-4">{text}</span>
        <span className="pr-4">{text}</span>
        <span className="pr-4">{text}</span>
        <span className="pr-4">{text}</span>
      </motion.div>
    </div>
  );
}
