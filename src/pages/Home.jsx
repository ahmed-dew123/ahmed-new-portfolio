import profile from "../assets/MY PIC.png";

export default function Home({ darkMode }) {
  return (
    <section
      className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: darkMode
          ? "url('https://cdn.wallpapersafari.com/80/96/0ieIQm.jpg')"
          : "url('https://static.vecteezy.com/system/resources/thumbnails/034/205/280/small/blue-backgrounds-images-cyan-hd-wallpapers-download-for-free-free-vector.jpg')",
      }}
    >
      {/* Overlay */}
      <div
        className={`w-full min-h-screen flex items-center transition-all duration-500 ${darkMode ? "bg-black/70" : "bg-white/60"
          }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}
            <div>

              <p
                className="uppercase tracking-[6px] font-medium mb-5"
                style={{ color: "var(--primary)" }}
              >
                Welcome To My Portfolio
              </p>

              <h1
                className={`text-5xl lg:text-7xl font-bold leading-tight ${darkMode ? "text-white" : "text-slate-900"
                  }`}
              >
                Hi, I'm
                <br />

                <span style={{ color: "var(--primary)" }}>
                  Ahmed Kashif
                </span>
              </h1>

              <h2
                className={`text-2xl mt-6 font-medium ${darkMode ? "text-gray-300" : "text-slate-700"
                  }`}
              >
                Frontend Developer
              </h2>

              <p
                className={`mt-8 leading-8 max-w-xl ${darkMode ? "text-gray-400" : "text-slate-600"
                  }`}
              >
                I build modern, responsive and user-friendly websites using
                HTML, CSS, JavaScript, React.js and Tailwind CSS.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <a href="/AHMED.docx" download>
                  Download CV
                </a>

                <a
                  href="#services"
                  className="btn btn-outline"
                >
                  View Projects
                </a>

              </div>

            </div>            {/* RIGHT SIDE */}
            <div className="flex justify-center">

              <div className="relative">

                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{ backgroundColor: "var(--primary)" }}
                ></div>

                {/* Profile */}
                <div
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-[6px] overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500"
                  style={{ borderColor: "var(--primary)" }}
                >
                  <img
                    src={profile}
                    alt="Ahmed Kashif"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* SCROLL DOWN */}
          <div className="flex justify-center mt-16">

            <a
              href="#about"
              className={`animate-bounce text-4xl ${darkMode ? "text-white" : "text-slate-900"
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