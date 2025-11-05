import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">About</h3>
            <p className="mt-3 text-white/70">
              I am a graduate of Poltekkes Kemenkes Surabaya, majoring in Electromedical Engineering. My work bridges technical rigor and visual design—creating interactive 3D assets, precise product visualizations, and animated narratives for modern interfaces.
            </p>
            <p className="mt-3 text-white/70">
              With a detail-oriented mindset and love for experimentation, I explore materials, motion, and interaction to craft experiences that feel both playful and professional.
            </p>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-4"
        >
          {["3D modeling & rendering (Blender, Fusion)", "Interactive web 3D (Spline, Three.js)", "Product visualization for tech & medical", "Motion design & micro-interactions"].map((text) => (
            <motion.li
              key={text}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-white/80">{text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
