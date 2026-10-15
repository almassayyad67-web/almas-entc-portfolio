import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PawRain from './components/PawRain';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [extraPaws, setExtraPaws] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Sync dark mode with root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-paw-pattern relative selection:bg-paw-300 selection:text-white transition-colors duration-300">
      {/* Ambient Falling Paws, Yarn & Stars Overlay */}
      <PawRain active={extraPaws} />

      {/* Floating Cat Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        extraPaws={extraPaws}
        setExtraPaws={setExtraPaws}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
      </main>

      {/* Cat-Themed Footer */}
      <Footer />

      {/* Resume Viewer & Downloader Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
