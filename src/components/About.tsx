import { motion } from "motion/react";

export function About() {
  return (
    <section className="bg-neutral-900 text-white py-32 md:py-48 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.2em] text-neutral-400 text-sm mb-12"
        >
          About the Creator
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight text-neutral-200"
        >
          I bridge the gap between <span className="font-semibold text-white italic">cinematic storytelling</span> and <span className="font-semibold text-white italic">robust engineering</span>. Crafting experiences as a video editor and full-stack developer.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-neutral-800 pt-16"
        >
          <div>
            <h3 className="text-xl font-medium mb-4">Video & Motion</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Video Editing, Motion Graphics, Visual Storytelling, and Post-Production.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Development</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Web Development, Programming, React, and creating fluid digital experiences.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Education</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">B.Tech in Computer Science and Engineering from Arya College of Engineering and IT, Jaipur.</p>
          </div>
        </motion.div>
      </div>

      {/* Abstract Background Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        whileInView={{ opacity: 0.05, scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] bg-white pointer-events-none"
      />
    </section>
  );
}
