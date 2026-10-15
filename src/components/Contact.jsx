import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  HeartHandshake
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { catAudio } from '../utils/sound';
import { grandCatCelebration, burstPaws } from '../utils/confetti';

export default function Contact() {
  const { profile, contactFlavors } = portfolioData;

  const [selectedFlavor, setSelectedFlavor] = useState('backend');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    catAudio.playPop(750);
    setCopiedEmail(true);
    burstPaws(0.3, 0.7);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    catAudio.playPurr();
    grandCatCelebration();
    setSubmitted(true);
  };

  const handleReset = () => {
    catAudio.playPop(500);
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-paw-100 text-paw-700 dark:bg-whisker-800 dark:text-paw-300 border border-paw-300 font-bold text-xs uppercase tracking-wider mb-3">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Table Reservation & Collaboration</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-whisker-800 dark:text-fur-100 mb-4">
          Drop a <span className="wavy-underline">Meow & Let's Build!</span>
        </h2>
        <p className="max-w-2xl text-whisker-500 dark:text-fur-300 text-sm sm:text-base leading-relaxed">
          Looking for a high-energy backend engineer with a keen eye for distributed resilience (and a serious fondness for cats)? Leave a message slip or say hello!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Social Connections */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-paw-200/80 dark:border-whisker-700 shadow-cozy">
            <h3 className="font-display font-bold text-xl text-whisker-800 dark:text-fur-100 mb-2 flex items-center gap-2">
              <span>Fresh Delivery Contacts</span>
              <span className="text-xl">🐾</span>
            </h3>
            <p className="text-xs sm:text-sm text-whisker-500 dark:text-fur-300 mb-6 leading-relaxed">
              Open to conversations about Java Spring Boot, Go concurrency, Apache Kafka, Kubernetes architecture, or just trading cat photos and stories.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-3.5 rounded-2xl bg-fur-200/80 dark:bg-whisker-800/80 border border-paw-100 dark:border-whisker-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-paw-500 text-white flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-whisker-400 dark:text-fur-400 uppercase">
                      Direct Email
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-whisker-800 dark:text-fur-100">
                      {profile.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl cozy-btn text-whisker-600 dark:text-fur-200 hover:text-paw-600"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-cateye-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => catAudio.playPop(600)}
                className="p-3.5 rounded-2xl bg-fur-200/80 dark:bg-whisker-800/80 border border-paw-100 dark:border-whisker-700 flex items-center justify-between hover:border-paw-300 dark:hover:border-paw-500 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-whisker-800 dark:bg-fur-200 text-fur-100 dark:text-whisker-800 flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-whisker-400 dark:text-fur-400 uppercase">
                      Code Repositories
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-whisker-800 dark:text-fur-100">
                      github.com/almas-sayyad
                    </div>
                  </div>
                </div>
                <span className="text-paw-500 group-hover:translate-x-1 transition-transform">🐾</span>
              </a>

              {/* LinkedIn Card */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => catAudio.playPop(650)}
                className="p-3.5 rounded-2xl bg-fur-200/80 dark:bg-whisker-800/80 border border-paw-100 dark:border-whisker-700 flex items-center justify-between hover:border-paw-300 dark:hover:border-paw-500 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cozyblue-500 text-white flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-whisker-400 dark:text-fur-400 uppercase">
                      Professional Network
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-whisker-800 dark:text-fur-100">
                      linkedin.com/in/almas-sayyad
                    </div>
                  </div>
                </div>
                <span className="text-paw-500 group-hover:translate-x-1 transition-transform">🐾</span>
              </a>
            </div>
          </div>

          {/* Cat Speed Notice Badge */}
          <div className="p-4 rounded-2xl bg-cateye-50 dark:bg-whisker-800 border border-cateye-200 dark:border-cateye-800/50 flex items-center gap-3 text-xs text-cateye-800 dark:text-cateye-300">
            <span className="text-xl">🐱</span>
            <span>Fast response time: Answers within 24 hours. Coffee & cat chat always welcomed!</span>
          </div>
        </div>

        {/* Right Column: Cat Message Slip Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-paw-200/80 dark:border-whisker-700 shadow-cozy relative">
            {submitted ? (
              /* Success / Order Placed State */
              <div className="py-8 flex flex-col items-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-3xl bg-cateye-100 dark:bg-whisker-700 text-cateye-600 dark:text-cateye-400 flex items-center justify-center text-3xl mb-4 shadow-sm animate-bounce-soft">
                  🐱
                </div>
                <h3 className="font-display font-extrabold text-2xl text-whisker-800 dark:text-fur-100 mb-2">
                  Meow Received Successfully!
                </h3>
                <p className="text-sm text-whisker-500 dark:text-fur-300 max-w-md mb-6 leading-relaxed">
                  Thank you, <span className="font-bold text-paw-600">{formData.name}</span>! Your message has landed right in Almas's inbox. A warm purr of a reply is on the way.
                </p>

                {/* Receipt Card */}
                <div className="w-full max-w-sm p-4 rounded-2xl bg-fur-200/90 dark:bg-whisker-800 border border-dashed border-paw-300 dark:border-whisker-600 text-left text-xs mb-6 space-y-2">
                  <div className="font-mono text-[10px] text-whisker-400 dark:text-fur-400 uppercase tracking-widest border-b border-paw-200/50 pb-1 flex justify-between">
                    <span>MEOW SLIP #772</span>
                    <span>CONFIRMED 🐾</span>
                  </div>
                  <div><span className="font-semibold text-whisker-500">Contact:</span> {formData.email}</div>
                  <div><span className="font-semibold text-whisker-500">Topic:</span> {contactFlavors.find(f => f.id === selectedFlavor)?.label}</div>
                  <div><span className="font-semibold text-whisker-500">Message preview:</span> "{formData.message.slice(0, 60)}..."</div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-xs font-bold paw-btn text-white cursor-pointer"
                >
                  Send Another Message 🐾
                </button>
              </div>
            ) : (
              /* Order Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-paw-100 dark:border-whisker-700">
                  <span className="font-display font-bold text-lg text-whisker-800 dark:text-fur-100">
                    Send a Collaboration Slip 🐾
                  </span>
                  <span className="text-xs font-bold text-paw-500">
                    Step 1 of 1
                  </span>
                </div>

                {/* Topic / Flavor Selection */}
                <div>
                  <label className="block text-xs font-bold text-whisker-600 dark:text-fur-200 mb-2">
                    Select Your Topic:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {contactFlavors.map((flavor) => (
                      <button
                        key={flavor.id}
                        type="button"
                        onClick={() => {
                          catAudio.playPop(520);
                          setSelectedFlavor(flavor.id);
                        }}
                        className={`p-2.5 rounded-2xl text-left border text-xs font-semibold transition-all ${
                          selectedFlavor === flavor.id
                            ? 'bg-paw-500 text-white border-paw-500 shadow-sm'
                            : 'bg-white/60 dark:bg-whisker-800/60 border-paw-100 dark:border-whisker-700 text-whisker-700 dark:text-fur-200 hover:bg-paw-50/50'
                        }`}
                      >
                        <div className="font-bold">{flavor.label}</div>
                        <div className={`text-[10px] mt-0.5 ${selectedFlavor === flavor.id ? 'text-white/80' : 'text-whisker-400 dark:text-fur-400'}`}>
                          {flavor.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-whisker-600 dark:text-fur-200 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-whisker-800 border border-paw-200 dark:border-whisker-700 focus:outline-none focus:ring-2 focus:ring-paw-400 text-sm text-whisker-700 dark:text-fur-100 transition-all placeholder:text-whisker-300 dark:placeholder:text-fur-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-whisker-600 dark:text-fur-200 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-whisker-800 border border-paw-200 dark:border-whisker-700 focus:outline-none focus:ring-2 focus:ring-paw-400 text-sm text-whisker-700 dark:text-fur-100 transition-all placeholder:text-whisker-300 dark:placeholder:text-fur-500"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-bold text-whisker-600 dark:text-fur-200 mb-1.5">
                    Your Message / Project Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your distributed architecture, tech stack, or engineering role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/80 dark:bg-whisker-800 border border-paw-200 dark:border-whisker-700 focus:outline-none focus:ring-2 focus:ring-paw-400 text-sm text-whisker-700 dark:text-fur-100 transition-all resize-none placeholder:text-whisker-300 dark:placeholder:text-fur-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-white paw-btn flex items-center justify-center gap-2 cursor-pointer shadow-paw"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message & Burst Paws! 🐾✨</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
