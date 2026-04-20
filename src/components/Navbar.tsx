import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Resume', to: 'resume' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 border-b' : 'py-5'}`}
      style={{
        background: scrolled ? 'rgba(6,8,16,0.85)' : 'transparent',
        borderColor: scrolled ? 'var(--color-border)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="hero" smooth duration={500} className="cursor-pointer flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
            J
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>
            Jayantan<span style={{ color: '#6366f1' }}>.dev</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth duration={500} offset={-70}
              spy onSetActive={() => setActive(link.to)}
              className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer"
              style={{ color: active === link.to ? 'var(--color-text)' : 'var(--color-text-muted)' }}
            >
              {active === link.to && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                />
              )}
              <span className="relative">{link.name}</span>
            </Link>
          ))}
          <Link to="contact" smooth duration={500}
            className="btn-shimmer ml-4 px-5 py-2 rounded-lg text-sm font-semibold text-white cursor-pointer transition-all"
            style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}
          >
            Hire Me
          </Link>
        </div>

        <button className="md:hidden p-2 rounded-lg border transition-colors"
          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
            style={{ background: 'rgba(6,8,16,0.95)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.to} smooth duration={500} offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
