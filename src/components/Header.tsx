"use client";
import { useState } from "react";

type NavLinkItem = {
  name: string;
  path: string;
};

const navLinks: NavLinkItem[] = [
  { name: "Skills", path: "#skills" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "Certificates", path: "#certificates" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#caf0f8] font-sans border-b border-[#0077b6]/15 shadow-sm">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="group flex items-center gap-1 font-serif text-2xl font-bold tracking-tight text-[#03045e] transition-all hover:text-[#0077b6]"
        >
          Lansii
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-x-8 md:flex">
          <div className="flex items-center gap-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="relative text-xs font-bold uppercase tracking-wider text-[#0077b6] transition-colors hover:text-[#03045e] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#03045e] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#03045e] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#caf0f8] shadow-md shadow-[#03045e]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0077b6] hover:text-white hover:shadow-lg active:translate-y-0"
          >
            <span>Hire Me</span>
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-[#0077b6]/20 bg-[#ade8f4]/40 p-2 text-[#03045e] transition-colors hover:bg-[#ade8f4] hover:text-[#0077b6] focus:outline-none md:hidden"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="border-t border-[#0077b6]/15 bg-[#caf0f8] px-4 pb-6 pt-3 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#0077b6] transition-colors hover:bg-[#ade8f4] hover:text-[#03045e]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 block w-full rounded-xl bg-[#03045e] py-3 text-center text-xs font-bold uppercase tracking-wider text-[#caf0f8] shadow-md transition-colors hover:bg-[#0077b6] hover:text-white"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
