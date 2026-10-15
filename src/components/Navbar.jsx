import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  FileText,
  Heart
} from 'lucide-react';
import { burstPaws } from '../utils/confetti';
import { catAudio } from '../utils/sound';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  extraPaws, 
  setExtraPaws, 
  soundEnabled, 
  setSoundEnabled,
  onOpenResume
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: '🐱' },
    { name: 'Skills', href: '#skills', icon: '🐾' },
    { name: 'Projects', href: '#projects', icon: '🐟' },
    { name: 'Hobbies', href: '#hobbies', icon: '🧶' },
    { name: 'Contact', href: '#contact', icon: '💌' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    catAudio.playPop(580);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePawToggle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    burstPaws(rect.left / window.innerWidth, rect.top / window.innerHeight);
    catAudio.playPurr();
    setExtraPaws(!extraPaws);
  };

  const handleThemeToggle = () => {
    catAudio.playPop(660);
    setDarkMode(!darkMode);
  };

  const handleSoundToggle = () => {
    const next = catAudio.toggle();
    setSoundEnabled(next);
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-8 max-w-6xl mx-auto">
      <nav 
        className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'glass-card shadow-bubbly border-paw-200/90 dark:border-paw-900/40 bg-white/85 dark:bg-whisker-900/85' 
            : 'bg-white/65 dark:bg-whisker-900/65 backdrop-blur-md border border-white/70 dark:border-whisker-800 shadow-cozy'
        }`}
      >
        {/* Brand / Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            catAudio.playPurr();
            burstPaws(0.2, 0.1);
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-paw-400 to-ginger-400 flex items-center justify-center text-lg shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            🐾
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl text-whisker-800 dark:text-fur-100 tracking-tight group-hover:text-paw-600 transition-colors">
              Almas<span className="text-paw-500">.dev</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest font-semibold text-whisker-400 dark:text-fur-400 -mt-1 hidden sm:block">
              Neko Backend Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-whisker-600 dark:text-fur-200 hover:text-paw-600 dark:hover:text-paw-400 hover:bg-paw-50/80 dark:hover:bg-whisker-800 transition-all duration-200 flex items-center gap-1.5"
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Extra Paws Falling Toggle */}
          <button
            onClick={handlePawToggle}
            title={extraPaws ? "Disable falling paws & yarn" : "Enable extra falling paws & yarn!"}
            className={`p-2 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
              extraPaws
                ? 'bg-paw-500 text-white shadow-paw scale-105 animate-pulse'
                : 'cozy-btn text-paw-600 dark:text-paw-300'
            }`}
          >
            <span>🐾</span>
            <span className="hidden lg:inline text-[11px]">
              {extraPaws ? 'Paws ON' : 'Extra Paws'}
            </span>
          </button>

          {/* Audio Purr FX Toggle */}
          <button
            onClick={handleSoundToggle}
            title={soundEnabled ? "Mute purrs & chirps" : "Enable cute cat purrs & chirps (Web Audio)"}
            className="p-2 rounded-full cozy-btn text-whisker-600 dark:text-fur-200"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cateye-600 dark:text-cateye-400 animate-wiggle" />
            ) : (
              <VolumeX className="w-4 h-4 opacity-60" />
            )}
          </button>

          {/* Dark / Light Midnight Cat Mode Toggle */}
          <button
            onClick={handleThemeToggle}
            title={darkMode ? "Switch to Cozy Warm Fur Light Mode" : "Switch to Midnight Cat Dark Mode"}
            className="p-2 rounded-full cozy-btn text-whisker-700 dark:text-ginger-300 hover:text-paw-500"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Quick Resume Button */}
          <button
            onClick={() => {
              catAudio.playPurr();
              onOpenResume();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold paw-btn text-white"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              catAudio.playPop(500);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-full cozy-btn text-whisker-700 dark:text-fur-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-3xl glass-card shadow-bubbly flex flex-col gap-2 border border-paw-200 dark:border-whisker-700 animate-bounce-soft">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2.5 rounded-2xl text-sm font-bold text-whisker-700 dark:text-fur-100 hover:bg-paw-100/60 dark:hover:bg-whisker-800 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </span>
              <span className="text-xs text-paw-500">🐾</span>
            </a>
          ))}
          <div className="pt-2 border-t border-paw-200/50 dark:border-whisker-700 flex justify-between items-center">
            <span className="text-xs font-semibold text-whisker-500 dark:text-fur-300">
              Curriculum Vitae
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                catAudio.playPurr();
                onOpenResume();
              }}
              className="px-4 py-1.5 rounded-full text-xs font-bold paw-btn text-white flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
