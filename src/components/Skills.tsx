"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { skillData } from "../data/skills";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("Frontend");
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 15, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.04,
        ease: "power2.out",
      }
    );
  }, [activeTab]);

  return (
    <section
      id="skills"
      className="min-h-screen my-12 md:my-0 mx-4 md:mx-0 xl:my-20 2xl:my-0 py-16 scroll-mt-20 bg-slate-50"
    >
      {/* Title */}
      <h2 className="mb-2 text-center text-3xl font-extrabold text-[#0077b6] sm:text-4xl md:text-5xl">
        Tech <span className="text-[#03045e]">Stack</span>
      </h2>

      {/* Category Navigation Bar */}
      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white p-2 flex justify-between items-center gap-3 rounded-xl border border-slate-200 shadow-sm">
        {Object.keys(skillData).map((category) => {
          const isActive = activeTab === category;

          return (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-lg transition-all capitalize font-bold tracking-wide ${
                isActive
                  ? "bg-[#0077b6] text-white shadow-md shadow-violet-600/10"
                  : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Skills */}
      <div
        ref={containerRef}
        className="lg:w-3/4 2xl:w-3/5 my-12 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-y-12 gap-x-8"
      >
        {skillData[activeTab].map((skill) => (
          <div
            key={skill.name}
            className="skill-card flex flex-col justify-center items-center gap-3 group cursor-pointer"
          >
            <div
              title={skill.name}
              className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border border-slate-100 shadow-sm"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img
                alt={skill.name}
                src={skill.icon}
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm md:text-base font-semibold text-slate-800 text-center transition-colors group-hover:text-violet-600">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
