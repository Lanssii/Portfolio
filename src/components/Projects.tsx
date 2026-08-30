"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card } from "./ui/Card";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;

    if (!section || !title || !grid) return;

    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(".project-card")
    );

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Reduced motion
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([title, ...cards], {
          opacity: 1,
        });
      });

      // Desktop
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            title,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: title,
                start: "top 85%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            cards,
            {
              opacity: 0,
              scale: 0.97,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              clearProps: "opacity,scale",
              scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      );

      // Mobile
      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            title,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: title,
                start: "top 90%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            cards,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 0.45,
              stagger: 0.08,
              ease: "power1.out",
              clearProps: "opacity",
              scrollTrigger: {
                trigger: grid,
                start: "top 90%",
                once: true,
              },
            }
          );
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={titleRef} className="mb-16 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-[#03045e] sm:text-4xl md:text-5xl">
            Projects
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A selection of my recent work showcasing modern web experiences
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <Card
              key={project.id ?? index}
              data={project}
              className="project-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
