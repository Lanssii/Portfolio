"use client";

import { useRef } from "react";

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

  return (
    <section
      id="education"
      ref={containerRef}
      className="bg-[#caf0f8] font-sans px-4 py-20 md:px-8 min-h-screen overflow-hidden"
    ></section>
  );
};

export default Education;
