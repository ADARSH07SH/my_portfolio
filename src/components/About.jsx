import { personalInfo } from "./data";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300"
    >
      {/* SEO Meta */}
      <Helmet>
        <meta
          name="description"
          content={`About ${personalInfo.name}, Backend Developer & Full-Stack Enthusiast. Learn about skills, experience, and projects.`}
        />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About{" "}
          <span className="text-black dark:text-yellow-400 transition-colors duration-300">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Static Image Background */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-black/20 dark:border-yellow-400 transition-colors duration-300">
            <img
              src="/about.jpg"
              alt="About Me"
              className="w-full h-full object-cover"
            />
            {/* Optional overlay for better readability */}
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            {personalInfo.about.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-black/80 dark:text-white/80 transition-colors duration-300"
              >
                {paragraph}
              </p>
            ))}

            {/* Resume Download */}
            <div className="pt-4">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center px-6 py-3 bg-black text-white dark:bg-yellow-400 dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-yellow-500 transition-colors duration-300"
              >
                Download Resume
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
