# Almas Sayyad 🐾 | Cat-Themed Developer Portfolio

> Modern, highly interactive, single-page developer portfolio for **Almas Sayyad** (BE 3rd Year ENTC Engineering Student & Backend Engineer) with an enchanting, high-aesthetic **"Cozy Cat & Neko Engineer"** theme.

---

## 🐾 Feline Aesthetic & Cozy Palette

- **Fur Cream Base**: `#FFFDF9` / `#FFF9F2` (warm cozy feline background with paw-print dot patterns).
- **Soft Paw Pink**: `#FF8DA1` / `#FF6B8B` (interactive paw buttons, accents & squish feedback).
- **Ginger Fur**: `#FB923C` / `#F97316` (warm highlights, tabby accents & category markers).
- **Cat-Eye Emerald**: `#4ADE80` / `#22C55E` (health badges, uptime indicators & DevOps tags).
- **Charcoal Whiskers**: `#292524` / `#1C1917` (deep high-contrast readable typography).
- **Midnight Cat Mode**: Sleek dark fur mode with glowing emerald cat eyes and soft neon paw buttons.

---

## 🛠️ Architecture & Tech Stack

- **Tooling**: [Vite](file:///c:/Users/hp/Documents/AI%20Production%20Bootcamp/vite.config.js) + React 18 (lightning-fast, zero-overhead bundle).
- **Styling**: [Tailwind CSS](file:///c:/Users/hp/Documents/AI%20Production%20Bootcamp/tailwind.config.js) with custom cat-theme tokens, pill radiuses, and cozy shadows.
- **3D Graphics**: Lightweight procedural Three.js canvas ([`CatCanvas.jsx`](file:///c:/Users/hp/Documents/AI%20Production%20Bootcamp/src/canvas/CatCanvas.jsx)) featuring:
  - Procedural **3D Cat**: Pointed ears with inner pink lining, cheeks, tiny nose, expressive eyes tracking the cursor, delicate whiskers, folded front paws, curled wiggling tail, and a collar with a jingling golden bell.
  - Interactive **Fur Coat Selector**: Ginger Tabby, Midnight Tuxedo, Sweet Calico, Snow Fluff, and Cocoa Siamese.
  - **"Pet Me! 🐾" Interaction**: Squish purr animation, realistic Web Audio purr synthesizer, and paw-print particle bursts.
- **Paw Physics**: [Canvas Confetti](file:///c:/Users/hp/Documents/AI%20Production%20Bootcamp/src/utils/confetti.js) with pastel paw colors on clicks and celebrations.
- **Ambient Paw Rain**: Toggleable overlay with falling paw prints, yarn balls, and stars ([`PawRain.jsx`](file:///c:/Users/hp/Documents/AI%20Production%20Bootcamp/src/components/PawRain.jsx)).
- **Audio Synthesizer**: Native Web Audio API synthesizer ([`sound.js`](file:///c:/Users/hp/Documents/AI%20Production%20Bootcamp/src/utils/sound.js)) producing soft purrs, meow chirps, and harmonic chimes with **0 bytes** of external audio asset downloads.

---

## 🐱 Sections Overview

1. **Floating Sugar Header (`Navbar.jsx`)**:
   - Brand logo: `Almas.dev 🐾` (Neko Backend Engineer)
   - Navigation pills: `#about`, `#skills`, `#projects`, `#hobbies`, `#contact`.
   - **Extra Paws** ambient falling particles toggle.
   - **Cat Audio Purr/Chirp** FX toggle.
   - **Midnight Cat Mode** toggle.
   - Quick **Resume** button.

2. **Hero Section (`Hero.jsx`)**:
   - Status badge: *"Purr-fecting scalable distributed systems ⚡"*.
   - Headline: *"Hi, I'm Almas Sayyad 🐱🐾"*.
   - Subhead: Backend Engineer, Cloud Architect & Certified Cat Lover.
   - Action CTAs: *"Inspect Catches (Projects) 🐟"* and *"Grab Resume 📄"*.
   - Interactive 3D Cat Canvas with fur coat switcher & pet-the-cat counter.

3. **Nine Lives of System Resilience (`About.jsx`)**:
   - 3 Feline stat cards:
     - 🐾 *Curious Whiskers* (3rd Year ENTC)
     - 🐈 *Four-Paws Landing* (Backend Architecture: Spring Boot & Go)
     - 📦 *If It Fits, It Sits* (DevOps & Cloud-Native: Docker & Kubernetes)
   - Bio story & Core Engineering Philosophy (*Cat-Like Agility*, *Nine Lives Fault-Tolerance*, *Clean Whiskers*).

4. **The Catnip Arsenal & Scratching Post (`Skills.jsx`)**:
   - Organized as feline tech categories:
     - ☕ *The Core Paws*: Java (Spring Boot), Go (Golang), Python, C/C++, System Design.
     - 🐟 *Event Streams & Catnip Feed*: Apache Kafka, PostgreSQL, Redis, REST APIs, gRPC, MongoDB.
     - 📦 *Cardboard Cloud Boxes*: Kubernetes (K8s), Docker, Cloud (AWS/GCP), CI/CD, Prometheus.
     - ✨ *Sharp Whiskers & Tooling*: AI/ML Pipelines, Git & GitHub, Linux & Shell, Distributed Resilience.
   - Interactive hover cards with chirp pops and click purrs.

5. **Top Cat Catches (`Projects.jsx` & `ProjectModal.jsx`)**:
   - **OrderFlow Kafka Stream Hub** (Catch of the Day 🐟 - 8,500+ msg/sec).
   - **KubePaw Microservice Cluster** (Cardboard Box Cluster 📦 - Zero-downtime K8s).
   - **GoPulse Concurrency Gateway** (Cat Zoomies Proxy ⚡ - 30k req/s).
   - **NeuroBatch AI Inference Worker** (Sharp Whiskers ML Worker 🧠).
   - Deep-dive modal with throughput metrics and cluster health check logs.

6. **Playtime & Cat Naps (`Hobbies.jsx`)**:
   - 🎮 **Gaming**: Laser Pointer Chaser (+1 EXP level counter).
   - 🎤 **Singing**: Melodious Purrs (harmonic arpeggio player).
   - 📚 **Reading**: Curled Up on Bookshelf (distributed systems paper bookmark counter).

7. **Drop a Meow & Table Reservation (`Contact.jsx`)**:
   - Collaboration slip with feline inquiry selector.
   - Animated "MEOW SLIP #772 - CONFIRMED" receipt card + grand paw celebration.
   - Direct email copy helper and social links (GitHub, LinkedIn).

8. **Curriculum Vitae Modal (`ResumeModal.jsx`)**:
   - In-app printable and downloadable resume sheet.

---

## ⚡ Running Locally

```bash
# Start development server
npm run dev

# Build production bundle
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
