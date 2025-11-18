"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    // const circumference = 307.919;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // const scrollHeight =
      //   document.documentElement.scrollHeight -
      //   document.documentElement.clientHeight;
      // const percent = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
      // setProgress(percent * circumference);
      setIsVisible(scrollTop > 100);
    };

    // Trigger once on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`progress-wrap bg-[#2B748A] rounded text-white fixed bottom-8 right-8 z-50 cursor-pointer transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      onClick={scrollToTop}
    >
      
      <div className="progress-circle svg-content flex items-center justify-center">
<ChevronUp size={20}  />
      </div>

      

      <style jsx>{`
        .progress-wrap {
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .progress-wrap:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}
