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

    const cards = gsap.utils.toArray<HTMLElement>(
      grid.querySelectorAll(".project-card")
    );

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Disable animations for users who prefer reduced motion
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([title, ...cards], {
          opacity: 1,
          y: 0,
          clearProps: "transform",
        });
      });

      // Normal animations
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          title,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
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
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      return () => mm.revert();
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
        {/* Section Header */}
        <div ref={titleRef} className="mb-16 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-[#03045e] sm:text-4xl md:text-5xl">
            Projects
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A selection of my recent work showcasing modern web experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <Card key={index} data={project} className="project-card" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
