import { motion } from 'motion/react';
import { Terminal, Cpu, Code, Layers } from 'lucide-react';

const interests = [
  { icon: <Terminal className="w-5 h-5" />, title: 'Backend Development', desc: 'Building scalable server-side systems', color: '#6366f1' },
  { icon: <Cpu className="w-5 h-5" />, title: 'Algorithm Optimization', desc: 'Finding the most efficient solutions', color: '#06b6d4' },
  { icon: <Code className="w-5 h-5" />, title: 'AI-Assisted Apps', desc: 'Leveraging AI to build smarter tools', color: '#a78bfa' },
  { icon: <Layers className="w-5 h-5" />, title: 'Clean Code Practices', desc: 'Writing readable, maintainable code', color: '#34d399' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-custom-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: '#6366f1' }}>01 — ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            About <span style={{ color: '#6366f1' }}>Me</span>
          </h2>
          <div className="section-line" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-lg leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>
              I am an aspiring software developer focused on{' '}
              <span style={{ color: '#818cf8' }} className="font-medium">Java programming</span>,{' '}
              <span style={{ color: '#818cf8' }} className="font-medium">Data Structures & Algorithms</span>, and
              application development. I enjoy solving logical problems and building systems that automate real-world tasks.
            </p>
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--color-text-muted)' }}>
              Currently improving problem-solving through consistent coding practice while developing projects
              using modern tools and AI-assisted development platforms.
            </p>
            <div className="rounded-xl p-6 border gradient-border"
              style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(99,102,241,0.12)' }}>
                  <span style={{ color: '#818cf8' }} className="text-lg">🎓</span>
                </div>
                <div>
                  <p className="text-xs font-mono tracking-wider mb-2" style={{ color: 'var(--color-text-muted)' }}>EDUCATION</p>
                  <h4 className="font-bold text-lg mb-1" style={{ color: 'var(--color-text)', fontFamily: 'Syne, sans-serif' }}>
                    B.E Computer Science Engineering
                  </h4>
                  <p className="text-sm font-medium mb-1" style={{ color: '#818cf8' }}>
                    VSB College of Engineering Technical Campus
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Sept 2024 — May 2028 · Currently Enrolled
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="gradient-border card-lift rounded-xl p-5 border cursor-default"
                style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1.5" style={{ color: 'var(--color-text)', fontFamily: 'Syne, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
