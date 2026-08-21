"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Cocktail Website",
    description:
      "An immersive mixology platform engineered to showcase advanced GSAP animations, fluid scroll triggers, and complex motion physics. Built to demonstrate high-level interactive front-end development and performance optimization.",
    tags: ["React", "GSAP", "Tailwind CSS"],
    link: "https://cocktail-website-gsap-drab.vercel.app/",
    image: "/images/cocktail.png",
  },
  {
    title: "Tbilo AI Camp",
    description:
      "A landing page for an AI hackathon, initially AI-generated and then heavily refactored with custom front-end logic and refined UI design. Upgraded to eliminate typical AI artifacts and deliver a polished, production-ready aesthetic.",
    tags: ["JavaScript", "TypeScript", "Tailwind CSS"],
    link: "https://tbilo-ai-camp.vercel.app/",
    image: "/images/tbilo.png",
  },
  {
    title: "Shop.co",
    description:
      "An e-commerce landing page built for the technical assessment phase of the UniLab React Acceleration Program. Successfully passed both this layout challenge and the live coding interview, leading to my current role at UniLab.",
    tags: ["HTML", "CSS", "JavaScript", "Swiper.js"],
    link: "https://lanssii.github.io/shop.co/",
    image: "/images/shop-co.png",
  },
  {
    title: "Food Website",
    description:
      "A comprehensive multi-page web application developed during my time at Interbusiness Academy. Features a full booking system, custom interactive menu pages, native JavaScript logic, and seamless REST API integrations.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://food-website-theta-seven.vercel.app/",
    image: "/images/food-website.png",
  },
  {
    title: "Photosnap Website",
    description:
      "A multi-page React application built as an academy assessment project to showcase scalable project architecture. Demonstrates clean separation of concerns with dedicated view pages, reusable layout components, isolated CSS modules, and custom feature tables.",
    tags: ["React", "CSS Modules", "Vite", "React Router"],
    link: "https://photosnap-website-react.vercel.app/",
    image: "/images/photo-snap.png",
  },
  {
    title: "Hook Form Validation",
    description:
      "A dedicated authentication playground built to showcase mastery of production-grade form handling. Integrates React Hook Form with Zod schema validation for strict type safety, real-time error handling, and clean state management.",
    tags: ["React", "React Hook Form", "Zod", "Tailwind CSS"],
    link: "https://react-hook-form-validation.vercel.app/",
    image: "/images/form-validation.png",
  },
];

const useImageLoader = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.src = src;

    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
  }, [src]);

  return { isLoaded, hasError };
};

const ProjectImage = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) => {
  const { isLoaded, hasError } = useImageLoader(src);

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-400/20 to-blue-600/20">
        <div className="p-4 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <span className="text-sm font-semibold text-blue-900">{title}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-gray-100">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover object-top transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        ".section-title",
        {
          y: 40,
          opacity: 0,
        },
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
            {
              y: 60,
              opacity: 0,
            },
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
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-6xl">
            Projects
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A selection of my recent work showcasing modern web experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  title={project.title}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    View Live
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800 md:hidden"
                >
                  Visit Project
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
