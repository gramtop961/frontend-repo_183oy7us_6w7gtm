import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for freelance & collaboration
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Muhammad Rizqy Firmansyah
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-xl">
              Electromedical Engineering graduate and 3D designer crafting interactive, modern experiences that blend precision with creativity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20">
                Explore Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="/Muhammad_Rizqy_Firmansyah_CV.pdf" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-5 py-3 font-medium text-white/90">
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[65vh] min-h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-black"
          >
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[5%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl" />
      </div>
    </section>
  );
}
