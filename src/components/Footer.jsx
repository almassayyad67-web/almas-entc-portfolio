import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { catAudio } from '../utils/sound';
import { burstPaws } from '../utils/confetti';

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    catAudio.playPurr();
    burstPaws(0.5, 0.9);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-paw-200/80 dark:border-whisker-800 bg-fur-50/70 dark:bg-whisker-900/70 backdrop-blur-md pt-12 pb-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-2xl">🐾</span>
            <span className="font-display font-extrabold text-xl text-whisker-800 dark:text-fur-100">
              Almas Sayyad
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-paw-100 text-paw-700 dark:bg-whisker-800 dark:text-paw-300 font-bold border border-paw-200 dark:border-whisker-700">
              Neko v2.0 🐱
            </span>
          </div>
          <p className="text-xs text-whisker-500 dark:text-fur-300 max-w-sm">
            Purr-fecting distributed systems, resilient Kafka streams, and Kubernetes microservices with feline agility.
          </p>
        </div>

        {/* Quick Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-whisker-600 dark:text-fur-200">
          <a href="#about" onClick={() => catAudio.playPop(500)} className="hover:text-paw-500 transition-colors">
            About 🐱
          </a>
          <span>•</span>
          <a href="#skills" onClick={() => catAudio.playPop(550)} className="hover:text-paw-500 transition-colors">
            Tech Arsenal 🐾
          </a>
          <span>•</span>
          <a href="#projects" onClick={() => catAudio.playPop(600)} className="hover:text-paw-500 transition-colors">
            Top Catches 🐟
          </a>
          <span>•</span>
          <a href="#hobbies" onClick={() => catAudio.playPop(650)} className="hover:text-paw-500 transition-colors">
            Playtime 🧶
          </a>
          <span>•</span>
          <a href="#contact" onClick={() => catAudio.playPop(700)} className="hover:text-paw-500 transition-colors">
            Contact 💌
          </a>
        </div>

        {/* Back to top Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full paw-btn text-white shadow-paw group cursor-pointer"
            title="Back to Top of Scratching Post"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-paw-100 dark:border-whisker-800 text-center flex flex-col sm:flex-row items-center justify-between text-[11px] text-whisker-400 dark:text-fur-400 gap-2">
        <div>
          © {new Date().getFullYear()} Almas Sayyad. Dedicated to resilient code & beloved feline friends.
        </div>
        <div className="flex items-center gap-1.5 font-medium">
          <span>Freshly built with</span>
          <span className="text-paw-500">🐾</span>
          <span>• React • Tailwind CSS • 3D Three.js Cat • Canvas Paws</span>
        </div>
      </div>
    </footer>
  );
}
