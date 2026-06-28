import { useEffect, useState } from "react";

export default function Navlink({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLink = (name) =>
    `relative px-2 py-2 text-[17px] font-medium transition-all duration-300
    ${active === name
      ? "text-[var(--primary)]"
      : darkMode
        ? "text-white hover:text-[var(--primary)]"
        : "text-slate-800 hover:text-[var(--primary)]"
    }
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-[var(--primary)]
    after:transition-all after:duration-300
    ${active === name ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  const closeMenu = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 glass border-b transition-all duration-300 ${darkMode
          ? "bg-[#050816]/80 border-white/10"
          : "bg-white/80 border-gray-200"
        }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-14 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className={`text-3xl font-bold ${darkMode ? "text-white" : "text-slate-900"
            }`}
        >
          Ahmed{" "}
          <span style={{ color: "var(--primary)" }}>
            Kashif
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">

          <li>
            <a href="#home" className={navLink("home")}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className={navLink("about")}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className={navLink("skills")}>
              Skills
            </a>
          </li>

          <li>
            <a href="#services" className={navLink("services")}>
              Services
            </a>
          </li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">          {/* THEME BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-xl font-medium border transition-all duration-300 ${darkMode
                ? "border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* HIRE ME BUTTON */}
          <a
            href="#contact"
            className="hidden md:block btn btn-primary"
          >
            Hire Me
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-3xl ${darkMode ? "text-white" : "text-slate-900"
              }`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-20 right-5 w-64 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${darkMode
              ? "bg-[#111827] border border-gray-700"
              : "bg-white border border-gray-200"
            }`}
        >
          <ul className="flex flex-col py-4">

            {["home", "about", "skills", "services", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => closeMenu(item)}
                  className={`block px-6 py-3 capitalize transition-all duration-300 ${active === item
                      ? "text-[var(--primary)] font-semibold"
                      : darkMode
                        ? "text-white hover:text-[var(--primary)]"
                        : "text-slate-800 hover:text-[var(--primary)]"
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}

          </ul>
        </div>
      )}
    </nav>
  );
}