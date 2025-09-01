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
    linkedin: "https://www.linkedin.com/in/adarsh-sh-582891297/",
  },
};

export const projectsData = [
  {
    id: 1,
    title: "Metaverse Office",
    description: "Realtime multiplayer gamified office website.",
    tags: ["Socket.io", "WebRTC", "Phaser", "Express", "EJS", "MongoDB"],
    category: "Web App",
    video: "/videos/p1.mp4", // Add video URL if available
    poster: "/placeholder.svg?height=300&width=400&text=Metaverse+Office",
    demo: "https://metaverse-game.onrender.com/", // Add live demo URL
    github: "#", // Add GitHub repo link
  },
  {
    id: 2,
    title: "Stock Portfolio Manager App",
    description: "Built a React Native app to track personal stock portfolios.",
    tags: [
      "React Native",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express",
      "Chart.js",
      "FYERS API",
    ],
    category: "Mobile App",
    video: "/videos/p2.mp4",
    poster:
      "/placeholder.svg?height=300&width=400&text=Stock+Portfolio+Manager",
    demo: "https://drive.google.com/drive/u/1/folders/1RON93MkCIGoyr2UbbgMNRYOmmKNT7sNa",
    github: "#",
  },
  {
    id: 3,
    title: "Cyber-Safe 🏆", // Hackathon winner
    description:
      "Winner – Codefury 8.0 hackathon (2025). Developed an AI-powered cybersecurity game platform with interactive learning and real-time scam detection.",
    tags: ["AI", "Game Development", "JavaScript", "React", "Node.js"],
    category: "Hackathon",
    video: "/videos/p3.mp4",
    poster: "/placeholder.svg?height=300&width=400&text=Cyber-Safe",
    demo: "https://hackathon-cyberquest.onrender.com/",
    github: "#",
  },
  {
    id: 4,
    title: "KCET College Predictor",
    description:
      "Implemented an algorithm that matches KCET rank to available colleges and courses based on previous years' cutoff data.",
    tags: ["EJS", "JavaScript", "Figma", "SQL"],
    category: "Web App",
    video: "/videos/p4.mp4",
    poster: "/placeholder.svg?height=300&width=400&text=KCET+Predictor",
    demo: "https://kcet-college-predictor.vercel.app/",
    github: "#",
  },
  {
    id: 5,
    title: "Eco-Drobe 🥈", // Hackathon semifinalist
    description:
      "Hackathon Participant – Bit ‘N’ Build Hackathon (2024). Developed a website to manage the user’s wardrobe as part of a team. Silver semifinalist.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Hackathon",
    video: "/videos/p5.mp4",
    poster: "/placeholder.svg?height=300&width=400&text=Eco-Drobe",
    demo: "https://bit-and-build-nine.vercel.app/",
    github: "#",
  },
];



export const technologies = [
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "SQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "AWS ", category: "Cloud" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tech", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];
