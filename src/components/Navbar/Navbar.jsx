import { useEffect, useState } from "react";
import navLinks from "../../data/navLinks";
import site from "../../data/site";
import { link } from "framer-motion/client";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">{site.name}</h1>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={link.href}
                className={`transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-blue-400 font-semibold"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {link.title}
              </a>

              {activeSection === link.href.slice(1) && (
                <span className="absolute left-0 -bottom-2 h-0.5 w-full bg-blue-400 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-4 px-6 pb-6 md:hidden bg-slate-900/90">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-blue-400 font-semibold"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
