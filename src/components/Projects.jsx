import { motion } from 'framer-motion';
import { Layers, PenTool, Camera } from 'lucide-react';

const items = [
  {
    title: 'Medical Device Visualization',
    desc: 'Detailed 3D model and animation for electromedical equipment, focusing on precision and component clarity.',
    icon: Layers,
    color: 'from-emerald-400 to-teal-500',
    img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Product Rendering Series',
    desc: 'Studio-quality renders exploring materials, lighting and form for consumer electronics.',
    icon: PenTool,
    color: 'from-cyan-400 to-blue-600',
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Concept Art to 3D',
    desc: 'Translating sketches into interactive 3D scenes with clean topology and playful motion.',
    icon: Camera,
    color: 'from-fuchsia-400 to-violet-500',
    img: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-white/70"
          >
            A mix of technical and artistic projects showcasing a passion for precision, storytelling and playful interactions.
          </motion.p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-black`}>
                    <item.icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                <div className="mt-4 inline-flex items-center text-cyan-300/90 font-medium">
                  View details →
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-10 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
