import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AVATAR_IMG = "/images/me-3D.png";

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-[#0077b6]/20 shadow-xl group">
              <img
                src={AVATAR_IMG}
                alt="Lana Shotashvili - Frontend Developer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03045e]/90 via-[#03045e]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold tracking-tight">
                  Lana Shotashvili
                </h3>

                <p className="text-sm text-[#ade8f4] mt-1 font-semibold">
                  React | Next.js | Javascript | TypeScript
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-3 w-full max-w-md">
              <a
                href="https://github.com/Lanssii"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 text-center rounded-xl bg-white border border-[#0077b6]/20 text-[#03045e] font-bold text-sm hover:bg-[#03045e] hover:text-[#caf0f8] transition-all shadow-sm"
              >
                GitHub Profile
              </a>

              <a
                href="https://www.linkedin.com/in/lana-shotashvili-834aa9384/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 text-center rounded-xl bg-white border border-[#0077b6]/20 text-[#03045e] font-bold text-sm hover:bg-[#03045e] hover:text-[#caf0f8] transition-all shadow-sm"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-7 bg-white p-7 md:p-9 rounded-2xl border border-[#0077b6]/20 shadow-xl">
            <h3 className="text-2xl font-bold text-[#03045e] mb-6 text-center">
              Get in Touch
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#03045e] uppercase tracking-wider mb-2">
                  Name
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name or company"
                  className="w-full px-4 py-3 rounded-xl border border-[#0077b6]/20 bg-slate-50 text-[#03045e] font-medium focus:outline-none focus:bg-white focus:border-[#03045e] focus:ring-2 focus:ring-[#03045e]/10 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#03045e] uppercase tracking-wider mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#0077b6]/20 bg-slate-50 text-[#03045e] font-medium focus:outline-none focus:bg-white focus:border-[#03045e] focus:ring-2 focus:ring-[#03045e]/10 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#03045e] uppercase tracking-wider mb-2">
                  Message
                </label>

                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your team, job position, or project..."
                  className="w-full px-4 py-3 rounded-xl border border-[#0077b6]/20 bg-slate-50 text-[#03045e] font-medium focus:outline-none focus:bg-white focus:border-[#03045e] focus:ring-2 focus:ring-[#03045e]/10 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#03045e] text-[#caf0f8] font-bold rounded-xl shadow-md shadow-[#03045e]/10 hover:bg-[#0077b6] hover:text-white transition-all cursor-pointer text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
