"use client";

import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg overflow-hidden transition-all h-full flex flex-col">
      {/* Video Section */}
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-48 overflow-hidden cursor-pointer bg-black/5 dark:bg-white/5 transition-colors"
      >
        <video
          src={project.video}
          poster={project.poster}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </a>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-black dark:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-black/70 dark:text-white/70 text-sm mb-4 flex-grow transition-colors">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs rounded-full border border-black/10 dark:border-yellow-500 text-black bg-black/5 dark:bg-yellow-500 dark:text-black px-2 py-1 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-black dark:text-yellow-500 hover:dark:text-yellow-400 transition-colors"
            title="Live Demo"
          >
            <ExternalLink size={16} className="mr-2" />
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-black dark:text-yellow-500 hover:dark:text-yellow-400 transition-colors"
            title="View Code"
          >
            <Github size={16} className="mr-2" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
