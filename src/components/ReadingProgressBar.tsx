"use client";
import { useEffect, useState } from "react";

const ReadingProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const scrollHeight = document.documentElement.scrollHeight; // Total scrollable height
      const clientHeight = document.documentElement.clientHeight; // Viewport height
      const scrollableHeight = scrollHeight - clientHeight;

      if (scrollableHeight > 0) {
        const progress = (scrollTop / scrollableHeight) * 100;
        setProgress(progress);
      } else {
        setProgress(100); // Fully read if there's no scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "5px",
        backgroundColor: "#0070f3", // Progress bar color
        zIndex: 1000,
        transition: "width 0.2s ease-out",
      }}
    ></div>
  );
};

export default ReadingProgressBar;
