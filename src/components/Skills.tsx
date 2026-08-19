"use client";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "GSAP",
  "REST APIs",
  "Git",
  "GitHub",
  "TanStack Query",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#effcff] px-5 py-28 text-[#03045e] sm:px-8 lg:py-36 scroll-mt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#90e0ef]/25 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Title */}
        <div className="skills-title text-center">
          <h2 className="font-serif text-[clamp(4rem,9vw,8rem)] italic leading-[0.8] tracking-[-0.07em]">
            Skills
          </h2>
        </div>

        {/* Skills */}
        <div className="skills-container mx-auto mt-16 flex max-w-[950px] flex-wrap justify-center gap-3 sm:mt-20 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="skill-box cursor-default rounded-lg border border-[#0077b6]/20 bg-white/40 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#03045e]/70 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-[#0077b6] hover:bg-white/70 hover:text-[#0077b6] sm:px-6 sm:py-4 sm:text-[10px]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
