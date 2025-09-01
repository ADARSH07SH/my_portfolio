"use client";

import { useRef, useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg overflow-hidden hover:dark:border-yellow-500 transition-all h-full flex flex-col">
      {/* Video clickable area */}
      <div
        className="relative h-48 overflow-hidden cursor-pointer bg-black/5 dark:bg-white/5 transition-colors"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handlePlayToggle} // Tap to play on mobile
      >
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs tracking-wide rounded-full bg-black/20 dark:bg-white/20 backdrop-blur px-3 py-1 text-white border border-white/20 transition-colors">
              {isMobile ? "Tap to play" : "Hover to play"}
            </span>
          </div>
        )}
      </div>

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
