const projects = [
  {
    title: "Cocktail Website",
    description:
      "An immersive mixology platform engineered to showcase advanced GSAP animations, fluid scroll triggers, and complex motion physics. Built to demonstrate high-level interactive front-end development and performance optimization.",
    tags: ["React", "GSAP", "Tailwind CSS"],
    link: "https://cocktail-website-gsap-drab.vercel.app/",
    image: "/images/cocktail.png",
  },
  {
    title: "Tbilo AI Camp",
    description:
      "A landing page for an AI hackathon, initially AI-generated and then heavily refactored with custom front-end logic and refined UI design. Upgraded to eliminate typical AI artifacts and deliver a polished, production-ready aesthetic.",
    tags: ["JavaScript", "TypeScript", "Tailwind CSS"],
    link: "https://tbilo-ai-camp.vercel.app/",
    image: "/images/tbilo.png",
  },
  {
    title: "Shop.co",
    description:
      "An e-commerce landing page built for the technical assessment phase of the UniLab React Acceleration Program. Successfully passed both this layout challenge and the live coding interview, leading to my current role at UniLab.",
    tags: ["HTML", "CSS", "JavaScript", "Swiper.js"],
    link: "https://lanssii.github.io/shop.co/",
    image: "/images/shop-co.png",
  },
  {
    title: "Food Website",
    description:
      "A comprehensive multi-page web application developed during my time at Interbusiness Academy. Features a full booking system, custom interactive menu pages, native JavaScript logic, and seamless REST API integrations.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://food-website-theta-seven.vercel.app/",
    image: "/images/food-website.png",
  },
  {
    title: "Photosnap Website",
    description:
      "A multi-page React application built as an academy assessment project to showcase scalable project architecture. Demonstrates clean separation of concerns with dedicated view pages, reusable layout components, isolated CSS modules, and custom feature tables.",
    tags: ["React", "CSS Modules", "Vite", "React Router"],
    link: "https://photosnap-website-react.vercel.app/",
    image: "/images/photo-snap.png",
  },
  {
    title: "Hook Form Validation",
    description:
      "A dedicated authentication playground built to showcase mastery of production-grade form handling. Integrates React Hook Form with Zod schema validation for strict type safety, real-time error handling, and clean state management.",
    tags: ["React", "React Hook Form", "Zod", "Tailwind CSS"],
    link: "https://react-hook-form-validation.vercel.app/",
    image: "/images/form-validation.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="section-title mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-6xl">
            Projects
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A selection of my recent work showcasing modern web experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
