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
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ],

  badge: "Available for Internships",

  tagline:
    "Software Engineering undergraduate with an interest in web development, UI/UX, and full-stack technologies.",

  // ── Contact & Socials ─────────────────────────────────────
  email: "pamudunj2022@gmail.com",           
  github: "https://github.com/pamuduNethisa004", 
  linkedin: "https://www.linkedin.com/in/pamudu-jayathunge/", 

  // ── About Section ─────────────────────────────────────────
  about: [
   "I'm a Software Engineering undergraduate with an interest in web development and technology. I enjoy learning new skills, building practical projects, and improving my knowledge through hands-on experience.",
  ],

  aboutTags: [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Open Source Fan",
  ],

  stats: [
    { number: "7+", label: "Projects Completed" },
    { number: "2+",  label: "Years of Coding" },
    { number: "3+",  label: "Technologies Mastered" },
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
      pills: ["Node.js", "Python"],
    },
    {
      icon: "🗄️",
      title: "Database",
      pills: ["MongoDB", "Firebase"],
    },
    {
      icon: "🛠️",
      title: "Tools & DevOps",
      pills: ["Git", "GitHub"],
    },
    {
      icon: "📱",
      title: "Other",
      pills: ["Figma"],
    },
  ],

  // ── Projects Section ──────────────────────────────────────
  projects: [
    
    {
      image: "/images/3dprinting.jpg",
      title: "3D PRINTING MARKETPLACE PLATFORM (GROUP PROJECT)",
      desc: "A collaborative 3D printing marketplace connecting customers, designers, and service providers. Built features including real-time chat, order management, designer dashboards, and interactive 3D UI elements.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Pawani-Nethmini/MODELLE---SDGP.git",
      live: "https://www.modelle.lk",
    },
    {
      emoji: "🤖",
      title: "PROPERTY SEARCH WEB APPLICATION",
      desc: "Built a modern property search web app with dynamic filtering, interactive property pages, and a responsive user interface using React.",
      tech: ["React", "JavaScript", "HTML/CSS"],
      github: "https://github.com/pamuduNethisa004/Estate_agent_react_app.git",
    },
    {
      emoji: "📊",
      title: "SMART CAMPUS SENSOR & ROOM MANAGEMENT API",
      desc: "Built a RESTful API for smart campus room and IoT sensor management, featuring room administration, sensor tracking, and environmental data monitoring using JAX-RS and Apache Tomcat.",
      tech: ["Java"],
      github: "https://github.com/pamuduNethisa004/jaxrs-smart-campus-api.git",
    },
    {
      emoji: "📊",
      title: "CLIMATE AWARENESS WEB APPLICATION (GROUP PROJECT)",
      desc: "An educational web application promoting climate awareness through interactive data visualizations, sustainability insights, and a responsive user-friendly design.",
      tech: ["Java", "HTML", "CSS"],
      github: "https://github.com/pamuduNethisa004/Climate-Changers-.git",
    },
     {
      emoji: "📊",
      title: "TRAFFIC INSIGHTS AND VISUALIZATION SYSTEM",
      desc: "A Python-based traffic analysis system that processes and visualizes vehicle flow, traffic patterns, and weather data to provide meaningful insights from CSV datasets.",
      tech: ["Python"],
    },
    {
      emoji: "📊",
      title: "PLATFORM FOR CONSTRUCTION",
      desc: "Designed a construction industry talent platform with intuitive Figma prototypes, focusing on seamless networking and recruitment experiences.",
      tech: ["Python"],
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      date: "2024 – Present",
      title: "B.SC. (HONS) COMPUTER SCIENCE",
      org: "UNIVERSITY OF WESTMINSTER, Collabaration with IIT",
    },
    {
      date: "2023 - 2024",
      title: "SOFTWARE ENGINEERING FOUNDATION PROGRAM",
      org: "INFORMATICS INSTITUTE OF TECHNOLOGY",
    },
    {
      date: "2012 – 2023",
      title: "GRADE 1 – GRADE 11 (ORDINARY LEVEL)",
      org: "Rahula College. Matara",           
      desc: "Completed O/L examination.",
    },
  ],
};

export default DATA;
