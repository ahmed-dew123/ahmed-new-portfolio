import { motion } from "framer-motion";

export default function About({ darkMode }) {
  const stats = [
    { value: "1+", label: "Years Learning" },
    { value: "10+", label: "Technologies" },
    { value: "20+", label: "Projects Completed" },
    { value: "100%", label: "Passion & Dedication" },
  ];

  return (
    <section
      className={`py-28 transition-all duration-500 ${
        darkMode ? "bg-[#050816] text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <p
            className="uppercase tracking-[5px] font-medium mb-3"
            style={{ color: "var(--primary)" }}
          >
            Get To Know
          </p>

          <h1 className="text-5xl font-bold">
            About <span style={{ color: "var(--primary)" }}>Me</span>
          </h1>

          <p
            className={`max-w-3xl mx-auto mt-6 ${
              darkMode ? "text-gray-400" : "text-slate-600"
            }`}
          >
            I'm a passionate Frontend Developer who loves creating modern,
            responsive and user-friendly websites with clean code and beautiful UI.
          </p>

        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="text-4xl font-bold mb-6">
              Who I Am
            </h2>

            <p
              className={`leading-8 mb-6 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Hello! I'm Ahmed Kashif, a Frontend Developer passionate about
              building responsive, modern and attractive websites using React,
              Tailwind CSS, JavaScript, HTML and CSS.
            </p>

            <p
              className={`leading-8 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              I enjoy learning new technologies, solving real-world problems,
              and creating websites that are fast, clean and user-friendly.
            </p>

          </motion.div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-8 border hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${
                  darkMode
                    ? "bg-[#0f172a] border-gray-700"
                    : "bg-slate-50 border-gray-200"
                }`}
              >
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  {stat.value}
                </h3>

                <p className={darkMode ? "text-gray-400" : "text-slate-600"}>
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
