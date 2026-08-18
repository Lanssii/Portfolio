"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    number: "1",
    period: "04/2026 — Present",
    role: "Frontend Developer",
    company: "UniLab React Acceleration Program",
    description:
      "Developing six production-level web applications using React, Next.js, TypeScript and Tailwind CSS. Working closely with backend developers and designers to build reusable, responsive interfaces and integrate REST APIs.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "TanStack Query",
      "REST APIs",
    ],
  },
  {
    number: "2",
    period: "03/2026 — Present",
    role: "Frontend Mentor",
    company: "Private Mentoring",
    description:
      "Helping a frontend development student build real-world projects and strengthen problem-solving skills. Teaching HTML, CSS, JavaScript, React, Git and GitHub while reviewing code and guiding frontend best practices.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"],
  },
  {
    number: "3",
    period: "11/2025 — 03/2026",
    role: "Frontend Developer",
    company: "Freelance Project · Kyiv, Ukraine",
    description:
      "Developed a 10+ page responsive e-commerce website using HTML5, CSS3 and JavaScript. Built reusable UI components and optimized layouts for desktop, tablet and mobile. Collaborated with a backend developer and gained hands-on experience with API integration and application architecture.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive UI",
      "API Integration",
    ],
  },
  {
    number: "4",
    period: "04/2025 — 08/2025",
    role: "Technical Support & System Administration Intern",
    company: "Georgian Technical University",
    description:
      "Monitored and maintained the university's live examination web portal, verifying test content, answer configurations and scoring integrity. Audited digital exam results, extracted performance metrics and managed structured records in Microsoft Excel.",
    technologies: [
      "Web Systems",
      "QA",
      "Data Auditing",
      "MS Excel",
      "Exam Management",
    ],
  },
];

const WorkExperience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-title > *",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: { trigger: ".experience-title", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".experience-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".experience-list",
            start: "top 75%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-[#effcff] px-5 py-28 text-[#03045e] sm:px-8 lg:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#90e0ef]/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="experience-title">
          <h2 className="font-serif text-[clamp(3.5rem,8vw,7rem)] italic leading-[0.8] tracking-[-0.06em]">
            Work Experience
          </h2>
        </div>

        <div className="experience-list relative">
          <div className="absolute left-[15px] top-0 h-full w-px bg-[#03045e]/10 lg:left-[110px]" />
          <div className="experience-line absolute left-[15px] top-0 h-full w-px origin-top bg-[#0077b6] lg:left-[110px]" />

          <div className="space-y-16 lg:space-y-24 mt-14">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="experience-item relative grid gap-8 pl-12 lg:grid-cols-[220px_1fr] lg:gap-16 lg:pl-0"
              >
                <div className="experience-number hidden lg:block">
                  <span className="font-serif text-[clamp(6rem,11vw,12rem)] italic leading-none tracking-[-0.1em] text-[#03045e]/10">
                    {experience.number}
                  </span>
                </div>

                <div className="experience-dot absolute left-[7px] top-2 h-4 w-4 rounded-full border-2 border-[#effcff] bg-[#03045e] shadow-[0_0_0_5px_rgba(0,119,182,0.08)] transition-all lg:left-[102px]" />

                <div className="experience-content">
                  <div className="experience-meta mb-5 flex flex-wrap items-center gap-3">
                    <span className="text-[9px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-[#0077b6] sm:text-[10px]">
                      {experience.period}
                    </span>
                    <span className="h-px w-8 bg-[#03045e]/15" />
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#03045e]/35 sm:text-[10px]">
                      {experience.company}
                    </span>
                  </div>

                  <div className="experience-card group relative border-t border-[#03045e]/10 pt-6">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="experience-title text-[clamp(2rem,4vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
                          {experience.role}
                        </h3>
                        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#0077b6]">
                          {experience.company}
                        </p>
                      </div>
                      <div className="experience-arrow hidden text-2xl text-[#0077b6] sm:block">
                        ↗
                      </div>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                      <p className="max-w-2xl text-sm leading-7 text-[#03045e]/55 sm:text-base">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-[#0077b6]/20 bg-white/40 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-[#03045e]/60 backdrop-blur-sm sm:text-[9px] md:text-[10px]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
