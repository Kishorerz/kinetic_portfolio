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
      slug: "chainsense",
      name: "ChainSense",
      year: "2024",
      type: "Industrial IoT & Blockchain",
      category: "Secure Industrial IoT Logging with Blockchain",
      client: "Industrial Research Lab / Self-initiated",
      role: "Lead Architect & Developer",
      platform: "Raspberry Pi + Ethereum + Flask",
      description:
        "An end-to-end decentralized IoT telemetry system pairing embedded Raspberry Pi hardware with immutable Ethereum smart contract logging to guarantee tamper-proof industrial sensor audit trails.",
      longDescription:
        "ChainSense was built to solve a critical trust deficit in modern manufacturing: telemetry data from temperature probes, pressure valves, and vibration monitors is vulnerable to local tampering before audit review. By interfacing industrial hardware directly with an automated smart contract worker, every critical reading is cryptographically signed and permanently sealed on-chain without human intervention.",
      tech: ["Python", "Flask", "Web3.py", "Ethereum", "Raspberry Pi", "JavaScript"],
      link: "https://github.com/Kishorerz/chainsense",
      github: "https://github.com/Kishorerz/chainsense",
      accentNote: "Live on GitHub",
      stats: [
        { label: "Audit Tamper Resistance", value: "100%" },
        { label: "Average Block Commit", value: "12s" },
        { label: "Hardware Node Latency", value: "18ms" },
        { label: "Automated Signatures", value: "24/7" },
      ],
      whatIDid: [
        "Embedded Sensor Integration",
        "Ethereum Smart Contracts",
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
      nextProject: { name: "Pathfindr", slug: "pathfindr", num: "02" },
    },
    {
      num: "02",
      slug: "pathfindr",
      name: "Pathfindr",
      year: "2025",
      type: "Campus Navigation System",
      category: "Campus Navigation & Route Discovery",
      client: "Campus Navigation Initiative",
      role: "Frontend Engineer & Algorithm Designer",
      platform: "React.js + Dijkstra Graph Engine",
      description:
        "An interactive, ultra-responsive web navigation system designed for university campuses, helping students and visitors calculate optimal indoor & outdoor walking routes instantly.",
      longDescription:
        "University campuses are notoriously tricky for new students, guest lecturers, and visitors. Pathfindr renders a clean, accessible vector map of academic blocks, seminar halls, and amenities, offering turn-by-turn guidance and dynamic accessibility filtering (elevators vs. stairs) across multi-floor facilities.",
      tech: ["React.js", "JavaScript", "HTML", "CSS", "Graph Algorithms"],
      link: "https://github.com/Kishorerz/Pathfindr-Simple-Campus-Routes-Website-.git",
      github: "https://github.com/Kishorerz/Pathfindr-Simple-Campus-Routes-Website-.git",
      accentNote: "Jan 2025 — Apr 2025",
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
      nextProject: { name: "Precision Farming", slug: "precision-farming", num: "03" },
    },
    {
      num: "03",
      slug: "precision-farming",
      name: "Precision Farming",
      year: "2023",
      type: "AI/ML · Smart Agriculture",
      category: "Intelligent Crop Health & Soil Telemetry",
      client: "AgriTech Innovation / Academic Project",
      role: "Machine Learning & IoT Developer",
      platform: "Python + Computer Vision + Environmental IoT",
      description:
        "An agricultural intelligence framework leveraging computer vision and environmental sensors to predict crop stress, automate irrigation decisions, and maximize harvest yields sustainably.",
      longDescription:
        "Precision Farming brings automated intelligence to micro-climate agriculture. By combining soil moisture, ambient temperature, and computer vision leaf analysis, the system predicts crop water stress hours before visible wilting occurs, enabling proactive and water-conserving drip irrigation.",
      tech: ["Python", "Machine Learning", "Computer Vision", "IoT Sensors", "Data Analysis"],
      link: "https://github.com/Kishorerz/Precision-Farming.git",
      github: "https://github.com/Kishorerz/Precision-Farming.git",
      accentNote: "AI/ML Agriculture",
      stats: [
        { label: "Water Savings Estimated", value: "34%" },
        { label: "Crop Disease Detection", value: "94.2%" },
        { label: "Sensor Polling Interval", value: "30s" },
        { label: "Predictive Lead Time", value: "4.5h" },
      ],
      whatIDid: [
        "Model Training & Evaluation",
        "IoT Soil Telemetry Calibration",
        "Computer Vision Leaf Diagnostics",
        "Automated Actuator Automation",
      ],
      highlights: [
        {
          title: "Early Blight & Pest Detection",
          desc: "Convolutional neural network classifiers identify early-stage foliar diseases directly from leaf photography, warning farmers before outbreak spread.",
        },
        {
          title: "Intelligent Irrigation Logic",
          desc: "Water valves fire only when predictive soil evapotranspiration math indicates necessity, avoiding over-saturation and conserving groundwater.",
        },
        {
          title: "Edge Resilience",
          desc: "Designed to operate in rural areas with intermittent connectivity; edge controllers buffer telemetry and run inference locally.",
        },
      ],
      nextProject: { name: "CodeSure", slug: "codesure", num: "04" },
    },
    {
      num: "04",
      slug: "codesure",
      name: "CodeSure",
      year: "2026",
      type: "Developer Tools · Software Analysis",
      category: "Static Analysis & Code Quality Engine",
      client: "Developer Tooling / Open Source",
      role: "Core Systems Developer",
      platform: "Python AST + Static Diagnostics Engine",
      description:
        "An intelligent developer tool and code quality analyzer that inspects source repositories to surface security vulnerabilities, architectural smells, and automated refactoring suggestions.",
      longDescription:
        "CodeSure is a developer-centric static inspection tool designed to catch edge cases that standard linters miss. By building a complete Abstract Syntax Tree (AST) and dependency graph across Python codebases, CodeSure pinpoints cyclic dependencies, unhandled exception paths, and insecure API usage prior to code review.",
      tech: ["Python", "Software Analysis", "Static AST Parser", "Developer Tooling"],
      link: "https://github.com/Kishorerz/CodeSure.git",
      github: "https://github.com/Kishorerz/CodeSure.git",
      accentNote: "Dev Tooling",
      stats: [
        { label: "Parsing Throughput", value: "14k LOC/s" },
        { label: "False Positive Rate", value: "<1.2%" },
        { label: "Security Heuristics", value: "48+" },
        { label: "CI/CD Setup Time", value: "2 min" },
      ],
      whatIDid: [
        "Abstract Syntax Tree Parser",
        "Vulnerability Pattern Rules",
        "CLI Interface & Formatting",
        "GitHub Actions CI Integration",
      ],
      highlights: [
        {
          title: "Deep AST Traversal",
          desc: "Analyzes semantic intent rather than regex string matching, catching subtle flaws such as mutable default arguments and unescaped SQL fragments.",
        },
        {
          title: "Automated Refactoring Patches",
          desc: "Generates instant diff patches that engineers can apply with one command to fix identified antipatterns.",
        },
        {
          title: "Minimal Developer Friction",
          desc: "Blazing fast execution speeds mean it can run as a pre-commit git hook without slowing down local developer workflow.",
        },
      ],
      nextProject: { name: "ChainSense", slug: "chainsense", num: "01" },
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
