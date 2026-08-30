import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cinematic Cuts",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: 2,
    title: "Full-Stack Platforms",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    id: 3,
    title: "Data & Automation",
    category: "Python Programming",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    id: 4,
    title: "High-Performance Systems",
    category: "C++ Programming",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
  },
];

export function Gallery() {
  return (
    <section className="bg-neutral-950 text-white py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Selected Work</h2>
            <p className="text-neutral-400 mt-4 max-w-md text-lg">
              A curated collection of recent projects exploring the intersection of design, technology, and art.
            </p>
          </div>
          <button className="flex items-center gap-2 group text-sm uppercase tracking-widest hover:text-neutral-300 transition-colors">
            View All Archive
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-neutral-900 rounded-xl aspect-[4/3] md:aspect-auto ${project.colSpan}`}
              style={{ minHeight: "400px" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-neutral-300 text-sm uppercase tracking-wider mb-2">{project.category}</p>
                <h3 className="text-2xl font-medium">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
