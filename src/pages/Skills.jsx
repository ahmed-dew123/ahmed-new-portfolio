export default function Skills({ darkMode }) {
  const skills = [
    {
      title: "HTML5",
      level: "95%",
      description: "Semantic and well-structured web pages.",
    },
    {
      title: "CSS3",
      level: "90%",
      description: "Responsive and attractive website layouts.",
    },
    {
      title: "JavaScript",
      level: "85%",
      description: "Interactive and dynamic websites.",
    },
    {
      title: "React.js",
      level: "85%",
      description: "Modern single page applications.",
    },
    {
      title: "Tailwind CSS",
      level: "90%",
      description: "Fast and responsive UI development.",
    },
    {
      title: "Git & GitHub",
      level: "80%",
      description: "Version control and collaboration.",
    },
  ];

  return (
    <section
      className={`py-24 transition-all duration-500 ${darkMode ? "bg-[#050816] text-white" : "bg-white text-slate-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-20">

          <p
            className="uppercase tracking-[5px] font-medium mb-3"
            style={{ color: "var(--primary)" }}
          >
            My Expertise
          </p>

          <h1 className="heading">
            My <span style={{ color: "var(--primary)" }}>Skills</span>
          </h1>

          <p
            className={`max-w-3xl mx-auto mt-6 ${darkMode ? "text-gray-400" : "text-slate-600"
              }`}
          >
            These are the technologies and tools I use to build modern,
            responsive and high-quality websites.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode
                  ? "bg-[#0f172a] border-gray-700"
                  : "bg-slate-50 border-gray-200"
                }`}
            >
              {/* Skill Name */}
              <div className="flex justify-between items-center mb-3">

                <h2
                  className="text-2xl font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  {skill.title}
                </h2>

                <span
                  className="font-semibold"
                  style={{ color: "var(--primary)" }}
                >
                  {skill.level}
                </span>

              </div>

              {/* Description */}
              <p
                className={`mb-6 ${darkMode ? "text-gray-400" : "text-slate-600"
                  }`}
              >
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div
                className={`w-full h-3 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
              >
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: skill.level,
                    backgroundColor: "var(--primary)",
                  }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}