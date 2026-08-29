"use client";

import React, { useState } from "react";

const navLinks = [
  { name: "Skills", path: "#skills" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "Education", path: "#education" },
  { name: "Certificates", path: "#certificates" },
];

const techStack = [
  "React & Next.js",
  "Javascript & TypeScript",
  "Tailwind CSS",
  "GSAP Animations",
  "Zustand & Tanstack Query",
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Lanssii",
    icon: (
      <svg
        className="h-4 w-4 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lana-shotashvili-834aa9384/",
    icon: (
      <svg
        className="h-4 w-4 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 .5.22.5 1.2v20.6c0 .98.29 1.2 1.27 1.2h20.46c.98 0 1.27-.22 1.27-1.2V1.2C23.5.22 23.21 0 22.23 0Z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=shotashvililana@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(
      `Hi Lana,\n\nI would like to get in touch with you.\n\nMy email: ${email}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=shotashvililana@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );

    setEmail("");
  };

  return (
    <footer className="w-full border-t border-[#0077b6]/20 bg-[#03045e] font-sans px-4 py-16 md:px-8 text-[#caf0f8]">
      {/* Aligned to Certificates section container */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Navigation */}
          <div>
            <h3 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#caf0f8]">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-xs font-bold uppercase tracking-wider text-[#90e0ef]/80 transition-colors hover:text-[#caf0f8]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tech Stack */}
          <div>
            <h3 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#caf0f8]">
              Tech Stack
            </h3>
            <ul className="mt-6 space-y-3">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="text-xs font-bold uppercase tracking-wider text-[#90e0ef]/80"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Form & Social Links (Aligned Right) */}
          <div className="flex flex-col justify-between md:items-end md:text-right">
            <div>
              <h3 className="font-serif text-sm font-bold text-[#caf0f8]">
                Get in touch directly
              </h3>

              <form
                onSubmit={handleSubmit}
                className="mt-4 flex max-w-sm items-center gap-3 md:justify-end"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full rounded-xl border border-[#0077b6]/40 bg-[#0077b6]/20 px-4 py-2.5 text-xs font-sans text-[#caf0f8] placeholder-[#90e0ef]/50 outline-none transition-colors focus:border-[#90e0ef]"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-[#caf0f8] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#03045e] transition-all duration-300 hover:bg-[#90e0ef]"
                >
                  Contact
                </button>
              </form>
            </div>

            <div className="mt-8 md:mt-0">
              <h4 className="font-serif text-xs font-bold text-[#caf0f8]">
                Connect with me
              </h4>
              <div className="mt-3 flex items-center gap-2.5 md:justify-end">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === "Email" ? undefined : "_blank"}
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#0077b6]/30 bg-[#0077b6]/30 text-[#caf0f8] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#90e0ef] hover:bg-[#0077b6] hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-12 border-t border-[#0077b6]/20 pt-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#90e0ef]/60">
            © 2026 Lansii. Built with React | TypeScript | Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
