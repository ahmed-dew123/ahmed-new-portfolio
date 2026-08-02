import { motion } from "framer-motion";
import { SiHtml5, SiReact, SiJavascript, SiTailwindcss } from "react-icons/si";
import profile from "../assets/profile.png";

export default function Home({ darkMode }) {
  return (
    <section
      className="h-screen flex items-center bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{
        backgroundImage: darkMode
          ? "linear-gradient(rgba(5,8,22,.75),rgba(5,8,22,.75)), url('/hero-bg-dark.jpg')"
          : "linear-gradient(rgba(255,255,255,.55),rgba(255,255,255,.55)), url('/hero-bg-light.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className={`w-full h-full flex items-center transition-all duration-500 ${darkMode ? "bg-black/70" : "bg-white/60"
          }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="uppercase tracking-[6px] font-medium mb-5"
                style={{ color: "var(--primary)" }}
              >
                Welcome To My Portfolio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-5xl lg:text-7xl font-bold leading-tight ${darkMode ? "text-white" : "text-slate-900"
                  }`}
              >
                Hi, I'm
                <br />

                <span style={{ color: "var(--primary)" }}>
                  Ahmed Kashif
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`text-2xl mt-6 font-medium ${darkMode ? "text-gray-300" : "text-slate-700"
                  }`}
              >
                Frontend Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`mt-8 leading-8 max-w-xl ${darkMode ? "text-gray-400" : "text-slate-600"
                  }`}
              >
                I build modern, responsive and user-friendly websites using
                HTML, CSS, JavaScript, React.js and Tailwind CSS.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-5 mt-10"
              >

                <a
                  href="/AHMED.pdf"
                  download
                  className="btn btn-primary"
                >
                  Download CV
                </a>
                <a
                  href="#services"
                  className="btn btn-outline"
                >
                  View Projects
                </a>

              </motion.div>

            </motion.div>            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center"
            >

              <div className="relative float-anim">

                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-30 glow-pulse"
                  style={{ backgroundColor: "var(--primary)" }}
                ></div>

                {/* Profile */}
                <div
                  className="relative w-72 h-[380px] md:w-96 md:h-[500px] rounded-3xl border-[6px] overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500"
                  style={{ borderColor: "var(--primary)" }}
                >
                  <img
                    src={profile}
                    alt="Ahmed Kashif"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating Tech Badges */}
                <div
                  className="float-anim absolute -left-6 top-8 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{
                    backgroundColor: darkMode ? "#0f172a" : "#ffffff",
                    border: "2px solid var(--primary)",
                    animationDelay: "0s",
                  }}
                >
                  <SiHtml5 className="text-2xl" style={{ color: "var(--primary)" }} />
                </div>

                <div
                  className="float-anim absolute -right-6 top-24 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{
                    backgroundColor: darkMode ? "#0f172a" : "#ffffff",
                    border: "2px solid var(--primary)",
                    animationDelay: "1s",
                  }}
                >
                  <SiReact className="text-2xl" style={{ color: "var(--primary)" }} />
                </div>

                <div
                  className="float-anim absolute -left-8 bottom-24 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{
                    backgroundColor: darkMode ? "#0f172a" : "#ffffff",
                    border: "2px solid var(--primary)",
                    animationDelay: "2s",
                  }}
                >
                  <SiJavascript className="text-2xl" style={{ color: "var(--primary)" }} />
                </div>

                <div
                  className="float-anim absolute -right-8 bottom-8 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{
                    backgroundColor: darkMode ? "#0f172a" : "#ffffff",
                    border: "2px solid var(--primary)",
                    animationDelay: "1.5s",
                  }}
                >
                  <SiTailwindcss className="text-2xl" style={{ color: "var(--primary)" }} />
                </div>

              </div>

            </motion.div>

          </div>

          {/* SCROLL DOWN */}
          <div className="flex justify-center mt-16">

            <a
              href="#about"
              className={`scroll-down text-4xl ${darkMode ? "text-white" : "text-slate-900"
                }`}
            >
              ↓
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
