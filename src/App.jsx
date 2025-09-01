"use client";

import "./index.css";
import { useMemo, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { projectsData } from "./components/data";

function AppContent() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web App", "Dashboard", "Tool"];
  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />

        <section id="tech" className="section">
          <div className="container">
            <TechStack />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center dark:text-yellow-500">
              My Projects
            </h2>
            <p className="text-center text-black/70 dark:text-white/70 max-w-2xl mx-auto mb-10">
              Browse my work. Filter by type.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-sm px-4 py-2 rounded-md border transition-colors duration-200 ${
                    filter === cat
                      ? "bg-black text-white border-black dark:bg-yellow-400 dark:text-black dark:border-yellow-400"
                      : "border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-black/80 dark:text-white/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <Projects items={filteredProjects} />
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
