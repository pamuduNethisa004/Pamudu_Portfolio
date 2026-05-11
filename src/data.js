// ============================================================
//  data.js — Edit ALL your personal info here in one place!
// ============================================================

const DATA = {
  // ── Personal Info ─────────────────────────────────────────
  name: {
    first: "Pamudu",
    last: "Jayathunge",
  },

  // Roles that cycle in the typewriter on the hero
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ],

  badge: "Available for Internships",

  tagline:
    "Software Engineering undergraduate — building modern web apps, AI tools, and everything in between.",

  // ── Contact & Socials ─────────────────────────────────────
  email: "pamudu@example.com",           // ← your real email
  github: "https://github.com/yourname", // ← your GitHub URL
  linkedin: "https://linkedin.com/in/yourname", // ← your LinkedIn
  twitter: "https://twitter.com/yourname",      // ← or remove

  // ── About Section ─────────────────────────────────────────
  about: [
    "I'm a passionate developer with a keen eye for design and a love for creating impactful digital experiences. I specialize in building modern, responsive web applications that solve real-world problems.",
    "Currently pursuing my degree in Software Engineering, I enjoy exploring the intersection of AI and web development to create intelligent, user-centered solutions.",
  ],

  aboutTags: [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Open Source Fan",
    "AI Curious",
  ],

  stats: [
    { number: "10+", label: "Projects Completed" },
    { number: "3+",  label: "Years of Coding" },
    { number: "5+",  label: "Technologies Mastered" },
  ],

  // ── Skills Section ────────────────────────────────────────
  skills: [
    {
      icon: "🎨",
      title: "Frontend",
      pills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      icon: "⚙️",
      title: "Backend",
      pills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    },
    {
      icon: "🗄️",
      title: "Database",
      pills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"],
    },
    {
      icon: "🛠️",
      title: "Tools & DevOps",
      pills: ["Git", "GitHub", "Docker", "Vercel", "Netlify"],
    },
    {
      icon: "🤖",
      title: "AI / ML",
      pills: ["Python", "TensorFlow", "LangChain", "OpenAI API"],
    },
    {
      icon: "📱",
      title: "Other",
      pills: ["Figma", "Agile", "Linux", "Bash"],
    },
  ],

  // ── Projects Section ──────────────────────────────────────
  projects: [
    {
      emoji: "🏡",
      title: "Estate Agent App",
      desc: "A full-featured real estate platform with property listings, search filters, and agent management built with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourname/estate-agent",
      live: "#",
    },
    {
      emoji: "🤖",
      title: "AI Chat Assistant",
      desc: "An intelligent chatbot powered by OpenAI API with context memory, multi-turn conversations, and a sleek modern UI.",
      tech: ["Next.js", "OpenAI", "TypeScript", "Supabase"],
      github: "#",
      live: "#",
    },
    {
      emoji: "📊",
      title: "Portfolio Tracker",
      desc: "A personal finance dashboard for tracking investment portfolios in real-time with beautiful data visualizations.",
      tech: ["React", "Python", "PostgreSQL", "Chart.js"],
      github: "#",
      live: "#",
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      date: "2023 – Present",
      title: "Bachelor of Engineering in Software Engineering",
      org: "Your University Name",       // ← update
      desc: "Focusing on Software Engineering, Algorithms & Data Structures, Machine Learning, and Full-Stack Development.",
    },
    {
      date: "2011 – 2023",
      title: "Primary / Secondary Education",
      org: "Your School Name",           // ← update
      desc: "Completed A/L examinations with strong results in Mathematics and Computer Science.",
    },
  ],

  // ── Experience ────────────────────────────────────────────
  experience: [
    {
      date: "2024 – Present",
      title: "Open Source Contributor",
      org: "GitHub",
      desc: "Actively contributing to open-source projects, fixing bugs, adding features, and improving documentation.",
    },
    {
      date: "2023 – Present",
      title: "Freelance Web Developer",
      org: "Self-employed",
      desc: "Designing and developing responsive websites for local clients — handling everything from UI/UX to deployment.",
    },
  ],
};

export default DATA;
