import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Loader2, Phone } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

type FormData = { name: string; email: string; message: string };

const socials = [
  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'adjayantan2007@gmail.com', href: 'mailto:adjayantan2007@gmail.com', color: '#818cf8' },
  { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '8610852612', href: 'tel:8610852612', color: '#34d399' },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'Jayantan AD', href: 'https://www.linkedin.com/in/ad-jayantan-766886320', color: '#38bdf8' },
  { icon: <Github className="w-5 h-5" />, label: 'GitHub', value: 'github.com/ADjayantan', href: 'https://github.com/ADjayantan', color: '#a78bfa' },
];

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      if (!db) {
        await new Promise(r => setTimeout(r, 1000));
        setSubmitStatus('success');
        reset();
        return;
      }
      await addDoc(collection(db, 'contacts'), { ...data, createdAt: serverTimestamp() });
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-custom-bg relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: '#6366f1' }}>06 — CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Get In <span style={{ color: '#6366f1' }}>Touch</span>
          </h2>
          <div className="section-line" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--color-text-muted)' }}>
              I'm looking for internships and entry-level opportunities. Whether you have a question,
              a project idea, or just want to say hi — my inbox is always open.
            </p>
            <div className="space-y-3">
              {socials.map((s, i) => (
                <motion.a key={i} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:-translate-y-0.5"
                  style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${s.color}40`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'; }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.color}12`, color: s.color }}>{s.icon}</div>
                  <div>
                    <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
                    <p className="font-medium text-sm" style={{ color: 'var(--color-text)' }}>{s.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl p-8 border gradient-border"
            style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {[
                { id: 'name', label: 'Your Name', placeholder: 'Jayantan AD', type: 'text',
                  reg: register('name', { required: 'Name is required' }), error: errors.name },
                { id: 'email', label: 'Email Address', placeholder: 'you@example.com', type: 'email',
                  reg: register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } }),
                  error: errors.email },
              ].map(f => (
                <div key={f.id}>
                  <label className="block text-xs font-mono tracking-wider mb-2" style={{ color: 'var(--color-text-muted)' }}>
                    {f.label.toUpperCase()}
                  </label>
                  <input {...f.reg} type={f.type} placeholder={f.placeholder}
                    className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-all"
                    style={{ background: 'var(--color-bg)', borderColor: f.error ? '#f43f5e' : 'var(--color-border)', color: 'var(--color-text)' }}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = '#6366f1'; (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'; }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = 'var(--color-border)'; (e.target as HTMLElement).style.boxShadow = 'none'; }}
                  />
                  {f.error && <p className="text-xs mt-1.5" style={{ color: '#f43f5e' }}>{f.error.message}</p>}
                </div>
              ))}
              <div>
                <label className="block text-xs font-mono tracking-wider mb-2" style={{ color: 'var(--color-text-muted)' }}>MESSAGE</label>
                <textarea {...register('message', { required: 'Message is required' })}
                  rows={4} placeholder="How can I help you?"
                  className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-all resize-none"
                  style={{ background: 'var(--color-bg)', borderColor: errors.message ? '#f43f5e' : 'var(--color-border)', color: 'var(--color-text)' }}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = '#6366f1'; (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'; }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = 'var(--color-border)'; (e.target as HTMLElement).style.boxShadow = 'none'; }}
                />
                {errors.message && <p className="text-xs mt-1.5" style={{ color: '#f43f5e' }}>{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting}
                className="btn-shimmer w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 0 25px rgba(99,102,241,0.25)' }}>
                {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> : <><Send className="w-4 h-4" />Send Message</>}
              </button>
              {submitStatus === 'success' && (
                <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center py-3 rounded-xl border"
                  style={{ color: '#34d399', background: 'rgba(52,211,153,0.08)', borderColor: 'rgba(52,211,153,0.2)' }}>
                  ✓ Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center py-3 rounded-xl border"
                  style={{ color: '#f43f5e', background: 'rgba(244,63,94,0.08)', borderColor: 'rgba(244,63,94,0.2)' }}>
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
