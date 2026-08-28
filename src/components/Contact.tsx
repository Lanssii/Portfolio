import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AVATAR_IMG = "/images/me-3D.png";

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="bg-[#caf0f8] font-sans px-4 py-20 md:px-8 min-h-screen overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-4xl font-black text-[#0077b6] md:text-5xl flex items-center justify-center gap-3 tracking-tight">
            <svg
              className="w-9 h-9 text-[#03045e]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Contact <span className="text-[#03045e]">Me</span>
          </h2>

          <p className="max-w-2xl mx-auto text-[#03045e]/80 text-base md:text-lg font-medium leading-relaxed">
            Let's talk about how I can bring value to your team from day one
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Avatar Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-[#0077b6]/20 shadow-xl">
              <img
                src={AVATAR_IMG}
                alt="Lana Shotashvili - Frontend Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-7 bg-white p-7 md:p-9 rounded-2xl border border-[#0077b6]/20 shadow-xl">
            <h3 className="text-2xl font-bold text-[#03045e] mb-2 text-center">
              Get in Touch
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
