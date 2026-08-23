"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type SkillItem = {
  name: string;
  icon: string;
  bgColor: string;
};

type SkillCategories = {
  [key: string]: SkillItem[];
};

const skillData: SkillCategories = {
  Frontend: [
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/144/html-5--v1.png",
      bgColor: "rgba(240, 140, 114, 0.08)",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/144/css3.png",
      bgColor: "rgba(111, 161, 211, 0.08)",
    },
    {
      name: "JavaScript (ES6+)",
      icon: "https://img.icons8.com/color/144/javascript--v1.png",
      bgColor: "rgba(237, 199, 0, 0.08)",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/color/144/typescript.png",
      bgColor: "rgba(105, 149, 218, 0.08)",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/ultraviolet/120/react--v1.png",
      bgColor: "rgba(107, 164, 221, 0.08)",
    },
    {
      name: "Next.js",
      icon: "https://res.cloudinary.com/lifecodes/image/upload/v1678131853/Portfolio/rmz2jvsww4cdwkfriuyc.svg",
      bgColor: "rgba(0, 0, 0, 0.08)",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/color/144/tailwindcss.png",
      bgColor: "rgba(0, 172, 193, 0.08)",
    },
    {
      name: "GSAP",
      icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
      bgColor: "rgba(136, 206, 2, 0.08)",
    },
    {
      name: "SASS",
      icon: "https://img.icons8.com/color/144/sass.png",
      bgColor: "rgba(240, 98, 146, 0.08)",
    },
    {
      name: "jQuery",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png",
      bgColor: "rgba(17, 96, 159, 0.08)",
    },
  ],
  Data: [
    {
      name: "RESTful APIs",
      icon: "https://img.icons8.com/color/144/api-settings.png",
      bgColor: "rgba(0, 119, 182, 0.08)",
    },
    {
      name: "Postman",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
      bgColor: "rgba(255, 108, 55, 0.08)",
    },
    {
      name: "TanStack Query",
      icon: "https://raw.githubusercontent.com/TanStack/query/main/media/repo-header.png",
      bgColor: "rgba(255, 65, 84, 0.08)",
    },
    {
      name: "Zustand",
      icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/favicon.ico",
      bgColor: "rgba(67, 56, 42, 0.08)",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: "https://img.icons8.com/color/144/git.png",
      bgColor: "rgba(240, 80, 50, 0.08)",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/128/github.png",
      bgColor: "rgba(36, 41, 46, 0.08)",
    },
    {
      name: "VS Code",
      icon: "https://img.icons8.com/color/144/visual-studio-code-2019.png",
      bgColor: "rgba(0, 122, 204, 0.08)",
    },
    {
      name: "BitBucket",
      icon: "https://img.icons8.com/color/144/bitbucket.png",
      bgColor: "rgba(0, 82, 204, 0.08)",
    },
    {
      name: "Figma",
      icon: "https://img.icons8.com/color/144/figma--v1.png",
      bgColor: "rgba(242, 78, 30, 0.08)",
    },
    {
      name: "npm",
      icon: "https://img.icons8.com/color/144/npm.png",
      bgColor: "rgba(203, 56, 55, 0.08)",
    },
    {
      name: "Vite",
      icon: "https://img.icons8.com/color/144/vite.png",
      bgColor: "rgba(189, 52, 254, 0.08)",
    },
    {
      name: "AutoCad",
      icon: "https://img.icons8.com/color/144/autodesk-autocad.png",
      bgColor: "rgba(224, 32, 32, 0.08)",
    },
    {
      name: "Adobe Photoshop",
      icon: "https://img.icons8.com/color/144/adobe-photoshop--v1.png",
      bgColor: "rgba(0, 200, 255, 0.08)",
    },
    {
      name: "Adobe Illustrator",
      icon: "https://img.icons8.com/color/144/adobe-illustrator--v1.png",
      bgColor: "rgba(255, 154, 0, 0.08)",
    },
  ],
};

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
      <h2 className="text-4xl font-extrabold text-center text-slate-900 tracking-tight">
        Tech Stack
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
                  ? "bg-violet-600 text-white shadow-md shadow-violet-600/10"
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
