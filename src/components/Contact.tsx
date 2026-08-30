import { motion } from "motion/react";
import { Github, Instagram, Mail, ArrowRight, Phone } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Contact() {
  return (
    <footer className="bg-neutral-950 text-white pt-32 pb-12 px-4 sm:px-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">
              Let's create <br /> something <span className="italic font-light text-neutral-400">together.</span>
            </h2>
            <a
              href="mailto:nirajmeenajaipur.2008@gmail.com"
              className="inline-flex items-center gap-4 text-xl md:text-2xl hover:text-neutral-300 transition-colors group"
            >
              nirajmeenajaipur.2008@gmail.com
              <Magnetic strength={0.4}>
                <motion.div
                  className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors"
                >
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Magnetic>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-end lg:items-end gap-8"
          >
            <div className="flex flex-col gap-4 text-lg">
              <Magnetic strength={0.2}>
                <a href="https://www.instagram.com/niraj_meena_2008/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors flex items-center gap-3">
                  <Instagram size={20} /> Instagram
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="https://github.com/Nirajmeena2008" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors flex items-center gap-3">
                  <Github size={20} /> GitHub
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="mailto:nirajmeenajaipur.2008@gmail.com" className="hover:text-neutral-400 transition-colors flex items-center gap-3">
                  <Mail size={20} /> Email
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="tel:+919428438704" className="hover:text-neutral-400 transition-colors flex items-center gap-3">
                  <Phone size={20} /> +91 94284 38704
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 pt-8 border-t border-neutral-900"
        >
          <p>&copy; {new Date().getFullYear()} Aperture Portfolio.</p>
          <p className="mt-2 md:mt-0">Inspired by Scrolltide. Built with React & Motion.</p>
        </motion.div>
      </div>
    </footer>
  );
}
