"use client";

const Projects = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg overflow-hidden hover:dark:border-yellow-500 transition-colors duration-200 group"
        >
          {/* Video Section */}
          <div className="video-container h-48 bg-black/5 dark:bg-white/5 transition-colors">
            <video
              className="w-full h-full object-cover"
              muted
              loop
              poster={project.poster}
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => {
                e.target.pause();
                e.target.currentTime = 0;
              }}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-black dark:text-white group-hover:dark:text-yellow-500 transition-colors duration-200">
                {project.title}
              </h3>
              <span className="text-sm px-3 py-1 rounded-full bg-black/10 dark:bg-yellow-500 text-black dark:text-black transition-colors">
                {project.category}
              </span>
            </div>

            <p className="text-black/70 dark:text-white/70 mb-4 transition-colors">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 rounded border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 text-black dark:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.demo}
                className="flex items-center text-black dark:text-yellow-500 hover:dark:text-yellow-400 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
              <a
                href={project.github}
                className="flex items-center text-black dark:text-yellow-500 hover:dark:text-yellow-400 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
