import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Flame, 
  Boxes, 
  Zap, 
  Brain, 
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { catAudio } from '../utils/sound';
import { burstPaws } from '../utils/confetti';

const ICON_MAP = {
  Flame,
  Boxes,
  Zap,
  Brain
};

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project, e) => {
    catAudio.playPurr();
    const rect = e.currentTarget.getBoundingClientRect();
    burstPaws(rect.left / window.innerWidth + 0.1, rect.top / window.innerHeight);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-paw-100 text-paw-700 dark:bg-whisker-800 dark:text-paw-300 border border-paw-300 font-bold text-xs uppercase tracking-wider mb-3">
          <span>🐟 Top Cat Catches</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-whisker-800 dark:text-fur-100 mb-4">
          Battle-Tested <span className="wavy-underline">Distributed Systems</span>
        </h2>
        <p className="max-w-2xl text-whisker-500 dark:text-fur-300 text-sm sm:text-base leading-relaxed">
          Real distributed architectures tested for high throughput: asynchronous Kafka message flows, containerized Kubernetes scaling, sub-millisecond edge proxies, and resilient AI worker pools.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const IconComponent = ICON_MAP[project.iconName] || Sparkles;
          return (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-paw-200/80 dark:border-whisker-700 shadow-cozy relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-bubbly group"
            >
              {/* Header Badges */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-paw-100 dark:bg-whisker-800 text-paw-700 dark:text-paw-300 border border-paw-200 dark:border-whisker-700">
                      {project.catTag}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cateye-100 dark:bg-cateye-900/60 text-cateye-700 dark:text-cateye-300 border border-cateye-300">
                      {project.badge}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-paw-400 via-ginger-400 to-paw-500 text-white flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Project Title & Category */}
                <h3 className="font-display font-extrabold text-2xl text-whisker-800 dark:text-fur-100 group-hover:text-paw-600 dark:group-hover:text-paw-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <h4 className="text-xs font-bold text-whisker-400 dark:text-fur-400 uppercase tracking-wider mb-3">
                  {project.category}
                </h4>

                {/* Summary */}
                <p className="text-sm text-whisker-500 dark:text-fur-300 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Benchmark Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-fur-200/80 dark:bg-whisker-800/80 border border-paw-100 dark:border-whisker-700 mb-6 text-center">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-xs sm:text-sm font-extrabold text-paw-600 dark:text-paw-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-semibold text-whisker-400 dark:text-fur-400 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bubbly-badge bg-white dark:bg-whisker-700 text-whisker-600 dark:text-fur-200 border border-paw-200 dark:border-whisker-600 text-[11px]"
                    >
                      🐾 {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-paw-100 dark:border-whisker-700 flex items-center justify-between">
                <button
                  onClick={(e) => handleOpenProject(project, e)}
                  className="text-xs font-bold text-paw-600 dark:text-paw-400 hover:text-paw-700 flex items-center gap-1 group-hover:underline cursor-pointer"
                >
                  <span>Inspect Architecture Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => catAudio.playPop(550)}
                    className="p-2 rounded-full cozy-btn text-whisker-600 dark:text-fur-200 hover:text-paw-500 hover:scale-110 transition-all"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => catAudio.playPurr()}
                    className="p-2 rounded-full paw-btn text-white hover:scale-110 transition-all"
                    title="Open Live Demonstration"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Modal Dialog */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
