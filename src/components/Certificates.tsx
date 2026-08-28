"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./ui/Card";

gsap.registerPlugin(ScrollTrigger);

export type CategoryType =
  | "All"
  | "Camps & Workshops"
  | "Awards & Projects"
  | "Conferences";

export type CertificateItem = {
  title: string;
  subtitle: string;
  category: CategoryType;
  description: string;
  tags: string[];
  image?: string;
  awardBadge?: string;
  isPending?: boolean;
};

const certificateData: CertificateItem[] = [
  {
    title: "UniLab Acceleration Program",
    subtitle: "Frontend Developer Certificate",
    category: "Camps & Workshops",
    description:
      "Engineered responsive UI components and delivered client-facing web applications. Applied GitFlow branching, handled complex bug fixes, and participated in daily Agile standups and peer code reviews.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitFlow",
      "Bug Fixes",
      "Code Review",
    ],
    image: "public/images/unilab.png",
  },
  {
    title: "Drone Swarm Choreography System",
    subtitle: "Autonomous 3D UAV Swarm Control",
    category: "Awards & Projects",
    awardBadge: "Certificate Coming Soon",
    isPending: true,
    description:
      "Engineered real-time 3D trajectory tracking and optimal collision-free assignment for 200 simulated drones using computer vision and numerical optimization.",
    tags: [
      "Python",
      "OpenCV",
      "SciPy",
      "NumPy",
      "Hungarian Algorithm",
      "RK4 Kinematics",
    ],
  },
  {
    title: "Modeling of Volumetric Geometrical Objects",
    subtitle: "V International Scientific Conference (London)",
    category: "Conferences",
    description:
      "Presented research on complex 3D volumetric geometric structures, spatial positioning equations, and CAD-based mathematical modeling methodologies.",
    tags: ["AutoCAD", "3D Modeling", "Computational Geometry", "Applied Math"],
    image: "public/images/london.jfif",
  },
  {
    title: "Catalogue of Mechanisms via Transition-Inversion",
    subtitle: "V International Scientific Conference (Boston)",
    category: "Conferences",
    description:
      "Researched geometric transition-inversion techniques to catalog complex motion mechanisms using advanced CAD systems and graphic editors.",
    tags: ["AutoCAD", "Kinematics", "Graphic Editors", "Parametric Design"],
    image: "public/images/boston.jfif",
  },
  {
    title: "AI Summer Camp",
    subtitle: "Collaborative Software Development",
    category: "Camps & Workshops",
    description:
      "Developed software solutions integrating AI agents, LLM APIs, and prompt workflows while collaborating in agile team sprints.",
    tags: [
      "AI Agents",
      "LLM Integration",
      "Prompt Engineering",
      "Agile Development",
    ],
    image: "public/images/Ai-camp.png",
  },
  {
    title: "Public Speaking Winter Youth Camp",
    subtitle: "Leadership & Communication Workshop",
    category: "Camps & Workshops",
    awardBadge: "Certificate Coming Soon",
    isPending: true,
    description:
      "Mastered technical presentation techniques, leadership dynamics, and structured argumentation for complex project defenses.",
    tags: [
      "Technical Speaking",
      "Leadership",
      "Project Defense",
      "Communication",
    ],
    image: "/images/public-speaking.jpg",
  },
];

const categories: CategoryType[] = [
  "All",
  "Camps & Workshops",
  "Awards & Projects",
  "Conferences",
];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState<CategoryType>("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredCertificates: CertificateItem[] =
    activeTab === "All"
      ? certificateData
      : certificateData.filter((item) => item.category === activeTab);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cert-card",
        { opacity: 0, y: 20, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
        }
      );
    },
    { dependencies: [activeTab], scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".cert-title",
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cert-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="certificates"
      ref={containerRef}
      className="bg-white font-sans px-4 py-20 md:px-8 min-h-screen overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="cert-title mb-10 text-center">
          <h2 className="mb-2 text-4xl font-extrabold text-[#0077b6] md:text-5xl flex items-center justify-center gap-3">
            <svg
              className="w-10 h-10 text-[#03045e]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            Certificates & <span className="text-[#03045e]">Achievements</span>
          </h2>
          <p className="mt-2 text-[#03045e]/80 text-base md:text-lg font-medium">
            Accelerators, research conferences, honors, and skill workshops
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="md:w-3/4 lg:w-3/5 overflow-x-auto scroll-hide mx-auto mb-12 bg-[#caf0f8]/30 p-2 flex justify-between items-center gap-2 rounded-xl border border-[#0077b6]/20 shadow-sm">
          {categories.map((category: CategoryType) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2.5 text-xs md:text-sm whitespace-nowrap w-full text-center cursor-pointer rounded-lg transition-all font-bold tracking-wide ${
                  isActive
                    ? "bg-[#03045e] text-[#caf0f8] shadow-md shadow-[#03045e]/15"
                    : "bg-transparent text-[#0077b6] hover:bg-[#ade8f4]/50 hover:text-[#03045e]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert: CertificateItem, index: number) => (
            <Card key={index} data={cert} className="cert-card" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
