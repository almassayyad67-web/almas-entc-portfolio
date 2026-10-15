import React, { useState } from 'react';
import { 
  GraduationCap, 
  Server, 
  Cloud, 
  Sparkles, 
  Heart,
  ShieldCheck,
  Zap,
  Boxes
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { catAudio } from '../utils/sound';
import { burstPaws } from '../utils/confetti';

const ICON_MAP = {
  GraduationCap,
  Server,
  Cloud,
};

export default function About() {
  const { about } = portfolioData;
  const [activePrinciple, setActivePrinciple] = useState(0);

  const handleCardClick = (e, index) => {
    catAudio.playPurr();
    const rect = e.currentTarget.getBoundingClientRect();
    burstPaws(rect.left / window.innerWidth + 0.1, rect.top / window.innerHeight);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-paw-100 text-paw-700 dark:bg-whisker-800 dark:text-paw-300 border border-paw-300 font-bold text-xs uppercase tracking-wider mb-3">
          <span>🐾 {about.badge}</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-whisker-800 dark:text-fur-100 mb-4">
          Nine Lives of <span className="wavy-underline">System Resilience</span>
        </h2>
        <p className="max-w-2xl text-whisker-500 dark:text-fur-300 text-sm sm:text-base leading-relaxed">
          Just like cats instinctively land on their feet, mission-critical distributed systems must absorb chaos, fail gracefully, and bounce right back into high-throughput action.
        </p>
      </div>

      {/* 3 Cat Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {about.stats.map((stat, idx) => {
          const IconComponent = ICON_MAP[stat.icon] || Server;
          return (
            <div
              key={stat.id}
              onClick={(e) => handleCardClick(e, idx)}
              className="glass-card rounded-3xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-bubbly group cursor-pointer border border-paw-200/80 dark:border-whisker-700 flex flex-col justify-between"
            >
              {/* Decorative cat trait corner stamp */}
              <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-fur-200 dark:bg-whisker-700 text-whisker-700 dark:text-fur-200 border border-paw-200 dark:border-whisker-600">
                {stat.catTrait}
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-paw-400 via-ginger-400 to-fur-300 flex items-center justify-center text-white mb-5 shadow-sm group-hover:rotate-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-xl text-whisker-800 dark:text-fur-100 mb-1">
                  {stat.title}
                </h3>
                <h4 className="text-xs font-semibold text-paw-600 dark:text-paw-400 uppercase tracking-wide mb-3">
                  {stat.subtitle}
                </h4>

                <p className="text-sm text-whisker-500 dark:text-fur-300 leading-relaxed mb-4">
                  {stat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-paw-100 dark:border-whisker-700 flex items-center justify-between text-xs font-bold text-cateye-700 dark:text-cateye-400">
                <span>{stat.highlight}</span>
                <span className="group-hover:translate-x-1 transition-transform">🐾</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cat Bio Narrative & Feline Philosophy Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Bio Narrative */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-paw-200/80 dark:border-whisker-700">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐱</span>
              <h3 className="font-display font-bold text-2xl text-whisker-800 dark:text-fur-100">
                The Story Behind the Whiskers
              </h3>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-whisker-500 dark:text-fur-300 leading-relaxed">
              {about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-paw-100 dark:border-whisker-700 flex flex-wrap gap-4 items-center justify-between text-xs font-semibold text-whisker-600 dark:text-fur-300">
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-paw-500 fill-paw-500" />
              <span>Dedicated cat petter & high-concurrency architect</span>
            </span>
            <span className="text-paw-500 font-bold">Pune, India 📍</span>
          </div>
        </div>

        {/* Right: Cat Philosophy Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-ginger-50 via-fur-50 to-paw-50 dark:from-whisker-900 dark:via-whisker-800 dark:to-whisker-900 rounded-3xl p-6 sm:p-8 border-2 border-ginger-200 dark:border-whisker-700 shadow-cozy flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-ginger-600 dark:text-ginger-400">
                Core Philosophy
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-ginger-100 dark:bg-whisker-700 text-whisker-700 dark:text-ginger-300 font-bold">
                🐾 Feline Code
              </span>
            </div>

            <h4 className="font-display font-bold text-xl text-whisker-800 dark:text-fur-100 mb-4">
              Engineering Principles
            </h4>

            <div className="space-y-3">
              {about.bakersPhilosophy.map((p, idx) => (
                <div
                  key={p.principle}
                  onClick={() => {
                    catAudio.playPop(620 + idx * 80);
                    setActivePrinciple(idx);
                  }}
                  className={`p-3.5 rounded-2xl transition-all cursor-pointer border ${
                    activePrinciple === idx
                      ? 'bg-white dark:bg-whisker-700 border-paw-400 dark:border-paw-500 shadow-sm scale-102'
                      : 'bg-white/60 dark:bg-whisker-800/60 border-ginger-200/60 dark:border-whisker-700 hover:bg-white/90'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-sm text-whisker-800 dark:text-fur-100 mb-1">
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-paw-100 dark:bg-paw-900/60 text-paw-600 text-xs flex items-center justify-center font-extrabold">
                        {idx + 1}
                      </span>
                      <span>{p.principle}</span>
                    </span>
                    {activePrinciple === idx && (
                      <span className="text-sm">🐾</span>
                    )}
                  </div>
                  <p className="text-xs text-whisker-500 dark:text-fur-300 pl-7 leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 text-[11px] text-center text-whisker-400 dark:text-fur-400 italic">
            "Code with curiosity, deploy with resilience, and always pet the cat."
          </div>
        </div>
      </div>
    </section>
  );
}
