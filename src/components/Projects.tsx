"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./ui/Card";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        ".section-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Project card animations
      gsap.utils
        .toArray<HTMLElement>(".project-card")
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="section-title mb-16 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-[#03045e] sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A selection of my recent work showcasing modern web experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} data={project} className="project-card" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
