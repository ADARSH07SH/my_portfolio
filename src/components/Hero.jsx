import { personalInfo } from "./data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={personalInfo.hero.image}
            alt={personalInfo.name}
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-black/20 dark:border-yellow-500 transition-colors duration-300"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
          Hi, I'm{" "}
          <span className="text-black dark:text-yellow-500">
            {personalInfo.name}
          </span>
        </h1>

        <div className="text-xl md:text-2xl mb-8 h-8">
          <span className="typewriter text-black/80 dark:text-white/80 transition-colors duration-300">
            {personalInfo.hero.title}
          </span>
        </div>

        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-black/70 dark:text-white/70 transition-colors duration-300">
          {personalInfo.hero.description}
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-black dark:bg-yellow-500 text-white dark:text-black font-semibold rounded-lg hover:bg-black/80 dark:hover:bg-yellow-400 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-black dark:border-yellow-500 text-black dark:text-yellow-500 font-semibold rounded-lg hover:bg-black dark:hover:bg-yellow-500 hover:text-white dark:hover:text-black transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black dark:bg-yellow-500 text-white dark:text-black hover:bg-black/80 dark:hover:bg-yellow-400 transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black dark:bg-yellow-500 text-white dark:text-black hover:bg-black/80 dark:hover:bg-yellow-400 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
