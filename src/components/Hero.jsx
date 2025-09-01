"use client";

import { personalInfo } from "./data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 bg-white dark:bg-black transition-colors duration-300"
    >
      <Helmet>
        <title>
          {personalInfo.name} – Backend Developer & Full-Stack Enthusiast
        </title>
        <meta name="description" content={personalInfo.hero.description} />
        <meta
          name="keywords"
          content="Adarsh, Backend Developer, Full-Stack, Java, Node.js, MongoDB, Express, Portfolio, Projects"
        />
        <link rel="canonical" href="https://ash07port.vercel.app/" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <img
          src={personalInfo.hero.image}
          alt={personalInfo.name}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full mx-auto mb-6 md:mb-8 border-4 border-black/20 dark:border-yellow-500 transition-colors duration-300"
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-black dark:text-white transition-colors duration-300">
          Hi, I'm{" "}
          <span className="text-black dark:text-yellow-500">
            {personalInfo.name}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-8 text-black/80 dark:text-white/80 transition-colors duration-300">
          {personalInfo.hero.title}
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-black/70 dark:text-white/70 transition-colors duration-300">
          {personalInfo.hero.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 bg-black dark:bg-yellow-500 text-white dark:text-black font-semibold rounded-lg hover:bg-black/80 dark:hover:bg-yellow-400 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 border-2 border-black dark:border-yellow-500 text-black dark:text-yellow-500 font-semibold rounded-lg hover:bg-black dark:hover:bg-yellow-500 hover:text-white dark:hover:text-black transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-4">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black dark:bg-yellow-500 text-white dark:text-black hover:bg-black/80 dark:hover:bg-yellow-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black dark:bg-yellow-500 text-white dark:text-black hover:bg-black/80 dark:hover:bg-yellow-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
