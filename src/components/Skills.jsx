import React, { useState } from 'react';
import { 
  Coffee, 
  Database, 
  Cloud, 
  Sparkles, 
  Zap, 
  Code2, 
  Layers, 
  Network, 
  Boxes, 
  Flame, 
  Terminal, 
  Cpu, 
  Brain, 
  GitBranch, 
  GitCommit, 
  CloudSun, 
  Activity, 
  ShieldCheck,
  Container,
  FolderArchive,
  TerminalSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { catAudio } from '../utils/sound';
import { burstPaws } from '../utils/confetti';

const ICON_COMPONENTS = {
  Coffee,
  Database,
  Cloud,
  Sparkles,
  Zap,
  Code2,
  Layers,
  Network,
  Boxes,
  Flame,
  Terminal,
  Cpu,
  Brain,
  GitBranch,
  GitCommit,
  CloudSun,
  Activity,
  ShieldCheck,
  Container,
  FolderArchive,
  TerminalSquare
};

export default function Skills() {
  const { categories } = portfolioData.skills;
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Tech Arsenal', emoji: '🐾' },
    { id: 'core', label: 'The Core Paws', emoji: '☕' },
    { id: 'data', label: 'Event Streams & Catnip', emoji: '🐟' },
    { id: 'cloud', label: 'Cardboard Cloud Boxes', emoji: '📦' },
    { id: 'flavors', label: 'Sharp Whiskers', emoji: '✨' },
  ];

  const displayedCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  const handleItemHover = () => {
    catAudio.playPop(820 + Math.random() * 200);
  };

  const handleItemClick = (e, item) => {
    catAudio.playPurr();
    const rect = e.currentTarget.getBoundingClientRect();
    burstPaws(rect.left / window.innerWidth + 0.05, rect.top / window.innerHeight);
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-ginger-100 text-whisker-800 dark:bg-whisker-800 dark:text-ginger-300 border border-ginger-300 font-bold text-xs uppercase tracking-wider mb-3">
          <span>🐾 The Catnip Arsenal</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-whisker-800 dark:text-fur-100 mb-4">
          Tech Stack & <span className="wavy-underline">Scratching Post</span>
        </h2>
        <p className="max-w-2xl text-whisker-500 dark:text-fur-300 text-sm sm:text-base leading-relaxed">
          From strongly typed concurrency engines to high-throughput Kafka streaming fish and containerized cardboard boxes, here are the tools sharpened for every deployment.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 glass-card rounded-full shadow-cozy">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                catAudio.playPop(520);
                setActiveTab(tab.id);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-paw-500 text-white shadow-sm scale-105'
                  : 'text-whisker-600 dark:text-fur-200 hover:text-paw-600 dark:hover:text-paw-400'
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedCategories.map((category) => {
          return (
            <div
              key={category.id}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-paw-200/80 dark:border-whisker-700 shadow-cozy relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-paw-100 dark:bg-whisker-800 text-paw-600 dark:text-paw-400 flex items-center justify-center text-lg shadow-sm">
                      🐾
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-whisker-800 dark:text-fur-100">
                        {category.title}
                      </h3>
                      <p className="text-xs font-semibold text-paw-600 dark:text-paw-400">
                        {category.catName}
                      </p>
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${category.badgeColor}`}>
                    {category.items.length} Elements
                  </span>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 gap-3">
                  {category.items.map((item) => {
                    const ItemIcon = ICON_COMPONENTS[item.icon] || Sparkles;
                    return (
                      <div
                        key={item.name}
                        onMouseEnter={handleItemHover}
                        onClick={(e) => handleItemClick(e, item)}
                        className="p-3 rounded-2xl bg-white/70 dark:bg-whisker-800/70 border border-paw-100 dark:border-whisker-700 hover:border-paw-300 dark:hover:border-paw-500 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm group cursor-pointer flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-fur-200 dark:bg-whisker-700 text-whisker-700 dark:text-fur-200 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                            <ItemIcon className="w-4 h-4 text-paw-600 dark:text-paw-400" />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-whisker-800 dark:text-fur-100 flex items-center gap-2">
                              <span>{item.name}</span>
                            </div>
                            <div className="text-[11px] text-whisker-500 dark:text-fur-400">
                              {item.note}
                            </div>
                          </div>
                        </div>

                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-fur-100 dark:bg-whisker-900 text-whisker-600 dark:text-fur-300 border border-fur-300 dark:border-whisker-700">
                          {item.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Paw Tip */}
              <div className="mt-5 pt-3 border-t border-paw-100 dark:border-whisker-700 text-[11px] text-whisker-400 dark:text-fur-400 flex items-center justify-between">
                <span>Click any item for cat purrs</span>
                <span className="text-paw-400 font-semibold">🐾 Sharpened Claws</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
