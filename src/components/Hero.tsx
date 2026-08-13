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
      className="relative min-h-screen overflow-hidden bg-[#caf0f8] px-5text-[#03045e] sm:px-8"
    >
      <div className="max-w-[1400px]mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#03045e]/40">
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
          </div>

          {/* Bottom */}
          <div
            className="hero-bottom flex items-center justify-between border-t border-[#03045e]/10 py-5 text-[9px] font-bold uppercase tracking-[0.25em]
          text-[#03045e]/40"
          >
            <span>Frontend / Creative Developer</span>

            <span className="hidden sm:block">
              React · Next.js · TypeScript · GSAP
            </span>

            <span className="flex items-center gap-2 text-[#0077b6]">
              Scroll
              <span>↓</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
