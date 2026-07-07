export const PERSONAL_INFO = {
  name: "Prabhat Kumar",
  title: "AI/ML Engineer & Full Stack Developer",
  email: "prabhatsharma84226@gmail.com",
  phone: "+91 7667123709",
  location: "Bengaluru, India",
  github: "prabhatadvait",
  linkedin: "prabhat-kumar-1260a5259",
  leetcode: "prabhat7667",
  hackerrank: "prabhatsharma841",
  dockerhub: "prabhat076",
  cgpa: "9.4",
  bio: `AI engineer at Rakuten India, building LLM-powered automation, RAG pipelines and full-stack tools in production. Research published at an international Springer conference in Singapore.`,
  longBio: `I work on production AI systems at Rakuten India — LLM automation, RAG pipelines, vector search and full-stack engineering. I graduated in Computer Science (Data Science) from RN Shetty Institute of Technology under VTU with a 9.4 CGPA. My work spans the full stack: from training and fine-tuning language models to shipping them behind FastAPI services with Docker and CI/CD. I also build React and Next.js frontends and automate infrastructure with shell scripting and Kubernetes.`,
  heroTagline: "I build AI systems that go from research into production.",
  roles: [
    "AI/ML Engineer",
    "Full Stack Developer",
    "DevOps Enthusiast",
    "LLM Specialist",
  ],
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/prabhatadvait",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prabhat-kumar-1260a5259",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/prabhat7667/",
    icon: "leetcode",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/prabhatsharma841",
    icon: "hackerrank",
  },
  {
    name: "Docker Hub",
    url: "https://hub.docker.com/u/prabhat076",
    icon: "docker",
  },
];

export const NAV_LINKS = [
  { name: "Home",         href: "#home"         },
  { name: "About",        href: "#about"        },
  { name: "Experience",   href: "#experience"   },
  { name: "Skills",       href: "#skills"       },
  { name: "Projects",     href: "#projects"     },
  { name: "LeetCode",     href: "#leetcode"     },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact",      href: "#contact"      },
];

export const EXPERIENCE = [
  {
    title: "AI/ML Engineering Intern",
    company: "Rakuten India",
    location: "Bengaluru, India",
    period: "Jan 2026 – Present",
    type: "Internship",
    highlights: [
      "Engineered production-grade RAG pipelines using embeddings, vector search and reranking, improving retrieval precision for Rakuten's enterprise knowledge bases",
      "Developed LLM-powered automation workflows that process large-scale structured and unstructured data for Rakuten's internal tooling",
      "Built full-stack internal tools with React, TypeScript and FastAPI as part of the CIS Autoconfig infrastructure configuration project",
      "Applied prompt engineering and context-window optimisation to reduce LLM response latency and token costs",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Cognify Technology",
    location: "Bengaluru, India",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    highlights: [
      "Designed interactive analytics dashboards to surface key business metrics for cross-functional stakeholders, improving data visibility across teams",
      "Trained and evaluated ML classification models for user behaviour prediction using scikit-learn, achieving strong accuracy on held-out test sets",
      "Automated ETL data extraction pipelines using Python, reducing manual processing time by 40 percent and eliminating recurring data-quality errors",
    ],
  },
  {
    title: "Student Placement Coordinator",
    company: "RN Shetty Institute of Technology",
    location: "Bengaluru, India",
    period: "Jan 2024 – Mar 2025",
    type: "Leadership",
    highlights: [
      "Led campus recruitment drives in collaboration with 10+ technology companies, facilitating 200+ student placements",
      "Mentored peers through resume reviews, mock interviews, and placement-readiness workshops",
      "Coordinated pre-placement talks, aptitude tests, and GD/PI rounds, ensuring smooth end-to-end candidate experience",
      "Managed placement records, student–company communications, and onboarding documentation throughout the hiring cycle",
    ],
  },
  {
    title: "Event Organiser",
    company: "IEEE Student Branch",
    location: "Bengaluru, India",
    period: "Jan 2024 – Dec 2024",
    type: "Volunteer",
    highlights: [
      "Planned and executed IEEE community events focused on emerging technologies and professional development",
      "Coordinated logistics, speakers, and attendee engagement, growing branch participation over the year",
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "AI/ML",
    skills: [
      "PyTorch", "TensorFlow", "LangChain", "HuggingFace",
      "OpenAI", "RAG", "FAISS", "NLP", "LLMs",
      "Computer Vision", "Prompt Engineering",
    ],
  },
  {
    name: "Full Stack",
    skills: [
      "React", "Next.js", "TypeScript", "FastAPI",
      "Flask", "Node.js", "REST APIs", "Tailwind CSS", "Spring Boot",
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      "Docker", "Kubernetes", "Linux", "Git",
      "GitHub Actions", "CI/CD", "Shell Scripting", "Azure",
    ],
  },
  {
    name: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript", "Java"],
  },
  {
    name: "Data & Viz",
    skills: [
      "Pandas", "NumPy", "Scikit-learn",
      "Power BI", "Matplotlib", "MongoDB",
    ],
  },
];

export const FEATURED_REPOS = [
  "Medical_Chatbot",
  "LLM_Fine_Tuning",
  "Gen-AI-Complete",
  "Grocery_Full_stack_web_app",
  "BASH-Scripting-linux-zsh-",
  "ANN_Classification_Churn-bank-",
];

export const PROJECT_CATEGORIES: Record<string, string> = {
  Medical_Chatbot: "AI/ML",
  LLM_Fine_Tuning: "AI/ML",
  "Gen-AI-Complete": "AI/ML",
  "Book-Recommendation-LLM": "AI/ML",
  "Job-Screening-AI": "AI/ML",
  Breast_Cancer_Detection: "AI/ML",
  "Movie-Recommendation-System": "AI/ML",
  Grocery_Full_stack_web_app: "Full Stack",
  PHP_laravel_app_docker: "DevOps",
  "OCR_Documet_Reader": "Full Stack",
  BASH_Scripting_linux_zsh_: "DevOps",
  "BASH-Scripting-linux-zsh-": "DevOps",
  "Linux-System-Monitor-Script": "DevOps",
  kub_first_app: "DevOps",
  "kub-data-demo": "DevOps",
  ANN_Classification_Churn_bank_: "Data Science",
  "ANN_Classification_Churn-bank-": "Data Science",
  DSA_FULL_Prep: "Data Science",
};

export const PUBLICATIONS = [
  {
    title: "Real-Time Gesture Recognition for Numeric Drawing and Calculation",
    venue:
      "5th International Conference on 6G Communications Networking and Signal Processing (SGCNSP)",
    publisher: "Springer",
    location: "Nanyang Technological University, Singapore",
    date: "Dec 2025",
  },
];

export const CASE_STUDIES = [
  {
    id: "medical-chatbot",
    title: "Medical RAG Chatbot",
    tagline: "Making medical knowledge searchable in plain language",
    description: "A retrieval-augmented chatbot that answers medical questions by searching a curated knowledge base, built to cut the time it takes to look up clinical information.",
    tech: ["Python", "LangChain", "FAISS", "OpenAI", "FastAPI"],
    category: "AI/ML",
    github: "https://github.com/prabhatadvait/Medical_Chatbot",
    demo: "",
    bgClass: "from-blue-500/20 to-cyan-400/20",
    darkBgClass: "dark:from-blue-900/40 dark:to-cyan-900/30",
    iconColor: "#3b82f6",
    icon: "activity",
  },
  {
    id: "llm-fine-tuning",
    title: "LLM Fine-Tuning Pipeline",
    tagline: "Training domain-specific language models end-to-end",
    description: "A complete pipeline for fine-tuning open-source LLMs with QLoRA, covering dataset preparation, training runs, evaluation metrics and model export.",
    tech: ["PyTorch", "HuggingFace", "QLoRA", "PEFT", "Python"],
    category: "AI/ML",
    github: "https://github.com/prabhatadvait/LLM_Fine_Tuning",
    demo: "",
    bgClass: "from-violet-500/20 to-purple-400/20",
    darkBgClass: "dark:from-violet-900/40 dark:to-purple-900/30",
    iconColor: "#8b5cf6",
    icon: "cpu",
  },
  {
    id: "grocery-app",
    title: "Grocery Full-Stack App",
    tagline: "A complete e-commerce platform from UI to deployment",
    description: "A full-stack grocery ordering app with product listings, cart management, user auth and Docker-based deployment, covering both frontend and backend from scratch.",
    tech: ["React", "Node.js", "MongoDB", "Docker", "Express"],
    category: "Full Stack",
    github: "https://github.com/prabhatadvait/Grocery_Full_stack_web_app",
    demo: "",
    bgClass: "from-emerald-500/20 to-green-400/20",
    darkBgClass: "dark:from-emerald-900/40 dark:to-green-900/30",
    iconColor: "#10b981",
    icon: "shopping-cart",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
  },
  {
    name: "Deep Learning (Elite)",
    issuer: "NPTEL - IIT Ropar",
  },
  {
    name: "Data Science For Engineers",
    issuer: "NPTEL",
  },
  {
    name: "AWS AI and ML Certifications",
    issuer: "Amazon Web Services",
  },
  {
    name: "DevOps Foundation",
    issuer: "Great Learning",
  },
  {
    name: "Docker & Kubernetes",
    issuer: "Udemy",
  },
  {
    name: "AI Agent Fundamentals",
    issuer: "Databricks Academy",
  },
];

export const EDUCATION = {
  degree: "B.E., Computer Science (Data Science)",
  institution: "RN Shetty Institute of Technology",
  university: "VTU (Visvesvaraya Technological University)",
  location: "Bengaluru, India",
  period: "2022 - 2026",
  cgpa: "9.4",
};

export const TESTIMONIALS = [
  {
    quote:
      "I had the opportunity to work with Prabhat Kumar and found him to be a dedicated, skilled, and reliable professional. He has strong problem-solving abilities, learns quickly, and works well in a team. I highly recommend him for any future opportunities.",
    author: "Utkarsh Kher",
    role: "Professional Connection",
  },
  {
    quote:
      "What stood out wasn't a list of credentials. It was his intention. His commitment to showing up, doing the work, and learning with curiosity and care. With guidance from mentorship and hands-on projects, Prabhat is growing confidence, clarity, and a voice of his own in technology.",
    author: "MindyCore",
    role: "Mentorship Program",
  },
];

export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Java: "#b07219",
  "Jupyter Notebook": "#DA5B0B",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  default: "#8b5cf6",
};
