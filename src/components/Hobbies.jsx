import React, { useState } from 'react';
import { 
  Gamepad2, 
  Mic2, 
  BookOpen, 
  Sparkles, 
  Music, 
  Trophy, 
  BookmarkCheck,
  Heart
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { catAudio } from '../utils/sound';
import { burstPaws } from '../utils/confetti';

const ICON_MAP = {
  Gamepad2,
  Mic2,
  BookOpen,
};

export default function Hobbies() {
  const { hobbies } = portfolioData;
  const [gamingLevel, setGamingLevel] = useState(42);
  const [melodyPlaying, setMelodyPlaying] = useState(false);
  const [readingBookmarks, setReadingBookmarks] = useState(3);

  const handleGamingClick = (e) => {
    catAudio.playPop(850);
    setGamingLevel((prev) => prev + 1);
    const rect = e.currentTarget.getBoundingClientRect();
    burstPaws(rect.left / window.innerWidth + 0.1, rect.top / window.innerHeight);
  };

  const handleSingingClick = (e) => {
    setMelodyPlaying(true);
    catAudio.playPurr();
    catAudio.playChime();
    const rect = e.currentTarget.getBoundingClientRect();
    burstPaws(rect.left / window.innerWidth + 0.1, rect.top / window.innerHeight);
    setTimeout(() => setMelodyPlaying(false), 900);
  };

  const handleReadingClick = (e) => {
    catAudio.playPop(620);
    setReadingBookmarks((prev) => prev + 1);
    const rect = e.currentTarget.getBoundingClientRect();
    burstPaws(rect.left / window.innerWidth + 0.1, rect.top / window.innerHeight);
  };

  return (
    <section id="hobbies" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-yarn-100 text-yarn-700 dark:bg-whisker-800 dark:text-yarn-300 border border-yarn-300 font-bold text-xs uppercase tracking-wider mb-3">
          <span>🧶 Playtime & Cat Naps</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-whisker-800 dark:text-fur-100 mb-4">
          Beyond the <span className="wavy-underline">Terminal Post</span>
        </h2>
        <p className="max-w-2xl text-whisker-500 dark:text-fur-300 text-sm sm:text-base leading-relaxed">
          When the servers are purring steadily, creative energy flows into tactical gaming, musical melodies, and curled-up reading sessions.
        </p>
      </div>

      {/* 3 Hobbies Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hobbies.map((hobby) => {
          const IconComponent = ICON_MAP[hobby.icon] || Sparkles;
          
          return (
            <div
              key={hobby.id}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-paw-200/80 dark:border-whisker-700 shadow-cozy relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-bubbly group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-paw-400 via-ginger-400 to-yarn-300 text-white flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-fur-200 dark:bg-whisker-800 text-whisker-600 dark:text-fur-300 border border-paw-200 dark:border-whisker-700">
                    {hobby.catPairing}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-paw-600 dark:text-paw-400 uppercase tracking-wider mb-1">
                  {hobby.tag}
                </div>
                <h3 className="font-display font-bold text-2xl text-whisker-800 dark:text-fur-100 mb-3">
                  {hobby.title}
                </h3>
                <p className="text-sm text-whisker-500 dark:text-fur-300 leading-relaxed mb-5">
                  {hobby.description}
                </p>

                {/* Favorite Picks Tags */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-xs font-bold text-whisker-600 dark:text-fur-200">
                    Favorites & Genres:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hobby.favoritePicks.map((pick) => (
                      <span
                        key={pick}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/70 dark:bg-whisker-700/70 border border-paw-100 dark:border-whisker-600 text-whisker-600 dark:text-fur-200"
                      >
                        • {pick}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Unique Interactive Feature on each card */}
              <div className="pt-4 border-t border-paw-100 dark:border-whisker-700">
                {hobby.id === 'gaming' && (
                  <button
                    onClick={handleGamingClick}
                    className="w-full py-2.5 px-4 rounded-2xl cozy-btn font-bold text-xs text-whisker-700 dark:text-fur-100 flex items-center justify-between group/btn cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-ginger-500" />
                      <span>Level: {gamingLevel}</span>
                    </span>
                    <span className="text-paw-500 font-extrabold group-hover/btn:translate-x-1 transition-transform">
                      +1 Exp 🎮
                    </span>
                  </button>
                )}

                {hobby.id === 'singing' && (
                  <button
                    onClick={handleSingingClick}
                    className="w-full py-2.5 px-4 rounded-2xl paw-btn font-bold text-xs text-white flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Music className={`w-4 h-4 ${melodyPlaying ? 'animate-bounce' : ''}`} />
                      <span>{melodyPlaying ? 'Purring & Chanting...' : 'Sing Melody'}</span>
                    </span>
                    <span className="text-white font-extrabold">
                      🎵 Purr
                    </span>
                  </button>
                )}

                {hobby.id === 'reading' && (
                  <button
                    onClick={handleReadingClick}
                    className="w-full py-2.5 px-4 rounded-2xl cozy-btn font-bold text-xs text-whisker-700 dark:text-fur-100 flex items-center justify-between group/btn cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <BookmarkCheck className="w-4 h-4 text-cateye-600" />
                      <span>{readingBookmarks} Chapters Read</span>
                    </span>
                    <span className="text-cateye-600 font-extrabold group-hover/btn:translate-x-1 transition-transform">
                      +Bookmark 📚
                    </span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
