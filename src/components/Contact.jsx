import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-black p-8 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h3 className="text-3xl font-bold text-white">Let’s build something remarkable</h3>
            <p className="mt-3 text-white/70">
              Open to freelance work, collaborations and full-time opportunities. Tell me about your idea, product, or team.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:email@example.com" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-semibold">
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-medium">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-medium">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-blue-600/20 blur-2xl" />
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Muhammad Rizqy Firmansyah. All rights reserved.</p>
      </div>
    </section>
  );
}
