export interface Project {
  num: string;
  slug: string;
  name: string;
  year: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  link: string;
  github: string;
  accentNote?: string;
  type: string;
  client: string;
  role: string;
  platform: string;
  stats: { label: string; value: string }[];
  whatIDid: string[];
  highlights: { title: string; desc: string }[];
  nextProject: { name: string; slug: string; num: string };
}

export interface Service {
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Certificate {
  num: string;
  title: string;
  issuer: string;
  issueDate: string; // e.g. "May 2025"
  credentialId?: string;
  credentialUrl?: string; // Confirmed official verification link (opens in new tab)
  skills?: string[];
  description?: string;
  badgeText?: string;
}

export const siteConfig = {
  name: "Kishor Kumar",
  firstName: "KISHOR",
  lastName: "KUMAR",
  role: "AI/ML Enthusiast & Developer",
  location: "India",
  status: "Available for projects / Remote",
  eyebrow: "FROM IDEAS TO DEPLOYED PRODUCTS.",
  heroBlurb:
    "I’m Kishor — an AI/ML enthusiast and developer building smart solutions for real-world problems.",
  
  marqueeSkills: [
    "Java",
    "Python",
    "C++",
    "Next.js",
    "React.js",
    "HTML",
    "CSS",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Git",
    "GitHub",
    "Raspberry Pi",
  ],

  projects: [
    {
      num: "01",
      slug: "codesure",
      name: "CodeSure",
      year: "2026",
      type: "Risk Intelligence & DevSecOps",
      category: "Software Risk Intelligence & Evidence Platform",
      client: "Developer Tooling / Production Architecture",
      role: "Lead Full-Stack & Systems Architect",
      platform: "Java 21 LTS + Spring Boot 4 + React 19 + PostgreSQL",
      description:
        "A multi-dimensional software risk intelligence platform that analyzes unified git diffs, extracts multi-factor evidence, and predicts release risk before merging pull requests.",
      longDescription:
        "CodeSure adheres to the golden principle of 'Evidence before AI'. Connected to GitHub repositories via REST webhooks, the platform inspects modified and added lines across unified diffs. It runs a deterministic static rule engine (covering SQL injection, hardcoded secrets, cryptographic flaws, and path traversal) alongside git churn velocity and test coverage metrics. Evidence-weighted risk scores categorize release risk into Critical, High, Medium, and Low tiers, accompanied by explainable remediation guidance and a live React 19 telemetry dashboard.",
      tech: [
        "Java 21",
        "Spring Boot 4",
        "React 19",
        "TypeScript",
        "PostgreSQL 18",
        "Hibernate",
        "Static Analysis",
        "GitHub REST API",
      ],
      link: "https://github.com/Kishorerz/CodeSure.git",
      github: "https://github.com/Kishorerz/CodeSure.git",
      accentNote: "Featured Project",
      stats: [
        { label: "Deterministic Rules", value: "48+ Security Checks" },
        { label: "Analysis Focus", value: "Diff-Aware (+Lines)" },
        { label: "Risk Tiers", value: "4 Multi-Factor Levels" },
        { label: "Architecture", value: "Spring Boot + React 19" },
      ],
      whatIDid: [
        "Change-Aware Diff & AST Ingestion Engine",
        "Deterministic Security & Code Smell Rules",
        "Multi-Factor Evidence-Weighted Risk Scoring",
        "Interactive React 19 Intelligence Dashboard",
      ],
      highlights: [
        {
          title: "Evidence-Before-AI Architecture",
          desc: "Before generating explainability reports, code changes feed into deterministic static analysis, commit velocity curves, and test coverage metrics for provable verification.",
        },
        {
          title: "Differential AST & Security Inspection",
          desc: "Pinpoints high-severity vulnerabilities like SQL injection, leaked API keys, and insecure deserialization strictly on modified lines without noisy full-repo false positives.",
        },
        {
          title: "Enterprise Backend & Telemetry",
          desc: "Built on Java 21 LTS, Spring Boot 4, and PostgreSQL 18 with reactive WebSocket status monitors and live risk scoring gauges.",
        },
      ],
      nextProject: { name: "Kinetic Portfolio", slug: "kinetic-portfolio", num: "02" },
    },
    {
      num: "02",
      slug: "kinetic-portfolio",
      name: "Kinetic Portfolio",
      year: "2026",
      type: "Modern Web Engineering",
      category: "Kinetic Motion & Interactive Architecture",
      client: "Personal Brand & Production Showcase",
      role: "Lead Frontend Engineer & Motion Designer",
      platform: "Next.js 16 + React 19 + Tailwind CSS + Variable Fonts",
      description:
        "A high-performance developer portfolio featuring custom scroll-scrubbed physics, 3D cursor-leaning follower docks, full-viewport curtain transitions, and SMTP backend routes.",
      longDescription:
        "Built to demonstrate modern production frontend engineering, this kinetic portfolio combines the latest Next.js 16 App Router with React 19 and Tailwind CSS. It features custom Lenis smooth-scrolling, variable typography tracking with Archivo, mathematical Dijkstra graph visualizations, a scroll-synchronized interactive blue wipe curtain, and a zero-latency Node.js nodemailer backend for direct mail delivery.",
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Lenis Scroll",
        "Nodemailer",
        "Vercel",
      ],
      link: "https://kinetic-portfolio.vercel.app",
      github: "https://github.com/Kishorerz/kinetic_portfolio.git",
      accentNote: "Live Website",
      stats: [
        { label: "Lighthouse Performance", value: "99/100" },
        { label: "Transition Timing", value: "650ms Curtain Wipe" },
        { label: "Typography System", value: "Variable Archivo" },
        { label: "Backend Relay", value: "Next.js Route + SMTP" },
      ],
      whatIDid: [
        "Interactive Scroll-Scrubbed Canvas Architecture",
        "Kinetic Cursor-Following Tilt Dock",
        "Zero-Flicker Fullscreen Curtain Page Transitions",
        "Server-Side Node.js Mail Relaying Pipeline",
      ],
      highlights: [
        {
          title: "Zero-Layout-Shift Kinetic Motion",
          desc: "Hardware-accelerated CSS transforms and requestAnimationFrame loops deliver 60 FPS transitions without triggering reflows.",
        },
        {
          title: "Integrated SMTP Backend Route",
          desc: "Direct integration via Next.js server route handlers using secure App Passwords with instant mail dispatch directly to Kishor's primary inbox.",
        },
        {
          title: "Adaptive Responsive Typography",
          desc: "Engineered with variable font axes ('wdth' and 'wght') that dynamically scale across ultra-wide monitors down to handheld mobile devices.",
        },
      ],
      nextProject: { name: "ChainSense", slug: "chainsense", num: "03" },
    },
    {
      num: "03",
      slug: "chainsense",
      name: "ChainSense",
      year: "2024",
      type: "Industrial IoT & Blockchain",
      category: "Secure Industrial IoT Logging with Blockchain",
      client: "Industrial Research Lab / Self-initiated",
      role: "Lead Architect & Developer",
      platform: "Raspberry Pi + Ethereum + Flask + Solidity",
      description:
        "An end-to-end decentralized IoT telemetry system pairing embedded Raspberry Pi hardware with immutable Ethereum smart contract logging to guarantee tamper-proof industrial sensor audit trails.",
      longDescription:
        "ChainSense was built to solve a critical trust deficit in modern manufacturing: telemetry data from temperature probes, pressure valves, and vibration monitors is vulnerable to local tampering before audit review. By interfacing industrial hardware directly with an automated smart contract worker, every critical reading is cryptographically signed and permanently sealed on-chain without human intervention.",
      tech: ["Python", "Flask", "Web3.py", "Solidity", "Ethereum", "Raspberry Pi 4", "Adafruit DHT"],
      link: "https://github.com/Kishorerz/chainsense.git",
      github: "https://github.com/Kishorerz/chainsense.git",
      accentNote: "IoT & Blockchain",
      stats: [
        { label: "Audit Tamper Resistance", value: "100%" },
        { label: "Average Block Commit", value: "12s" },
        { label: "Hardware Node Latency", value: "18ms" },
        { label: "Automated Signatures", value: "24/7" },
      ],
      whatIDid: [
        "Embedded Sensor Integration",
        "Ethereum Smart Contracts in Solidity",
        "Python Flask Gateway",
        "Real-Time Telemetry Dashboard",
      ],
      highlights: [
        {
          title: "Hardware-to-Chain Bridge",
          desc: "Readings captured by Raspberry Pi GPIO sensors pass through an edge-validation script before generating a signed transaction payload via Web3.py.",
        },
        {
          title: "Gas-Optimized Merkle Trees",
          desc: "To prevent excessive gas consumption, high-frequency readings are batched into Merkle root hashes before checkpoint commitment on the Ethereum ledger.",
        },
        {
          title: "Instant Audit Verification",
          desc: "Inspectors can paste any local log file into the verification portal to test its cryptographic hash against the immutable on-chain record.",
        },
      ],
      nextProject: { name: "Pathfindr", slug: "pathfindr", num: "04" },
    },
    {
      num: "04",
      slug: "pathfindr",
      name: "Pathfindr",
      year: "2025",
      type: "Campus Navigation System",
      category: "Campus Navigation & Route Discovery",
      client: "Campus Navigation Initiative",
      role: "Frontend Engineer & Algorithm Designer",
      platform: "React.js + Dijkstra Graph Engine + Vercel",
      description:
        "An interactive, ultra-responsive web navigation system designed for university campuses, helping students and visitors calculate optimal indoor & outdoor walking routes instantly.",
      longDescription:
        "University campuses are notoriously tricky for new students, guest lecturers, and visitors. Pathfindr renders a clean, accessible vector map of academic blocks, seminar halls, and amenities, offering turn-by-turn guidance and dynamic accessibility filtering (elevators vs. stairs) across multi-floor facilities.",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Graph Algorithms", "Dijkstra Engine", "Vercel"],
      link: "https://pathfindr-simple-campus-routes-webs-kappa.vercel.app/",
      github: "https://github.com/Kishorerz/Pathfindr-Simple-Campus-Routes-Website-.git",
      accentNote: "Live on Vercel",
      stats: [
        { label: "Route Calculation Speed", value: "<10ms" },
        { label: "Campus Waypoints Mapped", value: "120+" },
        { label: "Accessible Paths", value: "100%" },
        { label: "Student Test Accuracy", value: "99.4%" },
      ],
      whatIDid: [
        "Vector Map Architecture",
        "Shortest Path Dijkstra Engine",
        "Responsive Mobile UI",
        "Accessibility Route Filters",
      ],
      highlights: [
        {
          title: "Zero-Latency Route Search",
          desc: "The pathfinding graph runs directly in-browser using an optimized Dijkstra algorithm, recalculating routes dynamically as users explore waypoints.",
        },
        {
          title: "Multi-Floor Level Switching",
          desc: "Seamless transitions between outdoor pathways and multi-story indoor floorplans without jarring screen resets or external map dependencies.",
        },
        {
          title: "Mobile-First Wayfinding",
          desc: "Designed specifically for one-handed phone use while walking, with high-contrast text and readable milestone markers.",
        },
      ],
      nextProject: { name: "Precision Farming", slug: "precision-farming", num: "05" },
    },
    {
      num: "05",
      slug: "precision-farming",
      name: "Precision Farming",
      year: "2024",
      type: "AI/ML · Smart Agriculture",
      category: "Intelligent Crop Health, Soil Telemetry & Disease Detection",
      client: "AgriTech Innovation / Smart Farming",
      role: "Machine Learning & Deep Learning Developer",
      platform: "Python + PyTorch + Scikit-Learn + Flask + Random Forest",
      description:
        "An AI-powered agricultural intelligence web system predicting optimal crop selections, recommending precise soil fertilizers, and classifying plant leaf diseases using deep learning neural networks.",
      longDescription:
        "Precision Farming brings automated machine learning intelligence to agriculture across three specialized pillars: Crop Recommendation using multi-feature soil data (N, P, K, temperature, humidity, pH, rainfall), Fertilizer Suggestion based on nutrient deficits, and Plant Disease Prediction powered by convolutional neural network models (PyTorch) trained on high-resolution crop foliage images.",
      tech: [
        "Python",
        "PyTorch",
        "Scikit-Learn",
        "Random Forest",
        "Convolutional Neural Networks",
        "Flask",
        "NumPy",
        "Pandas",
      ],
      link: "https://github.com/Kishorerz/Precision-Farming.git",
      github: "https://github.com/Kishorerz/Precision-Farming.git",
      accentNote: "ML & Deep Learning",
      stats: [
        { label: "Disease Model Accuracy", value: "95.4%" },
        { label: "Prediction Pillars", value: "Crop, Fertilizer & Disease" },
        { label: "Model Weights", value: "PyTorch ResNet + RF" },
        { label: "Crop Varieties Supported", value: "22+ Agricultural Crops" },
      ],
      whatIDid: [
        "PyTorch Deep Neural Network Leaf Classifier",
        "Random Forest Crop Recommendation Model",
        "Soil Nutrient & Evapotranspiration Logic",
        "Flask Web Application & REST API",
      ],
      highlights: [
        {
          title: "Convolutional Leaf Disease Detection",
          desc: "Deep learning models classify foliar pathogens, blights, and leaf scorch from uploaded images and provide immediate remediation treatments.",
        },
        {
          title: "Multi-Parametric Crop Recommendation",
          desc: "Trained on Nitrogen, Phosphorus, Potassium, soil pH, moisture, and rainfall telemetry to accurately guide sowing decisions.",
        },
        {
          title: "Deficit-Targeted Fertilizer Advice",
          desc: "Analyzes nutrient imbalances in agricultural soil to recommend precise chemical and organic fertilizers, preventing environmental runoff.",
        },
      ],
      nextProject: { name: "CodeSure", slug: "codesure", num: "01" },
    },
  ] as Project[],

  statement:
    "I build intelligent solutions that turn complex problems into meaningful experiences. From AI-powered systems to full-stack applications, I’m driven by curiosity, fueled by code, and focused on building technology that makes a difference.",

  services: [
    {
      num: "01",
      title: "Full-Stack Development",
      description:
        "I build responsive, user-friendly web applications using React and modern backend technologies, turning ideas into functional digital products.",
      tags: ["React", "Java", "Spring Boot", "REST APIs"],
    },
    {
      num: "02",
      title: "AI & Machine Learning",
      description:
        "I develop intelligent solutions that use data, machine learning, and AI to solve real-world problems and automate complex tasks.",
      tags: ["Python", "Machine Learning", "Data Analysis", "Deep Learning"],
    },
    {
      num: "03",
      title: "Backend & API Engineering",
      description:
        "I design backend systems and REST APIs that connect applications, manage data, and provide a reliable foundation for scalable software.",
      tags: ["API Design", "Databases", "System Architecture", "Microservices"],
    },
    {
      num: "04",
      title: "Intelligent Product Prototyping",
      description:
        "I transform early-stage ideas into working prototypes, combining AI, automation, and emerging technologies to test concepts and deliver practical solutions.",
      tags: ["Rapid Prototyping", "Automation", "IoT", "Raspberry Pi"],
    },
  ] as Service[],

  certificationsLinkedInUrl: "https://www.linkedin.com/in/kishorkumarbaskaran/details/certifications/",

  certificates: [
    {
      num: "01",
      title: "Google Cloud Data Analytics Certificate",
      issuer: "Google",
      issueDate: "May 2025",
      badgeText: "CLOUD ANALYTICS",
      skills: ["Google Cloud", "Data Analytics", "Cloud SQL", "BigQuery"],
    },
    {
      num: "02",
      title: "Industrial Internet of Things (IIoT)",
      issuer: "University of Michigan",
      issueDate: "April 2025",
      credentialId: "EVERMCR1F6ZC",
      badgeText: "IIOT ARCHITECTURE",
      skills: ["Industrial IoT", "Embedded Telemetry", "Sensors", "Edge Computing"],
    },
    {
      num: "03",
      title: "Industrial IoT Markets and Security",
      issuer: "University of Colorado Boulder",
      issueDate: "April 2025",
      credentialId: "N7IU7RMKIL8M",
      badgeText: "SECURITY & MARKETS",
      skills: ["IoT Security", "Cybersecurity", "Network Architecture", "Industrial Systems"],
    },
    {
      num: "04",
      title: "Full Stack Development using Java",
      issuer: "RETECH Solutions Pvt Ltd",
      issueDate: "July 2024",
      credentialId: "5743-8176",
      badgeText: "FULL STACK DEV",
      skills: ["Java", "Full Stack Development", "Spring", "Database Systems"],
    },
    {
      num: "05",
      title: "Data Analytics",
      issuer: "United Latino Students Association",
      issueDate: "May 2025",
      credentialId: "16048992",
      badgeText: "DATA ANALYTICS",
      skills: ["Data Analytics", "Quantitative Analysis", "Reporting", "Visualization"],
    },
    {
      num: "06",
      title: "Data Analytics 2",
      issuer: "United Latino Students Association",
      issueDate: "May 2025",
      credentialId: "16046382",
      badgeText: "DATA ANALYTICS II",
      skills: ["Advanced Analytics", "Data Modeling", "Insights Extraction"],
    },
    {
      num: "07",
      title: "Data Analytics 1",
      issuer: "United Latino Students Association",
      issueDate: "April 2025",
      credentialId: "15341467",
      badgeText: "DATA ANALYTICS I",
      skills: ["Data Foundations", "Spreadsheet Modeling", "Exploratory Analysis"],
    },
    {
      num: "08",
      title: "Microsoft Operating System Installation & Upgrade",
      issuer: "Infosys Springboard",
      issueDate: "May 2024",
      badgeText: "SYSTEM ARCHITECTURE",
      skills: ["Windows OS", "System Configuration", "OS Upgrades", "Troubleshooting"],
    },
    {
      num: "09",
      title: "Introduction to Internet of Things",
      issuer: "NPTEL",
      issueDate: "April 2024",
      badgeText: "IOT FOUNDATIONS",
      skills: ["IoT Protocols", "Wireless Networks", "Sensors & Actuators", "Embedded C"],
    },
    {
      num: "10",
      title: "UX Design for Web Developers",
      issuer: "Infosys Springboard",
      issueDate: "December 2023",
      badgeText: "UI / UX ENGINEERING",
      skills: ["UX Design", "Wireframing", "Interaction Design", "Accessibility"],
    },
  ] as Certificate[],

  contact: {
    email: "kishorkumar.baskarann@gmail.com",
    github: "https://github.com/Kishorerz",
    linkedin: "https://www.linkedin.com/in/kishorkumarbaskaran/",
    resumeUrl: "/resume.pdf", // Can be replaced with any local PDF in /public or Google Drive / cloud link
  },
};
