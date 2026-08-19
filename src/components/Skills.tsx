"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "GSAP",
  "REST APIs",
  "Git",
  "GitHub",
  "TanStack Query",
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        ".skills-title",
        {
          y: 70,
          opacity: 0,
        },
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

      // Skill boxes falling into place
      gsap.fromTo(
        ".skill-box",
        {
          y: -180,
          x: (index) => {
            if (index % 3 === 0) return -80;
            if (index % 3 === 1) return 0;
            return 80;
          },
          opacity: 0,
          rotation: (index) => {
            if (index % 2 === 0) return -12;
            return 12;
          },
          scale: 0.7,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1,
          stagger: {
            each: 0.1,
            from: "random",
          },
          ease: "bounce.out",
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 80%",
          },
        }
      );

      // Hover
      gsap.utils.toArray<HTMLElement>(".skill-box").forEach((box) => {
        const enter = () => {
          gsap.to(box, {
            y: -7,
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

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Title */}
        <div className="skills-title text-center">
          <h2 className="font-serif text-[clamp(4rem,9vw,8rem)] italic leading-[0.8] tracking-[-0.07em]">
            Skills
          </h2>
        </div>

        {/* Skills */}
        <div className="skills-container mx-auto mt-16 flex max-w-[950px] flex-wrap justify-center gap-3 sm:mt-20 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="skill-box cursor-default rounded-lg border border-[#0077b6]/20 bg-white/40 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#03045e]/70 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-[#0077b6] hover:bg-white/70 hover:text-[#0077b6] sm:px-6 sm:py-4 sm:text-[10px]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
