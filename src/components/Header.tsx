import { useState } from "react";
import { Link } from "react-router-dom";

type NavLinkItem = {
  name: string;
  path: string;
};

const navLinks: NavLinkItem[] = [
  { name: "Skills", path: "/skills" },
  { name: "Work Experience", path: "/WorkExperience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Certificates", path: "/Certificates" },
  { name: "Resume", path: "/Resume" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#caf0f8]/90 backdrop-blur-md shadow-sm font-sans">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-[#03045e] transition-colors hover:text-[#0077b6]"
          >
            Lansii
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center md:gap-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-semibold text-[#0077b6] transition-colors hover:text-[#03045e]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="ml-2 rounded-full bg-[#03045e] px-5 py-2 font-bold text-[#caf0f8] shadow-sm transition-all hover:bg-[#0077b6] hover:shadow-md active:scale-95"
          >
            Hire Me
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#0077b6] hover:bg-[#ade8f4] focus:outline-none md:hidden transition-colors"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
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
              strokeWidth="1.5"
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

      {isOpen && (
        <div className="border-t border-[#0096c7]/20 bg-[#caf0f8] px-4 pb-6 pt-3 shadow-xl md:hidden">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-[#0077b6] transition-colors hover:bg-[#ade8f4] hover:text-[#03045e]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full rounded-xl bg-[#03045e] py-3 text-center text-base font-bold text-[#caf0f8] shadow-md transition-all hover:bg-[#0077b6]"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
