export const personalInfo = {
  name: "Adarsh",
  email: "adarsh07sh@gmail.com",
  phone: "+91 7892077590",
  location: "Bengaluru",
  resumeUrl: "/resume.pdf",
  about: {
    image: "/about.jpg?height=400&width=400",
    description: [
      "Aspiring Software Engineer focused on backend development, skilled in Java and full-stack technologies.",
      "Currently building scalable backend systems and mobile applications aligned with enterprise-level architectures.",
      "Passionate about creating efficient, maintainable code and solving complex problems through innovative solutions.",
      "When I'm not coding, I explore new backend technologies, contribute to open-source projects, and stay updated with the latest trends in software development.",
    ],
  },
  hero: {
    image: "/profile.jpg?height=200&width=200",
    title: "Backend Developer & Full-Stack Enthusiast",
    description:
      "Experienced in Java and full-stack development, currently focused on building scalable backend systems and mobile applications aligned with enterprise-level technologies. Passionate about creating efficient, maintainable, and robust software solutions.",
  },
  socialLinks: {
    github: "https://github.com/ADARSH07SH",
    linkedin: "www.linkedin.com/in/adarsh-sh-582891297",
  },
};

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web App",
    video: "/videos/p1.mp4",
    poster: "/placeholder.svg?height=300&width=400&text=E-Commerce+Demo",
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Task management with authentication and live updates.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    category: "Web App",
    video: "/videos/p2.mp4",
    poster: "/placeholder.svg?height=300&width=400&text=Task+Manager+Demo",
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Current and forecasted weather with charts.",
    tags: ["React", "API", "Chart.js"],
    category: "Dashboard",
    video: "/videos/p3.mp4",
    poster: "/placeholder.svg?height=300&width=400&text=Weather+Dashboard",
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "CLI Utility",
    description: "A developer CLI tool to scaffold projects quickly.",
    tags: ["Node.js", "CLI"],
    category: "Tool",
    video: "/videos/p4.mp4",
    poster: "/placeholder.svg?height=300&width=400&text=CLI+Tool+Demo",
    demo: "#",
    github: "#",
  },
];

export const technologies = [
  { name: "React", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Git", category: "Tools" },
  { name: "Python", category: "Language" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tech", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];
