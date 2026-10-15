import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  Sparkles
} from 'lucide-react';
import CatCanvas from '../canvas/CatCanvas';
import { burstPaws } from '../utils/confetti';
import { catAudio } from '../utils/sound';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { profile } = portfolioData;

  const handleInspectProjects = (e) => {
    e.preventDefault();
    catAudio.playPop(520);
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
    burstPaws(0.4, 0.6);
  };

  const handleResumeClick = () => {
    catAudio.playPurr();
    burstPaws(0.5, 0.5);
    onOpenResume();
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Decorative Warm Ambient Blobs */}
      <div className="absolute top-12 left-1/4 w-80 h-80 bg-paw-200/35 dark:bg-paw-900/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-96 h-96 bg-ginger-200/30 dark:bg-ginger-900/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-cateye-200/25 dark:bg-cateye-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Cat-Lover Profile & Hero CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Feline Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-paw-300 dark:border-paw-800 shadow-sm mb-5 group cursor-default">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-paw-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-paw-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-paw-700 dark:text-paw-300 flex items-center gap-1.5">
              <span>{profile.status}</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-whisker-800 dark:text-fur-100 tracking-tight leading-[1.15] mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-paw-500 via-ginger-500 to-paw-600">Almas Sayyad</span>
            <span className="inline-block animate-wiggle ml-2 text-3xl sm:text-4xl">🐱🐾</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl font-bold text-whisker-600 dark:text-fur-200 mb-3 flex flex-wrap items-center gap-2">
            <span>Backend Engineer & Cloud Architect</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cateye-100 dark:bg-cateye-900/60 text-cateye-700 dark:text-cateye-300 font-semibold border border-cateye-300">
              3rd Year ENTC
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-paw-100 dark:bg-paw-900/60 text-paw-700 dark:text-paw-300 font-semibold border border-paw-300">
              Cat Lover 🐈
            </span>
          </h2>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-whisker-500 dark:text-fur-300 font-normal leading-relaxed mb-6 max-w-xl">
            {profile.tagline} Handcrafting high-volume microservices with <span className="font-semibold text-whisker-800 dark:text-fur-100 underline decoration-paw-300">Java Spring Boot</span> & <span className="font-semibold text-whisker-800 dark:text-fur-100 underline decoration-cateye-300">Go</span>, fueled by <span className="font-semibold text-whisker-800 dark:text-fur-100 underline decoration-ginger-400">Apache Kafka</span>, and containerizing on <span className="font-semibold text-whisker-800 dark:text-fur-100 underline decoration-yarn-300">Kubernetes</span>.
          </p>

          {/* Quick Feline Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bubbly-badge bg-ginger-100 text-ginger-800 border border-ginger-300 dark:bg-whisker-800 dark:text-ginger-200">
              🐾 Java (Spring Boot)
            </span>
            <span className="bubbly-badge bg-cozyblue-100 text-whisker-700 border border-cozyblue-200 dark:bg-whisker-800 dark:text-cozyblue-300">
              ⚡ GoLang (Go)
            </span>
            <span className="bubbly-badge bg-paw-100 text-paw-700 border border-paw-300 dark:bg-whisker-800 dark:text-paw-300">
              🐟 Apache Kafka
            </span>
            <span className="bubbly-badge bg-cateye-100 text-cateye-700 border border-cateye-300 dark:bg-whisker-800 dark:text-cateye-300">
              📦 Kubernetes & Docker
            </span>
            <span className="bubbly-badge bg-yarn-100 text-yarn-700 border border-yarn-300 dark:bg-whisker-800 dark:text-yarn-300">
              ✨ AI/ML Pipelines
            </span>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <button
              onClick={handleInspectProjects}
              className="px-6 py-3.5 rounded-full font-bold text-sm sm:text-base text-white paw-btn flex items-center gap-2 group cursor-pointer"
            >
              <span>Inspect Catches (Projects) 🐟</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleResumeClick}
              className="px-6 py-3.5 rounded-full font-bold text-sm sm:text-base text-whisker-700 dark:text-fur-100 cozy-btn flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-paw-500" />
              <span>Grab Resume 📄</span>
            </button>
          </div>

          {/* Social Links & Availability Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-whisker-500 dark:text-fur-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cateye-500 animate-pulse"></span>
              <span>Available for Summer '27 / Fall Internships</span>
            </span>
            <span className="hidden sm:inline text-paw-300">•</span>
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full cozy-btn text-whisker-600 dark:text-fur-200 hover:text-paw-500 hover:scale-110 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full cozy-btn text-whisker-600 dark:text-fur-200 hover:text-paw-500 hover:scale-110 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-full cozy-btn text-whisker-600 dark:text-fur-200 hover:text-paw-500 hover:scale-110 transition-all"
                title="Send an Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive 3D Cat Canvas */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <CatCanvas />
        </div>
      </div>
    </section>
  );
}
