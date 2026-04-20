import { motion } from 'motion/react';
import { Download, FileText, Eye, Award, Briefcase } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-28 bg-custom-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: '#6366f1' }}>05 — RESUME</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            My <span style={{ color: '#6366f1' }}>Resume</span>
          </h2>
          <div className="section-line" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-8 border gradient-border"
            style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
            <div className="flex items-center gap-5 mb-6 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'rgba(99,102,241,0.1)' }}>
                <FileText className="w-7 h-7" style={{ color: '#818cf8' }} />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>Jayantan AD</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Java Developer & Backend Enthusiast</p>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              {[
                { icon: <Award className="w-4 h-4" />, text: '61+ LeetCode problems solved', color: '#eab308' },
                { icon: <Briefcase className="w-4 h-4" />, text: 'B.E CSE student — Class of 2028', color: '#818cf8' },
                { icon: <FileText className="w-4 h-4" />, text: 'AI-powered project experience', color: '#34d399' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  <span style={{ color: item.color }}>{item.icon}</span>{item.text}
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Download my resume for a detailed overview of skills, projects, and education.
            </p>
            <div className="flex gap-3">
              <motion.a href="/Jayantan_AD_Resume.pdf" download="Jayantan_AD_Resume.pdf"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="btn-shimmer flex-1 px-5 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 text-sm"
                style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 0 25px rgba(99,102,241,0.25)' }}>
                <Download className="w-4 h-4" /> Download PDF
              </motion.a>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex-1 px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm border transition-colors hover:border-indigo-500/50"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', background: 'transparent' }}
                onClick={() => window.open('/Jayantan_AD_Resume.pdf', '_blank')}>
                <Eye className="w-4 h-4" /> Preview
              </motion.button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="relative">
            <div className="absolute inset-0 rounded-2xl rotate-3 scale-95 opacity-30"
              style={{ background: 'var(--color-card-bg)', border: '1px solid var(--color-border)' }} />
            <div className="relative rounded-2xl overflow-hidden border hover:rotate-0 transition-transform duration-500 group"
              style={{ background: '#fff', borderColor: 'var(--color-border)', transform: 'rotate(2deg)' }}>
              <div className="h-2" style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />
              <div className="p-8">
                <div className="mb-6 pb-5" style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <div className="h-6 w-40 rounded bg-gray-800 mb-2" />
                  <div className="h-3 w-56 rounded bg-gray-300" />
                  <div className="flex gap-3 mt-3">
                    <div className="h-2.5 w-24 rounded bg-gray-200" />
                    <div className="h-2.5 w-24 rounded bg-gray-200" />
                  </div>
                </div>
                {['EXPERIENCE', 'EDUCATION', 'SKILLS'].map((sec, si) => (
                  <div key={sec} className="mb-5">
                    <div className="h-2.5 w-24 rounded mb-3" style={{ background: si === 0 ? '#6366f1' : '#e2e8f0' }} />
                    <div className="space-y-1.5">
                      <div className="h-2 w-full rounded bg-gray-100" />
                      <div className="h-2 w-4/5 rounded bg-gray-100" />
                      <div className="h-2 w-3/4 rounded bg-gray-100" />
                    </div>
                  </div>
                ))}
                <div className="flex gap-2 flex-wrap">
                  {['Java', 'SQL', 'DSA', 'Git'].map(s => (
                    <div key={s} className="h-5 rounded-full px-3 flex items-center"
                      style={{ background: 'rgba(99,102,241,0.1)', width: `${s.length * 10 + 16}px` }}>
                      <div className="h-1.5 w-full rounded" style={{ background: '#818cf8' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                style={{ background: 'rgba(6,8,16,0.6)', backdropFilter: 'blur(4px)' }}>
                <span className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold" style={{ background: '#6366f1' }}>
                  View Resume
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
