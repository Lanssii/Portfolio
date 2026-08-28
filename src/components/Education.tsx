"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  status: string;
  location: string;
  gpa?: string;
  imgSrc: string;
};

const educationData: EducationItem[] = [
  {
    institution: "Georgian Technical University",
    degree: "Informatics and Control Systems",
    period: "09/2023",
    status: "Present",
    location: "Tbilisi, Georgia",
    gpa: "GPA: 3.83 / 4.0",
    imgSrc: "/images/university.jpg",
  },
  {
    institution: "Interbusiness Academy",
    degree: "Frontend Developer",
    period: "11/2025 – 07/2026",
    status: "Completed",
    location: "Tbilisi, Georgia",
    imgSrc: "/images/academy.jfif",
  },
];

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Title Entrance Animation
      gsap.fromTo(
        ".section-title",
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Alternating Left/Right Card Animations
      const cards = gsap.utils.toArray<HTMLElement>(".edu-card");

      cards.forEach((card, index) => {
        const xOffset = index % 2 === 0 ? -250 : 250;

        gsap.fromTo(
          card,
          { opacity: 0, x: xOffset },
          {
            opacity: 1,
            x: 0,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="education"
      ref={containerRef}
      className="bg-[#caf0f8] font-sans px-4 py-20 md:px-8 min-h-screen overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="section-title mb-12 text-center">
          <h2 className="mb-2 text-4xl font-extrabold text-[#0077b6] md:text-5xl flex items-center justify-center gap-3">
            My <span className="text-[#03045e]">Education</span>
          </h2>
        </div>

        {/* Cards List Wrapper */}
        <div className="flex flex-col gap-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="edu-card bg-white border-b border-[#0077b6]/15 shadow-md hover:shadow-lg transition-shadow duration-300 grid grid-cols-1 md:grid-cols-12 min-h-[220px] will-change-transform"
            >
              {/* Left Side Image */}
              <div className="md:col-span-4 h-56 md:h-full w-full bg-slate-100 overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.institution}
                  className="h-full w-full object-cover"
                  draggable="false"
                  loading="lazy"
                />
              </div>

              {/* Right Side Content */}
              <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-start">
                <h3 className="text-2xl md:text-3xl font-bold text-[#03045e]">
                  {item.degree}
                </h3>

                <h4 className="mt-1 text-base md:text-lg font-medium text-[#03045e]">
                  {item.institution}
                </h4>

                <div className="mt-3 text-base md:text-lg font-bold text-[#2b9348] flex flex-wrap items-center gap-2">
                  <span>{item.period}</span>
                  <span>|</span>
                  <span>{item.status}</span>

                  {item.gpa && (
                    <>
                      <span>|</span>
                      <span className="bg-[#0077b6]/10 text-[#0077b6] border border-[#0077b6]/20 px-2.5 py-0.5 rounded text-xs md:text-sm font-extrabold tracking-wide uppercase shadow-sm">
                        {item.gpa}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
