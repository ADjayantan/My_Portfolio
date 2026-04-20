import { motion } from 'motion/react';
import { Github, Code2, Terminal, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function CircularProgress({ solved, total, color, label }: { solved: number; total: number; color: string; label: string }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animated ? ((solved / total) * circumference) : 0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
          <circle cx="40" cy="40" r={radius} fill="none" strokeWidth="6" style={{ stroke: 'var(--color-card-bg)' }} />
          <circle cx="40" cy="40" r={radius} fill="none" strokeWidth="6" stroke={color}
            strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
            className="progress-ring-circle" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold font-mono" style={{ color: 'var(--color-text)' }}>{solved}</span>
        </div>
      </div>
      <span className="text-xs font-medium" style={{ color }}>{label}</span>
    </div>
  );
}

export default function CodingProfiles() {
  return (
    <section className="py-28 relative overflow-hidden border-y"
      style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: '#6366f1' }}>04 — PROFILES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Coding <span style={{ color: '#6366f1' }}>Profiles</span>
          </h2>
          <div className="section-line" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* LeetCode */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="gradient-border card-lift rounded-2xl p-8 border"
            style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(234,179,8,0.12)' }}>
                  <Code2 className="w-6 h-6" style={{ color: '#eab308' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>LeetCode</h3>
                  <p className="text-sm font-mono" style={{ color: 'var(--color-text-muted)' }}>@jayantan</p>
                </div>
              </div>
              <a href="https://leetcode.com/u/jayantan/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border"
                style={{ borderColor: 'var(--color-border)', color: '#eab308' }}>
                Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[{ v: '61', l: 'Solved' }, { v: '2.1M', l: 'Rank' }, { v: '124', l: 'Submissions' }].map(s => (
                <div key={s.l} className="rounded-xl p-4 text-center border"
                  style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
                  <div className="text-xl font-bold font-mono mb-0.5" style={{ color: 'var(--color-text)' }}>{s.v}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-around mb-8 py-4 rounded-xl border"
              style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
              <CircularProgress solved={59} total={929} color="#34d399" label="Easy" />
              <CircularProgress solved={1} total={2018} color="#eab308" label="Medium" />
              <CircularProgress solved={1} total={912} color="#f43f5e" label="Hard" />
            </div>
            <div className="space-y-3">
              {[
                { label: 'Easy', solved: 59, total: 929, color: '#34d399' },
                { label: 'Medium', solved: 1, total: 2018, color: '#eab308' },
                { label: 'Hard', solved: 1, total: 912, color: '#f43f5e' },
              ].map(item => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>
                    <span style={{ color: item.color }}>{item.label}</span>
                    <span className="font-mono">{item.solved} / {item.total}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--color-card-bg)' }}>
                    <motion.div className="h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.max((item.solved / item.total) * 100, 0.3)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      style={{ background: item.color, minWidth: '3px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="gradient-border card-lift rounded-2xl p-8 border flex-1"
              style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'var(--color-border)' }}>
                    <Github className="w-6 h-6" style={{ color: 'var(--color-text)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>GitHub</h3>
                    <p className="text-sm font-mono" style={{ color: 'var(--color-text-muted)' }}>@ADjayantan</p>
                  </div>
                </div>
                <a href="https://github.com/ADjayantan" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                  Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl mb-5 border"
                style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Contributions this year</span>
                <span className="text-2xl font-bold font-mono" style={{ color: '#34d399' }}>22</span>
              </div>
              <p className="text-xs font-mono tracking-wider mb-3" style={{ color: 'var(--color-text-muted)' }}>REPOSITORIES</p>
              <div className="space-y-2.5">
                {[
                  { name: 'AD-Jayantan-', lang: 'HTML', dot: '#f97316', desc: 'Portfolio & personal projects' },
                  { name: 'Jayantan-', lang: 'TypeScript', dot: '#3b82f6', desc: 'AI voice assistance' },
                  { name: 'java-master', lang: 'Java', dot: '#f97316', desc: 'Learning Java fundamentals' },
                ].map((repo) => (
                  <a key={repo.name} href={`https://github.com/ADjayantan/${repo.name}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border transition-all hover:border-indigo-500/30"
                    style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#818cf8' }}>{repo.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{repo.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      <span className="w-2 h-2 rounded-full" style={{ background: repo.dot }} />{repo.lang}
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="gradient-border card-lift rounded-2xl p-6 border flex items-center gap-5 cursor-pointer group"
              style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(52,211,153,0.1)' }}>
                <Terminal className="w-6 h-6" style={{ color: '#34d399' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-0.5" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>HackerRank</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Problem solving & certifications</p>
              </div>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#34d399' }} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
