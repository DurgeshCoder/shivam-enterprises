"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef, ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode; // Allows any React components or HTML elements as children
  animation?: { opacity?: number; y?: number }; // Defines animation properties
  threshold?: number; // IntersectionObserver threshold
  duration?: number; // Animation duration
  delay?: number; // Animation delay
  className?: string; // Optional custom CSS class
}
const SlideUp: React.FC<SlideUpProps> = ({
  children,
  animation = { opacity: 0, y: 50 },
  threshold = 0.1,
  duration = 0.5,
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animation}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
