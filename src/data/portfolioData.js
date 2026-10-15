export const portfolioData = {
  profile: {
    name: "Almas Sayyad",
    title: "Backend Engineer & Cloud Architect",
    subtitle: "Cat Lover & Distributed Systems Purr-fectionist 🐾",
    education: "BE 3rd Year ENTC Engineering Student",
    location: "Pune, Maharashtra, India",
    status: "Purr-fecting Scalable Distributed Systems ⚡",
    email: "almas.sayyad04@gmail.com",
    github: "https://github.com/almas-sayyad",
    linkedin: "https://linkedin.com/in/almas-sayyad",
    resumeFilename: "Almas_Sayyad_Resume.pdf",
    tagline: "Engineering bulletproof microservices, high-throughput Kafka streams, and containerized Kubernetes clusters with feline agility and precision.",
  },

  about: {
    badge: "The Feline Engineer",
    heading: "Nine Lives of System Resilience",
    bio: [
      "I'm Almas Sayyad, a 3rd year Electronics and Telecommunication (ENTC) Engineering student with an unwavering obsession for high-concurrency distributed systems — and cats! 🐱",
      "Just like how cats always land gracefully on all four feet, I design backend architectures that gracefully absorb traffic spikes and self-heal from node crashes. My playground revolves around Java (Spring Boot) and GoLang, event-driven streaming with Apache Kafka, and resilient orchestration on Kubernetes and Cloud.",
      "When I step away from terminal logs and Kafka partitions, you'll find me petting cats, leveling up in games, singing acoustic melodies, or curled up with deep-dive systems engineering books."
    ],
    stats: [
      {
        id: "entc",
        title: "3rd Year ENTC Student",
        subtitle: "Electronics & Telecommunication",
        catTrait: "🐾 Curious Whiskers",
        icon: "GraduationCap",
        description: "Deep foundation in networking protocols, signal frequencies, concurrency, and distributed computing principles.",
        highlight: "Honors Track • Systems & Cloud"
      },
      {
        id: "backend",
        title: "Backend Architecture",
        subtitle: "Java & Go Concurrency",
        catTrait: "🐈 Four-Paws Landing",
        icon: "Server",
        description: "Developing decoupled microservices with Spring Boot & Go, resilient REST/gRPC APIs, and distributed data layers.",
        highlight: "Sub-15ms Latency • Clean Code"
      },
      {
        id: "devops",
        title: "DevOps & Cloud-Native",
        subtitle: "Kubernetes, Docker & CI/CD",
        catTrait: "📦 If It Fits, It Sits",
        icon: "Cloud",
        description: "Automated container builds, Helm chart deployments, ingress controllers, and self-healing Kubernetes pods.",
        highlight: "Zero-Downtime • Cloud Native"
      }
    ],
    bakersPhilosophy: [
      { principle: "Cat-Like Agility", detail: "Non-blocking Go routines, optimized database indexes, and sub-millisecond Redis caching." },
      { principle: "Nine Lives Fault-Tolerance", detail: "Dead-letter Kafka topics, circuit breakers, and self-healing Kubernetes replica sets." },
      { principle: "Clean Whiskers", detail: "Idiomatic, test-driven Java & Go code with clean abstractions and zero bloat." }
    ]
  },

  skills: {
    categories: [
      {
        id: "core",
        title: "The Core Paws",
        catName: "Claws of Code & Concurrency",
        icon: "Cat",
        badgeColor: "bg-ginger-100 text-ginger-700 border-ginger-300 dark:bg-whisker-800 dark:text-ginger-300",
        items: [
          { name: "Java (Spring Boot)", level: "Advanced", icon: "Code2", note: "REST APIs, Security, JPA/Hibernate, Microservices" },
          { name: "GoLang (Go)", level: "Proficient", icon: "Zap", note: "Goroutines, Channels, gRPC, Edge Microservices" },
          { name: "Python", level: "Skilled", icon: "Terminal", note: "AI/ML scripts, Data pipelines & Automation" },
          { name: "C / C++", level: "Foundational", icon: "Cpu", note: "Data structures, Memory management, ENTC systems" },
          { name: "OOP & System Design", level: "Proficient", icon: "Boxes", note: "Clean architecture, SOLID principles & Design patterns" }
        ]
      },
      {
        id: "data",
        title: "Event Streams & Catnip Feed",
        catName: "High-Throughput Stream Fish 🐟",
        icon: "Database",
        badgeColor: "bg-paw-100 text-paw-700 border-paw-300 dark:bg-whisker-800 dark:text-paw-300",
        items: [
          { name: "Apache Kafka", level: "Advanced", icon: "Flame", note: "Event-driven pipelines, Consumer groups, Topic partitions" },
          { name: "PostgreSQL & MySQL", level: "Proficient", icon: "Database", note: "Relational schemas, Indexing, ACID transactions" },
          { name: "Redis", level: "Proficient", icon: "Layers", note: "Distributed caching, Pub/Sub, Rate limits & sessions" },
          { name: "REST APIs & gRPC", level: "Advanced", icon: "Network", note: "Contract design, Protobuf, High throughput serialization" },
          { name: "MongoDB", level: "Skilled", icon: "FolderArchive", note: "Document store, Aggregation pipelines" }
        ]
      },
      {
        id: "cloud",
        title: "Cardboard Cloud Boxes",
        catName: "If It Fits, It Ships & Deploys 📦",
        icon: "Cloud",
        badgeColor: "bg-cateye-100 text-cateye-700 border-cateye-300 dark:bg-whisker-800 dark:text-cateye-300",
        items: [
          { name: "Kubernetes (K8s)", level: "Proficient", icon: "Boxes", note: "Pods, Deployments, Services, Ingress, HPA autoscaling" },
          { name: "Docker", level: "Advanced", icon: "Container", note: "Multi-stage builds, Alpine optimizations, Compose clusters" },
          { name: "Cloud (AWS / GCP)", level: "Skilled", icon: "CloudSun", note: "EC2/Compute, S3/Storage, VPCs, IAM policies" },
          { name: "CI/CD Pipelines", level: "Proficient", icon: "GitBranch", note: "GitHub Actions automated build, test & push" },
          { name: "Monitoring & Observability", level: "Skilled", icon: "Activity", note: "Prometheus metrics, Grafana dashboards, Health probes" }
        ]
      },
      {
        id: "flavors",
        title: "Sharp Whiskers & Tooling",
        catName: "Instincts & Secret Toys ✨",
        icon: "Sparkles",
        badgeColor: "bg-yarn-100 text-yarn-700 border-yarn-300 dark:bg-whisker-800 dark:text-yarn-300",
        items: [
          { name: "AI/ML Integration", level: "Exploring", icon: "Brain", note: "Async inference workers, LangChain, Embedding pipelines" },
          { name: "Git & GitHub", level: "Advanced", icon: "GitCommit", note: "Trunk-based workflow, PR reviews, CI hooks" },
          { name: "Linux & Shell", level: "Proficient", icon: "TerminalSquare", note: "Bash scripting, Systemd, Process isolation, Cron" },
          { name: "Distributed Resilience", level: "Skilled", icon: "ShieldCheck", note: "Saga Pattern, Circuit Breakers, Retry policies" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "orderflow-hub",
      title: "OrderFlow Kafka Stream Hub",
      category: "Event-Driven Distributed System",
      catTag: "🐟 Catch of the Day",
      badge: "High-Throughput",
      summary: "Distributed event-driven transaction and inventory coordination hub built with Spring Boot, Apache Kafka, and PostgreSQL.",
      fullDescription: "A production-grade distributed ordering pipeline designed to handle bursty order volume. Implemented event-driven Saga pattern orchestration with Kafka topic partitioning, dead-letter recovery queues, and optimistic locking in PostgreSQL. Includes an automated Redis cache sync that lowered read latency by 72%.",
      metrics: [
        { label: "Throughput", value: "8,500+ msg/s" },
        { label: "P99 Latency", value: "< 18ms" },
        { label: "Reliability", value: "99.98%" }
      ],
      techStack: ["Java 17", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "Redis"],
      githubUrl: "https://github.com/almas-sayyad/orderflow-kafka-engine",
      demoUrl: "https://orderflow-demo.almas.dev",
      featured: true,
      iconName: "Flame"
    },
    {
      id: "kubebake-orchestrator",
      title: "KubePaw Microservice Cluster",
      category: "Cloud-Native Infrastructure",
      catTag: "📦 Cardboard Box Cluster",
      badge: "Zero-Downtime",
      summary: "Multi-service Kubernetes deployment with automated horizontal autoscaling (HPA), ingress routing, and Prometheus telemetry.",
      fullDescription: "Engineered a containerized microservice infrastructure running on Kubernetes. Configured custom Helm charts, ingress controllers with SSL termination, resource limits to prevent noisy-neighbor syndrome, and custom Prometheus metrics scrapers feeding real-time Grafana dashboards.",
      metrics: [
        { label: "Rolling Update Downtime", value: "0s (Zero)" },
        { label: "Auto-scale Threshold", value: "70% CPU/RAM" },
        { label: "Observability", value: "Full Tracing" }
      ],
      techStack: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana", "AWS EKS", "Linux"],
      githubUrl: "https://github.com/almas-sayyad/kubebake-k8s-cluster",
      demoUrl: "https://kubebake.almas.dev",
      featured: true,
      iconName: "Boxes"
    },
    {
      id: "gopulse-gateway",
      title: "GoPulse Concurrency Gateway",
      category: "High-Performance Edge Proxy",
      catTag: "⚡ Cat Zoomies Proxy",
      badge: "Ultra-Fast",
      summary: "Blazing fast edge API reverse proxy with token-bucket rate limiting, circuit breaker, and gRPC routing built in Go.",
      fullDescription: "Developed a lightweight, high-concurrency API gateway using Go goroutines and worker pools. Features IP and user-based token bucket rate limiting using Redis, adaptive circuit breaker failure thresholds, and dynamic upstream service health checking with gRPC support.",
      metrics: [
        { label: "Max Concurrency", value: "30k req/s" },
        { label: "Memory Footprint", value: "Only ~16 MB" },
        { label: "Overhead", value: "< 2.8ms" }
      ],
      techStack: ["Go (Golang)", "gRPC", "Redis", "Docker", "Goroutines", "Protobuf"],
      githubUrl: "https://github.com/almas-sayyad/gopulse-gateway",
      demoUrl: "https://gopulse.almas.dev",
      featured: true,
      iconName: "Zap"
    },
    {
      id: "neurobatch-pipeline",
      title: "NeuroBatch AI Inference Worker",
      category: "Asynchronous AI Pipeline",
      catTag: "🧠 Sharp Whiskers Worker",
      badge: "Smart Batching",
      summary: "Asynchronous background ML inference pipeline decoupling heavy model processing from web backends via message queues.",
      fullDescription: "Architected a decoupled AI processing microservice for audio classification and feature extraction. Web clients receive an instant receipt token while backend worker pools dynamically batch incoming inference requests, maximizing hardware utilization before delivering results via webhooks.",
      metrics: [
        { label: "GPU Batch Efficiency", value: "+340%" },
        { label: "Client Response Time", value: "< 35ms" },
        { label: "Task Queue", value: "Lossless Persistence" }
      ],
      techStack: ["Python", "Go Worker", "Redis Streams", "Docker", "PyTorch", "FastAPI"],
      githubUrl: "https://github.com/almas-sayyad/neurobatch-ai-worker",
      demoUrl: "https://neurobatch.almas.dev",
      featured: false,
      iconName: "Brain"
    }
  ],

  hobbies: [
    {
      id: "gaming",
      title: "Cozy & Tactical Gaming",
      catPairing: "🎮 Laser Pointer Chaser",
      tag: "Focus & Reflexes",
      icon: "Gamepad2",
      description: "From tactical team shooters and strategy games to cozy indie titles like Stray, Stardew Valley & Hollow Knight. Video games are a masterclass in feedback loops, split-second state handling, and interactive system mechanics.",
      favoritePicks: ["Tactical FPS & Shooters", "Indie Metroidvanias", "Stray & Cozy RPGs"],
      interactiveTip: "Click to level up your gaming controller!"
    },
    {
      id: "singing",
      title: "Vocal Harmonies & Purrs",
      catPairing: "🎤 Melodious Purr",
      tag: "Rhythm & Resonance",
      icon: "Mic2",
      description: "Music and singing are my soul-nourishing retreat. Exploring vocal range, acoustic ballads, and soothing Indian & Western melodies helps me cultivate rhythm, emotional resonance, and creative energy.",
      favoritePicks: ["Acoustic Ballads", "Melodic Indie Pop", "Soulful Classics"],
      interactiveTip: "Click to hear a sweet harmonic chime!"
    },
    {
      id: "reading",
      title: "Books & Systems Papers",
      catPairing: "📚 Curled Up on the Bookshelf",
      tag: "Curiosity & Depth",
      icon: "BookOpen",
      description: "Curling up like a cat with deep-dive software engineering architecture books, distributed systems whitepapers (Raft, Dynamo, Kafka), as well as thoughtful sci-fi and human psychology literature.",
      favoritePicks: ["Designing Data-Intensive Applications", "Building Microservices", "Sci-Fi & Philosophy"],
      interactiveTip: "Click to bookmark a new chapter!"
    }
  ],

  contactFlavors: [
    { id: "backend", label: "☕ Scalable Backend & APIs", desc: "Spring Boot, Go, Microservices" },
    { id: "kafka", label: "🐟 Kafka & Distributed Streams", desc: "Event-driven architecture" },
    { id: "cloud", label: "📦 Kubernetes & Cloud Migration", desc: "Docker, K8s, CI/CD" },
    { id: "cat", label: "🐾 Cat Chat & Tech Collaboration", desc: "Internships, Tech talks, Cat stories" }
  ]
};
