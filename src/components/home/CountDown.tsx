"use client";
import { exo } from "@/src/app/font";
import React, { useEffect, useRef, useState } from "react";

type CountUpItemProps = {
  end: number | string;
  title: string;
  subtitle: string;
};

const CountUpItem: React.FC<CountUpItemProps> = ({ end, title, subtitle }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Animate number counting up
  useEffect(() => {
    if (!isVisible) return;

    // ensure target is numeric for the animation
    const target =
      typeof end === "string" ? parseInt(end.replace(/\D/g, ""), 10) || 0 : end;

    let start = 0;
    const duration = 1000; // 1 seconds
    const increment = target / (duration / 16);

    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <div
      ref={ref}
      className="border border-transparent hover:border-[#2B748A] duration-300 py-12 px-8 rounded-tl-[40px] rounded-br-[40px]"
    >
      <span className={`${exo.className} font-bold text-5xl text-[#1D3131]`}>
        {count}
        {typeof end === "string" && /[+%]/.test(end) ? end.replace(/[0-9]/g, "") : ""}
      </span>
      <h2
        className={`${exo.className} text-sm font-bold uppercase text-[#2B748A] mt-2`}
      >
        {title}
      </h2>
      <p className="text-base font-medium text-gray-500 mt-4">{subtitle}</p>
    </div>
  );
};

const CountDown = () => {
  return (
    <div className="Container py-20">
      <div className="grid lg:grid-cols-4 gap-8">
        <CountUpItem end={"6+"} title="Years of" subtitle="Professional Experience" />
        <CountUpItem end={"50+"} title="Projects" subtitle="Delivered Successfully" />
        <CountUpItem end={300} title="Fortune" subtitle="Client Experience" />
        <CountUpItem end={"100%"} title="Client Satisfaction Rate" subtitle="By Proved" />
      </div>
    </div>
  );
};

export default CountDown;
