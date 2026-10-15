import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Flame, 
  Boxes, 
  Zap, 
  Brain,
  Activity,
  Heart
} from 'lucide-react';
import { burstPaws } from '../utils/confetti';
import { catAudio } from '../utils/sound';

const ICON_MAP = {
  Flame,
  Boxes,
  Zap,
  Brain
};

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const IconComponent = ICON_MAP[project.iconName] || Boxes;

  const handleCelebrate = () => {
    catAudio.playPurr();
    burstPaws(0.5, 0.4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-whisker-900/65 backdrop-blur-sm animate-fade-in">
      <div 
        className="glass-card bg-fur-50 dark:bg-whisker-900 border-2 border-paw-300 dark:border-paw-700/60 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            catAudio.playPop(450);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full cozy-btn text-whisker-600 dark:text-fur-200 hover:text-paw-600 transition-colors"
          title="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-paw-400 via-ginger-400 to-paw-500 text-white flex items-center justify-center shadow-md">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-paw-100 dark:bg-paw-900/60 text-paw-700 dark:text-paw-300 border border-paw-300">
                {project.catTag}
              </span>
              <span className="text-xs font-semibold text-cateye-600 dark:text-cateye-400">
                {project.badge}
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-whisker-800 dark:text-fur-100">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Category & Summary */}
        <p className="text-sm font-semibold text-whisker-500 dark:text-fur-300 mb-4">
          {project.category}
        </p>
        <p className="text-sm sm:text-base text-whisker-600 dark:text-fur-200 leading-relaxed mb-6 bg-white/70 dark:bg-whisker-800/70 p-4 rounded-2xl border border-paw-100 dark:border-whisker-700">
          {project.fullDescription}
        </p>

        {/* Performance & Benchmark Metrics */}
        <div className="mb-6">
          <h4 className="font-display font-bold text-sm text-whisker-800 dark:text-fur-100 mb-3 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-paw-500" />
            <span>Key Performance Metrics</span>
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div 
                key={m.label} 
                className="p-3 rounded-2xl bg-fur-200 dark:bg-whisker-800 border border-ginger-200 dark:border-whisker-700 text-center"
              >
                <div className="font-display font-extrabold text-base sm:text-lg text-paw-600 dark:text-paw-400">
                  {m.value}
                </div>
                <div className="text-[11px] font-semibold text-whisker-500 dark:text-fur-400">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Arsenal Ingredients */}
        <div className="mb-6">
          <h4 className="font-display font-bold text-sm text-whisker-800 dark:text-fur-100 mb-2">
            Catnip Arsenal (Tech Stack):
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="bubbly-badge bg-white dark:bg-whisker-800 text-whisker-700 dark:text-fur-200 border border-paw-200 dark:border-whisker-700 text-xs"
              >
                🐾 {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Simulation / Terminal Snapshot */}
        <div className="mb-6 bg-whisker-900 text-fur-100 p-4 rounded-2xl font-mono text-xs overflow-x-auto border border-whisker-700 shadow-inner">
          <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-whisker-800 text-whisker-400 text-[10px]">
            <span className="w-2.5 h-2.5 rounded-full bg-paw-500 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-ginger-400 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-cateye-400 inline-block"></span>
            <span className="ml-2">cluster-neko-health.log</span>
          </div>
          <div className="space-y-1 text-cateye-300">
            <div>✓ Initializing cluster partition handlers... OK</div>
            <div>✓ Kafka consumer group rebalanced across 6 partitions</div>
            <div>✓ Redis cache hit ratio: 94.2% [lat=1.8ms]</div>
            <div>✓ Pod status: 3/3 READY (Running) - HPA target stable</div>
            <div className="text-paw-300">🐾 Health check passed: All 4 paws landed safely!</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-paw-200/60 dark:border-whisker-700">
          <button
            onClick={handleCelebrate}
            className="flex items-center gap-1.5 text-xs font-bold text-paw-600 dark:text-paw-400 hover:text-paw-700 py-1.5 px-3 rounded-full hover:bg-paw-50 dark:hover:bg-whisker-800 transition-colors cursor-pointer"
          >
            <span>🐾 Purr & Celebrate</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => catAudio.playPop(700)}
              className="px-4 py-2 rounded-full text-xs font-bold cozy-btn flex items-center gap-1.5 text-whisker-700 dark:text-fur-100"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => catAudio.playPurr()}
              className="px-4 py-2 rounded-full text-xs font-bold paw-btn text-white flex items-center gap-1.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
