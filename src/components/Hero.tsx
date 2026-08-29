"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lana-shotashvili-834aa9384/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/Lanssii",
    icon: "github",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=shotashvililana@gmail.com",
    icon: "mail",
  },
];

const SocialIcon = ({ type }: { type: string }) => {
  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 .5.22.5 1.2v20.6c0 .98.29 1.2 1.27 1.2h20.46c.98 0 1.27-.22 1.27-1.2V1.2C23.5.22 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  return (
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
  );
};

const DocumentIcon = ({ type }: { type: "download" | "letter" }) => {
  if (type === "download") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </svg>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Cursor Blinking
      gsap.to(".typing-cursor", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.4,
        ease: "power2.inOut",
      });

      // 2. Typing Helper Function
      const typeText = (
        selector: string,
        text: string,
        speed: number,
        onComplete?: () => void
      ) => {
        const element = document.querySelector(selector);
        if (!element) return;

        const proxy = { progress: 0 };
        gsap.to(proxy, {
          progress: 1,
          duration: text.length * speed,
          ease: "none",
          onUpdate: () => {
            const letters = Math.floor(proxy.progress * text.length);
            element.textContent = text.slice(0, letters);
          },
          onComplete,
        });
      };

      // 3. Sequential GSAP Execution
      typeText(".type-name", "Lana Shotashvili", 0.06, () => {
        typeText(".type-frontend", "Frontend", 0.07, () => {
          typeText(".type-developer", "Developer", 0.07, () => {
            // Animate Action Row on completion
            gsap.fromTo(
              ".hero-actions-row",
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }
            );

            gsap.fromTo(
              ".hero-action-item",
              { y: 20, opacity: 0, scale: 0.95 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.2)",
              }
            );
          });
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#03045e] px-5 text-[#caf0f8] sm:px-8"
    >
      {/* Programming Background Image*/}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Programming background"
          className="h-full w-full object-cover object-center opacity-25 mix-blend-luminosity"
        />
        {/* Soft Blue Tint Overlay for Color Uniformity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03045e]/90 via-[#0077b6]/40 to-[#03045e]/95" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-center py-12">
          {/* Main Content Area */}
          <div className="flex flex-1 flex-col justify-center">
            {/* Clean Typed Name Header */}
            <div className="hero-greeting">
              <h1 className="font-serif text-[clamp(3.5rem,7.5vw,7rem)] italic leading-[0.9] tracking-[-0.05em] text-[#caf0f8]">
                <span className="type-name" />
              </h1>
            </div>

            {/* Clean Typed Role Header */}
            <div className="hero-name mt-6 md:mt-8">
              <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6">
                <h2 className="type-frontend min-h-[0.85em] text-[clamp(3.2rem,7.2vw,6.5rem)] font-black uppercase leading-[0.85] tracking-[-0.07em] text-white" />
                <h2 className="type-developer min-h-[0.85em] text-[clamp(3.2rem,7.2vw,6.5rem)] font-black uppercase leading-[0.85] tracking-[-0.07em] text-[#90e0ef]" />
                <span className="typing-cursor inline-block text-[clamp(3.2rem,7.2vw,6.5rem)] font-light text-[#90e0ef]">
                  |
                </span>
              </div>
            </div>

            {/* Bottom Action Row: PDFs (Left) & Social Connections (Right) */}
            <div className="hero-actions-row mt-20 flex flex-col justify-between gap-8 border-t border-[#90e0ef]/20 pt-8 opacity-0 xl:flex-row xl:items-end">
              {/* Left Group: PDF Downloads */}
              <div className="flex flex-col gap-3">
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#90e0ef]/60 md:text-[12px]">
                  Documents
                </span>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* CV Download */}
                  <a
                    href="/Lana_Shotashvili_Resume.pdf"
                    download="Lana_Shotashvili_Resume.pdf"
                    className="hero-action-item group inline-flex items-center gap-2.5 rounded-xl border border-[#90e0ef]/40 bg-[#0077b6] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#0077b6]/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#90e0ef] hover:text-[#03045e] hover:shadow-xl"
                  >
                    <DocumentIcon type="download" />
                    <span>Download Resume (PDF)</span>
                  </a>

                  {/* Cover Letter Download */}
                  <a
                    href="/Lana_Shotashvili_Cover_Letter.pdf"
                    download="Lana_Shotashvili_Cover_Letter.pdf"
                    className="hero-action-item group inline-flex items-center gap-2.5 rounded-xl border border-[#90e0ef]/30 bg-white/10 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#caf0f8] shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#90e0ef] hover:bg-white/20 hover:text-white hover:shadow-lg"
                  >
                    <DocumentIcon type="letter" />
                    <span>Download Cover Letter (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Right Group: Social Links */}
              <div className="flex flex-col gap-3 xl:items-end">
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#90e0ef]/60 md:text-[12px]">
                  Connect
                </span>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {socialLinks.map(({ name, href, icon }) => (
                    <a
                      key={name}
                      href={href}
                      target={name === "Email" ? undefined : "_blank"}
                      rel={name === "Email" ? undefined : "noopener noreferrer"}
                      className="hero-action-item group flex h-12 items-center gap-2.5 rounded-xl border border-[#90e0ef]/20 bg-white/10 px-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#90e0ef]/60 hover:bg-white/20 hover:text-white"
                    >
                      <div className="flex h-5 w-5 items-center justify-center text-[#90e0ef] transition-colors duration-300 group-hover:text-white">
                        <SocialIcon type={icon} />
                      </div>

                      <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#caf0f8] transition-colors duration-300 group-hover:text-white md:text-[10px]">
                        {name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
