import { motion } from 'motion/react';

const skillCategories = [
  {
    label: 'Languages', color: '#6366f1', icon: '⌨️',
    skills: [
      { name: 'Java', level: 80, dot: '#f97316' },
      { name: 'JavaScript', level: 60, dot: '#fde047' },
      { name: 'SQL', level: 70, dot: '#38bdf8' },
    ],
  },
  {
    label: 'CS Fundamentals', color: '#06b6d4', icon: '🧠',
    skills: [
      { name: 'Data Structures & Algorithms', level: 75, dot: '#818cf8' },
      { name: 'Object-Oriented Programming', level: 80, dot: '#34d399' },
      { name: 'DBMS', level: 65, dot: '#fb923c' },
      { name: 'Operating Systems', level: 60, dot: '#c084fc' },
    ],
  },
  {
    label: 'Tools & Tech', color: '#a78bfa', icon: '🔧',
    skills: [
      { name: 'Git & GitHub', level: 75, dot: '#f43f5e' },
      { name: 'Google AI Studio', level: 70, dot: '#4ade80' },
      { name: 'REST APIs', level: 65, dot: '#38bdf8' },
      { name: 'Linux', level: 55, dot: '#fbbf24' },
      { name: 'VS Code', level: 85, dot: '#60a5fa' },
      { name: 'IntelliJ IDEA', level: 75, dot: '#f472b6' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden" style={{ background: 'var(--color-card-bg)' }}>
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: '#6366f1' }}>02 — SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Technical <span style={{ color: '#6366f1' }}>Skills</span>
          </h2>
          <div className="section-line" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div key={ci} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="gradient-border card-lift rounded-2xl p-7 border"
              style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-3 mb-6 pb-5 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${cat.color}15` }}>{cat.icon}</div>
                <h3 className="font-bold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>{cat.label}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <motion.div key={si} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: ci * 0.15 + si * 0.08 }}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: skill.dot }} />
                        <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--color-card-bg)' }}>
                      <motion.div className="h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.15 + si * 0.08, ease: 'easeOut' }}
                        style={{ background: `linear-gradient(90deg, ${cat.color}, ${skill.dot})` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3 justify-center">
          {['Java', 'JavaScript', 'SQL', 'DSA', 'OOP', 'Git', 'REST APIs', 'Linux', 'AI Studio', 'Firebase'].map(tag => (
            <span key={tag} className="skill-tag px-4 py-2 rounded-full text-sm font-medium border"
              style={{ background: 'rgba(99,102,241,0.05)', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
