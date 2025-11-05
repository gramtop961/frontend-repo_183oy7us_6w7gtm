import { useState, useEffect } from 'react';
import { Rocket, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const Item = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-black">
            <Rocket className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-white font-semibold">Muhammad Rizqy</p>
            <p className="text-xs text-white/60">Electromedical | 3D Designer</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <Item href="#about">About</Item>
          <Item href="#projects">Work</Item>
          <Item href="#contact">Contact</Item>
          <div className="ml-2 hidden lg:flex items-center gap-2">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a aria-label="Email" href="#contact" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/10 text-white">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            <Item href="#about">About</Item>
            <Item href="#projects">Work</Item>
            <Item href="#contact">Contact</Item>
            <div className="mt-2 flex items-center gap-3 px-4 pb-3">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
