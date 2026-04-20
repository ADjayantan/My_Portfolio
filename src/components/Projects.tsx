import { motion } from 'motion/react';
import { ExternalLink, Bot, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Web Application Builder',
    subtitle: 'Google AI Studio Project',
    description: 'Developed an AI-powered web application using Google AI Studio to automate user interaction and generate intelligent responses based on user input.',
    icon: <Bot className="w-8 h-8" />,
    iconColor: '#818cf8',
    iconBg: 'rgba(129,140,248,0.1)',
    features: ['Interactive AI response system', 'Prompt-driven application logic', 'Web-based deployment', 'Real-time interaction'],
    tech: ['Google AI Studio', 'Gemini AI', 'Prompt Engineering', 'Web Deployment'],
    link: 'https://aistudio.google.com/apps/drive/1BJsHgyfNAczkOZ-VI26-euaxdqrlr2dj?showPreview=true&showAssistant=true',
    status: 'Live',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-custom-bg relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: '#6366f1' }}>03 — PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Featured <span style={{ color: '#6366f1' }}>Projects</span>
          </h2>
          <div className="section-line" />
        </motion.div>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="gradient-border card-lift rounded-2xl overflow-hidden border"
              style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 p-10 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r overflow-hidden"
                  style={{ borderColor: 'var(--color-border)', background: 'rgba(99,102,241,0.03)' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 opacity-20" />
                  <div className="absolute inset-0 dot-grid opacity-30" />
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 border"
                      style={{ background: project.iconBg, color: project.iconColor, borderColor: 'rgba(99,102,241,0.2)' }}>
                      {project.icon}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                      style={{ background: 'rgba(52,211,153,0.1)', borderColor: 'rgba(52,211,153,0.3)', color: '#34d399' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <p className="text-xs font-mono tracking-wider mb-2" style={{ color: '#818cf8' }}>{project.subtitle}</p>
                      <h3 className="text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>{project.title}</h3>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border transition-all hover:bg-indigo-600 hover:border-indigo-600 hover:text-white"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>{project.description}</p>
                  <div className="mb-6">
                    <p className="text-xs font-mono tracking-wider mb-3" style={{ color: 'var(--color-text-muted)' }}>KEY FEATURES</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#06b6d4' }} />{f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="px-3 py-1 rounded-lg text-xs font-medium border skill-tag"
                        style={{ background: 'rgba(99,102,241,0.05)', borderColor: 'rgba(99,102,241,0.2)', color: 'var(--color-text-muted)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }} className="text-center mt-10">
          <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>More projects on GitHub</p>
          <a href="https://github.com/ADjayantan" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border text-sm font-medium transition-all hover:border-indigo-500/50 hover:text-indigo-400"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
            <Globe className="w-4 h-4" /> github.com/ADjayantan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
