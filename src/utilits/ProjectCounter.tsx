"use client";
import React, { useEffect, useState } from "react";

const ProjectCounter = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [users, setUsers] = useState(0);
  const [countries, setCountries] = useState(0);

  // Helper to animate number count-up
  const animateValue = (setter: React.Dispatch<React.SetStateAction<number>>, end: number, duration: number) => {
    let start = 0;
    const increment = end / (duration / 16); // assuming 60fps ≈ 16ms/frame
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setter(Math.floor(start));
    }, 16);
  };

  useEffect(() => {
    animateValue(setProjects, 23, 3000);
    animateValue(setClients, 98, 3000);
    animateValue(setUsers, 38, 3000);
    animateValue(setCountries, 150, 3000);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 text-white">
      <div>
        <h2 className="text-3xl font-extrabold mb-2">
          +{projects}k
        </h2>
        <p className=" pb-2 mb-2 text-sm opacity-90">
          Projects Completed
        </p>
        <h2 className="text-3xl font-extrabold mb-2">
          +{clients}k
        </h2>
        <p className="text-sm opacity-90">Happy Clients</p>
      </div>

      <div>
        <h2 className="text-3xl font-extrabold mb-2">
          +{users}k
        </h2>
        <p className=" pb-2 mb-2 text-sm opacity-90">
          Users Active
        </p>
        <h2 className="text-3xl font-extrabold mb-2">
          {countries}
        </h2>
        <p className="text-sm opacity-90">Operating Countries</p>
      </div>
    </div>
  );
};

export default ProjectCounter;
