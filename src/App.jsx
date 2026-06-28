import { useEffect, useState } from "react";

import "./index.css";

import Navlink from "./components/Navlink";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";

export default function App() {
  // ==========================
  // THEME
  // ==========================

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  // ==========================
  // APPLY THEME
  // ==========================

  useEffect(() => {
    document.body.classList.remove("dark", "light");

    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-all duration-500">

      <Navlink
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="pt-20">

        <section id="home">
          <Home darkMode={darkMode} />
        </section>

        <section id="about">
          <About darkMode={darkMode} />
        </section>

        <section id="skills">
          <Skills darkMode={darkMode} />
        </section>

        <section id="services">
          <Services darkMode={darkMode} />
        </section>

      </main>

      <Footer darkMode={darkMode} />

    </div>
  );
}