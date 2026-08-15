"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "GSAP",
];

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
    href: "mailto:shotashvililana@gmail.com",
    icon: "mail",
  },
];

const SocialIcon = ({ type }: { type: string }) => {
  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
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
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 .5.22.5 1.2v20.6c0 .98.29 1.2 1.27 1.2h20.46c.98 0 1.27-.22 1.27-1.2V1.2C23.5.22 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
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

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.fromTo(
        ".hero-greeting",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      )
        .fromTo(
          ".hero-role",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5"
        )
        .fromTo(
          ".hero-skills",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5"
        )
        .fromTo(
          ".hero-socials",
          {
            x: 30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5"
        )
        .fromTo(
          ".hero-bottom",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.7,
          },
          "-=0.3"
        );

      // Typing animation
      const frontend = document.querySelector(".hero-frontend");
      const developer = document.querySelector(".hero-developer");

      const typeText = (
        element: Element | null,
        text: string,
        speed: number
      ) => {
        if (!element) return;

        const proxy = { progress: 0 };

        gsap.to(proxy, {
          progress: 1,
          duration: text.length * speed,
          ease: "none",
          delay: 0.4,
          onUpdate: () => {
            const letters = Math.floor(proxy.progress * text.length);
            element.textContent = text.slice(0, letters);
          },
        });
      };

      typeText(frontend, "Frontend", 0.08);

      gsap.delayedCall("Frontend".length * 0.08 + 0.55, () => {
        typeText(developer, "Developer", 0.08);
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#caf0f8] px-5 text-[#03045e] sm:px-8"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background gradient */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#90e0ef_0%,#caf0f8_45%,#effcff_100%)]
        "
        />

        {/* Soft glow */}
        <div className="pointer-events-none absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b4d8]/20 blur-[130px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col">
          {/* Main content */}
          <div className="flex flex-1 flex-col justify-center">
            {/* Greeting */}
            <div className="hero-greeting">
              <h1 className="font-serif text-[clamp(4rem,10vw,9rem)] italic leading-[0.8] tracking-[-0.07em]text-[#03045e]">
                Lana Shotashvili
              </h1>
            </div>

            {/* Name */}
            <div className="hero-name mt-8">
              <h2 className="hero-frontend min-h-[0.8em] text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.8] tracking-[-0.08em]" />

              <h2 className="hero-developer min-h-[0.8em] text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.08em] text-[#0077b6]" />
            </div>

            {/* Skills */}
            <div className="hero-skills mt-12">
              <p className="mb-4 text-[8px] md:text-[12px]  font-bold uppercase tracking-[0.3em] text-[#03045e]/40">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex h-11 items-center rounded-md border border-[#0077b6]/30 bg-white/30 px-4 text-[10px] font-bold uppercase
                    tracking-[0.08em]text-[#03045e] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0077b6] hover:bg-white/60 hover:text-[#0077b6]"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="hero-socials absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex flex-col gap-3">
              <span className="mb-2 text-[8px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-[#03045e]/40">
                Connect
              </span>

              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-md border border-[#0077b6]/20 bg-white/20 px-3 py-3 backdrop-blur-sm transition-all
                  duration-300 hover:-translate-x-2 hover:border-[#0077b6]/50 hover:bg-white/50"
                >
                  <div className="flex h-5 w-5 items-center justify-center text-[#03045e]/70 transition-colors duration-300 group-hover:text-[#0077b6]">
                    <SocialIcon type={icon} />
                  </div>

                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-[#03045e]/60 transition-colors duration-300 group-hover:text[#0077b6]">
                    {name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
