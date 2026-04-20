import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    const handleScroll = () => {
      if (!bar) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${(scrolled / total) * 100}%`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-custom-bg min-h-screen text-custom-text font-sans transition-colors duration-700">
      <div id="scroll-progress" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
