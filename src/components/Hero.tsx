import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = ['Java Developer', 'Backend Engineer', 'Problem Solver', 'DSA Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-custom-bg dot-grid pt-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-sm font-medium"
              style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.3)', color: '#818cf8' }}>
              <Sparkles className="w-3.5 h-3.5" />
              Available for Opportunities
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Hi, I'm<br />
              <span style={{ background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Jayantan AD
              </span>
            </h1>

            <div className="text-xl md:text-2xl font-mono mb-6 h-8 flex items-center"
              style={{ color: 'var(--color-text-muted)' }}>
              <span style={{ color: '#06b6d4' }}>{'> '}</span>
              <span className="typewriter-cursor ml-1">{displayed}</span>
            </div>

            <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
              I build practical applications and AI-powered tools while strengthening
              expertise in <span style={{ color: '#818cf8' }}>Data Structures</span>,{' '}
              <span style={{ color: '#22d3ee' }}>Algorithms</span>, and backend development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="projects" smooth duration={500} offset={-70}
                className="btn-shimmer px-8 py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 cursor-pointer group"
                style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}>
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="/Jayantan_AD_Resume.pdf" download
                className="btn-shimmer px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 border cursor-pointer"
                style={{ background: 'rgba(99,102,241,0.06)', borderColor: 'rgba(99,102,241,0.3)', color: 'var(--color-text)' }}>
                <Download className="w-4 h-4" /> Resume
              </a>
              <Link to="contact" smooth duration={500} offset={-70}
                className="px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer hover:border-cyan-500/50 hover:text-cyan-400"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                <Mail className="w-4 h-4" /> Contact
              </Link>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="flex gap-8 mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
              {[{ value: '61+', label: 'LeetCode Solved' }, { value: '3+', label: 'Projects Built' }, { value: '1+', label: 'Year Coding' }].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#818cf8' }}>{stat.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }} className="hidden md:block relative">
            <div className="absolute inset-4 rounded-2xl blur-2xl opacity-30"
              style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }} />
            <div className="relative rounded-2xl overflow-hidden border"
              style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
              <div className="flex items-center justify-between px-5 py-3.5 border-b"
                style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.02)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>Developer.java</span>
                <div className="w-16" />
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed space-y-1">
                <div><span style={{ color: '#c084fc' }}>public class</span> <span style={{ color: '#fde68a' }}>Developer</span> <span style={{ color: '#64748b' }}>{'{'}</span></div>
                <div className="pl-6"><span style={{ color: '#c084fc' }}>private</span> <span style={{ color: '#67e8f9' }}>String</span> <span style={{ color: 'var(--color-text)' }}>name</span> = <span style={{ color: '#86efac' }}>"Jayantan AD"</span>;</div>
                <div className="pl-6"><span style={{ color: '#c084fc' }}>private</span> <span style={{ color: '#67e8f9' }}>String</span> <span style={{ color: 'var(--color-text)' }}>role</span> = <span style={{ color: '#86efac' }}>"Backend Dev"</span>;</div>
                <div className="pl-6"><span style={{ color: '#c084fc' }}>private</span> <span style={{ color: '#67e8f9' }}>String[]</span> <span style={{ color: 'var(--color-text)' }}>stack</span> = <span style={{ color: '#64748b' }}>{'{'}</span></div>
                <div className="pl-10"><span style={{ color: '#86efac' }}>"Java"</span>, <span style={{ color: '#86efac' }}>"DSA"</span>, <span style={{ color: '#86efac' }}>"SQL"</span></div>
                <div className="pl-6"><span style={{ color: '#64748b' }}>{'};'}</span></div>
                <div className="mt-3 pl-6"><span style={{ color: '#c084fc' }}>public</span> <span style={{ color: '#67e8f9' }}>boolean</span> <span style={{ color: '#fde68a' }}>solveProblem</span>() <span style={{ color: '#64748b' }}>{'{'}</span></div>
                <div className="pl-10"><span style={{ color: '#64748b' }}>// Think → Code → Optimize</span></div>
                <div className="pl-10"><span style={{ color: '#c084fc' }}>return</span> <span style={{ color: '#fb923c' }}>true</span>;</div>
                <div className="pl-6"><span style={{ color: '#64748b' }}>{'}'}</span></div>
                <div className="mt-3 pl-6"><span style={{ color: '#c084fc' }}>public</span> <span style={{ color: '#67e8f9' }}>String</span> <span style={{ color: '#fde68a' }}>getStatus</span>() <span style={{ color: '#64748b' }}>{'{'}</span></div>
                <div className="pl-10"><span style={{ color: '#c084fc' }}>return</span> <span style={{ color: '#86efac' }}>"Open to Work 🚀"</span>;</div>
                <div className="pl-6"><span style={{ color: '#64748b' }}>{'}'}</span></div>
                <div><span style={{ color: '#64748b' }}>{'}'}</span></div>
              </div>
              <div className="flex items-center gap-3 px-5 py-2.5 border-t text-xs font-mono"
                style={{ borderColor: 'var(--color-border)', background: 'rgba(99,102,241,0.08)', color: 'var(--color-text-muted)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Java • UTF-8 • Ln 17, Col 1
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
