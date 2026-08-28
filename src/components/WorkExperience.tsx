"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../data/experience";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        ".experience-title-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-title-heading",
            start: "top 85%",
          },
        }
      );

      // Timeline rail progress
      gsap.fromTo(
        ".experience-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".experience-list",
            start: "top 75%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      // List item animations
      gsap.utils.toArray<HTMLElement>(".experience-item").forEach((item) => {
        const content = item.querySelector(".experience-content");
        const number = item.querySelector(".experience-number span");
        const dot = item.querySelector(".experience-dot");
        const meta = item.querySelector(".experience-meta");

        gsap.fromTo(
          content,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 82%" },
          }
        );

        gsap.fromTo(
          number,
          { scale: 0.6, opacity: 0, x: -40 },
          {
            scale: 1,
            opacity: 1,
            x: 0,
            color: "#0077b6",
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );

        gsap.to(dot, {
          backgroundColor: "#00b4d8",
          scale: 1.5,
          boxShadow: "0 0 0 7px rgba(0, 180, 216, 0.18)",
          scrollTrigger: {
            trigger: item,
            start: "top 60%",
            end: "bottom 40%",
            scrub: true,
          },
        });

        gsap.fromTo(
          meta,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 82%" },
          }
        );

        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: { trigger: item, start: "top 82%" },
          }
        );
      });

      // Hover interactions
      gsap.utils.toArray<HTMLElement>(".experience-card").forEach((card) => {
        const title = card.querySelector(".role-heading");

        const enter = () => {
          gsap.to(card, { x: 8, duration: 0.35, ease: "power2.out" });
          gsap.to(title, {
            color: "#0077b6",
            duration: 0.35,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, { x: 0, duration: 0.35, ease: "power2.out" });
          gsap.to(title, {
            color: "#03045e",
            duration: 0.35,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden px-6 py-24 text-[#03045e] sm:px-10 lg:py-32 scroll-mt-20 bg-[#caf0f8]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#90e0ef]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* Title */}
        <div className="mb-16 border-b border-[#03045e]/10 pb-8">
          <h2 className="experience-title-heading mb-2 text-center text-3xl font-extrabold text-[#0077b6] sm:text-4xl md:text-5xl">
            Work <span className="text-[#03045e]">Experience</span>
          </h2>
        </div>

        {/* Experience list */}
        <div className="experience-list relative">
          {/* Timeline rail */}
          <div className="absolute left-[13px] top-0 h-full w-px bg-[#03045e]/10 lg:left-[100px]" />
          <div className="experience-line absolute left-[13px] top-0 h-full w-px origin-top bg-[#0077b6] lg:left-[100px]" />

          <div className="space-y-14 lg:space-y-18">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="experience-item relative grid gap-6 pl-10 lg:grid-cols-[160px_1fr] lg:gap-12 lg:pl-0"
              >
                {/* Mid-sized dynamic index */}
                <div className="experience-number hidden lg:block text-right pr-8 pt-1">
                  <span className="font-serif text-[clamp(3.5rem,6vw,5.5rem)] italic leading-none tracking-tighter text-[#03045e]/20 font-bold">
                    {experience.number}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="experience-dot absolute left-[6px] top-3 h-3.5 w-3.5 rounded-full border border-[#effcff] bg-[#03045e] transition-all lg:left-[94px]" />

                {/* Content block */}
                <div className="experience-content">
                  <div className="experience-meta mb-3 flex flex-wrap items-center gap-2.5">
                    <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-[#0077b6]">
                      {experience.period}
                    </span>
                    <span className="h-px w-6 bg-[#03045e]/20" />
                    <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-[#03045e]/45">
                      {experience.company}
                    </span>
                  </div>

                  <div className="experience-card group relative pt-2">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="role-heading text-[clamp(1.5rem,3vw,2.75rem)] font-black uppercase leading-[1.05] tracking-tight transition-colors">
                          {experience.role}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                      <p className="max-w-2xl text-sm leading-relaxed text-[#03045e]/65 sm:text-base">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-[#0077b6]/20 bg-white/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#03045e]/70 backdrop-blur-xs sm:text-[11px]"
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
