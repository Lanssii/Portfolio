"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Core Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "SASS", "GSAP", "Figma"],
  },
  {
    title: "Data & Integration",
    skills: ["RESTful APIs", "TanStack Query", "Postman"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "BitBucket", "npm", "Vite", "VS Code"],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        ".skills-title",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".skills-title",
            start: "top 80%",
          },
        }
      );

      // Category groups appear one by one
      gsap.utils.toArray<HTMLElement>(".skills-group").forEach((group, i) => {
        const label = group.querySelector(".skills-group-label");
        const boxes = group.querySelectorAll(".skill-box");

        gsap.fromTo(
          label,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          boxes,
          {
            y: -140,
            x: (index) => {
              if (index % 3 === 0) return -60;
              if (index % 3 === 1) return 0;
              return 60;
            },
            opacity: 0,
            rotation: (index) => (index % 2 === 0 ? -10 : 10),
            scale: 0.7,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.9,
            stagger: {
              each: 0.08,
              from: "start",
            },
            ease: "bounce.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
            },
            delay: 0.1,
          }
        );
      });

      // Hover
      gsap.utils.toArray<HTMLElement>(".skill-box").forEach((box) => {
        const enter = () => {
          gsap.to(box, {
            y: -6,
            scale: 1.08,
            rotation: 0,
            duration: 0.3,
            ease: "power3.out",
          });
        };
        const leave = () => {
          gsap.to(box, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
          });
        };
        box.addEventListener("mouseenter", enter);
        box.addEventListener("mouseleave", leave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#effcff] px-5 py-28 text-[#03045e] sm:px-8 lg:py-36 scroll-mt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#90e0ef]/25 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1000px]">
        {/* Title */}
        <div className="skills-title text-center">
          <h2 className="font-serif text-[clamp(4rem,9vw,8rem)] italic leading-[0.8] tracking-[-0.07em]">
            Skills
          </h2>
        </div>

        {/* Categories */}
        <div className="mt-20 flex flex-col gap-12 sm:mt-24 sm:gap-14">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skills-group flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10"
            >
              {/* Category label */}
              <div className="skills-group-label shrink-0 sm:w-[200px]">
                <span className="font-serif italic tracking-[-0.03em] text-[#03045e] sm:text-3xl">
                  {category.title}
                </span>
              </div>

              {/* Skill boxes */}
              <div className="flex flex-1 flex-wrap gap-3 sm:gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-box cursor-default rounded-lg border border-[#0077b6]/20 bg-white/40 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#03045e]/70 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-[#0077b6] hover:bg-white/70 hover:text-[#0077b6] sm:px-6 sm:py-4 sm:text-[10px]"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
