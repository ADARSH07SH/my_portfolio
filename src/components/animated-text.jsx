"use client";

import { useEffect, useState } from "react";

export default function AnimatedText({
  text,
  speed = 90,
  pause = 1800,
  className = "",
}) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let t;
    if (index < text.length) {
      t = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      t = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, pause);
    }
    return () => clearTimeout(t);
  }, [index, text, speed, pause]);

  return (
    <div
      className={`typewriter text-black dark:text-white transition-colors duration-300 ${className}`}
    >
      {displayText}
    </div>
  );
}
