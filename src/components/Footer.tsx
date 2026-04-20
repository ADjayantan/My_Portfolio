import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="border-t py-12" style={{ background: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="hero" smooth duration={500} className="cursor-pointer flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white"
              style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>J</div>
            <span className="font-bold text-base" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}>
              Jayantan<span style={{ color: '#6366f1' }}>.dev</span>
            </span>
          </Link>
          <p className="text-xs font-mono text-center" style={{ color: 'var(--color-text-muted)' }}>
            © 2026 Jayantan AD — Built with React & hosted on Firebase
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: <Github className="w-4 h-4" />, href: 'https://github.com/ADjayantan' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/ad-jayantan-766886320' },
              { icon: <Mail className="w-4 h-4" />, href: 'mailto:adjayantan2007@gmail.com' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all hover:border-indigo-500/50 hover:text-indigo-400"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
