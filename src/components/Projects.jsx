"use client";

const Projects = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg overflow-hidden hover:dark:border-yellow-500 transition-colors duration-200 group"
        >
          {/* Video Section wrapped in <a> */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="video-container h-48 block bg-black/5 dark:bg-white/5 transition-colors cursor-pointer"
          >
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
          </a>

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
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black dark:text-yellow-500 hover:dark:text-yellow-400 transition-colors duration-200"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black dark:text-yellow-500 hover:dark:text-yellow-400 transition-colors duration-200"
              >
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
