import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  GraduationCap, 
  Code, 
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { catAudio } from '../utils/sound';
import { burstPaws } from '../utils/confetti';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const { profile, skills, projects } = portfolioData;

  const handlePrint = () => {
    catAudio.playPop(700);
    window.print();
  };

  const handleDownload = () => {
    catAudio.playPurr();
    burstPaws(0.5, 0.4);
    const resumeText = `=====================================================
ALMAS SAYYAD - BACKEND ENGINEER & CLOUD ARCHITECT (CAT LOVER 🐾)
Pune, Maharashtra, India | Email: ${profile.email}
GitHub: ${profile.github} | LinkedIn: ${profile.linkedin}
=====================================================

EDUCATION:
• Bachelor of Engineering (BE) - 3rd Year
  Electronics & Telecommunication Engineering (ENTC)
  Focus: Distributed Systems, Operating Systems, Cloud Networking

CORE TECHNICAL ARSENAL:
• Languages: Java (Spring Boot), GoLang (Go), Python, C/C++, SQL
• Distributed Systems & Data: Apache Kafka, PostgreSQL, Redis, REST APIs, gRPC, MongoDB
• DevOps & Cloud: Kubernetes (K8s), Docker, Helm, Prometheus, Grafana, AWS/GCP, Linux/Bash, CI/CD

FEATURED IMPLEMENTATIONS:
1. OrderFlow Kafka Stream Hub (Spring Boot, Apache Kafka, PostgreSQL, Redis, Docker)
   - High-throughput asynchronous event-streaming pipeline handling 8,500+ msg/sec.
   - Implemented Saga distributed transaction orchestration and dead-letter queues.

2. KubePaw Microservice Cluster (Kubernetes, Helm, Prometheus, AWS EKS, Docker)
   - Resilient container orchestration with zero-downtime rolling updates and HPA autoscaling.

3. GoPulse Concurrency Gateway (Go, gRPC, Redis, Goroutines)
   - Ultra-low latency reverse proxy handling 30,000 req/sec with < 2.8ms overhead.

4. NeuroBatch AI Inference Worker (Python, Go, Redis Streams, PyTorch)
   - Decoupled asynchronous background machine learning batching queue.

HOBBIES & INTERESTS:
• Gaming, Singing, Reading Engineering Literature & Distributed Systems Papers.
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Almas_Sayyad_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-whisker-900/65 backdrop-blur-md animate-fade-in">
      <div 
        className="glass-card bg-fur-50 dark:bg-whisker-900 border-2 border-paw-300 dark:border-paw-800 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-paw-200/80 dark:border-whisker-700">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <div>
              <h3 className="font-display font-extrabold text-xl text-whisker-800 dark:text-fur-100">
                Almas Sayyad • Curriculum Vitae
              </h3>
              <p className="text-xs font-semibold text-paw-600 dark:text-paw-400">
                Backend Engineer • Cloud & Kubernetes Architect
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-full cozy-btn text-whisker-600 dark:text-fur-200"
              title="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold paw-btn text-white flex items-center gap-1.5 shadow-sm"
              title="Download text resume"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
            <button
              onClick={() => {
                catAudio.playPop(450);
                onClose();
              }}
              className="p-2 rounded-full cozy-btn text-whisker-600 dark:text-fur-200"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div className="space-y-6 text-whisker-700 dark:text-fur-100">
          {/* Header Summary */}
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-whisker-800/80 border border-paw-100 dark:border-whisker-700 flex flex-wrap justify-between items-center gap-3">
            <div>
              <div className="font-extrabold text-xl font-display text-whisker-800 dark:text-fur-100">
                Almas Sayyad
              </div>
              <div className="text-xs text-whisker-500 dark:text-fur-300">
                Pune, Maharashtra, India • {profile.email}
              </div>
            </div>
            <div className="flex gap-2 text-xs font-semibold">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-paw-600 hover:underline">
                GitHub
              </a>
              <span>•</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-paw-600 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-display font-bold text-sm text-paw-700 dark:text-paw-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="p-4 rounded-2xl bg-fur-100 dark:bg-whisker-800/60 border border-ginger-200 dark:border-whisker-700">
              <div className="flex justify-between items-start font-bold text-sm">
                <span>Bachelor of Engineering (BE) - Electronics & Telecommunication (ENTC)</span>
                <span className="text-xs text-paw-600 dark:text-paw-400 font-semibold">2024 - 2028 (3rd Year)</span>
              </div>
              <p className="text-xs text-whisker-500 dark:text-fur-300 mt-1">
                Strong focus on network communication protocols, concurrency, operating systems, and distributed system design.
              </p>
            </div>
          </div>

          {/* Technical Arsenal */}
          <div>
            <h4 className="font-display font-bold text-sm text-paw-700 dark:text-paw-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              <span>Technical Arsenal</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-fur-100 dark:bg-whisker-800/60 border border-ginger-200 dark:border-whisker-700">
                <span className="font-bold block text-whisker-600 dark:text-fur-200 mb-1">Languages:</span>
                <span>Java (Spring Boot), GoLang (Go), Python, C/C++, SQL</span>
              </div>
              <div className="p-3 rounded-2xl bg-fur-100 dark:bg-whisker-800/60 border border-ginger-200 dark:border-whisker-700">
                <span className="font-bold block text-whisker-600 dark:text-fur-200 mb-1">Data & Streaming:</span>
                <span>Apache Kafka, PostgreSQL, Redis, REST APIs, gRPC, MongoDB</span>
              </div>
              <div className="p-3 rounded-2xl bg-fur-100 dark:bg-whisker-800/60 border border-ginger-200 dark:border-whisker-700">
                <span className="font-bold block text-whisker-600 dark:text-fur-200 mb-1">DevOps & Cloud:</span>
                <span>Kubernetes (K8s), Docker, Helm, Prometheus, Grafana, AWS/GCP</span>
              </div>
              <div className="p-3 rounded-2xl bg-fur-100 dark:bg-whisker-800/60 border border-ginger-200 dark:border-whisker-700">
                <span className="font-bold block text-whisker-600 dark:text-fur-200 mb-1">Engineering Practices:</span>
                <span>Microservices Architecture, Saga Pattern, CI/CD, Git, Linux</span>
              </div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div>
            <h4 className="font-display font-bold text-sm text-paw-700 dark:text-paw-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              <span>Featured System Implementations</span>
            </h4>
            <div className="space-y-3">
              {projects.slice(0, 3).map((p) => (
                <div key={p.id} className="p-3.5 rounded-2xl bg-fur-100 dark:bg-whisker-800/60 border border-ginger-200 dark:border-whisker-700">
                  <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm">
                    <span>{p.title}</span>
                    <span className="text-[11px] font-semibold text-paw-600 dark:text-paw-400">{p.badge}</span>
                  </div>
                  <p className="text-xs text-whisker-500 dark:text-fur-300 mt-1 leading-relaxed">
                    {p.summary}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.techStack.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-whisker-700 text-whisker-600 dark:text-fur-200 border border-paw-100">
                        🐾 {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
